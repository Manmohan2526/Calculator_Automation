// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// let root = ReactDOM.createRoot(document.getElementById('root'));
// window.Webflow = window.Webflow || root.render(
//     <React.StrictMode>
//             <App purchase_price = '750000'
//             down_payment_percent = '12'
//             interest_rate = '21'
//             loan_terms = '12'
//             yearly_insurance ='2500' />
//         </React.StrictMode>
//         );;
// window.Webflow.push(() => {
//     const elements = document.querySelectorAll("[data-react='progressbar']");

//     elements.forEach((el) => {
//         const purchase_price_val = el.getAttribute("data-purchase_price_val");
//         const down_payment_percent_val = el.getAttribute("data-down_payment_percent_val");
//         const interest_rate_val = el.getAttribute("data-interest_rate_val");
//         const loan_terms_val = el.getAttribute("data-loan_terms_val");
//         const yearly_insurance = el.getAttribute("data-yearly_insurance");

//         //   const purchase_price_val = 100000;
//         // const down_payment_percent_val = 20;
//         // const interest_rate_val = 7.5;
//         // const loan_terms_val = 30;
//         // const yearly_insurance = 1200;
 
//         root = ReactDOM.createRoot(el);
//         root.render( < React.StrictMode >
//             <
//             App purchase_price = { purchase_price_val }
//             down_payment_percent = { down_payment_percent_val }
//             interest_rate = { interest_rate_val }
//             loan_terms = { loan_terms_val }
//             yearly_insurance = { yearly_insurance }
//             /> < /
//             React.StrictMode >
//         );
//     });
// });

// const purchase_price_val = 100000;
// const down_payment_percent_val = 20;
// const interest_rate_val = 7.5;
// const loan_terms_val = 30;
// const yearly_insurance = 1200;

// // const root = ReactDOM.createRoot(el);
// root.render( < React.StrictMode >
//     <
//     App purchase_price = { purchase_price_val }
//     down_payment_percent = { down_payment_percent_val }
//     interest_rate = { interest_rate_val }
//     loan_terms = { loan_terms_val }
//     yearly_insurance = { yearly_insurance }
//     /> < /
//     React.StrictMode >
// );


import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Webflow-safe React mount
 * - No #root
 * - No StrictMode
 * - No Webflow.push
 * - CMS via data-attributes
 * - Prevents double mounting
 */
function mountCalculator() {
  const elements = document.querySelectorAll("[data-react='webflow_calculator']");

  if (!elements.length) return;

  elements.forEach((el) => {
    // 🛑 Prevent React error #299 (double mount)
    if (el.dataset.mounted === "true") return;
    console.log("Mounting React calculator...");
    el.dataset.mounted = "true";

    const props = {
      purchase_price: Number(el.dataset.purchase_price_val || 0),
      down_payment_percent: Number(el.dataset.down_payment_percent_val || 0),
      interest_rate: Number(el.dataset.interest_rate_val || 0),
      loan_terms: Number(el.dataset.loan_terms_val || 0),
      yearly_insurance: Number(el.dataset.yearly_insurance || 0),
    };

    createRoot(el).render(<App {...props} />);
    // elements..render(<App {...props} />);
  });
}

// ✅ Ensure DOM + CMS are ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountCalculator);
} else {
  mountCalculator();
}
