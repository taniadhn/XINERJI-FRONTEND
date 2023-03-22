import { Injectable, ErrorHandler, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  dialogRef;

  unautorizedTokenError: boolean;
  constructor(
    public dialog: MatDialog,
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  handleError(error: any) {
    console.group('ErrorHandler');
    console.error(error.message);
    console.error(error.stack);
    console.error(window.location.href);
    console.groupEnd();
    if (!navigator.onLine) {
      this.errorAlert({
        errorStatus: 500,
        errorMessage: 'Sunucuya bağlanılamadı',
        errorError: error,
      });
    } else {
      if (error instanceof HttpErrorResponse) {
        this.handleHttpError(error);
      } else {
        this.errorAlert({
          errorStatus: 400,
          errorMessage: 'Bilinmeyen sistem hatası',
          errorError: error,
        });
      }
    }
    throw error;
  }

  public handleHttpError(error: HttpErrorResponse) {
    console.group('HttpErrorHandler');
    console.error(error);
    console.groupEnd();
    this.errorAlert(error);
  }
  // ────────────────────────────────────────────────────────────────────────────────

  errorAlert(errorMessage) {
    let errorMsg = 'Sunucuyla iletişim kurulurken hata oluştu';

    swal
      .fire({
        title: 'Hata',
        // titleText: errorMessage.errorStatus,
        html: `<p class="text-center links dir-left">
                  ${errorMsg}
               </p>`,
        confirmButtonText: 'Kapat',
        showConfirmButton: true,
        customClass: {
          title: 'farsi',
          confirmButton:
            'btn white-back border-solid-grey-1 black-color farsi col small links curvy px-5',
        },
      })
      .then((result) => {
        // this.router.navigate(['/']);
      });
  }

  /* ------------------------------- forceLogout ------------------------------ */

  forceLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
