import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { type FC, useEffect, useMemo, useState } from 'react';

import config, { type IContactCardProps } from './ContactCard.config';
import type { ContactFields } from './ContactCard.types';
import { EMPTY_CONTACT } from './ContactCard.types';
import { extractContact, mergeAttrKeys } from './ContactCard.utils';
import ContactCardView from './ContactCardView';

const ContactCardRender: FC<IContactCardProps> = (props) => {
  const merged = { ...config.defaultProps, ...props };
  const { connect } = useRenderer();
  const {
    sources: { datasource: ds },
  } = useSources();

  const [contact, setContact] = useState<ContactFields>(EMPTY_CONTACT);

  const attrKeys = useMemo(
    () =>
      mergeAttrKeys({
        nameAttr: merged.nameAttr,
        companyAttr: merged.companyAttr,
        jobTitleAttr: merged.jobTitleAttr,
        emailAttr: merged.emailAttr,
        phoneAttr: merged.phoneAttr,
        addressAttr: merged.addressAttr,
        photoAttr: merged.photoAttr,
      }),
    [
      merged.nameAttr,
      merged.companyAttr,
      merged.jobTitleAttr,
      merged.emailAttr,
      merged.phoneAttr,
      merged.addressAttr,
      merged.photoAttr,
    ],
  );

  useEffect(() => {
    if (!ds) {
      setContact(EMPTY_CONTACT);
      return;
    }

    let cancelled = false;

    const listener = async () => {
      try {
        const raw = await ds.getValue();
        if (cancelled) return;
        setContact(extractContact(raw, attrKeys));
      } catch {
        if (!cancelled) setContact(EMPTY_CONTACT);
      }
    };

    void listener();
    ds.addListener('changed', listener);
    return () => {
      cancelled = true;
      ds.removeListener('changed', listener);
    };
  }, [ds, attrKeys]);

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <ContactCardView
        contact={contact}
        accentColor={merged.accentColor}
        surfaceColor={merged.surfaceColor}
        textColor={merged.textColor}
        mutedColor={merged.mutedColor}
        cornerRadius={merged.cornerRadius}
        interactive
      />
    </div>
  );
};

export default ContactCardRender;
