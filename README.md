1.Project Name:React-DevStack
2.Description:Dev Stack is a responsive React application that helps developers explore different technologies and build their own personalized development stack. Users can browse technologies, view their details, and add or remove technologies from their stack.

3.Technology Used:React,TypeScript,vite,Tailwind CSS,React Toastify,JSON,React Hooks

4.Features:

Explore Technologies — Browse different technologies and view their details.

🧩 Build Your Stack — Add your favorite technologies to your personal stack.

🗑️ Manage Your Stack — Remove individual technologies or clear the entire stack easily.





Question Answer

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write and understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.



State is data managed inside a component that can change over time.

3. What does the useStat hook do, and where did you use it in this project?

useState is used to create and manage changing data in a React component.



In this project, I used it to manage the technologies, selected stack, and loading state.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.



I used it to fetch the JSON data when the application loads.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React efficiently update the correct item when the list changes.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.



I used it to show an empty message when there are no technologies in the stack.

{stack.length === 0 ? (
  <p>stack is empty.</p>
) : (
  <p>selected technologies</p>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.



The child can send something back to the parent by calling a function that the parent passed through props.



