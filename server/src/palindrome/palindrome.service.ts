import { Injectable } from '@nestjs/common';

const removeWhiteChars = (str: string): string => {
  return str.replace(/ +/g, '');
}

const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
}

@Injectable()
export class PalindromeService {
  isPalindrome(text: string): boolean {
    text = removeWhiteChars(text)
    return text === reverseString(text)
  }
}
