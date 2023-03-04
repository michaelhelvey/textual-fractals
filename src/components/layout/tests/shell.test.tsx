import { ApplicationShell } from '@components/layout/shell'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

test('given a application shell, it renders children and a sidebar', async () => {
	const user = userEvent.setup()

	// TODO(Michael): extract this into a test helper
	render(
		<RouterProvider
			router={createMemoryRouter([
				{
					path: '/',
					element: (
						<ApplicationShell>
							<div>Children</div>
						</ApplicationShell>
					),
				},
			])}
		/>
	)
	expect(screen.getByText('Children')).toBeInTheDocument()
	expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

	// Note: this double-`act` is a hack to deal with the fact that `Transition`
	// components don't seem animate right away after the user event in tests
	await act(async () => {
		await user.click(screen.getByLabelText(/toggle sidebar navigation/i))
	})

	expect(screen.getByRole('dialog')).toBeInTheDocument()

	await act(async () => {
		await user.keyboard('{Escape}')
	})
	expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})
