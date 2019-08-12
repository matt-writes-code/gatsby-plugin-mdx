import React, { useState } from 'react';

const button = { backgroundColor: "rebeccapurple", padding: "5px", color: "white", fontSize: "1.1em", border: "none" };

const Add = () => {
    const [num, setNum] = useState(1000);

    return (<div>
        <button onClick={() => { setNum(num + 100) }} style={button}>Add {num}</button>
    </div>)
}

export default Add;