import { type T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';

import ProgressGaugeBuild from './ProgressGauge.build';
import config, { type IProgressGaugeProps } from './ProgressGauge.config';
import ProgressGaugeRender from './ProgressGauge.render';

const ProgressGauge: T4DComponent<IProgressGaugeProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <ProgressGaugeBuild {...props} /> : <ProgressGaugeRender {...props} />;
};

ProgressGauge.craft = config.craft;
ProgressGauge.info = config.info;
ProgressGauge.defaultProps = config.defaultProps;

export default ProgressGauge;
