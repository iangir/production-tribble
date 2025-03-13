import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileIsEditing = (state: StateSchema) => state.profile?.isEditing;
