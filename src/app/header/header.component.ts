import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    currentSection = 'Recipe Book';
    sections = ['Recipe Book', 'Shopping List']

    constructor() { }

    section(index) {
        // smart code to change the section in a pretty way
        console.log(this.sections[index] === this.currentSection)
        this.currentSection = this.sections[index];
    }

    ngOnInit() {
    }

}
