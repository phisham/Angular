import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MbscCardOptions } from '@mobiscroll/angular';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  oppoSuits: any = ['10.00AM   ✅   Food', '10.30AM   ✅  Medication', '11.30AM   ✅  Cleaning'];
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }
  settings: MbscCardOptions = {
        theme: 'ios',
        themeVariant: 'light'
  };
  

  

  oppoSuitsForm = this.fb.group({
    name: ['']
  })

  onSubmit() {
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }

}
