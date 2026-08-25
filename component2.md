Use the qodly-custom-component skill. Scaffold with @qodly/cli, then implement the component using the standard Build / Render / Config / Settings structure.

Create a circular Progress Gauge custom component for Qodly. The component must follow a three-part contract: Props, Events, and Behavior.

Props define what flows into the component:
•value: number between 0 and 100, typically bound to a Qodly datasource such as Task.Percent.
•
Events define what flows out:
•onValueChange: fired while the user drags or changes the gauge value, with { value: number }. Use it to update the bound entity or trigger Qodly and 4D actions.
•
Behavior:
Display the value as a circular progress ring with the percentage shown in the center. Allow the user to drag around the ring to change the value. Clamp all values between 0 and 100.

Apply automatic color thresholds:
•Red when the value is below 30
•Orange when the value is between 30 and 69
•Green when the value is 70 or above

Synchronize external datasource updates, provide smooth visual transitions, and avoid unnecessary update loops.
