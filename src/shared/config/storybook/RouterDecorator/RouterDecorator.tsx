import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: typeof BrowserRouter) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
);
