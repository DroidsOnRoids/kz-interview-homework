import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PalindromeService } from './palindrome.service';

@Controller('palindrome')
export class PalindromeController {
  constructor(private palindromeService: PalindromeService) {}

  @Get(':value')
  isPalindrome(@Param() params, @Res() res: Response): void {
    const value = params.value;
    const result = this.palindromeService.isPalindrome(value);
    const statusCode = result ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
    res.status(statusCode).json({ result, input: value });
  }
}
