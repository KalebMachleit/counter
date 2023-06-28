import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(count + 1)
    };

    const countDown = () => {
        setCount(count - 1)
    };

    const countReset = () => {
        setCount(0)
    };

    const countRand = () => {
        setCount(Math.round(Math.random() * 100))
    }

    return(
        <div>
            <h1>Current Count: {count}</h1>
            <div id="buttons">
                <button onClick={countUp}>Add</button>
                <button onClick={countDown}>Subtract</button>
                <button onClick={countReset}>Reset</button>
                <button onClick={countRand}>Random</button>
            </div>
        </div>
    )
};

export default Counter;