import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiTiles } from '@taiga-ui/kit';

@Component({
  selector: 'app-tiles-vertical',
  imports: [NgForOf, TuiTiles],
  templateUrl: './tiles-vertical.component.html',
  styleUrl: './tiles-vertical.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesVerticalComponent {
  protected readonly items = ['John Cleese', 'Eric Idle', 'Terry Gilliam'];
  protected order = new Map();
}
