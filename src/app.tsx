import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from '@pages/home'
import ErrorPage from '@pages/error'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
])

export function App() {
	return <RouterProvider router={router} />
}
