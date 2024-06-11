import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import * as MaterialsSelectors from './materials.selectors';
import { MaterialsActions } from "./materials.actions";
import { IAddFolder } from "../models/folder.model";

@Injectable({providedIn: 'root'})
export class MaterialsFacade {
    store = inject(Store)
    public readonly allFolders$ = this.store.select(MaterialsSelectors.selectAllFolders);

    initFolders() {
        this.store.dispatch(MaterialsActions.loadFolders())
    }
    deleteFolder(id: number) {
        this.store.dispatch(MaterialsActions.deleteFolder({id}))
    }
    addFolder(title: IAddFolder) {
        this.store.dispatch(MaterialsActions.addFolder({title}))
    }
}