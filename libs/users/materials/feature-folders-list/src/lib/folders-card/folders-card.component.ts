import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import  localeRu  from '@angular/common/locales/ru';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { IFolderVM } from '../../folders.vm';

registerLocaleData(localeRu)
@Component({
  selector: 'users-folders-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './folders-card.component.html',
  styleUrls: ['./folders-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoldersCardComponent {
  @Input({ required: true}) folder!: IFolderVM

  public date(time:string){
    console.log(time)
    return new Date(+time).getDate()
  }
}
