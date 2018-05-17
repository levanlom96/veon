import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PersonalInfo} from '../personal-info.mock';

@Component({
  selector: 'app-single-info',
  templateUrl: './single-info.component.html',
  styleUrls: ['./single-info.component.scss']
})
export class SingleInfoComponent implements OnInit {

  // Data
  @Input() personalInfo: PersonalInfo;
  @Input() personalInfoIndex: number;

  @Output() saveEmitter: EventEmitter<any> = new EventEmitter();


  // Booleans
  personalInfoFormData: PersonalInfo;
  editFormIsShown = false;

  constructor() {
  }

  ngOnInit() {
  }

  personalInfoIsEmpty() {
    if (this.personalInfo) {
      return !this.personalInfo.Name && !this.personalInfo.LastName && !this.personalInfo.ID;
    }

    return true;
  }

  showForm() {
    this.renewFormData();
    this.editFormIsShown = true;
  }

  hideForm() {
    this.editFormIsShown = false;
  }

  saveData() {
    this.personalInfo = this.personalInfoFormData;

    this.saveEmitter.emit({
      index: this.personalInfoIndex,
      item: this.personalInfo
    });

    this.hideForm();
  }

  private renewFormData() {
    this.personalInfoFormData = Object.assign({}, this.personalInfo);
  }
}
