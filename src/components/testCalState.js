const state = {
  CalOverlay: {
    date: '',
    cohort: [],
    global: [],
    user: []
  },
  displayEvent: {},
  cohortCalendar: {
    10012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcaf',
        type: 'mandatory',
        title: "Why we should all use sections and not divs.",
        body: 'lorem ipsum for life.',
        tag: [
          'qdq', 'qwdwdq', 'qwdqwdqw'
        ],
        imgUrl: 'sdsddsssadsa',
        dueDate: '2018-01-10T02:22:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "Mauro Gesteso",
        isLecture: true,
        commentID: 'cdkskhshks'
      }
    ],
    11012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcbf',
        type: 'optional',
        title: "Make Tesco pay for their sins.",
        body: 'Milk costs too much.',
        tag: [
          'tesco', 'destroy', 'milk'
        ],
        imgUrl: 'https://secure.tesco.com/account/images/tesco.svg',
        dueDate: '2018-01-11T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "Paul Pogba",
        isLecture: false,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'mandatory',
        title: "Come and learn how not to code.",
        body: 'Apparently divs are bad.',
        tag: [
          'code', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "Mitch Samuels",
        isLecture: true,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcaf',
        type: 'mandatory',
        title: "Why my fake data is the best fake data in the fakedataverse.",
        body: `"if (fakeData) return 'Yeah Detroit!'
                 else return 'noooooooo'"`,
        tag: [
          'yeah', 'detroit', 'bruh'
        ],
        imgUrl: 'sdsddsssadsa',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "Brother Barker",
        isLecture: true,
        coommentID: 'cdkskhshks'
      }
    ],
    21012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcmf',
        type: 'mandatory',
        title: "Amazon will change the world, by hiring you!!!!!",
        body: 'We are hiring.',
        tag: [
          'Amazon', 'Hire', 'Job'
        ],
        imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "Aaron Smith",
        isLecture: false,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "how to code autonomous cars",
        body: `import ai from 'artificial-intelligence
                ai.drive()
                 if(ai.doingToCrash) return this.dont()`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ],
    13012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvaaf',
        type: 'mandatory',
        title: "Lets have fun",
        body: 'After Party.',
        tag: [
          'Party', 'dream', 'relax'
        ],
        imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "Bradley Black",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ],
    31012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "LEARN A NEW LANGUAGE WALAWALAWALAWALAWALAbingbang",
        body: `yes`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'cohort',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ]
  },
  globalCalendar: {
    10012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcaf',
        type: 'mandatory',
        title: "Why we should all use sections and not divs.",
        body: 'lorem ipsum for life.',
        tag: [
          'qdq', 'qwdwdq', 'qwdqwdqw'
        ],
        imgUrl: 'sdsddsssadsa',
        dueDate: '2018-01-10T02:22:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "Mauro Gesteso",
        isLecture: true,
        commentID: 'cdkskhshks'
      }
    ],
    11012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcbf',
        type: 'optional',
        title: "Make Tesco pay for their sins.",
        body: 'Milk costs too much.',
        tag: [
          'tesco', 'destroy', 'milk'
        ],
        imgUrl: 'https://secure.tesco.com/account/images/tesco.svg',
        dueDate: '2018-01-11T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "Paul Pogba",
        isLecture: false,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'mandatory',
        title: "Come and learn how not to code.",
        body: 'Apparently divs are bad.',
        tag: [
          'code', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "Mitch Samuels",
        isLecture: false,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcaf',
        type: 'mandatory',
        title: "Why my fake data is the best fake data in the fakedataverse.",
        body: `"if (fakeData) return 'Yeah Detroit!'
                 else return 'noooooooo'"`,
        tag: [
          'yeah', 'detroit', 'bruh'
        ],
        imgUrl: 'sdsddsssadsa',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "Brother Barker",
        isLecture: true,
        coommentID: 'cdkskhshks'
      }
    ],
    21012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcmf',
        type: 'mandatory',
        title: "Amazon will change the world, by hiring you!!!!!",
        body: 'We are hiring.',
        tag: [
          'Amazon', 'Hire', 'Job'
        ],
        imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "Aaron Smith",
        isLecture: false,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "how to code autonomous cars",
        body: `import ai from 'artificial-intelligence
                ai.drive()
                 if(ai.doingToCrash) return this.dont()`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ],
    13012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvaaf',
        type: 'mandatory',
        title: "Lets have fun",
        body: 'After Party.',
        tag: [
          'Party', 'dream', 'relax'
        ],
        imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "Bradley Black",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ],
    31012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "LEARN A NEW LANGUAGE WALAWALAWALAWALAWALAbingbang",
        body: `yes`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'global',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ]
  },
  userCalendar: {
    10012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcaf',
        type: 'mandatory',
        title: "Why we should all use sections and not divs.",
        body: 'lorem ipsum for life.',
        tag: [
          'qdq', 'qwdwdq', 'qwdqwdqw'
        ],
        imgUrl: 'sdsddsssadsa',
        dueDate: '2018-01-10T02:22:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "Mauro Gesteso",
        isLecture: true,
        commentID: 'cdkskhshks'
      }
    ],
    11012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcbf',
        type: 'optional',
        title: "Make Tesco pay for their sins.",
        body: 'Milk costs too much.',
        tag: [
          'tesco', 'destroy', 'milk'
        ],
        imgUrl: 'https://secure.tesco.com/account/images/tesco.svg',
        dueDate: '2018-01-11T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "Paul Pogba",
        isLecture: false,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'mandatory',
        title: "Come and learn how not to code.",
        body: 'Apparently divs are bad.',
        tag: [
          'code', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "Mitch Samuels",
        isLecture: true,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcaf',
        type: 'mandatory',
        title: "Why my fake data is the best fake data in the fakedataverse.",
        body: `"if (fakeData) return 'Yeah Detroit!'
                 else return 'noooooooo'"`,
        tag: [
          'yeah', 'detroit', 'bruh'
        ],
        imgUrl: 'sdsddsssadsa',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "Brother Barker",
        isLecture: true,
        coommentID: 'cdkskhshks'
      }
    ],
    21012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcmf',
        type: 'mandatory',
        title: "Amazon will change the world, by hiring you!!!!!",
        body: 'We are hiring.',
        tag: [
          'Amazon', 'Hire', 'Job'
        ],
        imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "Aaron Smith",
        isLecture: false,
        commentID: 'cdkskhshks'
      }, {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "how to code autonomous cars",
        body: `import ai from 'artificial-intelligence
                ai.drive()
                 if(ai.doingToCrash) return this.dont()`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ],
    13012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvaaf',
        type: 'mandatory',
        title: "Lets have fun",
        body: 'After Party.',
        tag: [
          'Party', 'dream', 'relax'
        ],
        imgUrl: 'https://www.eachbay.com/uploads/allimg/1703/36_170324094938_1.jpg',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "Bradley Black",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ],
    31012018: [
      {
        uid: 'lgelvlscdbcvzcdvafdvvcef',
        type: 'optional',
        title: "LEARN A NEW LANGUAGE WALAWALAWALAWALAWALAbingbang",
        body: `yes`,
        tag: [
          'food', 'frog', 'spider'
        ],
        imgUrl: 'https://cdn-images-1.medium.com/max/1400/1*C1959kFqh9yIuvbOZKHiEQ.png',
        dueDate: '2018-01-30T12:32:02+00:00',
        calendarID: 'user',
        resourcesID: 'sssdsddds',
        author: "mitchin",
        isLecture: false,
        commentID: 'cdkskhshks'
      }
    ]
  }
};


export default state