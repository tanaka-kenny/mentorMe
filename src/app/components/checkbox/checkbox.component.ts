import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() options: string[];
  @Output() checkedItem: EventEmitter<{ checked: boolean; value: string }>;

  constructor() {
    this.options = [];
    this.checkedItem = new EventEmitter();
   }

  ngOnInit() {}

  selectValue(event: any) {
    this.checkedItem.emit(event.detail);
  }

}
