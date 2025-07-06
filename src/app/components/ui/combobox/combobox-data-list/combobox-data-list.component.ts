import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TuiLet } from '@taiga-ui/cdk';
import { TuiDataList, TuiInitialsPipe, TuiLoader } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import {
  TuiComboBoxModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { RequestService } from './request.service';
import { databaseMockData } from './database-mock-data';

@Component({
  selector: 'app-combobox-data-list',
  imports: [
    AsyncPipe,
    ReactiveFormsModule,
    TuiAvatar,
    TuiComboBoxModule,
    TuiDataList,
    TuiInitialsPipe,
    TuiLet,
    TuiLoader,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './combobox-data-list.component.html',
  styleUrl: './combobox-data-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RequestService],
})
export class ComboboxDataListComponent {
  protected readonly service = inject(RequestService);

  protected search: string | null = '';

  protected readonly control = new FormControl(databaseMockData[0]);
}
