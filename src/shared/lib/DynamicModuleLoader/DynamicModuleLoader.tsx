import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
	ReduxStoreWithManager,
	StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';

interface DynamicModuleLoaderProps {
	name: StateSchemaKey;
	reducer: Reducer;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
	const {
		children, name, reducer, removeAfterUnmount,
	} = props;
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		store.reducerManager.add(name, reducer);
		dispatch({ type: `@ADD ${name} reducer` });
		return () => {
			if (removeAfterUnmount) {
				store.reducerManager.remove(name);
				dispatch({ type: `@REMOVE ${name} reducer` });
			}
		};
		// eslint-disable-next-line
	}, []);
	// eslint-disable-next-line
	return <>{children}</>;
};
