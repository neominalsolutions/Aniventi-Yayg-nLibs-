import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';  
import * as moment from 'moment';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

    console.log('moment', moment().add(1,'years'));
    console.log('moment-locale', moment().locale());
    console.log('moment', moment().format('DD/MMMM/yyyy HH:mm'));
  }
  title = 'AngularUIApp';
  message= 'Alert Message';

  data = [{name:'ali'},{name:'ahmet'}]

  @ViewChild('alert') alert!: NgbAlert;




  onClose(){
    this.alert.close();


  

  }
}
