import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Palindrome (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/palindrome/abba (GET)', () => {
    return request(app.getHttpServer())
      .get('/palindrome/abba')
      .expect(200)
      .expect({ result: true, input: 'abba' });
  });

  it('/palindrome/abcd (GET)', () => {
    return request(app.getHttpServer())
      .get('/palindrome/abcd')
      .expect(400)
      .expect({ result: false, input: 'abcd' });
  });
});
