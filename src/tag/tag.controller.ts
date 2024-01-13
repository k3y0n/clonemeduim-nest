import { Controller, Get } from '@nestjs/common';

@Controller('tags')
export class TagController {
  @Get()
  getListTags(): string[] {
    return ['Hello World!', 'React JS'];
  }
}
