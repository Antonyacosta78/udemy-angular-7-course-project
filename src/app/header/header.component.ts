import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    @Output() linkClicked = new EventEmitter();
    sections = ['Recipe Book', 'Shopping List']
    currentSection = this.sections[1];

    constructor() { }

    section(index) {
        // smart code to change the section in a pretty way
        this.currentSection = this.sections[index];
        this.linkClicked.emit(this.currentSection);
    }

    ngOnInit() {
        this.linkClicked.emit(this.currentSection);
    }

}
