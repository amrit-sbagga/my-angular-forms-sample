import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customer = {
    "cname" : "Honey",
    "emailid" : "",
    "pwd" : ""
  }

  onformSubmit(data){
    console.log('Data entered by customer : ', JSON.stringify(data))
  }

}
