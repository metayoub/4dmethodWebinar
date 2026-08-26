# Webinar — Qodly Custom Components

Demo project for a webinar on building **custom components** for Qodly Studio.

Built with **4D 21R2**.

These components were created with the help of the [Qodly skills](https://github.com/metayoub/qodly-skill). To use them in Cursor or Claude:

```bash
npx skills add metayoub/qodly-skill
```

---

## What’s inside

| Component | What it does |
| --- | --- |
| **Contact Card** | Shows a contact (name, company, photo, etc.) from an entity or object |
| **Invoice Line Grid** | Editable invoice lines with totals |
| **Kanban Board** | Drag-and-drop task board |
| **Progress Gauge** | Circular progress from a number |
| **Rich Text Editor** | Simple rich text field |
| **Rich Text 2** | Second version of the rich text editor |

---

## Run it locally

You need Node.js, then:

```bash
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
