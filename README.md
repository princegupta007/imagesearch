# Image Search Application Documentation

## Problem Statement

The task is to create an image search application using React. The application should allow users to search for images using the Unsplash API, view details of a selected image, and navigate between pages of search results. The application should be responsive, using core CSS for styling with standard breakpoints for mobile, tablet, and desktop. It should utilize reusable components and provide production-level code with proper naming conventions. Additionally, the application should implement error handling and routing, and be deployed on Netlify.

## Dependencies

### 1. React
- **Purpose**: React is used to build the user interface of the application. It allows for the creation of reusable components and the management of state and props.
- **Usage**: The entire application is built using React components, with state management and props being passed between components to manage data flow.

### 2. @mui/material
- **Purpose**: MUI (Material-UI) is a popular React UI framework that provides a comprehensive set of components following the Material Design guidelines.
- **Usage**: Used for implementing UI components like `TextField`, `Card`, `Pagination`, and theming the application.

### 3. @emotion/react and @emotion/styled
- **Purpose**: These libraries are used alongside MUI for styling components using a CSS-in-JS approach.
- **Usage**: Used to style MUI components and create custom styles that are scoped to components.

### 4. Axios
- **Purpose**: Axios is a promise-based HTTP client for making API requests.
- **Usage**: Used to fetch data from the Unsplash API, including searching for images and fetching image details.

### 5. React Router DOM
- **Purpose**: React Router is used for routing in React applications.
- **Usage**: Used to implement navigation between the home page and the image details page.

## Implementation Details

### Project Structure
The project is organized as follows to ensure maintainability and reusability:

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

### Components

#### SearchBar
- **File**: `src/components/SearchBar.js`
- **Purpose**: A reusable component that renders a search input field using MUI's `TextField`.

#### ImageCard
- **File**: `src/components/ImageCard.js`
- **Purpose**: A reusable component that displays an image with its description, using MUI's `Card`, `CardMedia`, and `CardContent`.

#### ImageList
- **File**: `src/components/ImageList.js`
- **Purpose**: A reusable component that renders a list of `ImageCard` components in a responsive grid layout using MUI's `Grid`.

#### Pagination
- **File**: `src/components/Pagination.js`
- **Purpose**: A reusable pagination component using MUI's `Pagination` to navigate between pages of search results.

### Pages

#### Home
- **File**: `src/pages/Home.js`
- **Purpose**: The main page of the application where users can search for images and view search results. It includes the `SearchBar`, `ImageList`, and `Pagination` components.

#### ImageDetails
- **File**: `src/pages/ImageDetails.js`
- **Purpose**: The page that displays details of a selected image. It includes an image, its description, and a back button to return to the home page.

### Services

#### API
- **File**: `src/services/api.js`
- **Purpose**: Contains functions to interact with the Unsplash API using Axios.

### Theming

#### Theme
- **File**: `src/theme.js`
- **Purpose**: Defines a custom theme using MUI's `createTheme` to manage typography and other style settings.

### Styling

#### CSS
- **File**: `src/styles.css`
- **Purpose**: Provides responsive styles for different breakpoints (mobile, tablet, desktop) using core CSS.

### Routing

- **File**: `src/App.js`
- **Purpose**: Configures routing using React Router to navigate between the home page and the image details page.

### Error Handling
- Implemented error handling in API service functions and component logic to manage and display errors appropriately.

### Deployment
1. **Repository Creation**: The project is initialized as a Git repository and pushed to a remote repository (e.g., GitHub).
2. **Netlify Deployment**: The application is deployed on Netlify by connecting the Git repository and following the deployment steps on the Netlify platform.