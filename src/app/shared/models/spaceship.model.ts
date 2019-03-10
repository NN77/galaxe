export class Spaceship {
  _id: number;
  name: string;
  subtitle: string;
  description: string;
  category: {
    economy: boolean,
    compact: boolean,
    premium: boolean,
    gxefast: boolean
  };
  transmission: {
    automatic: boolean,
    manual: boolean
  };
  ac: boolean;
  fuel: {
    petrol: boolean,
    diesel: boolean
  };
  currentLocalization: string;
  tags: string[];
  price: {
    sale: number,
    previous: number
  };
  features: {
    icon: string,
    text: string
  };
  photo: string;
  gallery: string[];
  badge: {
    text: string,
    color: string
  };

  constructor(input: any = {}) {
    this._id = input._id || '';
    this.name = input.name || '';
    this.subtitle = input.subtitle || '';
    this.description = input.description || '';
    this.category = input.category || {};
    this.transmission = input.transmission || {};
    this.ac = input.ac || null;
    this.fuel = input.fuel || {};
    this.currentLocalization = input.currentLocalization || '';
    this.tags = input.tags || [];
    this.features = input.features || [];
    this.price = input.price || {};
    this.photo = input.photo || '';
    this.gallery = input.gallery || [];
    this.badge = input.badge || {};
  }
}
