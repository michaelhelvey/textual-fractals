import { Sidebar } from '@components/layout/sidebar'
import BarsIcon from '@heroicons/react/24/solid/Bars3Icon'
import { PropsWithChildren, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Application shell is a UI component which renders the navigation bar and container.
 */
export function ApplicationShell({ children }: PropsWithChildren<unknown>) {
	const [showingMenu, setShowingMenu] = useState(false)

	return (
		<div className="flex flex-col h-full relative">
			<header className="p-6 border-b border-slate-300">
				<nav className="flex items-center space-x-4">
					<button
						aria-label="toggle sidebar navigation"
						onClick={() => setShowingMenu(true)}
					>
						<BarsIcon className="w-6 h-6 text-slate-800" />
					</button>
					<Link to={'/'}>
						<h1 className="font-bold text-lg text-indigo-700">
							Fractals
						</h1>
					</Link>
				</nav>
			</header>
			<Sidebar
				open={showingMenu}
				onRequestClose={() => setShowingMenu(false)}
			/>
			<main className="flex flex-col h-full">{children}</main>
		</div>
	)
}
