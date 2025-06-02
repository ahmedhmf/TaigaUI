import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiDropdown } from '@taiga-ui/core';
import { TuiSwitch } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/legacy';
import { PolymorpheusTemplate } from '@taiga-ui/polymorpheus';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-dropdown-change-detection',
  imports: [
    AsyncPipe,
    FormsModule,
    PolymorpheusTemplate,
    TuiDropdown,
    TuiInputModule,
    TuiSwitch,
  ],
  templateUrl: './dropdown-change-detection.component.html',
  styleUrl: './dropdown-change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownChangeDetectionComponent {
  protected open = false;
  protected value = 'some data';
  protected showBigText$ = interval(3000).pipe(map((i) => !(i % 2)));
}
