# Harry Potter API Explorer

This project is a web application that allows users to explore data from the Harry Potter API. It provides an interactive interface to browse characters, books, spells, and houses, as well as a contact form for inquiries.

## Features

*   **API Data Fetching:** Retrieves information on characters, books, spells, and houses from the Harry Potter API.
*   **Routing:** Uses React Router for client-side navigation, enabling users to move seamlessly between different sections of the application.
*   **Interactive UI:** Offers a user-friendly interface for viewing and searching through the API data.
*   **Responsive Design:** The website is designed to be responsive and work well on different screen sizes.
*   **Search Functionality:** Includes search capabilities for books and characters.
*   **Details Display:** Provides modal windows or pop-outs for additional information on individual characters and books.
*   **Contact Form:** A contact form where users can send messages or inquiries.

## Technologies Used

*   **React.js:** For building the user interface with components, state, and lifecycle methods.
*   **Vite:** As a fast build tool for a smoother development experience.
*   **Material UI:** For pre-built UI components and a consistent visual style.
*   **Tailwind CSS:** For utility-first styling, making responsive designs and customization easier.
*   **React Router:** For handling navigation between pages/sections of the website.
*   **Axios:** For making HTTP requests to the Harry Potter API.

## Setup Instructions

Follow these instructions to get the project up and running on your local machine:

### Prerequisites

*   **Node.js:** (v16 or later)
*   **npm** or **yarn**

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Soumyajit2005/JSMHackathon
    cd JSMHackathon
    ```

2.  **Install Dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    or using yarn:

    ```bash
    yarn install
    ```

3.  **Start the Development Server:**

    Using npm:

    ```bash
    npm run dev
    ```

    or using yarn:

    ```bash
    yarn dev
    ```

4.  Open your web browser and navigate to the address displayed in the terminal, typically `http://localhost:5173/`.

## Project Structure

```
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/
README.md
src/
    App.css
    App.jsx
    assets/
        Home/
    components/
        Navbar/
            Navbar.jsx
    index.css
    main.jsx
    pages/
        Books/
            Books.jsx
        Characters/
            Characters.jsx
        Contact/
            Contact.css
            Contact.jsx
        Home/
            Home.css
            Home.jsx
        Houses/
            Houses.jsx
        Spells/
            Spells.jsx
    theme.jsx
tailwind.config.js
vite.config.js
```

## Standout Feature

The standout feature of this application is its ability to quickly navigate and provide information on different categories within the Harry Potter universe. The search and modal features add an interactive element that helps users find specific information on characters and books.

## Further Enhancements

* Implement proper loading states on all pages for a better user experience.
* Add unit tests for components and integration tests for API calls.
* Add pagination or infinite scroll for very large datasets like spells.
* Implement sorting of data by name, house, or release date.
* Enhance styling and overall UX with more interactive elements.

## Contributing

Feel free to contribute to this project by opening pull requests or submitting bug reports.
