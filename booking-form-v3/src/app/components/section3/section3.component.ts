import { Component, OnInit } from '@angular/core';
import { BookingFormService } from '../../services/booking-form.service';
import { Section3 } from '../../models/booking-form.model';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html'
})
export class Section3Component implements OnInit {

  form!: Section3;

  fitnessOptions  = ['Yoga / Meditation','Marathons','Cycling','Exercising'];
  sportsOptions   = ['Cricket','Tennis','Football','Squash','Swimming'];
  eventsOptions   = ['Concert','Plays','Comedy Shows','Food Shows','Sports Events','Club Events'];
  musicOptions    = ['Blues','Indian Classical','Jazz','Bollywood'];
  internetOptions = ['News','Banking & Finance','Sports','Entertainment','Shopping','Social Media','YouTube','Web Series'];
  kidsOptions     = ['Cricket','Tennis','Football','Squash','Watch Movies','Travel'];
  socialOptions   = ['Facebook','Twitter / X','Instagram','Snapchat'];
  travelOptions   = ['Once a Year','Frequently','Rarely'];

  constructor(public svc: BookingFormService) {}

  ngOnInit() { this.svc.section3$.subscribe(s => this.form = s); }

  patch(field: string, value: any) { this.svc.updateSection3({ [field]: value } as any); }

  toggle(field: string, option: string) {
    const arr = [...(this.form as any)[field] as string[]];
    const i = arr.indexOf(option);
    i >= 0 ? arr.splice(i, 1) : arr.push(option);
    this.patch(field, arr);
  }

  isOn(field: string, option: string): boolean {
    return ((this.form as any)[field] as string[]).includes(option);
  }

  patchFamily(idx: number, field: string, value: any) {
    const family = [...this.form.family];
    family[idx] = { ...family[idx], [field]: value };
    this.patch('family', family);
  }
}
