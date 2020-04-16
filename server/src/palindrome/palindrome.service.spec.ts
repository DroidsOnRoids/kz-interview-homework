import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {
  let palindromeService: PalindromeService;

  beforeEach(async () => {
    palindromeService = new PalindromeService()
  });

  describe.each([
    ['', true],
    ['a', true],
    ['aa', true],
    ['ab', false],
    ['abc', false],
    ['anna', true],
    ['abcba', true],
    ['abcd dcba', true],
    ['abc    ba', true],
  ])('.isPalindrome(%s)', (text, expected) => {
    it('returns true', () => {
      expect(palindromeService.isPalindrome(text)).toBe(expected);
    });
  });
});
