import { Injectable } from '@nestjs/common';

const LoginKey =
  '127AA49DAD7BEEC28DE548AF8968F071F361B69743629844E4F33A183A4A1C6D';

@Injectable()
export class UsersService {
  async createUser(name: string, password: string) {
    await this.checkUserExists(name);
    await this.saveUser(name, password);
  }

  private checkUserExists(email: string) {
    return false; // TODO: DB 연동 후 구현
  }

  private saveUser(name: string, password: string) {
    return; // TODO: DB 연동 후 구현
  }

  l;
  async login(name, password) {
    // name  password가진 유저가 있는지 db에서 확인
    // jwt 발급
    console.log(name, password);
    return;
  }

  async getUserInfo(userId: number) {
    console.log(userId);
    //throw new Error('Method not implemented.');
  }
}
