import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../shared/api/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  form: FormGroup;
  today = new Date();
  loading;

  endpage = 10;
  step = 10;
  usersOriginal;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: number[] = [10, 20, 50, 100, 500];
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'CurrencyCode',
    'CurrencyName',
    'ForexBuying',
    'ForexSelling',
    'BanknoteBuying',
    'BanknoteSelling',
  ];

  currencyCodes = [
    {
      value: 'USD',
      label: 'USD',
    },
    {
      value: 'AUD',
      label: 'AUD',
    },
    {
      value: 'DKK',
      label: 'DKK',
    },
    {
      value: 'EUR',
      label: 'EUR',
    },
    {
      value: 'GBP',
      label: 'GBP',
    },
    {
      value: 'CHF',
      label: 'CHF',
    },
    {
      value: 'SEK',
      label: 'SEK',
    },
    {
      value: 'CAD',
      label: 'CAD',
    },
    {
      value: 'KWD',
      label: 'KWD',
    },
    {
      value: 'NOK',
      label: 'NOK',
    },
    {
      value: 'SAR',
      label: 'SAR',
    },
    {
      value: 'JPY',
      label: 'JPY',
    },
    {
      value: 'BGN',
      label: 'BGN',
    },
    {
      value: 'RON',
      label: 'RON',
    },
    {
      value: 'RUB',
      label: 'RUB',
    },
    {
      value: 'IRR',
      label: 'IRR',
    },
    {
      value: 'CNY',
      label: 'CNY',
    },
    {
      value: 'PKR',
      label: 'PKR',
    },
    {
      value: 'QAR',
      label: 'QAR',
    },
    {
      value: 'KRW',
      label: 'KRW',
    },
    {
      value: 'AZN',
      label: 'AZN',
    },
    {
      value: 'AED',
      label: 'AED',
    },
    {
      value: 'XDR',
      label: 'XDR',
    },
  ];
  results = [];

  /* ------------------------------- constructor ------------------------------ */
  constructor(private fb: FormBuilder, private api: ApiService) {}

  /* -------------------------------- ngOnInit -------------------------------- */
  ngOnInit() {
    this.form = this.fb.group({
      date: [null, [Validators.required]],
      currency: [null],
    });
  }

  /* --------------------------------- submit --------------------------------- */
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      const formData = this.form.getRawValue();
      console.log('formData >> ', formData);

      this.api.GetCurrencyList(formData).subscribe((result) => {
        this.results = result?.data;
        if (this.results) {
          this.generateTable();
        }
      });
    }
  }

  /* ------------------------------- applyFilter ------------------------------ */
  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* --------------------------- dataTableGenerator --------------------------- */
  dataTableGenerator(results) {
    return new MatTableDataSource(
      results.map((item) => {
        return item;
      })
    );
  }

  /* ------------------------------ generateTable ----------------------------- */
  generateTable() {
    this.dataSource = this.dataTableGenerator(this.results);
  }
}
