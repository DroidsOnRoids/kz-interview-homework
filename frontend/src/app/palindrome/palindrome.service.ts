import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const isTextValid = (text: string): boolean => {
  return text.match(/^[A-Za-z0-9]+$/g) !== null;
};

type CheckPalindromeResult = {
  isPalindrome: boolean,
  checkedText: string,
};

@Injectable({
  providedIn: 'root',
})
export class PalindromeService {
  constructor(
    private http: HttpClient,
  ) { }

  checkPalindrome(text: string): Observable<CheckPalindromeResult> {
    return new Observable((observer) => {
      if (!isTextValid(text)) {
        observer.error();
        observer.complete();
        return;
      }

      this.http.get<{ result: boolean }>(`http://localhost:3000/palindrome/${text}`)
        .subscribe({
          next() {
            observer.next({ isPalindrome: true, checkedText: text });
            observer.complete();
          },
          error() {
            observer.next({ isPalindrome: false, checkedText: text });
            observer.complete();
          },
        });
    });
  }
}
