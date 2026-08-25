import { type T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';

import KanbanBoardBuild from './KanbanBoard.build';
import config, { type IKanbanBoardProps } from './KanbanBoard.config';
import KanbanBoardRender from './KanbanBoard.render';

const KanbanBoard: T4DComponent<IKanbanBoardProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <KanbanBoardBuild {...props} /> : <KanbanBoardRender {...props} />;
};

KanbanBoard.craft = config.craft;
KanbanBoard.info = config.info;
KanbanBoard.defaultProps = config.defaultProps;

export default KanbanBoard;
