import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async getListTags(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.getListTags();
    return {
      tags: tags.map((tag) => tag.name),
    };
  }
}
