import { useState } from "react";

function Counter() {

    let [statevariable, setStateVariable] = useState(10);
    let [count, setCount] = useState(0);


    function incCount() {
        setCount(count + 1);
    }

    return (
        <>
            <h3>Count is {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    );
}


export default Counter;