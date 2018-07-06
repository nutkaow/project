import { Component, OnInit } from '@angular/core';
import { ViewChild, AfterViewInit} from "@angular/core";
import {DayPilot, DayPilotSchedulerComponent} from "daypilot-pro-angular";
import {DataService, CreateEventParams, MoveEventParams, UpdateEventParams} from "./data.service";{}

@Component({
  selector: 'scheduler-component',
  template: `<daypilot-scheduler [config]="config" [events]="events" #scheduler></daypilot-scheduler>`,
  styles: [``]
})
export class SchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild("scheduler")
  scheduler: DayPilotSchedulerComponent;

  events: any[] = [];

  config: any = {
    // ...
    eventHeight: 40,
    cellWidthSpec: "Fixed",
    cellWidth: 50,
    timeHeaders: [
      {groupBy: "Day", format: "dddd, d MMMM yyyy"},
      {groupBy: "Hour"},
      {groupBy: "Cell", format: "mm"}
    ],
    scale: "CellDuration",
    cellDuration: 15,
    // ...
  };

  // ...

}
