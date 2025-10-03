import React from 'react';
import FnCounter from './layout/fnCounter';
import ClassCounter from './layout/classCounter';


function App() {
	return (
		<div className="container py-5">
			<h1 className="text-center mb-4">App with FnCounter</h1>
			<FnCounter />
			<hr className="my-5" />
			<h1 className="text-center mb-4">App with ClassCounter</h1>
       	 <ClassCounter />
		</div>
	);
}

export default App;
