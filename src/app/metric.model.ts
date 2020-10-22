import { Injectable } from "@angular/core";

export class Metric {
    constructor(
        public Metric: string,
        public Value: string,
      ) {}
}


@Injectable({
    providedIn: "root",
})
export class MetricAdapter {
    adapt(item: any): Metric {
        return new Metric(item.Metric, item.Value);
    }
}