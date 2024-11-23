import { NgForOf } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { TuiChip } from "@taiga-ui/kit";

@Component({
  selector: "app-chip-size-content",
  imports: [NgForOf, TuiChip],
  templateUrl: "./chip-size-content.component.html",
  styleUrl: "./chip-size-content.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipSizeContentComponent {
  protected readonly sizes = ["m", "s", "xs"] as const;
}
