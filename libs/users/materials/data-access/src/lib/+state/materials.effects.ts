import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MaterialsActions } from './materials.actions';
import { ApiService } from '@users/core/http';
import { IFolder } from '../models/folder.model';

export const materialsEffects = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    console.log('effect')
    return actions$.pipe(
      ofType(MaterialsActions.loadFolders),
      // delay(1500),
      switchMap(() =>
        apiService.get<IFolder[]>('/folder')
        .pipe(
          map((folders) =>
            MaterialsActions.loadFoldersSuccess({
              folders: folders.map((folder) => folder),
            })
          ),
          catchError((error) => {
            console.error('Error', error);
            return of(MaterialsActions.loadFoldersFailure({ error }));
          })
        )
      )
    );
  },
  { functional: true }
);