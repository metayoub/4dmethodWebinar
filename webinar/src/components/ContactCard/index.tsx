import { type T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';

import ContactCardBuild from './ContactCard.build';
import config, { type IContactCardProps } from './ContactCard.config';
import ContactCardRender from './ContactCard.render';

const ContactCard: T4DComponent<IContactCardProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <ContactCardBuild {...props} /> : <ContactCardRender {...props} />;
};

ContactCard.craft = config.craft;
ContactCard.info = config.info;
ContactCard.defaultProps = config.defaultProps;

export default ContactCard;
