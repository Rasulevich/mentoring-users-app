import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IAddFolder, IFolder } from '../models/folder.model';

export const MaterialsActions = createActionGroup({
  source: 'Materials',
  events: {
    'Load Materialss': emptyProps(),
    'Load Materialss Success': props<{ data: unknown }>(),
    'Load Materialss Failure': props<{ error: unknown }>(),
    'Load Folders':emptyProps(),
    'Load Folders Failure': props<{ error: string}>(),
    'Load Folders Success': props<{ folders: IFolder[] }>(),
    'Delete Folder': props<{ id: number }>(),
    'Delete Folder Success': props<{ id: number }>(),
    'Delete Folder Failure': props<{ error: string }>(),
    'Add Folder': props<{ title: IAddFolder }>(),
    'Add Folder Success': props<{ folder: IFolder  }>(),
    'Add Folder Failure': props<{ error: string }>(),
  },
});