import { type T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';

import RichTextEditorBuild from './RichTextEditor.build';
import config, { type IRichTextEditorProps } from './RichTextEditor.config';
import RichTextEditorRender from './RichTextEditor.render';

const RichTextEditor: T4DComponent<IRichTextEditorProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <RichTextEditorBuild {...props} /> : <RichTextEditorRender {...props} />;
};

RichTextEditor.craft = config.craft;
RichTextEditor.info = config.info;
RichTextEditor.defaultProps = config.defaultProps;

export default RichTextEditor;
