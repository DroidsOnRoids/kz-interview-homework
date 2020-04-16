import { Module } from '@nestjs/common';
import { PalindromeModule } from './palindrome/palindrome.module';

@Module({
  imports: [PalindromeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
