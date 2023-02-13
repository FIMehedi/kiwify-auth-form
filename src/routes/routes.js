const { createBrowserRouter } = require('react-router-dom');
const { default: Home } = require('../pages/Home');
const { default: Login } = require('../pages/Login');
const { default: Signup } = require('../pages/Signup');

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
]);

export default router;
