import React, { useState } from "react";

function StatefulCounter() {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + 1);
	};

	const resetCount = () => {
		setCount(0);
	}
	return (
		<div>
			<button onClick={incrementCount}>Add one</button>
			<button onClick={resetCount}>Reset</button>
			<p> Count: {count}</p>
		</div>
	);
}

export default StatefulCounter;