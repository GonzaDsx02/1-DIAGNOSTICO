import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  n!: number;

  constructor() { 
    this.n=1;
  }
  
  ngOnInit(): void {
  }  

  limpiar(){    
    const table = document.getElementById("tblFactorial")! as HTMLTableElement;          
    var rows = table.rows.length-1;
    //console.log(rows)
    if(table.rows.length<1){
      return;
    }      
    for(var i=rows; i>0; i--){
      table.deleteRow(i);
    }
  }

  calcular(){    
    this.limpiar();
    var expr="1*1";
    const table = document.getElementById("tblFactorial")! as HTMLTableElement;        
    var res=0;    
    for(var i = 1; i <= this.n; i++){
      if(i!=1){
        expr+="*"+i;        
        res*=i;

        var row = table.insertRow().innerHTML = '<tr><td>'+i+'</td><td>'+expr+'</td><td>'+res+'</td></tr>';
        
      }else{
        res=1;
        var row = table.insertRow().innerHTML = '<tr><td>'+i+'</td><td>'+expr+'</td><td>'+res+'</td></tr>';
      }
    }
  }

}
