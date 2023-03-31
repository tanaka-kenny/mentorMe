import { Component, Input, OnInit } from '@angular/core';
import { StepsChecklist } from 'src/app/models/steps-checklist.model';

@Component({
  selector: 'app-steps-checklist',
  templateUrl: './steps-checklist.component.html',
  styleUrls: ['./steps-checklist.component.scss'],
})
export class StepsChecklistComponent implements OnInit {
  @Input() steps: Array<StepsChecklist>;

  constructor() {
    this.steps = [];
  }

  ngOnInit() {}

}
