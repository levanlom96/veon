import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PERSONAL_INFO_MOCK, PersonalInfo} from './personal-info.mock';
import {SessionService} from '../Services/session.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  public personalInfoCollection: PersonalInfo[] = PERSONAL_INFO_MOCK;

  constructor(private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    if (this.sessionService.has('personalInfoCollection')) {
      this.personalInfoCollection = this.sessionService.get('personalInfoCollection');
    }
  }

  changeItem(arg: any) {
    console.log('I am here: ', arg);
    if (arg && arg.item) {
      this.personalInfoCollection[arg.index] = arg.item;
    }
  }

  gotToNextStep() {
    console.log('Saving: ', this.personalInfoCollection);
    this.sessionService.set('personalInfoCollection', this.personalInfoCollection);
    this.router.navigate(['/attention']);
  }
}
