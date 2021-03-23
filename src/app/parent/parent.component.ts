import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

lastDate: Date;
 constructor(private communicationService: CommunicationService) { }
 ngOnInit() {
  this.communicationService.dateCreated$.subscribe(newDate => {
    this.lastDate = newDate;
  });
 }
 refreshSubsribed() {
  this.communicationService.refresh();
 }

}