# User-List App - React Complete Guide

This app is a practice project from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

This app was built before watching the videos on how to complete it, and then some modifications were made after watching the instructor's solution

## Things Learned from this project

- Learned that a modal (at least in React) is just a component that sits on top of the page
  - Add backdrop so that rest of page cannot be interacted with
- Try to pass styles to Card components to where they get combined with the default Card styles, instead of setting them separate
- I overly complicate many things

## Improvements Made after watching videos

- Add Drop shadow to Card (doesn't seem to do anything with the dark background)
- Added padding to the inputs on AddUser component
- Added fallback type ('button') to the Button component
- Changed button text to render from props.children instead of through a property
- Added hover/active styling to Button
- Added modal component for errors
- Removed section elements from App.js
- Refactored styling, Moved some styling from Card to individual components
- Removed DisplayBox component

## Improvements suggested but not made after watching videos

- **Merged external classes** (such as the 'form-control' class in AddUser component) into the Card component
  - **Did make this change**
- Instructor didn't use state for validation, instead just checked in the formSubmitHandler
  - If had gone this way, need to make sure enteredAge is a number, so force with +enteredAge
  - Doing it with state, can add styles later if wanted by adding an invalid class to the input

## Improvements made just looking through the code

- Changed classNames to use lowerCamelCase so that brackets and strings don't need to be used for property names of the styles
- Fixed validation for age (had checking length but instead check that it is > 0)
- Changed DisplayUser component to DisplayUsers as it is a list of all the users

## Differences from instructor project

- Used scss files for some styling to nest selectors
- Used `Date.now()` for key on list instead of `Math.random()`
- Buttons stretch to 100% if screen small enough
- Error message all in one because of how I originally handeled the validation on input

## Other things to note

- Updating userList in App.js depends on previous userList, so the function form of upating it is used
- Probably shouldn't have used a full DisplayBox component, as the component itself is very specific and can't take in dynamic data, it only can take in specific user data. Maybe too much for this small project or should be refactored to allow any kind of data to be entered instead of just 'username' and 'age'. Also this adds the `key` prop to the DisplayBox component itself instead of just adding it to the `li` tag
  - **Removed this**
- Wasn't sure initially how to build a modal, so didn't add that part before watching instructor do it

## To run this project
Clone this repo and cd into the project folder
```bash
npm install
npm start
```
