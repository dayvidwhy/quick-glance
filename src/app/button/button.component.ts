import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-button",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./button.component.html"
})
export class ButtonComponent {
    @Input() text: string = "";
    @Input() variant: "primary" | "secondary" = "primary";
    @Output() clickHandler: EventEmitter<void> = new EventEmitter<void>();

    handleClick() {
        this.clickHandler.emit();
    }
}
