## Expense Tracker Application – Angular

This is a web-based Expense Tracker application built using Angular (Standalone Components) and JSON Server.
The application helps track **income and expenses separately** for different farmhouses and provides a clear financial overview.


## Features

* Select farmhouse (property-based tracking)
* Add income and expense transactions
* View income and expense lists separately
* Edit and delete transactions
* Automatic calculation of:

  * Total income
  * Total expenses
  * Net profit or loss
* Data stored using JSON Server (`db.json`)

## Screenshots

### Expense Tracker Dashboard

<img width="1340" height="1027" alt="image" src="https://github.com/user-attachments/assets/8ddcfeac-0a22-4d3d-bd4f-2fa53f6e3de9" />

### Add Transaction Form

<img width="562" height="686" alt="image" src="https://github.com/user-attachments/assets/bb9afeaa-7c88-495f-843f-7bbe76c71424" />


## Tech Stack

* Angular (Standalone Components)
* TypeScript
* JSON Server
* HTML and CSS


## How to Run

1. Install dependencies

   ```bash
   npm install
   ```

2. Start JSON Server

   ```bash
   npx json-server --watch db.json --port 3000
   ```

3. Run Angular application

   ```bash
   ng serve
   ```

4. Open in browser

   ```
   http://localhost:4200
   ```

## Notes

* Income and expenses are stored separately using a `type` field
* Totals update dynamically without page reload
* Ensure JSON Server is running before using the application

