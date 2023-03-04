import { render, screen } from '@testing-library/react'
import { Hello } from '@components/hello'

test('it renders using vitests & happy-dom', () => {
	render(<Hello />)
	expect(screen.getByText(/hello, world/i)).toBeInTheDocument()
})
