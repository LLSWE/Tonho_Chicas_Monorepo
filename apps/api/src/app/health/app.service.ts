import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData() {
    return "Server is running OK !";
  }
}
