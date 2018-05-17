import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {PersonalInfo} from '../../personal-info.mock';

@Component({
  selector: 'app-single-info-edit-form',
  templateUrl: './single-info-edit-form.component.html',
  styleUrls: ['./single-info-edit-form.component.scss']
})
export class SingleInfoEditFormComponent implements OnInit, OnChanges {
  // Data
  @Input() personalInfo: PersonalInfo;
  @Input() formIsShown = false;

  @Output() closeEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() saveEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  save() {
    this.saveEmitter.emit(true);
  }

  close() {
    this.closeEmitter.emit(true);
  }
}
