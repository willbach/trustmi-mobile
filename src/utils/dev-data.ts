import Group from 'types/Group'
import Event from 'types/Event'
import Chat from 'types/Chat'
import Notification from 'types/Notification'

export default {
  groups: [
    {
      id: '1234567890',
      name: 'Software Developers of Springfield',
      pic: 'base64 image', //should be the group id saved in S3
      location: 'Springfield, MA', //should be Google Maps location
      about: `We are a group of software developers located in Springfield, MA who would like to help beginner software developers grow their skillsets.
      
      If you are looking to become a software developer or just want to see if it's something you would be interested in, feel free to come to any of our events.`,
      announcements: [
        {
          name: 'Event cancelled this Saturday',
          text: 'Due to a scheduling conflict, we will be postponing the event originally planned for this Sunday',
          timeStamp: '11/19/2018',
        }
      ],
      organizers: [],
      members: [],
      events: [
        {
          id: '1234567',
          name: 'Learn to Build a Website',
          pic: "nothing.jpg",
          text: 'Come on down to someplace to learn to build something',
          location: 'Springfield, MA',
          interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
          date: '11/21/2018',
        },
        {
          id: '1234567',
          name: 'Learn to Build a Server',
          pic: "nothing.jpg",
          text: 'Come on down to someplace to learn to build something',
          location: 'Springfield, MA',
          interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
          date: '11/22/2018',
        },
        {
          id: '1234567',
          name: 'Learn Haskell',
          pic: "nothing.jpg",
          text: 'Come on down to someplace to learn to build something',
          location: 'Springfield, MA',
          interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
          date: '11/23/2018',
        },
      ],
      videos: [],
      photos: [],
      files: [],
      recommendations: [],
      interests: [],
      filters: {}
    },
    {
      id: '5728937514',
      name: 'Build with Code - Los Angeles',
      pic: 'base64 image', //should be the group id saved in S3
      location: 'Los Angeles, CA', //should be Google Maps location
      about: `Build with Code hosts free weekly JavaScript and Software Engineering workshops, lectures and pair-programming sessions. Welcome!
      
      Learn and build with the hard parts of JavaScript every Thursday 6:30pm-8:00pm through intuitive lectures and pair-programming.
      
      The reason people who only watch programming videos don't become programmers is because they're not programming. Come join other aspiring engineers and start building!
      
      In JavaScript the Hard Parts, we cover callbacks, higher-order functions (functional programming with JavaScript), object-oriented programming with JavaScript, closure, scope and execution context.
      
      Hosted at Codesmith every week on Thursdays 6:30pm-8:00pm and taught by Codesmith CTO Will Sentance.`,
      announcements: [],
      organizers: [],
      members: [],
      events: [
        {
          id: '2345678',
          name: 'React Native and Express',
          pic: "nothing.jpg",
          text: 'Come on down to someplace to learn to build something',
          location: 'Los Angeles, CA',
          interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
          date: '11/23/2018',
        },
        {
          id: '2345678',
          name: 'JavaScript The Hard Parts: Object Oriented Programming - Online & On-Site',
          pic: "nothing.jpg",
          text: `Watch on live stream at insert link here. 
          
          This week we will cover Object-Oriented Programming in JavaScript by going under the hood of OOP and the prototype chain.`,
          location: 'Venice, CA',
          interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
          date: 'Sat Nov 24 2018 07:00:00 PM',
        }
      ],
      videos: [],
      photos: [],
      files: [],
      recommendations: [],
      interests: [],
      filters: {}
    },
    {
      id: '5739184027',
      name: 'The LA Girl Society: Womens Fitness + Social Meetup',
      pic: 'base64 image', //should be the group id saved in S3
      location: 'Los Angeles, CA', //should be Google Maps location
      about: `This group is for women in Los Angeles who want to get fit and get social together. Let's work out at different studios, go for a hike, and of course, try that new brunch spot!
      
      We will also have networking events and workshops for those who want to connect, grow, and promote their business.
      
      We have a strict no flakes rule and two-strike no-show policy!`,
      announcements: [],
      organizers: [],
      members: [],
      events: [
        {
          id: '3456789',
          name: 'FREE Pilates Class at Club Pilates Pacific Palisades + Mimosa Bar',
          pic: "nothing.jpg",
          text: `Join us for a FREE pilates class + mimosa bar to follow!
          
          Please wear workout attire + grip socks and bring a water bottle and towel.`,
          location: 'Pacific Palisades, CA',
          interests: ['Mixer', 'Womens Networking', 'Female', 'Fun Times', 'Womens Empowerment'],
          date: 'Sat Dec 15 2018 12:00:00 PM'
        },
        {
          id: '3456789',
          name: 'Roller Rink Fun',
          pic: "nothing.jpg",
          text: `Join us for a night of skating fun at the iconic Moonlight Rollerway rink with musical guest Betty Who, sponsored by Henry's Hard Sparkling Water!
          
          This is a FREE event provided by our sponsor so please make sure you only RSVP if you're going to come. Please provide your full name and email address when you RSVP yes to get on the VIP guest list.
          
          We have a strict two-strike, no-show policy!
          
          Drinks provided by Henry's Hard Sparkling Water, the 88 calorie spiked sparkling water! Pizza from Jon & Vinnys!
          
          This is a 21+ over event! See yout here!`,
          location: 'Glendale, CA',
          interests: ['Mixer', 'Womens Networking', 'Female', 'Fun Times', 'Womens Empowerment'],
          date: 'Thu Dec 20 2018 8:00:00 PM'
        },
        {
          id: '3456789',
          name: 'December Brunch Mixer',
          pic: "nothing.jpg",
          text: `Join us for brunch at Belle Vie! We'll enjoy delicious French food and wine flights while we meet and mingle.
          
          $5.94 to RSVP which is $5 credit to your bill plus Meetup fees.
          
          The owner will be putting together a set menu for us with rose wine flight and lunch for $25. This does not include tax or tip.
          
          Please note that there are no vegetarian/vegan options available for lunch! Only fish/meat options. You're welcome to join us and just have drinks as well. See you there!`,
          location: 'Los Angeles, CA',
          interests: ['Mixer', 'Womens Networking', 'Female', 'Fun Times', 'Womens Empowerment'],
          date: 'Sat Dec 22 2018 12:45:00 PM'
        }
      ],
      videos: [],
      photos: [],
      files: [],
      recommendations: [],
      interests: [],
      filters: {}
    }
  ].map(ele => new Group(ele)),
  availableGroups: [
    {
      id: '4839057127',
      name: 'West LA Young-ish Professionals',
      pic: 'base64 image', //should be the group id saved in S3
      location: 'Santa Monica, CA', //should be Google Maps location
      about: `We are young professionals in our late 20's to late 30's interested in meeting like minded people. We work hard and play hard, it's as simple as that. Whether you are new to the area, want to network, be social, or just make new friends, then this group is for you.`,
      announcements: [],
      organizers: [],
      members: [],
      events: [
        {
          name: 'Book Club: Station Eleven (354 Pages)',
          pic: "nothing.jpg",
          text: `[Cross Promote Event w/ Santa Monica Social]
    
          Hi West LA Young Professionals,
    
          We'd like to invite members to join in on the next book club w/ Santa Monica Social. We will be reading Station Eleven by Emily St. John Mandel.`,
          location: 'Santa Monica, CA',
          interests: ['Social Networking', 'Young Professionals', 'Professional Networking', '20s & 30s Social', 'West Los Angeles'],
          date: 'Sun Nov 25 2018 06:00:00 PM'
        },
        {
          name: 'Happy Hour at The Craftsman!!!',
          pic: "nothing.jpg",
          text: `Hello everybody!
          
          For our next happy hour we are partnering up with Santa Monica New Tech and heading to The Craftsman. It's located on Broadway between Ocean and 2nd street.`,
          location: 'Santa Monica, CA',
          interests: ['Social Networking', 'Young Professionals', 'Professional Networking', '20s & 30s Social', 'West Los Angeles'],
          date: 'Tues Nov 27 2018 05:30:00 PM'
        },
        {
          name: 'After work brews and networking at The Dudes Brewing Company!!!',
          pic: "nothing.jpg",
          text: `Hello everybody!
          
          For our next happy hour we are heading to the newly opened The Dudes Brewing Company. It's located on the roof of the Santa Monica Mall at the end of the third street promenade.`,
          location: 'Santa Monica, CA',
          interests: ['Social Networking', 'Young Professionals', 'Professional Networking', '20s & 30s Social', 'West Los Angeles'],
          date: 'Wed Nov 28 2018 07:00:00 PM'
        },
        {
          name: 'Mix, Meet, and Greet',
          pic: "nothing.jpg",
          text: `Hello WLAYP's!
          
          Please join us for yet another awesome Happy Hour at Wokcano Santa Monica. Figured we could take in as much of the oudoors as we can as summer starts fading on us.`,
          location: 'Santa Monica, CA',
          interests: ['Social Networking', 'Young Professionals', 'Professional Networking', '20s & 30s Social', 'West Los Angeles'],
          date: 'Fri Nov 30 2018 04:45:00 PM'
        }
      ],
      videos: [],
      photos: [],
      files: [],
      recommendations: [],
      interests: [],
      filters: {}
    },
    {
      id: '9184058471',
      name: 'Santa Monica Co-Ed Beach Flag Football (Always FREE)',
      pic: 'base64 image', //should be the group id saved in S3
      location: 'Santa Monica, CA', //should be Google Maps location
      about: `We are a diverse group of flag football fanatics. We welcome novice & experienced adult players of all ages. Our motto is safety first, then sportsmanship, fun, exercise, & competition. Come make new friends, have fun, and get great exercise at the beach. No fees or donations required! FREE water, Gatorade, and energy bars. Our rules GUARANTEE that men & women receive the ball equally. Our concise rules create a fun and competitive game.
      
      SOCIAL:
      
      Twitter: @SMbeachfootball
      Instagram: SMbeachfootball
      
      LOCATION:
      
      We are located at the corner of NAVY STREET and OCEAN FRONT WALK. You cannot miss us if you walk up NAVY STREET towards the beach. We are literally at the border of Venice Beach and Santa Monica beach at the very end of the Venice boardwalk where the street vendors stop. You can use the address below for mapping purposes.`,
      announcements: [],
      organizers: [],
      members: [],
      events: [
        {
          name: 'SATURDAY CO-ED FLAG FOOTBALL @ 11:00 AM. ALWAYS FUN & ALWAYS FREE!',
          pic: "nothing.jpg",
          text: `2 FREE "PICK-UP" GAMES PER MEETUP GUARANTEED. YOU MUST HAVE AN RSVP TO ATTEND. FIELD SETUP BEGINS AT 11 AM. PLEASE ARRIVE EARLY TO STRETCH, WARM UP, & MEET PEOPLE!!! GAMES BEGIN PROMPTLY AT 11:30AM.`,
          location: 'Santa Monica, CA',
          interests: ['Pick-up Flag Football', 'New In Town', 'Sports and Recreation', 'Wellness', 'Recreational Sports'],
          date: 'Sat Dec 1 2018 11:30:00 AM'
        },
        {
          name: '$500 IN PRIZES. 7th Annual Turkey Bowl @ 10:00 AM! GAMES START @ 10:30 SHARP!',
          pic: "nothing.jpg",
          text: `$500 IN PRIZES TO THE WINNING TEAM INCLUDING: CHAMPIONSHIP RINGS, FOOTBALL AND SOCCER JERSEYS, RECEIVER GLOVES, & OTHER PRIZES!
          
          BRING YOUR OWN TEAM OR JUST BRING YOURSELF!
          
          BE ON THE FIELD AT 10 AM! TEAMS WILL BE ORGANIZED AT 10:15 AM & GAMES WILL BEGIN AT 10:30 SHARP!`,
          location: 'Santa Monica, CA',
          interests: ['Pick-up Flag Football', 'New In Town', 'Sports and Recreation', 'Wellness', 'Recreational Sports'],
          date: 'Sun Dec 2 2018 11:30:00 AM'
        }
      ],
      videos: [],
      photos: [],
      files: [],
      recommendations: [],
      interests: [],
      filters: {}
    },
    {
      id: '1837492051',
      name: 'Santa Monica Hiking Club',
      pic: 'base64 image', //should be the group id saved in S3
      location: 'Santa Monica, CA', //should be Google Maps location
      about: `Our vision is to create a network of outdoors enthusiasts to share our adventures, to learn from, to have fun with, and to create life long friends. We hike in the Santa Monica Mountains. This is a non profit organization and we will be donating back to the community by having beach cleanups. 
      
      Our group is also committed to protecting the special places we hike. Our new conservation effort seeks to protect threatened areas in the local mountains through fun and easy actions we can take. Have fun Hiking and hope to see you soon!`,
      announcements: [],
      organizers: [],
      members: [],
      events: [
        {
          name: '1 BRIDGE, 3 CAVES, INDIAN MORTEROS - MAYBE A HORSE - SUNSET / FOOD @ REEL INN',
          pic: "nothing.jpg",
          text: `SEMI-EASY 4 MILE HIKE thru the forest, thru the woods, over a bridge and into 3 caves!! There's several Indian Morteros (those holes etched into rocks where the Indians ground up acorns to make flour )
          
          there's a fair amount of VOLUNTARY rock scrambling and a very small amount of bushwacking... a medicine circle and there's a POSSIBILITY of a very friendly horse along the way also...
          
          AFTERWARDS we're having grub at REEL INN.`,
          location: 'Topanga, CA',
          interests: ['Fitness', 'Hiking', 'Self-Improvement', 'New In Town', 'Professional Networking'],
          date: 'Sat Dec 8 2018 12:30:00 PM'
        },
        {
          name: 'Griffith Park Hike to Mt. Hollywood Starting Hike @7:30 pm',
          pic: "nothing.jpg",
          text: `This is a hike to the picnic tables on Mt. Hollywood. This is not a beginner hike but the pace is SLOW at about 2mph. Distance is 5 miles round trip. Elevation gain 1200 feet. Duration is about 2.75 hours.
          
          Meet at the staircase on the north end of the Merry-Go-Round parking lot-2. We will leave at 7:30PM. It will take a little over an hour to get to the peak of Mt. Hollywood. We will spend 15-20 minutes enjoying the fabulous views of the city, then hike back down the same way we came up. We will be back to the parking lot by 10:15PM.`,
          location: 'Los Angeles, CA',
          interests: ['Fitness', 'Hiking', 'Self-Improvement', 'New In Town', 'Professional Networking'],
          date: 'Wed Dec 12 2018 7:15:00 PM'
        },
        {
          name: 'HELP REBUILD PARAMOUNT RANCH AFTER THE FIRES!!!',
          pic: "nothing.jpg",
          text: `Western Town is - for all intents and purposes - gone. The vast majority of the structures built as sets, including two from the original Paramount Ranch built in the 20s and a building used as a residence by an on-site ranger were burned to the ground.
          
          HELP REBUILD!!! VOLUNTEER BY FILLING OUT THIS FORM!!
          
          as of this morning the signup went over quota (over 500!!!) they may increase quota in the future, but regardless, I'l let y'all know when they assign us a date!!`,
          location: 'Los Angeles, CA',
          interests: ['Fitness', 'Hiking', 'Self-Improvement', 'New In Town', 'Professional Networking'],
          date: 'Thu Dec 13 2018 11:20:00 AM'
        },
        {
          name: 'Los Angeles - Techncial Canyoneering Course (ACE-L1) + Monday Canyon!',
          pic: "nothing.jpg",
          text: `Learn Canyoneering from Americas premier Canyoneering Instruction, Events & Community organization: Uber Adventures. Tuition for this comprehensive 3-day course is only $395 and includes loaner technical gear, all instruction, a 10% discount on any purchased gear from our online store, and a Certificate of Completion!`,
          location: 'Chatsworth, CA',
          interests: ['Fitness', 'Hiking', 'Self-Improvement', 'New In Town', 'Professional Networking'],
          date: 'Fri Dec 14 2018 7:00:00 PM'
        }
      ],
      videos: [],
      photos: [],
      files: [],
      recommendations: [],
      interests: [],
      filters: {}
    },
    {
      id: '19283740518',
      name: '20 & 30 Somethings LA - Hikes, Drinks, Parties, Fun Stuff!~',
      pic: 'base64 image', //should be the group id saved in S3
      location: 'Los Angeles, CA', //should be Google Maps location
      about: `All 20's & 30's year olds! Let's all explore and enjoy everything that LA has. Good bars, food adventures, hiking, dancing, music, get-togethers, ballgames, bowling, bocce, wahtever else that attracts interest from the group. Encourage everyone to leave your house or apartment and enjoy the city!
      
      Interests?
      20/30-something social events including nights out, after work dinners, outings, sports, adventures in town, and maybe even an occasional nearby trip.
      
      Membership requirements?
      Please join the group if you are aged twenty to thirtynine. That's it.
      
      Intentions?
      Meet new people in the area and enjoy fun activities with those you already know as well.`,
      announcements: [],
      organizers: [],
      members: [],
      events: [
        {
          name: 'LAs Largest MBA Event',
          pic: "nothing.jpg",
          text: `Looking to take the next step in your career? Want to start your own business or change your career path? If any of these apply to you, it's time to consider an MBA!
          
          Researching schools and starting the MBA application process can seem intimidating, but we are here to help! The Largest MBA Fair and Expo is coming to Los Angeles this September.
          
          At this event, you'll get the opportunity to meet face-to-face with top business schools, be eligible to apply for a pool of scholarships worth $7M, get information on the MBA admissions process, and much more!`,
          location: 'Marina Del Rey, CA',
          interests: ['Beer', 'Sports Fan', 'Dining Out', 'Nightlife', '20s & 30s Social'],
          date: 'Sat Dec 22 2018 12:45:00 PM'
        },
        {
          name: 'Rocky: Lets Watch a Movie, play games, and socialize!',
          pic: "nothing.jpg",
          text: `This meetup is posted on other groups, the RSVP count is correct! We're friends that met through meetups. We hang out on Sundays, and watch a movie. Join us!
          
          Ignore the RSVP sidebar on the right, check the bottom of this meetup description to see RSVPs across all groups. The +Number (guest #) next to my name updates as people RSVP on other groups!
          
          Please make sure to ring the right buzzer (102) and push the correct button (first floor) on the elevator, otherwise you'll bother my neighbors.`,
          location: 'Los Angeles, CA',
          interests: ['Beer', 'Sports Fan', 'Dining Out', 'Nightlife', '20s & 30s Social'],
          date: 'Sun Dec 23 2018 3:00:00 PM'
        },
      ],
      videos: [],
      photos: [],
      files: [],
      recommendations: [],
      interests: [],
      filters: {}
    }
  ].map(ele => new Group(ele)),
  availableInterests: ['Skydiving', 'Arts and Crafts', 'Entrepreneurship', 'Book Club', 'Outdoor Adventure', 'Engineering', 'Cars', 'Movies and TV', 'Surfing', 'Brunching'],
  events: [
    {
      name: 'Learn to Build a Website',
      pic: "nothing.jpg",
      text: 'Come on down to someplace to learn to build something',
      location: 'Medford, MA',
      interests: ['tech', 'technology', 'coding', 'software', 'development'],
      date: '11/20/2018',
    }
  ].map(ele => new Event(ele)),
  availableEvents: [
    {
      name: 'Learn to Build a Website',
      pic: "nothing.jpg",
      text: 'Come on down to someplace to learn to build something',
      location: 'Springfield, MA',
      interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
      date: 'Wed Nov 21 2018 17:52:23',
    },
    {
      name: 'Learn to Build a Server',
      pic: "nothing.jpg",
      text: 'Come on down to someplace to learn to build something',
      location: 'Springfield, MA',
      interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
      date: 'Wed Nov 21 2018 17:52:23',
    },
    {
      name: 'Learn Haskell',
      pic: "nothing.jpg",
      text: 'Come on down to someplace to learn to build something',
      location: 'Springfield, MA',
      interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
      date: 'Wed Nov 21 2018 17:52:23',
    },
    {
      name: 'React Native and Express',
      pic: "nothing.jpg",
      text: 'Come on down to someplace to learn to build something',
      location: 'Springfield, MA',
      interests: ['Tech and Coding', 'technology', 'coding', 'software', 'development'],
      date: 'Wed Nov 21 2018 17:52:23',
    }
  ].map(ele => new Event(ele)),
  chats: [
    {
      id: '12345',
      userId: '56457698978',
      groupName: 'Santa Monica Volleyball',
      members: [
        {
          id: '56457698978',
          name: 'John Haskins',
        },
        {
          id: '3984759834335',
          name: 'Joe Donnelly',
        }
      ],
      messages: [
        {
          authorId: '56457698978',
          author: 'John',
          text: 'Hi! Welcome to our new app',
          timeStamp: new Date(),
        },
        {
          authorId: '398475983475',
          author: 'Joe',
          text: 'Thanks! Great to be here',
          timeStamp: new Date(),
        }
      ]
    },
    {
      id: '12345',
      userId: '56457698978',
      groupName: 'Santa Monica Haskell',
      members: [
        {
          id: '56457698978',
          name: 'Joanne Dawkins',
        },
        {
          id: '124075334212',
          name: 'Robert Garoffaruffalo',
        }
      ],
      messages: [
        {
          authorId: '56457698978',
          author: 'Joanne',
          text: 'Hi! Welcome to our new app',
          timeStamp: new Date(),
        },
        {
          authorId: '124075334212',
          author: 'Robert',
          text: 'Thanks! Great to be here',
          timeStamp: new Date(),
        }
      ]
    }
  ].map(ele => new Chat(ele)),
  notifications: [
    {
      id: '462567254747',
      groupId: '42224309450864309',
      groupName: 'Santa Monica Volleyball',
      title: 'Games moving to Saturdays',
      text: 'Something something',
      timeStamp: new Date(),
    },
    {
      id: '9705567254747',
      groupId: '945086576509',
      groupName: 'Santa Monica Haskell',
      title: 'HTTP with Haskell',
      text: 'An event for those who want to use Haskell in production',
      timeStamp: new Date(),
    }
  ].map(ele => new Notification(ele))
}
