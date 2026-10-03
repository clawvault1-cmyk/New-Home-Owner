# New Home File

A one-page store for a closeout record people keep after they buy a house. Paint colors, shutoff locations, appliance and warranty dates, contractor contacts, and a first-year maintenance calendar. Static HTML, CSS, and JavaScript. No build step.

The pictures in `images/` were made for this page: the file itself, and that file on a counter beside the keys.

## Offers

| File | Price | Checkout key |
| --- | ---: | --- |
| New Home File (the three files, in one PDF) | $67 | `newHomeFile` |
| Shutoff & Paint Record | $27 | `shutoffPaintRecord` |
| Warranty & Appliance Log | $22 | `warrantyApplianceLog` |
| First-Year Maintenance Calendar | $27 | `firstYearMaintenanceCalendar` |

Bought separately, the three files are $27 + $22 + $27 = $76. The New Home File is those three, together, for $67.

## Preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Checkout

`checkout.config.js` holds one URL string per file. They ship empty. Paste a full `https://` or `http://` payment link for a file when you have it. The matching button goes there. An empty string leaves the button on the page and does not open a checkout.

There is no payment form on this page.

## Publish

`.nojekyll` is in the root so GitHub Pages serves the folder as plain files.

Type is Newsreader and Public Sans, both under the SIL Open Font License. License texts are in `fonts/`.
