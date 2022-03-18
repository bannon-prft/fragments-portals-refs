# Working with Fragments, Portals, & "Refs" - React Complete Guide

This project is a continuation of the project built in section 8 of [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

This builds on the previous topics, but I made a new repo to not mix the topics

## Things Learned from this project

- JSX Limitations
  - Cannot return (or store in variable) more than one "root" JSX element
    - e.g., This doesn't work:
      ```js
      return (
        <h2>Hi there!</h2>
        <p>This does not work :-(</p>
      )
      ```
      Because this isn't valid JS:
      ```js
      return (
        React.createElement('h2', {}, 'Hi there!')
        React.createElement('p', {}, 'This does not work :-(')
      )
      ```
  - Returning an array from a React component will require a key for each element
  - "div Soup"
    - ```js
      <div>
        <div>
          <div>
            <h2>Some content - can break styling and rendering too many html elements and may make application slower</h2>
          </div>
        </div>
      </div>
      ```
    - can make Wrapper component instead that only returns the children, and doesn't render too many divs
      - ```js
        const Wrapper = ({ children }) => children
        ```
    - instead of making custom Wrapper component, instead use `React.Fragment` or `<>`
      - must import `React` or `{ Fragment }` to use React.Fragment
    - NOTE: See:
      - AddUser.js for custom `Wrapper` component use
      - ErrorModal.js for `Fragment` use
      - App.js for `<>` use

- Modal basically is an overlay to the entire page, so should not be nested in rest of the DOM
  - Use portal to keep structure in JSX the same, but render differently in the DOM, needs a place to port component to, and then let the component know it should have a portal
  - Add div in index.html for portals
  - ```js
    ReactDOM.createPortal(<elementToRenderInJSX>, document.getElementById('pointerToContainerInRealDOM'))
    ```
  - NOTE: See ErrorModal.js for portal example

- REFs
  - Allow us to access other DOM elements and work with them
  - Stores the real DOM node
  - important that it is not manipulated
  - Can avoid state for input values, just read the value when submit is pressed
  - With the example shown in AddUser.js, was able to get rid of:
    - 2 pieces of state: enteredUser, enteredAge
    - update handlers for input
    - value properties on input
    - state reset on submitHandler
  - NOTE: reset input through ref, should almost never be done but was better in this instance because we are just reading the value and resetting input fields, resulting in less code

- Uncontrolled vs Controlled
  - Most commonly when talking about input components
  - Using refs makes input uncontrolled component



## Other things to note

- Deleted User.js/User.module.css, these were imported from previous project but had no content
- Structured AddUser to follow instructors example and got rid of unnecessary validation states

## To run this project
Clone this repo and cd into the project folder
```bash
npm install
npm start
```
