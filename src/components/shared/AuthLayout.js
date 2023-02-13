import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';
import Logo from './Logo';

const AuthLayout = ({ isLogin }) => {
	return (
		<div className="bg-gray-50 w-full min-h-screen mx-auto flex justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<Logo />
				<div className="text-center">
					<h2 className="mt-6 text-3xl leading-9 font-bold text-gray-900">
						{isLogin ? 'Entrar na sua conta' : 'Criar nova conta'}
					</h2>
					<p className="mt-2 text-base leading-5 text-gray-600">
						Ou{' '}
						<Link
							className="text-indigo-600 hover:text-indigo-500 outline-none focus:underline transition ease-in-out duration-150"
							to={isLogin ? '/signup' : '/login'}
						>
							{isLogin ? 'fazer cadastro' : 'entrar na sua conta existente'}
						</Link>
					</p>
				</div>
				<AuthForm isLogin={isLogin} />
			</div>
		</div>
	);
};

export default AuthLayout;
