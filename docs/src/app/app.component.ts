import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { MbscCardOptions } from '@mobiscroll/angular';
import { AbstractControl, FormBuilder, 
    FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'frontend';
   searchValue: string = null;
   condition: boolean = null;
   prevText: string = '';
   list_lang = ['Raja'];
   res_list = [];
   res_cnt: number = 0;
   settings: MbscCardOptions = {
        theme: 'ios',
        themeVariant: 'light'
    };
   
   onSubmit($event){
    if($event.keyCode === 13){
      this.condition = true;
      this.prevText = this.searchValue;
      this.res_cnt = 0;
      this.res_list = [];
      setTimeout(() => {
        this.condition = false;
        for(let i=0; i<this.list_lang.length; i++){
          if(this.list_lang[i] === this.prevText.toLowerCase()
             || this.list_lang[i].startsWith(this.prevText)){
            this.res_cnt += 1;
            this.res_list.push(this.list_lang[i]);
          }
        }
      }, 3000);
      this.searchValue = null;
    }
  }

}
