Use the qodly-custom-component skill. Scaffold with @qodly/cli, then implement the component using the standard Build / Render / Config / Settings structure.

Create a shareable Contact Card with QR vCard custom component for Qodly. The component must follow a two-part contract: Props and Behavior. No custom events are required.

Props

contact: a Qodly entity containing name, company, jobTitle, email, phone, address, and photo.
The entity can be bound to a datasource such as EA_Contacts.

Behavior

Display the contact as a modern, responsive business card with a rounded photo, contact details, and a live QR code containing the generated vCard information.

Add an “Add to Contacts” button. When clicked, generate the .vcf file entirely in the frontend using the current contact data, create a temporary browser download, and download the file without calling a server function.

Refresh the card, QR code, and vCard content whenever the Qodly datasource changes. Hide empty fields, provide a fallback avatar when no photo is available, sanitize the generated vCard values, and revoke temporary file URLs after the download.
