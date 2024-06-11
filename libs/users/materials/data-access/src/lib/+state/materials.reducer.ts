import { Action, createFeature, createReducer, on } from '@ngrx/store';
import { MaterialsActions } from './materials.actions';
import { IFolder } from '../models/folder.model';
import { LoadingStatus } from '@users/core/data-access';

export const materialsFeatureKey = 'materials';

export interface MaterialState {
  folders: IFolder[],
  status: LoadingStatus,
  error: string | null
}

export const initialState: MaterialState = {
  folders:[],
  status: 'init',
  error: null
};

export const reducer = createReducer(
  initialState,
  on(MaterialsActions.loadFolders, (state) => ({...state, status: 'loading' as const})),
  on(MaterialsActions.loadFoldersSuccess, (state, {folders}) => ({...state, folders: folders, status: 'loaded' as const})),
  on(MaterialsActions.loadFoldersFailure, (state, {error}) => ({...state, status: 'error' as const, error: error })),
  on(MaterialsActions.deleteFolderSuccess, (state, {id}) => ({...state, folders: state.folders.filter(folder => folder.id !== id)})),
  on(MaterialsActions.deleteFolderFailure, (state, {error}) => ({...state, status: 'error' as const, error: error })),
  on(MaterialsActions.addFolderSuccess, (state, {folder}) => ({...state, folders: [...state.folders, folder]})),
  on(MaterialsActions.addFolderFailure, (state, {error}) => ({...state, status: 'error' as const, error: error })),

);

export const materialsFeature = createFeature({
  name: materialsFeatureKey,
  reducer,
});

export function materialReducer(state: MaterialState | undefined, action: Action) {
  return reducer(state, action);
}