# Image Search Application Documentation

## Problem Statement
The objective of this project is to create a responsive image search application using React. The application allows users to search for images using the Unsplash API, view image details, and navigate through pages of search results. The app includes the following key features:
1. Home page to display images based on search queries.
2. Image details page to show more information about a selected image.
3. Pagination to navigate through multiple pages of search results.
4. Error handling using Sentry for monitoring and logging errors.

## Dependencies
The project uses several dependencies, each chosen for specific purposes to enhance the development experience and functionality of the application.

### Dependencies Used
1. **React**: The core library for building the user interface.
   - **Why**: React provides a component-based structure that makes it easier to build and manage complex user interfaces.

2. **@mui/material**: Material-UI, a popular React UI framework.
   - **Why**: Provides a comprehensive set of components that follow Material Design guidelines, making it easier to create a consistent and professional-looking UI.

3. **@emotion/react & @emotion/styled**: Libraries for styling components.
   - **Why**: These are used in conjunction with Material-UI to style components effectively.

4. **axios**: A promise-based HTTP client for making API requests.
   - **Why**: Simplifies the process of making HTTP requests to fetch data from APIs.

5. **react-router-dom**: Provides routing capabilities for React applications.
   - **Why**: Essential for handling navigation within the app, allowing users to move between different pages (home and image details).

6. **sentry/react**: Sentry integration for React applications.
   - **Why**: Provides error tracking and monitoring, helping to identify and fix issues in production.

### Development Dependencies
1. **@testing-library/react**: Utilities for testing React components.
   - **Why**: Ensures that the components function correctly through unit tests.

2. **eslint**: A tool for identifying and fixing linting issues in the codebase.
   - **Why**: Helps maintain code quality and consistency.

## Implementation Details

### Project Structure
The project is organized into several directories to ensure a clean and maintainable codebase:

```
src/
|-- components/
|   |-- ImageCard.js
|   |-- ImageList.js
|   |-- Pagination.js
|   |-- SearchBar.js
|-- pages/
|   |-- Home.js
|   |-- ImageDetails.js
|-- services/
|   |-- api.js
|-- App.js
|-- index.js
|-- theme.js
|-- styles.css
```

### Key Features
1. **Home Page**: 
   - Displays a list of images based on the search query.
   - Includes a search bar to input search terms.
   - Uses pagination to navigate through pages of results.

2. **Image Details Page**:
   - Displays detailed information about a selected image.
   - Provides a back button to return to the home page.

3. **API Integration**:
   - The Unsplash API is used to fetch images and their details.
   - Axios is used for making HTTP requests.

4. **Theming and Styling**:
   - A custom theme is created using Material-UI's theming capabilities.
   - Responsive design is implemented using core CSS with standard breakpoints.

5. **Routing**:
   - React Router is used to handle navigation between the home page and the image details page.

6. **Error Handling**:
   - Sentry is integrated for tracking and handling errors in the application.

### Steps for Deployment
1. **Create Repository**:
   ```sh
   git init
   git add .
   git commit -m "Image search"
   git remote add origin YOUR_GIT_REPO_URL
   git push -u origin master
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://www.netlify.com/).
   - Create a new site from Git.
   - Connect your repository.
   - Deploy the site.

### URL
The deployed application can be accessed at [https://imagesearch-scalaix.netlify.app/](scalaix_TestCase).