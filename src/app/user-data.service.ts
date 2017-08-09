import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {
  private userList: string[] = new Array();

  constructor() { }

  addUser(name: string): void{
    this.userList.unshift(name);
  }

  getUserList(): string[]{
    return this.userList;
  }
}
