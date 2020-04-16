import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PalindromeComponent } from './palindrome.component';
import { HttpClientModule }    from '@angular/common/http';
import { PalindromeService } from './palindrome.service';

@NgModule({
  declarations: [
    PalindromeComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [PalindromeComponent],
  providers: [PalindromeService],
  bootstrap: []
})
export class PalindromeModule { }
