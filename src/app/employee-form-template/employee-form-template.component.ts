import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-form-template',
  templateUrl: './employee-form-template.component.html',
  styleUrls: ['./employee-form-template.component.scss']
})
export class EmployeeFormTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee = {
    "empname" : "Honey",
    "emplastname" : "",
    "emailid" : "",
    "pwd" : "",
    "contactno" :"",
    "gender":"",
    "address":""
  }

  onformSubmit(data){
    console.log('Data entered by employee : ', JSON.stringify(data))
  }

}
