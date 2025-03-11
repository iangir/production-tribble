import { StoryFn } from '@storybook/react/*';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import 'app/styles/index.scss';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) => (
	<StoreProvider
		initialState={state as StateSchema}
		asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
	>
		<Story />
	</StoreProvider>
);
