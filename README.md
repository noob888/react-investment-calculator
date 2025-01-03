# Investment Calculator

## Overview

The Investment Calculator is a React application that helps users project the growth of their investments over a specified period. By inputting initial investment, annual contributions, expected return rates, and duration, users can visualize their investment's annual growth and cumulative performance.

## Features

Dynamic User Input: Enter initial investment, annual contributions, expected returns, and duration.

Real-Time Calculations: View the annual growth of investments with detailed breakdowns.

Interactive Table: Displays year-by-year investment performance, including interest earned and total value.

Responsive Design: Works seamlessly across devices.

## Technology Stack

Frontend Framework: React

Styling: CSS Modules

Package Manager: npm (Node Package Manager)

## Installation

Clone the repository:

`git clone <repository-url>`

Navigate to the project directory:

`cd investment-calculator`

Install dependencies:

`npm install`

Start the development server:

`npm run dev`

## Usage

Open the application in your browser:

`http://localhost:3000`

Enter the required details in the input fields:

Initial Investment

Annual Contribution

Expected Return (%)

Duration (years)

View the results in the interactive table displaying yearly investment details.

## Folder Structure

.
|-- src
|   |-- components
|   |   |-- Header.jsx
|   |   |-- UserInput.jsx
|   |   |-- Table.jsx
|   |-- App.jsx
|   |-- index.css
|   |-- index.jsx
|-- public
|   |-- index.html
|-- package.json

## Key Components

Header: Displays the title of the application.

UserInput: Handles user input for investment calculations.

Table: Renders the yearly breakdown of investment growth.

## Customization

Modify the styling by editing src/index.css or specific component styles.

Update calculation logic in the calculateInvestmentResults function in App.jsx.


