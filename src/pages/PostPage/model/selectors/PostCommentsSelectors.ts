import { StateSchema } from 'app/providers/StoreProvider';

export const getPostCommentsIsLoading = (state: StateSchema) => state.postComments?.isLoading;
export const getPostCommentsError = (state: StateSchema) => state.postComments?.error;
