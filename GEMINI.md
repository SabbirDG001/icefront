# Project Overview: ICEFronT 2026 Conference Website

This directory contains the source code for the ICEFronT 2026 International Conference on Engineering and Frontier Technologies website. It is a static, multi-page website designed to provide information about the conference, including important dates, speakers, program details, committees, submission guidelines, and registration information.

## Project Type

This is a **non-code project** in the sense of not requiring a compilation or build process for deployment. It is a static website composed of HTML, CSS, and JavaScript files served directly by a web server.

## Key Technologies

*   **HTML5:** Structure and content of the web pages.
*   **CSS3:** Styling and layout, implemented with a custom, mobile-first approach. Uses CSS Grid and Flexbox.
*   **Vanilla JavaScript:** Client-side interactivity, dynamic content loading (speakers, committees), tabbed navigation, pagination, mobile menu toggle, and smooth scrolling.
*   **Font Awesome:** For icons used throughout the site.
*   **Google Fonts (Inter):** For typography.

## Project Structure and Key Files

*   `.html` files (e.g., `index.html`, `about.html`, `call-for-papers.html`, etc.): Each primary section of the conference website is a separate HTML page.
*   `conference.css`: The main stylesheet for the entire website, containing all custom CSS rules, responsive design breakpoints, and animations.
*   `conference.js`: The main JavaScript file handling all client-side logic, dynamic content rendering, and interactive features. It embeds data for speakers and committee members.
*   `public/`: This directory stores static assets such as images (e.g., `MBSTU_logo.png`, `conference_logo.png`, speaker photos).
*   `README.md`: Provides a comprehensive overview, project structure, page details, features, setup, technical details, customization options, browser support, and deployment notes.
*   `create_pages.py`: A Python utility script, likely used for initial page generation from templates. It is not part of the active deployment/build process.

## Building and Running

This project does not require a formal build process. The website can be run directly:

1.  **Extract the files** to your web server or local directory.
2.  **Ensure images** are present in the `public/` folder as referenced (e.g., `MBSTU_logo.png`, `conference_logo.png`, speaker images).
3.  **Open `index.html`** in any modern web browser.
4.  Alternatively, deploy all files to any static hosting service.

## Development Conventions

*   **HTML:** Semantic HTML5 structure.
*   **CSS:** Custom CSS with a focus on responsive design (mobile-first), using modern CSS features like Grid and Flexbox. No external CSS frameworks are used apart from Font Awesome for icons.
*   **JavaScript:** Pure Vanilla JavaScript is used for all interactivity and dynamic content. No external JavaScript frameworks (e.g., React, Vue, Angular) are employed. Data for dynamic sections (speakers, committees) is embedded directly in `conference.js` as JavaScript arrays.
*   **Assets:** Images are stored in the `public/` directory.

## Customization

*   **Content:** Static content can be edited directly within the respective `.html` files.
*   **Speakers & Committees:** Data for speakers and committee members is stored as JavaScript arrays within `conference.js`. Modify these arrays to update the displayed information.
*   **Styling:** The main color scheme, fonts, and layout can be adjusted in `conference.css`.
*   **Dates:** Important dates displayed in the top navigation banner, footer, and on the `dates.html` page must be updated manually in all relevant `.html` files and potentially in `conference.js` if they are also dynamically referenced there.
