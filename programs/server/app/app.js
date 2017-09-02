var require = meteorInstall({"lib":{"routes.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/routes.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
FlowRouter.route('/', {                                              // 1
  name: 'home',                                                      // 2
  action: function () {                                              // 3
    BlazeLayout.render('HomeLayout', {                               // 4
      main: 'HomeLayout'                                             // 4
    });                                                              // 4
  }                                                                  // 5
});                                                                  // 1
FlowRouter.route('/watch', {                                         // 9
  name: 'watch',                                                     // 10
  action: function (query, queryParams) {                            // 11
    BlazeLayout.render('WatchLayout', {                              // 12
      main: 'WatchLayout'                                            // 12
    });                                                              // 12
  }                                                                  // 13
});                                                                  // 9
///////////////////////////////////////////////////////////////////////

}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.watch(require("meteor/meteor"), {                             // 1
  Meteor: function (v) {                                             // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
Meteor.startup(function () {                                         // 3
  Videos = new Mongo.Collection('videos');                           // 5
  Videos.schema = new SimpleSchema({                                 // 7
    title: {                                                         // 8
      type: String                                                   // 8
    },                                                               // 8
    thumbnail: {                                                     // 9
      type: String                                                   // 9
    },                                                               // 9
    length: {                                                        // 10
      type: String,                                                  // 10
      defaultValue: '0:00'                                           // 10
    },                                                               // 10
    ownerId: {                                                       // 11
      type: String                                                   // 11
    },                                                               // 11
    views: {                                                         // 12
      type: Number,                                                  // 12
      defaultValue: 0                                                // 12
    },                                                               // 12
    game: {                                                          // 13
      type: String                                                   // 13
    },                                                               // 13
    url: {                                                           // 14
      type: String                                                   // 14
    },                                                               // 14
    pathToVideoFile: {                                               // 15
      type: String                                                   // 15
    }                                                                // 15
  });                                                                // 7
});                                                                  // 18
Meteor.methods({                                                     // 25
  'userExists': function (username) {                                // 26
    return !!Meteor.users.findOne({                                  // 27
      username: username                                             // 27
    });                                                              // 27
  }                                                                  // 28
});                                                                  // 25
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/routes.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
