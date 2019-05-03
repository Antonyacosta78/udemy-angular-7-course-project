import { Component, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  sections = [{ name: 'Recipe Book', path: '/recipebook' }, { name: 'Shopping List', path: '/shoppinglist' }];
  currentSection: string;

  constructor(private router: Router) {}

  section(index) {
    // smart code to change the section in a pretty way
    // this is made by Router now
    this.currentSection = this.sections[index].name;
  }

  ngDoCheck() {
    // made this but its HORRIBLE
    // this.currentSection = (this.router.url === '/')
    // ? this.sections[0].name
    // : this.sections.filter(e => e.name === this.router.url)[0].name ;
    // not shorter, but more readable

    if (this.router.url === '/') {
      this.currentSection = this.sections[0].name;
    } else {
      const [currentSection] = this.sections.filter(e => e.path === this.router.url);
      this.currentSection = currentSection.name;
    }
  }
}
