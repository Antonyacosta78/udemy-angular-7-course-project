import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

    /** relies on bootstrap 4 */
    @Input() togglerText: string;
    @Input() togglerClass: string;
    @Input() dropdownClass: string;

    showDropdown = false;

  constructor() { }

  ngOnInit() {
  }

}
