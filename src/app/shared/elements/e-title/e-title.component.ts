import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-e-title',
  templateUrl: './e-title.component.html',
  styleUrls: ['./e-title.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ETitleComponent implements OnInit {
  @Input() public label;
  @Input() public required = false;

  constructor() {}

  ngOnInit(): void {}
}
