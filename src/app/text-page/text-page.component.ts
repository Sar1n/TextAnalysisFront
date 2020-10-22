import { Component, OnInit } from '@angular/core';
import { SendtextService } from '../sendtext.service';
import { Metric, MetricAdapter } from "../metric.model";

@Component({
  selector: 'app-text-page',
  templateUrl: './text-page.component.html',
  providers: [SendtextService]
})
export class TextPageComponent implements OnInit {

  text: string;
  response: string;
  metrics: Metric[] = [];

  constructor(private sendtextService: SendtextService) { } 

  ngOnInit(): void {
  }

  AnalyzeClick()
  {
    this.sendtextService.AnalyzeText(this.text).subscribe( data => { this.metrics = data; console.log(data); } );
    //console.log(this.text);
  }

}1
