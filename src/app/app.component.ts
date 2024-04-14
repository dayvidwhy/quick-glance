import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

interface NoteBook {
    title: string;
    notes: string[];
    id: string;
}
@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule],
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
            this.currentNoteBook.notes.push(" ");
        }
    }

    deleteNote (index: number) {
        if (this.currentNoteBook) {
            this.currentNoteBook.notes.splice(index, 1);
        }
    }

    speakNote (note: string) {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(note);
        synth.speak(utterThis);
    }
}
