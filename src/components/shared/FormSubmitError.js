import React from 'react';

const FormSubmitError = ({ error }) => {
	return (
		<div class="bg-red-50 border-l-4 border-red-400 p-4 mb-8 mt-4">
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						width="24px"
						height="24px"
						class="text-red-400"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</div>{' '}
				<div class="ml-3">
					<p class="text-sm leading-5 text-red-700">{error}</p>
				</div>
			</div>
		</div>
	);
};

export default FormSubmitError;
