import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  getListTags(): string[] {
    return ['Hello World!'];
  }
}
