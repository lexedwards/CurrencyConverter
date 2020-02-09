# Currency + Countries Made Easy

This is a little project I've put together to make use of a couple of free API's
as well as well performance from Gatsby.

## Who is this for

This is targetting the market for those who are looking to go abroad.
Other than curiousity (Which there are much more detailed websites
out there for) it's targetting these jobs for the user:

- Which country uses what currency
- What other countries use the same currency
- What is the exchange rate

## What API's are involved

This project is utilising two publically available API's for it's information:

- [ExchangeRatesAPI](https://exchangeratesapi.io/) - sourcing thier information
  from the European Central Bank.
- [RestCountries](https://restcountries.eu) - Country information along with SVG Flags

_The Exchange Rate API may change to [OpenExchangeRates](https://openexchangerates.org/) - however their free plan is based in USD; so would add extra complexity to the resulting code_

## What Technology is involved

Gatsby for a SSG, as it can be easily loaded onto a CDN for fast worldwide access

GraphQL to handle API calls easily

Backend Testing will be performed with Jest ( Functional Unit Testing ) and
Cypress (for End2End Testing)
