import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SpaceshipsDB } from '../inmemory-db/spaceships';
import { BookingDB } from '../inmemory-db/booking';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      spaceships: SpaceshipsDB.spaceships,
      booking: BookingDB.booking
    };
  }
}
