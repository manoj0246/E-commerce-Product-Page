React Product Page
This is a fully responsive and interactive product details page built with React and styled with Tailwind CSS. It showcases a single product with an image gallery, description, price, quantity selector, and an "Add to Cart" feature.

Features
Image Gallery: A main image display with clickable thumbnails to switch between different product views.

Quantity Selector: Users can easily increase or decrease the quantity of the product.

Add to Cart: A functional "Add to Cart" button that updates a cart icon in the header.

Price Display: Shows the current price, original price (with a strikethrough), and a discount percentage.

Responsive Design: The layout adapts smoothly to all screen sizes, from mobile phones to desktops.

User Feedback: A notification appears to confirm when an item has been added to the cart.

Currency Formatting: Prices are displayed in Indian Rupees (₹).

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and npm (Node Package Manager) installed on your computer. You can download them from the official website.

Installation & Setup
Create a new React project:
Open your terminal and run the following command to create a new React application.

npx create-react-app my-product-page

Navigate to the project directory:

cd my-product-page

Install Tailwind CSS:
This project uses Tailwind CSS for styling. Install it and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configure Tailwind's template paths:
Open the tailwind.config.js file and add the paths to all of your template files.

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Add Tailwind directives to your CSS:
Open the ./src/index.css file and add the @tailwind directives for each of Tailwind’s layers.

@tailwind base;
@tailwind components;
@tailwind utilities;

Replace the App component code:
Open the src/App.js file, delete all the existing code, and replace it with the React code provided for the product page.

Running the Application
Once the setup is complete, you can run the application with the following command:

npm start

This will start the development server and automatically open the product page in your default web browser at http://localhost:3000.

Technologies Used
React: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

Node.js: A JavaScript runtime environment.
