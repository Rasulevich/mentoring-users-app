import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IFolder } from '../models/folder.model';

export const MaterialsActions = createActionGroup({
  source: 'Materials',
  events: {
    'Load Materialss': emptyProps(),
    'Load Materialss Success': props<{ data: unknown }>(),
    'Load Materialss Failure': props<{ error: unknown }>(),
    'Load Folders':emptyProps(),
    'Load Folders Failure': props<{ error: string}>(),
    'Load Folders Success': props<{ folders: IFolder[] }>()
  },
});