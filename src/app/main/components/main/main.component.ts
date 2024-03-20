import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  menuItems = [
    {
      label: 'ФОНД',
      routerLink: '/centre'
    }
  ];
  lState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor( private modal: NgbModal) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  logout() {

  }

}
