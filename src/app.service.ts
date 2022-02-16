import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('SERVICE') private client: ClientProxy,
  ) {}

  async getHello() {
    return this.client.send({ cmd: 'helloWorld' }, []);
  }
}
