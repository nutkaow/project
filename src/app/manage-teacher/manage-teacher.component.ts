import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.scss']
})
export class ManageTeacherComponent implements OnInit {
  tiles = [
    {text: 'Add', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Delete', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Update', cols: 2, rows: 1, color: 'lightpink'},
  ];

  info_teacher = [];
  numbers_query_teacher = 0;
  
  ID_now_gen : string = "T";
  constructor() { }

  ngOnInit() {
  }

  _change(){
    console.log(this.info_teacher[0],this.info_teacher[1],this.info_teacher[2],this.info_teacher[3]);
  }

  _call_id_gen(){
    if(this.numbers_query_teacher < 10){
      this.ID_now_gen = "T0" + this.numbers_query_teacher ;
    }else{
      this.ID_now_gen += this.numbers_query_teacher
      this.info_teacher[0] = this.ID_now_gen;
    }
  }

}
