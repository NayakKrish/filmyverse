# **Movies Explorer**

A React-based application for exploring movies with features like infinite scrolling, filters, search functionality, collapsible movie details, and accessibility-enhanced components.

---

## **Table of Contents**

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Components](#components)
5. [API Integration](#api-integration)
6. [Accessibility Features](#accessibility-features)
7. [Contributing](#contributing)

---

## **Features**

- Browse movies with infinite scrolling.
- Apply filters like _Popular_, _Now Playing_, _Top Rated_, and _Upcoming_.
- Search for movies by title.
- View movie details in an expandable collapsible card.
- Accessible UI with screen reader and keyboard navigation support.
- Optimized for performance and scalability.

---

## **Getting Started**

### **Prerequisites**

Ensure you have the following installed on your system:

- **Node.js** (>= 14.x)
- **npm** or **yarn**
- A web browser

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/NayakKrish/filmyverse.git
   ```

2. Navigate to the project directory:

   ```bash
   cd filmyverse
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open the app in your browser at http://localhost:3000.

## **Project Structure**

```bash
filmyverse/
│
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── Filters.js
│   │   ├── MoviesList.js
│   │   ├── CollapsibleCard.js
│   │   └── ScrollToTopButton.js
│   ├── constants/      # Reusable constants
│   │   ├── filtersConstants.js
│   │   ├── genresConstants.js
│   ├── redux/          # Redux slices for API integration
│   │   ├── movieApiSlice.js
│   │   └── searchApiSlice.js
│   ├── App.js          # Root component
│   ├── index.js        # Entry point
│
└── package.json        # Project configuration
```

## **Components**

### MoviesList

**Description:**  
The core component that integrates search, filters, and infinite scrolling for displaying a list of movies.

**Key Features:**

- Search bar with search functionality.
- Filter buttons for predefined categories.
- Infinite scrolling with dynamic data loading.

### CollapsibleCard

**Description:**  
Displays detailed movie information in a collapsible format.

**Key Features:**

- Clickable cards for expanding and collapsing details.
- Displays movie poster, genre, release date, ratings, and overview.

### Filters

**Description:**  
Provides filter options for movie categories.

**Key Features:**

- Interactive buttons for each filter.
- Highlights the active filter.

### ScrollToTopButton

**Description:**  
A floating button that allows users to scroll to the top of the page.

**Key Features:**

- Appears after scrolling down by a certain amount.
- Smooth scrolling to the top when clicked.

## API Integration

This application integrates with **The Movie Database (TMDb) API** to fetch movie data and display it to the user.

### Main API Endpoints Used

- **`/movie/popular`**  
  Fetches popular movies.

- **`/movie/now_playing`**  
  Fetches movies currently playing in theaters.

- **`/movie/top_rated`**  
  Fetches top-rated movies.

- **`/movie/upcoming`**  
  Fetches upcoming movies.

- **`/search/movie`**  
  Fetches movies based on a search term.

These endpoints provide the necessary data for displaying various categories of movies and support search functionality in the application.

## Accessibility Features

This application includes several features to ensure accessibility for all users:

- **Keyboard Navigation**:  
  All interactive elements are accessible using the keyboard. Users can navigate through the app using the `Tab`, `Enter`, and `Arrow` keys.

- **Screen Reader Compatibility**:  
  Key information such as movie titles, descriptions, and details are structured in a way that ensures easy interpretation by screen readers.

- **High Contrast Mode**:  
  The UI includes high contrast elements to improve visibility for users with visual impairments.

## Contributing

If you want to contribute to this project, please follow these steps:

1. **Fork** the repository.
2. **Create a new feature branch**:
   ```bash
   git checkout -b your-feature-branch
   ```
