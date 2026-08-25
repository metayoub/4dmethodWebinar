Use the qodly-custom-component skill. Scaffold with @qodly/cli, then implement the component using the standard Build / Render / Config / Settings structure.

Create a Kanban Board custom component for Qodly. The component must follow a three-part contract: Props, Events, and Behavior.

Props define what flows into the component:
•tasks: a collection of Task entities grouped into columns by their Status value. Each task may contain an ID, title, status, category, and due date.

Events define what flows out:
•onCardMove: fired when a task is moved to another column, with { taskID, newStatus }. The event must allow the task status to be persisted server-side through a single Qodly or 4D function.

Behavior:
Display tasks as cards organized into status columns. Support drag and drop between columns, update the card position immediately, and emit onCardMove after a successful drop.

Show category color chips on each card and due-date badges when a due date is available. Keep the board synchronized with external datasource updates and avoid duplicate updates or unnecessary rendering.

Data Example
type Task = {
  id: string; title: string; status: string; category?: string; categoryColor?: string; dueDate?: string; }
