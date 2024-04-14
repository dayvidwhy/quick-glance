import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-button",
    standalone: true,
    imports: [],
    templateUrl: "./button.component.html"
})
export class ButtonComponent {
    @Input() text: string = "";
    @Output() clickHandler: EventEmitter<void> = new EventEmitter<void>();

    handleClick() {
        this.clickHandler.emit();
    }
}
