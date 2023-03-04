import { Dialog, Transition } from '@headlessui/react'
import CloseIcon from '@heroicons/react/24/solid/XMarkIcon'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
	open: boolean
	onRequestClose: () => void
}

/**
 * Animated, accessible sidebar navigation UI.
 */
export function Sidebar({ onRequestClose, open }: SidebarProps) {
	return (
		<Transition show={open} as={Fragment}>
			<Dialog onClose={onRequestClose}>
				{/* The backdrop, rendered as a fixed sibling to the panel container */}
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-150"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-out duration-150"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div
						className="absolute inset-0 bg-slate-900/25 backdrop-blur-sm"
						aria-hidden="true"
					></div>
				</Transition.Child>

				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-300 transition-transform"
					enterFrom="-translate-x-[min(20rem,calc(100vw-theme(spacing.10)))]"
					enterTo="translate-x-0"
					leave="ease-in-out duration-300 transition-transform"
					leaveTo="-translate-x-[min(20rem,calc(100vw-theme(spacing.10)))]"
					leaveFrom="translate-x-0"
				>
					<div className="fixed inset-0 flex items-start justify-start overflow-y-auto translate-x-0">
						<Dialog.Panel className="min-h-full w-[min(20rem,calc(100vw-theme(spacing.10)))] bg-white shadow-2xl ring-1 ring-black/10 transition">
							<Dialog.Title className="sr-only">
								Navigation
							</Dialog.Title>
							<div className="p-6 border-b border-slate-100 flex items-center justify-between">
								<h2 className="font-bold text-lg text-indigo-700">
									Fractals
								</h2>
								<button
									onClick={onRequestClose}
									aria-label="close sidebar"
								>
									<CloseIcon className="w-6 h-6 text-slate-600" />
								</button>
							</div>
							<nav>
								<ul>
									<NavigationLink to="/" />
								</ul>
							</nav>
						</Dialog.Panel>
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	)
}

function NavigationLink({ to }: { to: string }) {
	return (
		<li className="p-4">
			<Link
				to={to}
				className="hover:underline text-slate-900 font-semibold"
			>
				Home
			</Link>
		</li>
	)
}
