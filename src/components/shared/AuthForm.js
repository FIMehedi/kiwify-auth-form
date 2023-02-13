import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormSubmitError from './FormSubmitError';
import InputGroup from './InputGroup';
import Loader from './Loader';

const AuthForm = ({ isLogin }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		watch,
	} = useForm();

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState({ msg: '' });

	const onSubmit = (data) => {
		setIsLoading(true);
		console.log('Data', data);
		setTimeout(() => {
			setIsLoading(false);
			setIsError(true);
			setError({ ...error, msg: 'API not connected!' });
		}, 2000);
	};

	return (
		<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div className="bg-white pb-8 pt-2 px-4 shadow sm:rounded-lg sm:px-10">
				<form onSubmit={handleSubmit(onSubmit)}>
					<InputGroup
						label="E-mail"
						type="email"
						name="email"
						register={register}
						rules={{
							required: 'Esse campo é obrigatório',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'O e-mail deve ser válido',
							},
						}}
						errors={errors}
					/>
					{!isLogin && (
						<InputGroup
							label="Repetir e-mail"
							type="email"
							name="confirmEmail"
							register={register}
							rules={{
								required: 'Esse campo é obrigatório',
								validate: (value) => {
									if (watch('email') !== value)
										return 'Os dois e-mails devem ser iguais';
								},
							}}
							errors={errors}
						/>
					)}
					<InputGroup
						label="Senha"
						type="password"
						name="password"
						register={register}
						rules={{
							required: 'Esse campo é obrigatório',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters long',
							},
							pattern: {
								value:
									/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
								message:
									'Password must contain at least one letter, one number and one special character',
							},
						}}
						errors={errors}
					/>

					{!isLogin && (
						<div className="mt-6">
							<label className="relative flex items-start mt-2">
								<div className="flex items-center h-5">
									<input
										{...register('agree', {
											required: '(Esse campo é obrigatório)',
										})}
										type="checkbox"
										className={`h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer shadow-focus border appearance-auto ${
											errors['agree']?.message
												? 'border-red-500 appearance-none rounded'
												: 'border-gray-300'
										}`}
									/>
								</div>
								<div className="ml-2 text-sm leading-5">
									<span className="text-gray-700">
										Eu li e aceito os{' '}
										<a
											href="https://kiwify.com.br/termos-de-uso"
											target="_blank"
											className="underline"
											rel="noreferrer"
										>
											termos de uso
										</a>
										,{' '}
										<a
											href="https://kiwify.com.br/licenca-de-uso-software"
											target="_blank"
											className="underline"
											rel="noreferrer"
										>
											termos de licença de uso de software
										</a>
										,{' '}
										<a
											href="https://kiwify.com.br/politica-de-conteudo"
											target="_blank"
											className="underline"
											rel="noreferrer"
										>
											política de conteúdo
										</a>{' '}
										da Kiwify
									</span>
									<p className="text-red-500 border-b-0">
										{errors.agree?.message}
									</p>
								</div>
							</label>
						</div>
					)}
					{isLogin && (
						<div className="mt-2 flex items-center justify-end">
							<div className="text-sm leading-5">
								<Link
									to="/ResetPassword"
									className="text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
								>
									Esqueceu a senha?
								</Link>
							</div>
						</div>
					)}
					{isError && <FormSubmitError error={error.msg} />}
					<div className="mt-6">
						<span className="w-full rounded-md shadow-sm">
							<button
								className="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out cursor-pointer"
								style={{ opacity: isLoading ? '.5' : 1 }}
								disabled={isLoading}
							>
								{isLoading && <Loader />} {isLogin ? 'Entrar' : 'Criar conta'}
							</button>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AuthForm;
