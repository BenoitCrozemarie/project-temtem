import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-stats-progress-bar',
  templateUrl: './stats-progress-bar.component.html',
  styleUrls: ['./stats-progress-bar.component.scss']
})
export class StatsProgressBarComponent {
  @Input() stats : number | null =null;

}
