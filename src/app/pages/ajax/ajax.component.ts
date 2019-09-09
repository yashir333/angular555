import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {

  constructor( private s:ServiceService) {}
    articles:[] = []

   

  ngOnInit() {
    this.s.articles()
    .subscribe(_articles => this.articles = _articles)
  }

}
