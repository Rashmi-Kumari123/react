# My Notes

## React Fundamentals

React is a framework that allows me to build complex web applications like HotStar.

### Components
React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

### JSX Files
`.jsx` files give me the facility to write HTML + JavaScript together.
- Inside curly braces, write your variable name.
- Using props, we pass value from parent to child using variable as props.

### State Management
**How we manage state and handle click:**
- I want as book ticket button clicked by someone, increase total booking count dynamically
- We use `useState` hook to manage state
- `useState` holds the data temporarily but not permanently

### Rendering Lists
How we can render list of movies from backend to UI using `map` function.

### Routing
Learned to create multiple pages and how to navigate one page from another page using `react-router-dom`.
- Like if I am hovering on login, it should redirect to login page

### How to handle form in react
Learned how to use handleChange and handleSubmit while filling login form 


### Application Entry Point
Inside `index.js` we are rendering whole app.

### Router Setup
If we want route should available for our whole application, we need to wrap App component inside `BrowserRouter` and this `BrowserRouter` is coming from `react-router-dom`.

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
