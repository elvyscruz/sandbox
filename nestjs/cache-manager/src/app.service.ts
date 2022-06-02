import { Injectable } from '@nestjs/common';
// import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  // Use if you want to get, and set items in the cache
  // constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getHello() {
    // await this.cacheManager.set('cached_item', {key: 32});
    // const cachedItem = await this.cacheManager.get('cachedItem')
    // console.log(cacheItem);
    console.log('ok');
    return 'Hello World!';
  }
}
