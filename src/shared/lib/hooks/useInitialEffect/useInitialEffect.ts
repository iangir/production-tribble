import { useEffect } from 'react';

export function useInitialEffect(callbaclk: () => void) {
	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			callbaclk();
		}
		// eslint-disable-next-line
	}, []);
}
