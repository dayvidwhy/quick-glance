import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";

interface NoteBook {
    title: string;
    notes: string[];
    id: string;
}
@Component({
    selector: "app-root",
    standalone: true,
    imports: [
        RouterOutlet,
        CommonModule,
        FormsModule,
        HeaderComponent,
        FooterComponent,
        ButtonComponent
    ],
    templateUrl: "./app.component.html"
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

    speakAll () {
        if (this.currentNoteBook) {
            this.currentNoteBook.notes.forEach(note => this.speakNote(note));
        }
    }
}
