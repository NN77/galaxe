export class Booking {
  _id: string;
  spaceshipId: string;
  planet: {
    pick_up: string,
    drop_off: string
  };
  rentalStart: string;
  rentalEnd: string;
  extras: string[];

  constructor(input: any = {}) {
    this._id = input._id;
    this.spaceshipId = input.spaceshipId;
    this.planet = input.planet;
    this.rentalStart = input.rentalStart;
    this.rentalEnd = input.rentalEnd;
    this.extras = input.extras;
  }
}
