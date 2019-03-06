import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SpaceshipsDB } from '../inmemory-db/spaceships';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      spaceships: SpaceshipsDB.spaceships
    };
  }
}
