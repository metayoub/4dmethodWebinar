import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import type { FC } from 'react';

import config, { type IKanbanBoardProps } from './KanbanBoard.config';
import { MOCK_TASKS } from './KanbanBoard.utils';
import KanbanBoardView from './KanbanBoardView';

const KanbanBoardBuild: FC<IKanbanBoardProps> = (props) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const merged = { ...config.defaultProps, ...props };

  return (
    <div ref={connect} className={cn(props.className, props.classNames)} style={props.style}>
      <KanbanBoardView
        tasks={MOCK_TASKS}
        columns={merged.statusColumns}
        accentColor={merged.accentColor ?? '#6E56CF'}
        surfaceColor={merged.surfaceColor ?? '#F7F6F9'}
        textColor={merged.textColor ?? '#23202E'}
        mutedColor={merged.mutedColor ?? '#6F6B7D'}
        cornerRadius={merged.cornerRadius ?? 14}
        locale={merged.locale ?? 'en-US'}
        categoryColors={merged.categoryColors}
        showCategoryChips={merged.showCategoryChips ?? true}
        showDueDates={merged.showDueDates ?? true}
        interactive={false}
      />
    </div>
  );
};

export default KanbanBoardBuild;
