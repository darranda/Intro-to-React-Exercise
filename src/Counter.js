import React, {useState} from 'react';


/*Create a functional component called Counter. 
Inside the component, use the useState hook to create a state variable called count with an initial value of 0 
and a function called setCount to update the state.*/

let Counter = () => {
    let [count, setCount] = useState(0);


//Implement two functions called increment and decrement inside the Counter component.
/*The increment function should increase the count value by 1, and the decrement function should decrease the count value by 1. 
Use the setCount function to update the count value.*/

let increment = () => {
    setCount (count + 1)
};

let decrement = () => {
    setCount (count - 1)
};

//In the Counter component's JSX, display the count value and create two buttons for incrementing and decrementing the counter. 
//Attach the increment and decrement functions as event handlers for the onClick event of the respective buttons.

return (
    <div>
        <h1>This is a Counter:</h1>
        <p> Count: {count} </p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
);
};

export default Counter;