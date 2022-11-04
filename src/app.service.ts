import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá crias';
  }
  getInstrutores(): string {
    return 'Eltin e Liza';
  }
  getCidade(): string {
    return 'Rio de Janeiro';
  }
}
