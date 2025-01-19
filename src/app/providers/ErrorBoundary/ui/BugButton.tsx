import React, { useEffect, useState } from 'react';

import { Button } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
	const [error, setError] = useState(false);

	const throwError = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);
	// eslint-disable-next-line i18next/no-literal-string
	return <Button onClick={throwError}>Throw Error</Button>;
};
