import { ApplicationShell } from '@components/layout/shell'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

/**
 *  This component is rendered when an error occurs while rendering a route.
 */
export default function ErrorPage() {
	const error = useRouteError()
	return (
		<ApplicationShell>
			<div
				id="error-page"
				className="flex flex-col justify-center items-center h-full"
			>
				<h1 className="font-bold text-5xl mb-12">Oops!</h1>
				<p className="text-gray-900 mb-8">
					Sorry, an unexpected error has occurred:
				</p>
				<p className="italic text-gray-600">
					{formatErrorMessage(error)}
				</p>
			</div>
		</ApplicationShell>
	)
}

/**
 *  Given an error of an unknown type, attempts to extract a human-readable
 *  error message.
 */
function formatErrorMessage(error: unknown): string {
	if (typeof error === 'string') {
		return error
	}

	if (isRouteErrorResponse(error)) {
		return error.statusText
	}

	if (error instanceof Error) {
		return error.message
	}

	return 'Unknown error'
}

/**
 * Private export that is only used for testing.
 */
export const _private = { formatErrorMessage }
