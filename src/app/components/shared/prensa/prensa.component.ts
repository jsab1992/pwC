import { Component, OnInit } from '@angular/core';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@Component({
  selector: 'app-prensa',
  templateUrl: './prensa.component.html',
  styleUrls: ['./prensa.component.scss']
})
export class PrensaComponent implements OnInit {

  constructor(private redes: NgxTwitterTimelineModule) { }

  ngOnInit(): void {
  }

}
