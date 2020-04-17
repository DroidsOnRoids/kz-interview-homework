import { Component } from '@angular/core';
import { PalindromeService } from './palindrome.service';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent {
  public text = '';
  public checkedText = '';
  private hasBeenChecked = false;
  private isPalindrome = false;
  private error = false;

  constructor(private service: PalindromeService) { }

  onCheckClick() {
    this.service.checkPalindrome(this.text).subscribe({
      next: ({ isPalindrome, checkedText }) => {
        this.isPalindrome = isPalindrome;
        this.checkedText = checkedText;
        this.error = false;
      },
      error: () => {
        this.error = true;
      },
      complete: () => {
        this.hasBeenChecked = true;
      },
    });
  }

  get errorBoxShown() {
    return this.error;
  }

  get infoPalindromeTextShown() {
    return !this.error && this.hasBeenChecked && this.isPalindrome;
  }

  get infoNotPalindromeTextShown() {
    return !this.error && this.hasBeenChecked && !this.isPalindrome;
  }
}
