import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoldersListComponent } from '../folders-list/folders-list.component';
import { MaterialsFacade } from '@users/materials/data-access';

@Component({
  selector: 'users-folders-list-container',
  standalone: true,
  imports: [CommonModule, FoldersListComponent],
  templateUrl: './folders-list-container.component.html',
  styleUrls: ['./folders-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersListContainerComponent implements OnInit {
  materialFacade = inject(MaterialsFacade);
  public readonly folders$ = this.materialFacade.allFolders$;

  ngOnInit(): void {
    console.log('load')
    this.materialFacade.initFolders()
  }
}
