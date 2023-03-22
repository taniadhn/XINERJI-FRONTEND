import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ElementRef,
  Renderer2,
  EventEmitter,
  Output,
  ChangeDetectorRef,
  AfterContentChecked,
} from '@angular/core';
import * as moment from 'moment';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-e-jalali-date-picker',
  templateUrl: './e-jalali-date-picker.component.html',
  styleUrls: ['./e-jalali-date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EJalaliDatePickerComponent implements OnInit, AfterContentChecked {
  /* -------------------------------------------------------------------------- */
  /*                                    title                                   */
  /* -------------------------------------------------------------------------- */

  @Input() public label;
  @Input() public isCheckBoxLabel = false;
  @Input() public required = undefined;
  // elzami va ekhtiari namayesh dade shavad ya na
  @Input() public showRequired = false;
  // bejaye elzami setare namayesh dade shavad
  @Input() public star = true;
  @Input() public icon; // start icon
  @Input() public resetButton = true; // ending icon

  /* -------------------------------------------------------------------------- */
  /*                                    form                                    */
  /* -------------------------------------------------------------------------- */

  @Input() public formGroup: FormGroup;
  @Input() public controlName: any;
  @Input() public control: any;
  @Input() public autocomplete = 'on';
  @Input() public type = 'text';
  @Input() public placeholder = 'dd/mm/YYYY';
  @Input() public disabled = false;
  @Output() public changeInput = new EventEmitter();
  // /* -------------------------------------------------------------------------- */
  // /*                               bootstrap grid                               */
  // /* -------------------------------------------------------------------------- */
  @Input() public col = '12'; // mobile
  @Input() public sm = '12'; // small
  @Input() public md = '6'; // medium
  @Input() public lg = '4'; // medium
  @Input() public xl = '3'; // extra large
  @Input() public has_my3 = true;

  @Input() public minDate;
  @Input() public maxDate;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'col-' + this.col);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-sm-' + this.sm);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-md-' + this.md);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-lg-' + this.lg);
    this.renderer.addClass(this.elementRef.nativeElement, 'col-xl-' + this.xl);
    if (this.has_my3)
      this.renderer.addClass(this.elementRef.nativeElement, 'my-3');
  }

  EndDateChange(event) {
    if (typeof event == 'object') {
      const value = moment(event.value._d).format('YYYY-MM-DD');
      this.control.setValue(value);
      this.changeInput.emit(value);
    }
  }

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }
}
