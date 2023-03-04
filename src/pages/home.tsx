import { Hello } from '@components/hello'
import { ApplicationShell } from '@components/layout/shell'

export function HomePage() {
	return (
		<ApplicationShell>
			<Hello />
		</ApplicationShell>
	)
}
