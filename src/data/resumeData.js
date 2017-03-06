module.exports = {

  degree: [
    {
      school: 'University of California - Berkeley',
      degree: 'B.A. Psychology & Social Welfare',
      link: 'https://berkeley.edu',
      year: 2013,
    },
    {
      school: 'Hack Reactor',
      degree: 'Advanced Software Engineering',
      link: 'https://hackreactor.com',
      year: 2016,
    }
  ],

  experience: [
    {
      company : "Abbott Stringham & Lynch",
      role: "Admin/Developer",
      start: "12/3/2013",
      end: "03/01/2016",
      accomplishments: [
        "Saved firm ~$63,000 annually by architecting internal platform for tax accountants to enter new clients utilizing JavaScript, jQuery, HTML5 and CSS3.",
        "Ensured seamless rendering of multiple firm web pages by developing new content using HTML5 and CSS3.",
        "Automated weekly time reports by developing JavaScript system to triggers updates to CSV spreadsheets."
      ]
    }
  ],

  projects: [
    {
      name: "Noise",
      index: 0,
      desc: "Encrypted native mobile chat service for the privacy concerned to securely communicate through instant messaging",
      start: "08/01/2016",
      end:"09/01/2016",
      role: "Software Engineer",
      accomplishments: [
        "Developed native iOS chat application in Swift, creating auto-resizable message bubble cells with UICollectionViewFlowLayout and JSQmessages  to achieve iMessage UI design pattern.",
        "Reduced latency in rendering messages by ~66% by integrating  Realm.IO for local state persistence. ",
        "Enabled client-server bidirectional communication with Socket.IO on a RESTful API built with Node.js.",
        "Engineered end-to-end encrypted communication by implementing Diffie-Hellman Key-Exchange algorithm in Swift in conjunction with CryptoSwift ChaCha20 cipher to decrypt and encrypt messages.",
        "Performed statistical analysis while conforming to Differential Privacy with Google’s RAPPOR algorithm to determine the most commonly used words (trending topics)."
      ]
    },
    {
      name: "Vime",
      index: 2,
      desc: "Video messaging platform where family members can record and share their words of encouragement with loved ones",
      start: "07/01/2016",
      end:"08/01/2016",
      role: "Software Engineer",
      accomplishments: [
        "Minimized HTTP requests to Node.js server by ~75% through utilizing React-Router for front-end routing.",
        "Utilized the Webpack build tool to compile ES6 with Babel into ES5 bundle script served by an Express server.",
        "Followed Google Material Design principles by creating front-end views with MaterializeCSS and custom CSS3.",
        "Saved team ~10 hours weekly in debugging by modularizing the backend codebase with RESTful endpoints."
      ]
    },
    {
      name: "Escape",
      index: 3,
      desc: "Recommendation based travel itinerary providing tourists with a full day of activities based on personal preferences.",
      start: "06/01/2016",
      end:"07/01/2016",
      role: "Software Engineer",
      accomplishments: [
        "Constructed 5+ self-contained, reusable, and testable ReactJS components to render itineraries and events.",
        "Incorporated Mapbox, Nomad and Yelp API’s into ReactJS front-end to visually display user’s itineraries.",
        "Designed responsive UI for front-end views with HTML5, CSS3, and Bootstrap grid system for proper display across 6+ major browsers."
      ]
    },
    {
      name: "Gifstorian",
      index: 4,
      desc:" GIF recorder and searching tool where users can find and store .gif files that best capture their range of online emotions.",
      start: "06/01/2016",
      end:"07/01/2016",
      accomplishments:[
        " Built custom AngularJS directive to upload multipart form data to AWS S3 storage for persistence of GIF files.",
        "Integrated Giphy API into Node.js and Express server for gif searching, displaying animations on JavaScript and AngularJS front-end views."
      ]
    }
  ],

  skills: [
    {
      name: "ReactJS", value: 8
    },
    {
      name: "AngularJS", value: 7
    },
    {
      name: "BackboneJS", value: 6
    },
    {
      name: "jQuery", value: 6
    },
    {
      name: "Javascript", value: 9
    },
    {
      name: "Swift", value: 6
    },
    {
      name: "Socket.IO", value: 7
    },
    {
      name: "ES6", value: 8
    },
    {
      name: "NodeJS", value: 7
    },
    {
      name: "ExpressJS", value: 6
    },
    {
      name: "WebRTC", value: 6
    },
    {
      name: "CSS", value: 7
    },
    {
      name: "HTML5", value: 8
    },
    {
      name: "D3js", value: 7
    },
    {
      name: "redis", value: 5
    },
    {
      name: "postgreSQL", value: 4
    },
    {
      name: "mongoDB", value: 7
    },
    {
      name: "Jasmine", value: 6
    },
    {
      name: "Mocha", value: 8
    },
    {
      name: "Webpack", value: 6
    },
    {
      name: "Babel", value: 8
    },
    {
      name: "AWS", value: 5
    }
  ]
}
