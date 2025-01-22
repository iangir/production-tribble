import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
	test('toBeInTheDocument', () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
	test('toggle', () => {
		componentRender(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
	});
});
