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
          'fast',
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
      },
      {
        '_id': '3gf94y5hi8248b68251fdf',
        'name': 'Destroyer',
        'subtitle': 'faster and more maneuverable than larger ships',
        'description': 'Destroyers are comparatively modern ships.&nbsp; Historically, they were designed after the emergence of&nbsp;torpedo boats (quick, frigate-like ships which employed newly invented self-propelled torpedoes as their main arms) in the late 1800s.&nbsp; Torpedo boats were <strong>faster and more maneuverable than larger ships</strong>, able to bear down on a battlecruiser&nbsp;and take it out with its torpedoes.&nbsp; Destroyers were originally designed as, and named, <em>torpedo boat destroyers,</em> but at some point became referred to simply as <em>destroyers</em> when their roles expanded.&nbsp; They went through many iterations, but were essentially smaller cruisers designed with the sole purpose of <strong>hunting down and <em>destroying</em> torpedo boats</strong>, and <strong>had much more powerful weaponry&nbsp;as well as&nbsp;torpedoes</strong> to fulfill this purpose.&nbsp; As such, they were employed as <strong>escorts</strong> for larger, slower warships (to protect those warships from torpedo boats).&nbsp; They were designed to have the <strong>long&nbsp;range and speed&nbsp;to keep up with their fleet</strong>, and over time&nbsp;this fact plus their&nbsp;multi-purpose capabilities meant that destroyers began seeing more use as&nbsp;<strong>advanced scouts</strong> for a fleet as well as <strong>direct fleet combatants</strong>,<strong> anti-submariners</strong>, and <strong>anti-submarine patrol</strong>.&nbsp; <strong>Destroyers&nbsp;operated in destroyer divisions or units composed of multiple destroyers</strong> in order to carry out these tasks.&nbsp; By WWII destroyers began filling in a niche as (what I’ll very simply call) <strong>anti-everything vessels</strong>, extremely powerful <strong>high-value targets </strong>due to<strong> the number of guns they would field</strong>.&nbsp; In fact, this pushed several countries to develop smaller corvettes and frigates as anti-submariners in order to take some of the heat off of destroyers.',
        'category': 'standard',
        'tags': [
          'small',
          'fast',
          'compact',
          'economy',
          'manual'
        ],
        'price': {
          'sale': 17,
          'previous': 28
        },
        'features': [
          'manual gearbox',
          '3 luggage',
          '5 seats',
          'A/C yes'
        ],
        'photo': './assets/images/spaceships/destroyer-1.jpg',
        'gallery': [
          './assets/images/spaceships/destroyer-1.jpg',
          './assets/images/spaceships/destroyer-2.jpg'
        ],
        'badge': {
          'text': '15% off',
          'color': 'warning'
        }
      }
    ];
}
