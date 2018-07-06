import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ViewChild,ElementRef} from '@angular/core';
import * as html2canvas from 'html2canvas';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
// declare let jsPDF;
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import * as $ from 'jquery';


@Component({
  selector: 'app-print-exam',
  templateUrl: './print-exam.component.html',
  styleUrls: ['./print-exam.component.scss']
})
export class PrintExamComponent implements OnInit {
  doc = new jsPDF()
  i = 1;
  question: string = this.i+" "+"which one is not type of picture ?";
  ch1: string = "1. "+".png";
  ch2: string = "2. "+".txt";
  ch3: string = "3. "+".jpg";
  ch4: string = "4. "+".ngv";
  //  @ViewChild('content') content: ElementRef;
  tiles = [
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},   
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
            {question: this.question,ch1: this.ch1,ch2: this.ch2,ch3: this.ch3,ch4: this.ch4},  
             
          ];
  constructor() { }

  ngOnInit() {

  }


   downloadPDF(){
    
    
    let specialElementHandlers = {
      '#editor' : function(element,renderer) {
        return true;
      }
    };
    this.doc.fromHTML(document.getElementById('content'),15,15, {
      'width' : 190,
      'elementHandlers': specialElementHandlers

    });
  
    this.doc.save('test.pdf')
   }


  GeneratePDF() {
    const elementToPrint = document.body; //The html element to become a pdf
    const pdf = new jsPDF('p', 'pt', 'a4');
    document.getElementById("butt").hidden = true;
    console.log(document.getElementById("butt").hidden);
    pdf.addHTML(elementToPrint, function () {
      pdf.save('test.pdf');
      document.getElementById("butt").hidden = false;
    });
    
    

  
    
  }
  download(){
    

    html2canvas(document.getElementById("content")).then(function(canvas) {
      var  data = canvas.toDataURL();
        var docDefinition = {
          pageMargins: [ 20, 60, 40, 60 ],
           pageSize: 'A4',
           content: [{
               image: data,
               width: 1500,
               fontSize: 14, bold: true, pageBreak: 'after',
               pagesplit: true

           }]
       };
       console.log(docDefinition);
       
       pdfMake.createPdf(docDefinition).download("Score_Details.pdf");
  })
  }

  
}
