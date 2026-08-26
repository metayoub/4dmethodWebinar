import { type T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';

import RichText_2Build from './RichText_2.build';
import config, { type IRichText_2Props } from './RichText_2.config';
import RichText_2Render from './RichText_2.render';

const RichText_2: T4DComponent<IRichText_2Props> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <RichText_2Build {...props} /> : <RichText_2Render {...props} />;
};

RichText_2.craft = config.craft;
RichText_2.info = config.info;
RichText_2.defaultProps = config.defaultProps;

export default RichText_2;
