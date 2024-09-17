import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import {TuiSearch} from '@taiga-ui/layout';
import {TuiTextfield} from '@taiga-ui/core'; 
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    imports: [    
        ReactiveFormsModule,
        TuiSearch, 
        TuiTextfield
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

    public readonly fControlName = input<string>('');

    protected readonly formGroupDirective = inject(FormGroupDirective);
}