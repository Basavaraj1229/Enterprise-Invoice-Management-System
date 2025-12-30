# Invoice Generator - React App
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

An Invoice creator project built with React. Add itemized items, configure quantity, prices, tax rates and discounts. Download Invoice as PDFs to your device. Uses [jspdf-react](https://www.npmjs.com/package/jspdf-react) to capture the data from the modal and covert it from canvas -> pdf.

### Live Demo
https://invoice-generator-react.netlify.app/

### Screenshots
<img src="https://i.imgur.com/wRetnxk.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/AZChaei.png" style="max-width: 100px; width: 100%; height: auto;">
<img src="https://i.imgur.com/Bz3K3DE.png" style="max-width: 100px; width: 100%; height: auto;">

### Installation

```
git clone https://github.com/johnuberbacher/invoice-generator

npm install

npm start / npm run build
```

### Currency (default: INR)

- The app defaults to Indian Rupee (INR) with symbol ₹ and locale `en-IN`.
- Currency settings are defined in `src/components/InvoiceForm.js` as a structured
	`currencyOptions` object. Each entry contains `symbol`, `code`, `label`, and `locale`.
- The UI shows the compact symbol next to item price inputs and displays the
	full label (for example `₹ (INR)`) before summary amounts (Subtotal, Tax, Total).
- To change the default currency for the app, edit the constructor in
	`src/components/InvoiceForm.js` and set `this.state.currency` to one of the
	entries from `this.currencyOptions` (for example: `this.currencyOptions.USD`).

If you want a different formatting behavior (for example always show `INR 1,234.00`),
open an issue or update the formatting helper in `InvoiceForm.js` and `InvoiceModal.js`.


### To-Do
- [x] Finish parsing data into Preview Modal

- [x] Currency Picker

- [x] Calculate Tax and Discounts

- [ ] Store invoices in Firebase DB


### Meta

John Uberbacher – [johnuberbacher.com](https://johnuberbacher.com)
