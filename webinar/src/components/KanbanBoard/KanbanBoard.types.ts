export type Task = {
  id: string;
  title: string;
  status: string;
  category?: string;
  categoryColor?: string;
  dueDate?: string;
};

export type ColumnDef = {
  status: string;
};

export type OnCardMovePayload = {
  taskID: string;
  newStatus: string;
};

export type CategoryColors = Array<{ category: string; color: string }> | string;
