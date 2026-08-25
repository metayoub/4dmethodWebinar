import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import type { FC } from 'react';

import config, { type IContactCardProps } from './ContactCard.config';
import { SAMPLE_CONTACT } from './ContactCard.utils';
import ContactCardView from './ContactCardView';

const ContactCardBuild: FC<IContactCardProps> = (props) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const merged = { ...config.defaultProps, ...props };

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <ContactCardView
        contact={SAMPLE_CONTACT}
        accentColor={merged.accentColor}
        surfaceColor={merged.surfaceColor}
        textColor={merged.textColor}
        mutedColor={merged.mutedColor}
        cornerRadius={merged.cornerRadius}
        interactive={false}
      />
    </div>
  );
};

export default ContactCardBuild;
