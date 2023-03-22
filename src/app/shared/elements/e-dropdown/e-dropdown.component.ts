import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  AfterContentChecked,
  ElementRef,
  Renderer2,
  OnChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-e-dropdown',
  templateUrl: './e-dropdown.component.html',
  styleUrls: ['./e-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EDropdownComponent
  implements OnInit, AfterContentChecked, OnChanges
{
  /* -------------------------------------------------------------------------- */
  /*                                    title                                   */
  /* -------------------------------------------------------------------------- */

  @Input() public label;
  @Input() public required = false;
  @Input() public isCheckBoxLabel = false;
  // elzami va ekhtiari namayesh dade shavad ya na
  @Input() public showRequired = false;
  // bejaye elzami setare namayesh dade shavad
  @Input() public star = true;
  @Input() public virtualScroll = false;
  @Input() public icon;
  @Input() public startIcon; // ending icon
  @Input() public hasItemImage = false;
  @Input() public hasItemColor = false;
  /** a flag that indicates whether the english text should predict or not.
   *
   * it prefer to not predict when the data is large.
   */
  @Input() public filterPredictionOnEnKeyboard = true;

  /* -------------------------------------------------------------------------- */
  /*                               bootstrap grid                               */
  /* -------------------------------------------------------------------------- */

  @Input() public col = '12'; // mobile
  @Input() public sm = '12'; // small
  @Input() public md = '6'; // medium
  @Input() public lg = '4'; // medium
  @Input() public xl = '3'; // extra large;

  @Input() public has_my3 = true;
  /* -------------------------------------------------------------------------- */
  /*                                    form                                    */
  /* -------------------------------------------------------------------------- */
  @Input() options: SelectItem[];
  @Input() public formGroup: FormGroup;
  @Input() public controlName: any;
  @Input() public control: FormControl;
  @Input() public placeholder = 'Lütfen seçin ...';
  @Input() public disabled = false;

  @Input() public filter = true;
  @Output() public changeInput = new EventEmitter();
  @Input() public maxSelectedLabels = 4;
  @Input() public emptyFilterMessage = 'Sonuç bulunamadı';
  @Input() public scrollHeight = '110px';
  /* -------------------------------------------------------------------------- */
  /*                                 constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(
    private cdref: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
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

  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.cdref.detectChanges();
  }
}
