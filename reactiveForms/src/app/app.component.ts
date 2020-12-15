
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup,FormControl} from '@angular/forms';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
//using formbuilder
export class AppComponent  {
    title = 'Registration Form ';
    todolist=[];
    countryarray=['India','America','China','South africa'];

    //using form builder
    constructor(private fb1: FormBuilder){}

    myform = this.fb1.group({
    name:['',[Validators.required]],
    gender:[''],
    dob:[''],
    email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
    phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    address: this.fb1.group({
        city:[''],
        state:[''],
        pincode:['']
      }),
    country:['']
    });


// without using formbulilder

//   myform = new FormGroup({
//     name : new FormControl('', Validators.required),
//     gender: new FormControl(''),
//     dob: new FormControl(''),
//     email: new FormControl(''),
//     phone: new FormControl(''),
// address: new FormGroup({
//   city: new FormControl(''),
//   state: new FormControl(''),
//   pincode:new FormControl('')
// }),
//     country: new FormControl('')

//   });

//define properties for each element
get name2()
{
  return this.myform.get('name');
}
get eml3()
{
  return this.myform.get('email');
}

get phn()
{
  return this.myform.get('phone');
}

  addData()
  {
  console.log(this.myform.value);
          this.todolist.push(this.myform.value);
          console.log(this.myform.controls['name'].value);
          console.log(this.myform.get('name').value);
          this.myform.reset();
          

  }
  
          
  deleteData(ind)
          {
          // this.todolist=this.todolist.filter(t => t!== i);
          // var ind=this.todolist.indexOf(i);
  
          console.log(ind);
            this.todolist.splice(ind,1);
  
            for (var j=0;j<this.todolist.length;j++)
            {
            console.log(this.todolist[j]); 
            }
       
          }
  }     