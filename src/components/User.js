import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Zahirabad</h3>
            <h4>Contact: @rajpalimkar</h4>
            <h2>Function based component</h2>
        </div>
    )
}

export default User;