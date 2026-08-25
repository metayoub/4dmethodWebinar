import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import type { FC } from 'react';

import config, { type IProgressGaugeProps } from './ProgressGauge.config';
import ProgressGaugeView from './ProgressGaugeView';

const SAMPLE_VALUE = 65;

const ProgressGaugeBuild: FC<IProgressGaugeProps> = (props) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const merged = { ...config.defaultProps, ...props };

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <ProgressGaugeView
        value={SAMPLE_VALUE}
        strokeWidth={merged.strokeWidth ?? 14}
        readOnly={merged.readOnly ?? false}
        interactive={false}
      />
    </div>
  );
};

export default ProgressGaugeBuild;
