# My-Portfolio-v-1.4.0
# TechShop-E-commerce-Portfolio

A modern, responsive e-commerce platform built with React, featuring product Browse, a dynamic shopping cart, user authentication, and an admin dashboard. Demonstrates robust front-end development and API integration.

---

## Table of Contents

-   [Project Overview](#project-overview)
-   [Key Features](#key-features)
-   [Technologies Used](#technologies-used)
-   [Version Comparison (v1.4.0 vs. Previous)](#version-comparison-v140-vs-previous)
-   [Installation and Setup](#installation-and-setup)
-   [Usage](#usage)
-   [Folder Structure](#folder-structure)
-   [Screenshots](#screenshots)
-   [Contributing](#contributing)
-   [License](#license)
-   [Future Development](#future-development)

---

## Project Overview

This project is a sophisticated e-commerce web application, "TechShop," developed using React. It serves as a comprehensive portfolio piece showcasing various front-end development skills, including state management, routing, API integration, and responsive design. The application allows users to browse products, add items to a shopping cart, manage quantities, and proceed to a simulated checkout. It also includes user authentication features (login/register) and a dedicated dashboard for authenticated users with features like user management and product overview.

## Key Features

-   **Product Catalog:** Browse a diverse range of digital products with details, pricing, and ratings.
-   **Shopping Cart Functionality:** Add/remove items, update quantities, and view cart summary with real-time price calculations and shipping costs.
-   **User Authentication:** Secure login and registration forms with client-side validation.
-   **Admin Dashboard:** A protected route for authenticated users, providing access to user lists and product management interfaces.
-   **Product Detail Pages:** Dedicated pages for each product with comprehensive descriptions, specifications, and quantity selection.
-   **Search & Filtering:** Filter products by category and search by name or description.
-   **Dark Mode Toggle:** User-friendly option to switch between light and dark themes for improved accessibility and aesthetics.
-   **Responsive Design:** Optimized layout and styling for seamless experience across various devices (desktop, tablet, mobile).
-   **Contact & About Pages:** Informative sections providing company details and contact options.

## Technologies Used

* **Frontend:**
    * [React](https://react.dev/)
    * [React Router DOM](https://reactrouter.com/en/main) (for client-side routing)
    * [Bootstrap](https://getbootstrap.com/) (for basic styling and components)
    * CSS (Modular CSS for component-specific styling)
    * [Axios](https://axios-http.com/) (for API requests in the dashboard section)
    * [Yup](https://yup.dev/) (for form validation)
    * [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton) (for loading indicators)
* **Backend (Mock API):**
    * [JSON Server](https://github.com/typicode/json-server) (to simulate a REST API)
    * [JSON Server Auth](https://github.com/typicode/json-server-auth) (for mock authentication)

## Version Comparison (v1.4.0 vs. Previous)

This `v1.4.0` represents a significant upgrade from previous iterations (e.g., `v1.3.0` implied by the folder structure `My-Portfolio-v-1.4.0`).
The key improvements and changes in this version include:

-   **Modular E-commerce Section (`page1`):** The previous generic "project 1" has been evolved into a fully functional "TechShop" e-commerce experience with comprehensive product listing, detailed product pages, and dynamic cart management.
-   **Enhanced User Dashboard (`page3`):** The generic "project 3" is now a "Dashboard" providing user and product management functionalities, demonstrating secure routing with `ProtectedRoute` and integration with a mock API.
-   **Improved UI/UX:** Dark mode toggle and enhanced responsive design ensure a better user experience across devices, building upon previous stylistic foundations.
-   **Refined Code Structure:** The application components are better organized into logical pages and sub-components, making the codebase more maintainable and scalable.
-   **Robust Form Handling:** The login page now includes `yup` for schema validation, ensuring more reliable input handling.
-   **Context API Integration:** `AuthProvider` and `ProductProvider` are introduced for efficient global state management related to user authentication and product data, reducing prop drilling.

## Installation and Setup

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mrmp2010/my-portfolio-v-1.4.0.git](https://github.com/mrmp2010/my-portfolio-v-1.4.0.git)
    cd my-portfolio-v-1.4.0
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up the mock API server:**
    This project uses `json-server-auth` to simulate a backend API for user authentication and data storage.
    ```bash
    npm run server
    # or
    yarn server
    ```
    This will start the JSON server at `http://localhost:8000`.

4.  **Start the development server:**
    Open a new terminal window (keep the API server running in the first one) and run:
    ```bash
    npm start
    # or
    yarn start
    ```
    This will start the React development server, usually at `http://localhost:3000`.

## Usage

Once the application is running:

-   **Navigate between projects:** On the main landing page (`/`), click on the circles to explore "TechShop", "project 2" (a simple counter example), or the "Dashboard".
-   **TechShop (Page 1):**
    -   Browse products on the home page or the dedicated products page.
    -   Use the search bar to find specific items.
    -   Click on a product to view its details.
    -   Add products to the cart and manage quantities.
    -   Toggle between light and dark modes using the sun/moon icon.
    -   Access login/registration.
-   **Dashboard (Page 3):**
    -   Use the login page to authenticate (you can register a new user or use existing mock data from `db.json` like `john.doe@example.com` / `129sesq`).
    -   Explore the Users and Products sections (requires authentication).
    -   Logout functionality is available.
## Screenshots

*(To be added: Include screenshots or GIFs of the application, especially showcasing the home page, product listing, product detail, shopping cart, and dark mode.)*

## Contributing

Contributions are welcome! If you have suggestions for improvements, please follow these steps:

1.  **Fork** this repository.
2.  **Create a new branch** for your feature or bugfix: `git checkout -b feature/YourFeatureName` or `bugfix/FixDescription`.
3.  **Implement** your changes.
4.  **Write clear, concise commit messages.**
5.  **Push** your branch to your forked repository.
6.  **Open a Pull Request** to the `main` branch of this repository.

Please ensure your code adheres to the existing style and conventions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Future Development

* **Payment Gateway Integration:** Implement a real payment processing system.
* **Backend Integration:** Replace the mock JSON Server with a full-fledged backend (e.g., Node.js with Express, Python with Django/Flask).
* **Database Integration:** Connect to a persistent database (e.g., MongoDB, PostgreSQL) for scalable data storage.
* **Advanced Search & Filtering:** Implement more complex search queries and filtering options (e.g., by price range, brand).
* **User Profiles:** Allow users to manage their profiles, order history, and saved items.
* **Admin Panel Enhancements:** Develop a more comprehensive admin interface for managing products, orders, and users.
* **Performance Optimization:** Further optimize rendering performance and bundle size.
* **Testing:** Add unit, integration, and end-to-end tests for critical functionalities.

---
**Next Step:** I will now proceed with a detailed code review and optimization based on the points outlined in your initial request. This will cover code efficiency, error handling, UI/UX improvements, and in-code documentation. I will present these findings and suggested changes in the next turn.
