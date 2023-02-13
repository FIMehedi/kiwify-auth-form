import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="text-center mt-20">
			<Link
				className=" px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white"
				to="/login"
			>
				Login
			</Link>
		</div>
	);
};

export default Home;
