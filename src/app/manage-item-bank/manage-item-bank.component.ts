import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatMenu, MatFormField, MatFormFieldControl } from "@angular/material";

@Component({
  selector: "app-manage-item-bank",
  templateUrl: "./manage-item-bank.component.html",
  styleUrls: ["./manage-item-bank.component.scss"]
})
export class ManageItemBankComponent implements OnInit {
  
  panelOpenState: boolean = false;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  chapter: string = "";
  classType: string;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
       secondquesCtrl: ['', Validators.required],
       secondch1Ctrl: ['', Validators.required],
       secondch2Ctrl: ['', Validators.required],
       secondch3Ctrl: ['', Validators.required],
       secondch4Ctrl: ['', Validators.required]
    });
  }

  _selectChapter(n) {
    console.log("Chapter", n);
    this.chapter = this.classType+ " Chapter " + n;
    console.log(this.chapter.length);
    
  }

  _selectType(type) {
    console.log(type);
    this.classType = type;
  }

  _selectch1(ch) {
    console.log("choice", ch);
    
  }
  _selectch2(ch) {
    console.log("choice", ch);
    
  }
  _selectch3(ch) {
    console.log("choice", ch);
    
  }
  _selectch4(ch) {
    console.log("choice", ch);
    
  }
}
