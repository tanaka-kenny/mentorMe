import { Component, OnInit } from '@angular/core';
import { IT_FIELDS } from 'src/app/models/customized-user.model';

@Component({
  selector: 'app-choose-field',
  templateUrl: './choose-field.component.html',
  styleUrls: ['./choose-field.component.scss'],
})
export class ChooseFieldComponent implements OnInit {
  options: string[];
  selectedITFields: { checked: boolean; value: string }[];

  constructor() {
    this.options = IT_FIELDS;
    this.selectedITFields = [];
  }

  ngOnInit() {}

  onSelectField(selectedField: { checked: boolean; value: string }) {
    if (!selectedField.checked) {
        const itemIndex = this.selectedITFields
          .findIndex(field => field
          .value
          .toLowerCase()
          .includes(field.value.toLowerCase()));

        this.selectedITFields.splice(itemIndex, 1);
    } else {
      this.selectedITFields.push(selectedField);
    }
  }

  submitOptions() {
    // TODO: call service to put selected fields to db
    console.log(this.selectedITFields);
  }
}
