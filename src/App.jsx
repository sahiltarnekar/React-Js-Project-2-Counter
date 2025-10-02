import React from 'react';
import FnCounter from './layout/fnCounter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCounter from './layout/classCounter';


function App() {
	return (
		<div className="container py-5">
			<h1 className="text-center mb-4">App with FnCounter</h1>
			<FnCounter />
        {/* <ClassCounter /> */}
		</div>
	);
}

export default App;
