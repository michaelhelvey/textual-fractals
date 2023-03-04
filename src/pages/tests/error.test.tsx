import { _private } from '@pages/error'

const { formatErrorMessage } = _private

describe('formatErrorMessage', () => {
	it('given a string, returns the string', () => {
		expect(formatErrorMessage('foo')).toEqual('foo')
	})

	it('given an object with a statusText property, returns the statusText', () => {
		// See the definition of `isRouteErrorResponse`:
		// https://github.com/remix-run/react-router/blob/main/packages/router/utils.ts#L1405
		const routeErrorResponse = {
			status: 404,
			statusText: 'foo',
			internal: false,
			data: null,
		}
		expect(formatErrorMessage(routeErrorResponse)).toEqual('foo')
	})

	it("given an instance of Error, returns the error's message", () => {
		expect(formatErrorMessage(new Error('foo'))).toEqual('foo')
	})

	it('given an unknown object, returns "Unknown error"', () => {
		expect(formatErrorMessage({})).toEqual('Unknown error')
	})
})
