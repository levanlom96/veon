import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {SessionService} from '../Services/session.service';
import {Attention, ATTENTION} from './attention.mock';

@Component({
  selector: 'app-personal-info-attention',
  templateUrl: './personal-info-attention.component.html',
  styleUrls: ['./personal-info-attention.component.scss']
})
export class PersonalInfoAttentionComponent implements OnInit {

  private personalInfo: any;
  public attention: Attention = ATTENTION;

  constructor(private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit() {
    // If there is not cards saved it redirects user to first step.
    if (!this.sessionService.has('personalInfoCollection')) {
      this.router.navigate(['/']);
    } else {
      this.personalInfo = this.sessionService.get('personalInfoCollection');
    }

    if (this.sessionService.has('attention')) {
      this.attention = this.sessionService.get('attention');
    }
  }

  showInConsoleSentData() {
    const request = {
      person: this.attention,
      tickets: this.personalInfo
    }

    this.sessionService.set('attention', this.attention);

    console.log('Data That Would Be Sent', request);
  }
}
