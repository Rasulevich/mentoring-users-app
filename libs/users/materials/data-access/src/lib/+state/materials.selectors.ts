import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMaterials from './materials.reducer';

export const selectMaterialsState = createFeatureSelector<fromMaterials.MaterialState>(fromMaterials.materialsFeatureKey);

export const selectAllFolders = createSelector(selectMaterialsState, state => state.folders)