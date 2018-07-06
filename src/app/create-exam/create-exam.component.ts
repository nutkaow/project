import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  semesters = [1, 2];
  terms = ["Midterm","Final"];
  years = [1,2,3,4,5,6,7,8,9,10];
  setyear = [] ;
  types = ["LEC","LAB"];
  numbers = ["CH01" , "CH01" , "CH02" , "CH02" , "CH03" , "CH03" , "CH04" , "CH04" , "CH05" , "CH05" , "CH06" , "CH06" , "CH07" , "CH07" 
           , "CH08" , "CH08" , "CH09" , "CH09" , "CH10" , "CH10" , "CH11" , "CH11" , "CH12" , "CH12" , "CH13" , "CH13" , "CH14" , "CH14"];
  semester: string = "Semester";
  term: string = "Term";
  year: string = "Year";

  color = 'accent';
  mode = 'determinate';
  numitem = 0;
  percent = (this.numitem*(100))/120;
  value = this.percent;

  test = [];


  constructor(private _formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // seme: [this.semester, Validators.minLength(9)]
      
    });
    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });
  }

  _selectSemester(s) {
    
    this.semester = "Semester " + s;
    console.log(this.semester.length);
    console.log(this.semester);
  }

  _selectTerm(t) {
    console.log("Term", t);
    this.term = t;
  }

  _selectYear(y) {
    console.log("Year", y);
    this.year = " Year " + y;
  }

  _setYear(){
    const date = new Date(); 
    const datey = date.getFullYear();
    for(let i=(datey-10); i <= (datey+10) ; i++){
      this.setyear.push(i);
    }
    
  }
  
  _change(){
    this.numitem = 0;
    for(let i=0;i<28;i++){
      console.log(this.test[i]);

      if(isNaN(this.test[i]) && this.test[i] != undefined){ // if type is text
        this.test[i] = '';  
      }else if(this.test[i] != undefined && this.test[i] != ''){
          if(this.numitem + parseInt(this.test[i]) > 120){
            this.test[i] = 0;
          }else {
            this.numitem += parseInt(this.test[i]);
          }
      }
      
    }
    this.percent = (this.numitem*(100))/120;
    this.value = this.percent;
    console.log(this.numitem);
    
  }
 
  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
