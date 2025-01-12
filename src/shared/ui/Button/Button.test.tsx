import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('button', () => {
	test('button', () => {
		render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
		expect(screen.getByText('Test')).toHaveClass('clear');
	});
});
