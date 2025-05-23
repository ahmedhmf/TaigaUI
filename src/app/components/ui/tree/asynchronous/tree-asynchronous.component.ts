import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injectable,
} from '@angular/core';
import type { TuiHandler } from '@taiga-ui/cdk';
import { TuiLoader } from '@taiga-ui/core';
import type { TuiTreeLoader } from '@taiga-ui/kit';
import {
  TUI_TREE_LOADER,
  TUI_TREE_LOADING,
  TUI_TREE_START,
  TuiTree,
  TuiTreeService,
} from '@taiga-ui/kit';
import type { Observable } from 'rxjs';
import { map, timer } from 'rxjs';

interface Item {
  readonly children?: boolean;
  readonly text: string;
}

@Injectable()
class TreeLoader implements TuiTreeLoader<Item> {
  public loadChildren({ text }: Item): Observable<Item[]> {
    return timer(3000).pipe(
      map(() => [
        { text: `${text} 1`, children: Math.random() > 0.5 },
        { text: `${text} 2`, children: Math.random() > 0.5 },
        { text: `${text} 3`, children: Math.random() > 0.5 },
      ])
    );
  }

  public hasChildren({ children }: Item): boolean {
    return !!children;
  }
}

@Component({
  selector: 'app-tree-asynchronous',
  imports: [AsyncPipe, TuiLoader, TuiTree],
  templateUrl: './tree-asynchronous.component.html',
  styleUrl: './tree-asynchronous.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TuiTreeService,
    {
      provide: TUI_TREE_START,
      useValue: { text: 'Topmost' },
    },
    {
      provide: TUI_TREE_LOADER,
      useClass: TreeLoader,
    },
  ],
})
export class TreeAsynchronousComponent {
  protected readonly loading = inject(TUI_TREE_LOADING);
  protected readonly service = inject(TuiTreeService<Item>);

  protected map = new Map<Item, boolean>();

  protected childrenHandler: TuiHandler<Item, readonly Item[]> = (item) =>
    this.service.getChildren(item);

  protected onToggled(item: Item): void {
    this.service.loadChildren(item);
  }
}
