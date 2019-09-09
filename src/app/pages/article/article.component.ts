import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor( private s:ServiceService) {}
  articles:[] = []


  ngOnInit() {
    this.s.articles()
    .subscribe(_articles => this.articles = _articles)
  }

}
