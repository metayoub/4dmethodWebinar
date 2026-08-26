import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import type { FC } from 'react';

import config, { type IRichText_2Props } from './RichText_2.config';
import RichText_2View from './RichText_2View';

const PREVIEW_HTML =
  '<h2>Rich Text 2</h2><p>Hello <strong>world</strong> — edit <em>formatted</em> HTML and store it as a plain string.</p><ul><li>Headings, lists and links</li><li>Text alignment</li></ul>';

const RichText_2Build: FC<IRichText_2Props> = (props) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const merged = { ...config.defaultProps, ...props };

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <RichText_2View
        value={PREVIEW_HTML}
        placeholder={merged.placeholder ?? 'Enter text...'}
        readOnly={merged.readOnly ?? false}
        minHeight={merged.minHeight ?? 180}
        interactive={false}
      />
    </div>
  );
};

export default RichText_2Build;
