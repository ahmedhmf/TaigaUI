import { Component } from "@angular/core";
import { TuiLink } from "@taiga-ui/core";

@Component({
  selector: "app-link-variants",
  imports: [TuiLink],
  templateUrl: "./link-variants.component.html",
  styleUrl: "./link-variants.component.scss",
})
export class LinkVariantsComponent {
  protected onClick(event: MouseEvent): void {
    console.info("click", event);
  }
}
