import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommunicationService {

  private componentChangeSource = new Subject();
  private newDateCreationSource = new Subject<Date>();

  componentChanged$ = this.componentChangeSource.asObservable();
  dateCreated$ = this.newDateCreationSource.asObservable();

  refresh() {
    this.componentChangeSource.next();
  }

  broadcastDate(date: Date) {
    this.newDateCreationSource.next(date);
  }


}