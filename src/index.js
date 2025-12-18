import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
window.Webflow = window.Webflow || [];
window.Webflow.push(() => {
    const elements = document.querySelectorAll("[data-react='progressbar']");

    elements.forEach((el) => {
        const purchase_price_val = el.getAttribute("data-purchase_price_val");
        const down_payment_percent_val = el.getAttribute("data-down_payment_percent_val");
        const interest_rate_val = el.getAttribute("data-interest_rate_val");
        const loan_terms_val = el.getAttribute("data-loan_terms_val");
        const yearly_insurance = el.getAttribute("data-yearly_insurance");

        //   const purchase_price_val = 100000;
        // const down_payment_percent_val = 20;
        // const interest_rate_val = 7.5;
        // const loan_terms_val = 30;
        // const yearly_insurance = 1200;
 
        const root = ReactDOM.createRoot(el);
        root.render( < React.StrictMode >
            <
            App purchase_price = { purchase_price_val }
            down_payment_percent = { down_payment_percent_val }
            interest_rate = { interest_rate_val }
            loan_terms = { loan_terms_val }
            yearly_insurance = { yearly_insurance }
            /> < /
            React.StrictMode >
        );
    });
});

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