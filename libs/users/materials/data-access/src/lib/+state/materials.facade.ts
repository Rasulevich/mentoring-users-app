import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import * as MaterialsSelectors from './materials.selectors';
import { MaterialsActions } from "./materials.actions";

@Injectable({providedIn: 'root'})
export class MaterialsFacade {
    store = inject(Store)
    public readonly allFolders$ = this.store.select(MaterialsSelectors.selectAllFolders);

    initFolders() {
        console.log(this.allFolders$.subscribe(v=>console.log(v)))
        this.store.dispatch(MaterialsActions.loadFolders())
    }
}