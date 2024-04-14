import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";

interface NoteBook {
    title: string;
    notes: string[];
    id: string;
}
@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent {
    title = "quick-glance";

    currentNoteBook: NoteBook | null = null;

    notebooks: NoteBook[] = [];

    addNotebook () {
        const notebookId = crypto.randomUUID();
        const newNotebook = {
            title: "Notebook",
            notes: [],
            id: notebookId
        };
        this.notebooks.push(newNotebook);
        this.currentNoteBook = newNotebook;
    }

    setNotebook (notebook: NoteBook) {
        this.currentNoteBook = notebook;
    }

    addNote () {
        if (this.currentNoteBook) {
            this.currentNoteBook.notes.push("new note");
        }
    }
}
