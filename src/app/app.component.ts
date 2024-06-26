import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ButtonComponent } from "./button/button.component";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroBookOpen, heroXMark } from "@ng-icons/heroicons/outline";

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
        ButtonComponent,
        NgIconComponent
    ],
    viewProviders: [provideIcons({ heroBookOpen, heroXMark })],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    title = "quick-glance";

    currentNoteBook: NoteBook | null = null;

    notebooks: NoteBook[] = [];

    ngOnInit () {
        this.addNotebook();
    }

    addNotebook () {
        const notebookId = crypto.randomUUID();
        const newNotebook = {
            title: "Notebook",
            notes: ["", "", ""],
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
