import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GamesDB } from '../inmemory-db/games';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      games: GamesDB.games
    };
  }
}
