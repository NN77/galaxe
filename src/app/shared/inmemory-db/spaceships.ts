export class SpaceshipsDB {
    public static spaceships = [
      {
        '_id': '5a9ae2106518248b68251fdf',
        'name': 'Cruiser',
        'subtitle': 'cruiser warship',
        'description': 'In the Age of Sail “cruiser” was a term used to describe ships which underwent “cruising missions;” that is independent scouting, raiding, and commerce protection missions.  These “cruiser warships” were normally frigates and sloops because there simply wasn’t anything else available at the time.  By the mid 1800s ships began being constructed that were specifically designed for this sort of work, and as such were called “cruisers”.  They could be smaller, like a frigate, or larger, but it was not until the 20th Century that they were consistently scaled to be larger than a destroyer but smaller than a battleship.',
        'category': 'standard',
        'tags': [
          'small',
          'compact',
          'economy',
          'automatic'
        ],
        'price': {
          'sale': 15,
          'previous': 25
        },
        'features': [
          'automatic gearbox',
          '4 luggage',
          '5 seats',
          'A/C yes'
        ],
        'photo': './assets/images/spaceships/cruiser-1.jpg',
        'gallery': [
          './assets/images/spaceships/cruiser-1.jpg',
          './assets/images/spaceships/cruiser-2.jpg'
        ],
        'badge': {
          'text': '20% off',
          'color': 'info'
        }
      }
    ];
}
