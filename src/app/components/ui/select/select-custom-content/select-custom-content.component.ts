import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { TuiPaymentSystem } from '@taiga-ui/addon-commerce';
import { TuiThumbnailCard } from '@taiga-ui/addon-commerce';
import { TuiTextfield } from '@taiga-ui/core';
import { TuiChevron, TuiDataListWrapper, TuiSelect } from '@taiga-ui/kit';

interface Card {
  name: string;
  number: string;
  paymentSystem: TuiPaymentSystem;
}

@Component({
  selector: 'app-select-custom-content',
  imports: [
    FormsModule,
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiTextfield,
    TuiThumbnailCard,
  ],
  templateUrl: './select-custom-content.component.html',
  styleUrl: './select-custom-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCustomContentComponent {
  protected cards: Card[] = [
    {
      name: 'Bitcoin',
      number: '5555555555554444',
      paymentSystem: 'mastercard',
    },
    { name: 'Salary', number: '4242424242424242', paymentSystem: 'visa' },
    { name: 'Charity', number: '2201382000000013', paymentSystem: 'mir' },
    {
      name: 'Subscriptions',
      number: '6200000000000005',
      paymentSystem: 'unionpay',
    },
  ];

  protected value: Card | null = null;
}
