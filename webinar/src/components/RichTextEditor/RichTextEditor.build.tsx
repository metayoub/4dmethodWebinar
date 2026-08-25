import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import type { FC } from 'react';

import config, { type IRichTextEditorProps } from './RichTextEditor.config';
import RichTextEditorView from './RichTextEditorView';

const SAMPLE_HTML =
  '<p>Hello <strong>world</strong></p><p>Edit formatted text with headings, lists, and links.</p>';

const RichTextEditorBuild: FC<IRichTextEditorProps> = (props) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const merged = { ...config.defaultProps, ...props };

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <RichTextEditorView
        value={SAMPLE_HTML}
        placeholder={merged.placeholder ?? 'Enter text...'}
        readOnly={merged.readOnly ?? false}
        minHeight={merged.minHeight ?? 160}
        interactive={false}
      />
    </div>
  );
};

export default RichTextEditorBuild;
