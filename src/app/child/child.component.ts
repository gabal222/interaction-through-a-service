import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 lastRefreshed: Date;
 constructor(private communicationService: CommunicationService) { }
 ngOnInit() {
  this.communicationService.componentChanged$.subscribe(event => {
    console.log(event, 'Hello')
    this.onRefresh();
  });
 }
 sendNewDate() {
  this.communicationService.broadcastDate(new Date());
 }
 onRefresh() {
  this.lastRefreshed = new Date();
 }

}