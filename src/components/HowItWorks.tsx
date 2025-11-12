import { useState } from 'react'

function HowItWorks() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>how it works section</h2>
            <p>
            Step 1: select a kit that fits your style<br />
            Step 2: customize the order to meet your needs<br />
            Step 3: follow video tutorial instructions when your kit arrives.
            </p>
        </>
    );
}

export default HowItWorks;