import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
	beforeEach(() => componentRender(<Counter />, {
		initialState: { counter: { value: 10 } },
	}));

	test('existance', () => {
		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
	});

	test('increment', async () => {
		await userEvent.click(screen.getByTestId('increment-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});
	test('decrement', async () => {
		await userEvent.click(screen.getByTestId('decrement-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});
});
