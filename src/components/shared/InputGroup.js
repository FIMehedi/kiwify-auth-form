import React from 'react';

const InputGroup = ({ label, type, register, name, rules, errors }) => {
	return (
		<div className="mt-6">
			<label className="text-sm leading-5 mb-1 text-gray-700">{label}</label>
			<div>
				<input
					type={type}
					{...register(name, rules)}
					autoComplete="off"
					className={`py-2 px-3 border ${
						errors[name]?.message ? 'border-red-500' : 'border-gray-300'
					} rounded-md shadow-sm outline-none shadow-focus focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
				/>
				<span className="text-red-500 border-b-0 text-sm">
					{errors[name]?.message}
				</span>
			</div>
		</div>
	);
};

export default InputGroup;
