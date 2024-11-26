# Crypto Tracker
 
## Crypto Tracker is a React, TypeScript web application that allows users to track cryptocurrency prices in real time. Built with Vite, Zustand, and Axios, this app provides real-time quotes for cryptocurrencies, including price changes, the highest and lowest prices of the day, and more.

## Features
- **Reactive Interface**: Users can select cryptocurrencies and fiat currencies to view real-time prices.
- **Async Loading**: A spinner is displayed while the app fetches data from the API.
- **State Management with Zustand**: Zustand is used for global state management.
- **Data Validation with Zod**: Zod validates cryptocurrency data and prices.
- **Modern Styling**: Clean, sleek styling optimized for a great user experience.

## Installation
Follow these steps to install and run the project locally:

1. **Clone the repository**  
``bash
git clone https://github.com/anabartos/crypto-tracker.git
cd crypto-tracker
``

2. **Install dependencies**
This project uses npm. Install all the necessary dependencies with the following command:
``bash
npm install
``

3. **Run the project**
To run the project locally on the Vite development server:

``bash
npm run dev
This will start the application at http://localhost:3000.
``

## Project Structure

src/
├── components/
│   ├── CryptoPriceDisplay.tsx    # Component that displays the selected cryptocurrency's info
│   ├── Error.tsx                 # Component for displaying error messages
│   ├── FormSearch.tsx            # Form for selecting currency and cryptocurrency
│   ├── Spinner.tsx               # Spinner component to indicate data loading
├── services/
│   ├── CryptoService.ts          # Services for making API requests
├── store/
│   ├── index.ts                  # Zustand store configuration for global state
├── types/
│   ├── index.ts                  # TypeScript types used in the application
└── App.tsx                       # Main component that integrates everything

## Usage
The application allows users to select a fiat currency (e.g., USD) and a cryptocurrency (e.g., Bitcoin) to retrieve the current price. Here's how you can use it:

- **Select the coin (e.g., USD).
- **Select the cryptocurrency (e.g., Bitcoin).
- **Click Track to fetch and display the cryptocurrency's data.
- **While the data is being fetched, a spinner will be displayed. Once the data is ready, the app will show the current price, the high and low of the day, the 24-hour price change, and more.

## Dependencies
This project uses the following dependencies:

- **React: Library for building user interfaces.
- **TypeScript: A superset of JavaScript that provides type safety and development benefits.
- **Zustand: A small state management library.
- **Axios: HTTP client for making requests to the CryptoCompare API.
- **Zod: For schema validation of data.
- **Vite: A fast build tool and development server for React projects.

### Development dependencies:
- **@types/react: TypeScript types for React.
- **typescript: TypeScript compiler for the project.

## Contributing
If you'd like to contribute to this project, feel free to open a pull request or issue. Contributions are always welcome!

## Fork the repository.
- **Create a new branch for your changes.
- **Make your modifications.
- **Open a pull request explaining your changes.