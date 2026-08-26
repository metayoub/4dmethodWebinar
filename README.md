# Webinar — Qodly Custom Components

Demo for a webinar on building **custom components** for Qodly Studio, then using them inside 4D apps.

**4D version: 21R2**

These components and pages were built with the help of the [Qodly skills](https://github.com/metayoub/qodly-skill). To use them in Cursor or Claude:

```bash
npx skills add metayoub/qodly-skill
```

---

## What’s in this folder

| Folder | What it is |
| --- | --- |
| **webinar** | The custom components (React) |
| **EA_Contacts** | 4D app using the Contact Card |
| **EA_Invoices** | 4D app using the Invoice Line Grid |
| **EA_Tasks** | 4D app using the Kanban Board, Progress Gauge, and Rich Text |

### Custom components

| Component | What it does |
| --- | --- |
| **Contact Card** | Shows a contact (name, company, photo, etc.) |
| **Invoice Line Grid** | Editable invoice lines with totals |
| **Kanban Board** | Drag-and-drop task board |
| **Progress Gauge** | Circular progress from a number |
| **Rich Text Editor** | Simple rich text field |
| **Rich Text 2** | Second version of the rich text editor |

---

## How to run the 4D apps

1. Open **4D 21R2**.
2. Go to **File > Open Project**.
3. Pick one of the projects:
   - `EA_Contacts/Project/Contacts.4DProject`
   - `EA_Invoices/Project/Invoices.4DProject`
   - `EA_Tasks/Project/Tasks.4DProject`

---

## How to run the custom components

You need Node.js. Then:

```bash
cd webinar
npm install
npm run dev
```

That starts the standalone editor so you can try the components.

To add another component:

```bash
npm run generate:component
```

To build for Qodly Studio:

```bash
npm run build
```

---

## More info

- [Qodly custom components](https://developer.4d.com/qodly/Integrations/customComponent/overview)
- [Qodly skills (GitHub)](https://github.com/metayoub/qodly-skill)
