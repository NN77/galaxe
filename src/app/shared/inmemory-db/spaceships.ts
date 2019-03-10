export class SpaceshipsDB {
  public static spaceships = [
    {
      '_id': 'cd258dde-4764-4fd8-9db9-c426af2fff97',
      'name': 'Cruiser',
      'subtitle': 'cruiser warship',
      'description': 'In the Age of Sail “cruiser” was a term used to describe ships which underwent “cruising missions;” that is independent scouting, raiding, and commerce protection missions.  These “cruiser warships” were normally frigates and sloops because there simply wasn’t anything else available at the time.  By the mid 1800s ships began being constructed that were specifically designed for this sort of work, and as such were called “cruisers”.  They could be smaller, like a frigate, or larger, but it was not until the 20th Century that they were consistently scaled to be larger than a destroyer but smaller than a battleship.',
      'category': {
        economy: true,
        compact: false,
        premium: false,
        gxefast: true
      },
      'transmission': {
        automatic: true,
        manual: false
      },
      'ac': true,
      'fuel': {
        petrol: true,
        diesel: false
      },
      'currentLocalization': 'Earth',
      'tags': [
        'petrol',
        'small',
        'fast',
        'compact',
        'economy',
        'automatic',
        'gxefast'
      ],
      'price': {
        'sale': 15,
        'previous': 25
      },
      'features': [
        {icon: 'Gear', text: 'automatic gearbox'},
        {icon: 'Suitcase', text: '4 luggage'},
        {icon: 'Male', text: '5 seats'},
        {icon: 'Chrome', text: 'Air Conditioning'}
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
      '_id': '0742cbf6-0c93-4e47-9f1f-ebb0ac011c3c',
      'name': 'Destroyer',
      'subtitle': 'faster and more maneuverable than larger ships',
      'description': 'Destroyers are comparatively modern ships.&nbsp; Historically, they were designed after the emergence of&nbsp;torpedo boats (quick, frigate-like ships which employed newly invented self-propelled torpedoes as their main arms) in the late 1800s.&nbsp; Torpedo boats were <strong>faster and more maneuverable than larger ships</strong>, able to bear down on a battlecruiser&nbsp;and take it out with its torpedoes.&nbsp; Destroyers were originally designed as, and named, <em>torpedo boat destroyers,</em> but at some point became referred to simply as <em>destroyers</em> when their roles expanded.&nbsp; They went through many iterations, but were essentially smaller cruisers designed with the sole purpose of <strong>hunting down and <em>destroying</em> torpedo boats</strong>, and <strong>had much more powerful weaponry&nbsp;as well as&nbsp;torpedoes</strong> to fulfill this purpose.&nbsp; As such, they were employed as <strong>escorts</strong> for larger, slower warships (to protect those warships from torpedo boats).&nbsp; They were designed to have the <strong>long&nbsp;range and speed&nbsp;to keep up with their fleet</strong>, and over time&nbsp;this fact plus their&nbsp;multi-purpose capabilities meant that destroyers began seeing more use as&nbsp;<strong>advanced scouts</strong> for a fleet as well as <strong>direct fleet combatants</strong>,<strong> anti-submariners</strong>, and <strong>anti-submarine patrol</strong>.&nbsp; <strong>Destroyers&nbsp;operated in destroyer divisions or units composed of multiple destroyers</strong> in order to carry out these tasks.&nbsp; By WWII destroyers began filling in a niche as (what I’ll very simply call) <strong>anti-everything vessels</strong>, extremely powerful <strong>high-value targets </strong>due to<strong> the number of guns they would field</strong>.&nbsp; In fact, this pushed several countries to develop smaller corvettes and frigates as anti-submariners in order to take some of the heat off of destroyers.',
      'category': {
        economy: true,
        compact: false,
        premium: false,
        gxefast: false
      },
      'transmission': {
        automatic: false,
        manual: true
      },
      'ac': true,
      'fuel': {
        petrol: true,
        diesel: false
      },
      'currentLocalization': 'Venus',
      'tags': [
        'petrol',
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
        {icon: 'Gear', text: 'manual gearbox'},
        {icon: 'Suitcase', text: '3 luggage'},
        {icon: 'Male', text: '5 seats'},
        {icon: 'Chrome', text: 'Air Conditioning'}
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
    },
    {
      '_id': '24573936-ad0a-44e0-98b4-c38665f67523',
      'name': 'Corvette',
      'subtitle': 'the smallest type of rated warship',
      'description': 'The word “corvette” comes from the Dutch word corf, which means “small ship,” and indeed corvettes are historically the smallest type of rated warship (a rating system used by the British Royal Navy in the sailing age, basically referring to the amount of men/guns on the vessel and its relative size; corvettes were of the sixth and smallest rate).  In complete honesty I have not found much information on what role corvettes tended to employ; or at least nothing extremely concrete.  By all rights, early corvettes are essentially just smaller, less effective frigates; they were more lightly armored and armed than frigates, while not being as quick or maneuverable.',
      'category': {
        economy: true,
        compact: false,
        premium: false,
        gxefast: true
      },
      'transmission': {
        automatic: true,
        manual: false
      },
      'ac': false,
      'fuel': {
        petrol: true,
        diesel: false
      },
      'currentLocalization': 'Neptune',
      'tags': [
        'petrol',
        'small',
        'fast',
        'compact',
        'economy',
        'automatic'
      ],
      'price': {
        'sale': 17,
        'previous': 28
      },
      'features': [
        {icon: 'Gear', text: 'automatic gearbox'},
        {icon: 'Suitcase', text: '2 luggage'},
        {icon: 'Male', text: '2 seats'}
      ],
      'photo': './assets/images/spaceships/corvette-1.jpg',
      'gallery': [
        './assets/images/spaceships/corvette-1.jpg',
        './assets/images/spaceships/corvette-2.jpg'
      ],
      'badge': {
        'text': '5% off',
        'color': 'danger'
      }
    },
    {
      '_id': 'a4a001c9-7366-47c5-9794-fbc487c68e20',
      'name': 'Frigate',
      'subtitle': 'quick and maneuverable',
      'description': 'They are still known as frigates because they are lightly armed with only one deck of guns. Modern frigates are generally used as escorts for other warships and convoys.  As I mentioned earlier, frigates and corvettes really are very similar in their designs and roles; frigates just tend to be larger (and thus more expensive to build) and had more firepower, so they could engage in direct combat more effectively.',
      'category': {
        economy: true,
        compact: false,
        premium: true,
        gxefast: false
      },
      'transmission': {
        automatic: true,
        manual: false
      },
      'ac': false,
      'fuel': {
        petrol: false,
        diesel: true
      },
      'currentLocalization': 'Mars',
      'tags': [
        'diesel',
        'premium',
        'fast',
        'automatic'
      ],
      'price': {
        'sale': 39,
        'previous': 50
      },
      'features': [
        {icon: 'Gear', text: 'manual gearbox'},
        {icon: 'Suitcase', text: '3 luggage'},
        {icon: 'Male', text: '2 seats'}
      ],
      'photo': './assets/images/spaceships/frigate-1.jpg',
      'gallery': [
        './assets/images/spaceships/frigate-1.jpg',
        './assets/images/spaceships/frigate-2.jpg'
      ],
      'badge': {
        'text': '10% off',
        'color': 'danger'
      }
    },
    {
      '_id': 'c5121601-0d7a-48a5-8557-65d3f6e1c6ea',
      'name': 'Battlecruiser',
      'subtitle': 'considered capital ships',
      'description': 'They are similar to battleships, having a similar armament and size, but were generally faster and not as heavily armored by comparison.  Originally fielded by the UK in the early 20th Century, battlecruisers were designed to combat and destroyer slower, older armored cruisers through heavy gunfire.  As time went on (around WWI) they began seeing use as general-purpose ships alongside battleships by all manner of countries.  Unfortunately, battlecruisers were generally inferior to battleships, and in the Battle of Jutland this was perfectly exemplified as both navies lost battlecruisers but no battleships; the light armor of the battlecruisers made them easier targets for heavy guns.',
      'category': {
        economy: false,
        compact: false,
        premium: true,
        gxefast: false
      },
      'transmission': {
        automatic: true,
        manual: false
      },
      'ac': true,
      'fuel': {
        petrol: true,
        diesel: false
      },
      'currentLocalization': 'Mars',
      'tags': [
        'big',
        'slow',
        'automatic'
      ],
      'price': {
        'sale': 39,
        'previous': 50
      },
      'features': [
        {icon: 'Gear', text: 'automatic gearbox'},
        {icon: 'Suitcase', text: '6 luggage'},
        {icon: 'Male', text: '9 seats'},
        {icon: 'Chrome', text: 'Air Conditioning'}
      ],
      'photo': './assets/images/spaceships/battlecruiser-1.jpg',
      'gallery': [
        './assets/images/spaceships/battlecruiser-1.jpg',
        './assets/images/spaceships/battlecruiser-2.jpg'
      ],
      'badge': {
        'text': '7% off',
        'color': 'success'
      }
    },
    {
      '_id': 'BnTzJ',
      'name': 'Carrier',
      'subtitle': 'considered capital ships',
      'description': 'Aircraft carriers, like destroyers, are very modern classifications.  They are the one vessel in today’s navies that almost anyone can pick out at a glance without fear of mistaking them for something else.  This is due to their extremely obvious design; a very large, flat deck suitable for landing and deploying aircraft.  Put as simply as possible, carriers carry aircraft (whether plane or helicopter depends on the ship).  Historically, the concept of utilizing seagoing vessels for airborne operations was considered as far back as the early 1800s (though with balloons rather than planes).',
      'category': {
        economy: false,
        compact: false,
        premium: true,
        gxefast: true
      },
      'transmission': {
        automatic: false,
        manual: true
      },
      'ac': true,
      'fuel': {
        petrol: false,
        diesel: true
      },
      'currentLocalization': 'Earth',
      'tags': [
        'diesel',
        'premium',
        'big',
        'slow',
        'manual'
      ],
      'price': {
        'sale': 39,
        'previous': 50
      },
      'features': [
        {icon: 'Gear', text: 'manual gearbox'},
        {icon: 'Suitcase', text: '7 luggage'},
        {icon: 'Male', text: '10 seats'},
        {icon: 'Chrome', text: 'Air Conditioning'}
      ],
      'photo': './assets/images/spaceships/carrier-1.jpg',
      'gallery': [
        './assets/images/spaceships/carrier-1.jpg',
        './assets/images/spaceships/carrier-2.jpg'
      ],
      'badge': {
        'text': '15% off',
        'color': 'warning'
      }
    }
  ];
}
