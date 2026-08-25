Use the qodly-custom-component skill. Scaffold with @qodly/cli, then implement the component using the standard Build / Render / Config / Settings structure.
Create a simple rich text editor from scratch for Qodly. The component must use a three-part contract: Props, Events, and Behavior.

Props define what flows into the component:
datasource: required Qodly string datasource containing HTML text. Accept external updates and configure datasources.accept: ['string'].
placeholder: text displayed when the editor is empty. Default: "Enter text...".
readOnly: disables editing while keeping the content visible. Default: false.
minHeight: defines the minimum editor height.
The datasource value must remain a plain string containing HTML, such as:
"" ,"<p>Hello</p>" ,"<p>Hello <strong>world</strong></p>”

Do not use JSON or a rich-text document model.
Events define what flows out:
onChange: fired about 300 ms after the user edits the content, with { value: string }.
onFocus: fired when the editor receives focus, with {}.
onBlur: fired when the editor loses focus, with { value: string }.

Behavior:
Render and edit basic formatted HTML, synchronize external datasource updates, emit clean HTML strings, support placeholder and read-only states, and avoid unnecessary update loops. Include basic formatting actions such as bold, italic, underline, headings, lists, links, and text alignment.
