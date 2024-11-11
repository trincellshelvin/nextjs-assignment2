import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const increment = () => {
        setCount(count + step);
    };

    const decrement = () => {
        if (count - step >= 0) {
            setCount(count - step);
        } else {
            setCount(0);
        }
    };

    const doubleIncrement = () => {
        setCount(count + 2);
    };

    const doubleDecrement = () => {
        if (count - 2 >= 0) {
            setCount(count - 2);
        } else {
            setCount(0);
        }
    };

    const reset = () => {
        setCount(0);
    };

    const handleStepChange = (e) => {
        setStep(Number(e.target.value));
    };

    return (
        <div className="counter">
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={doubleIncrement}>Double Increment</button>
            <button onClick={doubleDecrement}>Double Decrement</button>
            <button onClick={reset}>Reset</button>
            <div>
                <label>
                    Step:
                    <input
                        type="number"
                        value={step}
                        onChange={handleStepChange}
                        min="1"
                    />
                </label>
            </div>
        </div>
    );
};

export default Counter;
