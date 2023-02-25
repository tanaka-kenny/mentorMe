import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() type: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {
    this.type = 'text';
    this.formGroup = new FormGroup({});
    this.controlName  = '';
  }

  ngOnInit() {}

}
