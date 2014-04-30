(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "day": "YYYY-MM-DD",
  "time": "HH:mm",
  "dayTime": "YYYY-MM-DD HH:mm",

  "iCalDay": "YYYYMMDD",
  "iCalTime": "HHmmss",
  "iCalDayTime": "YYYYMMDD[T]HHmmss",

  "slashDay": "M/D/YYYY",
  "shortSlashDay": "M/D",

  "shortDay": "dddd, MMM D",
  "abbrvDay": "ddd MMM D",
  "longDay": "dddd, MMMM D, YYYY",

  "weekday": "dddd",

  "unixDate": "ddd MMM DD YYYY HH:mm:ss"
}

},{}],2:[function(require,module,exports){
module.exports={
    "zones": {
        "America/Chicago": [
            "-5:50:36 - LMT 1883_10_18_12_9_24 -5:50:36",
            "-6 US C%sT 1920 -6",
            "-6 Chicago C%sT 1936_2_1_2 -6",
            "-5 - EST 1936_10_15_2 -5",
            "-6 Chicago C%sT 1942 -6",
            "-6 US C%sT 1946 -6",
            "-6 Chicago C%sT 1967 -6",
            "-6 US C%sT"
        ],
        "America/Denver": [
            "-6:59:56 - LMT 1883_10_18_12_0_4 -6:59:56",
            "-7 US M%sT 1920 -7",
            "-7 Denver M%sT 1942 -7",
            "-7 US M%sT 1946 -7",
            "-7 Denver M%sT 1967 -7",
            "-7 US M%sT"
        ],
        "America/Los_Angeles": [
            "-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58",
            "-8 US P%sT 1946 -8",
            "-8 CA P%sT 1967 -8",
            "-8 US P%sT"
        ],
        "America/New_York": [
            "-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2",
            "-5 US E%sT 1920 -5",
            "-5 NYC E%sT 1942 -5",
            "-5 US E%sT 1946 -5",
            "-5 NYC E%sT 1967 -5",
            "-5 US E%sT"
        ]
    },
    "rules": {
        "US": [
            "1918 1919 2 0 8 2 0 1 D",
            "1918 1919 9 0 8 2 0 0 S",
            "1942 1942 1 9 7 2 0 1 W",
            "1945 1945 7 14 7 23 1 1 P",
            "1945 1945 8 30 7 2 0 0 S",
            "1967 2006 9 0 8 2 0 0 S",
            "1967 1973 3 0 8 2 0 1 D",
            "1974 1974 0 6 7 2 0 1 D",
            "1975 1975 1 23 7 2 0 1 D",
            "1976 1986 3 0 8 2 0 1 D",
            "1987 2006 3 1 0 2 0 1 D",
            "2007 9999 2 8 0 2 0 1 D",
            "2007 9999 10 1 0 2 0 0 S"
        ],
        "Chicago": [
            "1920 1920 5 13 7 2 0 1 D",
            "1920 1921 9 0 8 2 0 0 S",
            "1921 1921 2 0 8 2 0 1 D",
            "1922 1966 3 0 8 2 0 1 D",
            "1922 1954 8 0 8 2 0 0 S",
            "1955 1966 9 0 8 2 0 0 S"
        ],
        "Denver": [
            "1920 1921 2 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1921 4 22 7 2 0 0 S",
            "1965 1966 3 0 8 2 0 1 D",
            "1965 1966 9 0 8 2 0 0 S"
        ],
        "CA": [
            "1948 1948 2 14 7 2 0 1 D",
            "1949 1949 0 1 7 2 0 0 S",
            "1950 1966 3 0 8 2 0 1 D",
            "1950 1961 8 0 8 2 0 0 S",
            "1962 1966 9 0 8 2 0 0 S"
        ],
        "NYC": [
            "1920 1920 2 0 8 2 0 1 D",
            "1920 1920 9 0 8 2 0 0 S",
            "1921 1966 3 0 8 2 0 1 D",
            "1921 1954 8 0 8 2 0 0 S",
            "1955 1966 9 0 8 2 0 0 S"
        ]
    },
    "links": {}
}

},{}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
var moment;

moment = typeof window !== "undefined" && window !== null ? window.moment : void 0;

if (moment == null) {
  throw new Error('geomoment expects moment to be loaded');
}

moment.tz.add(require('../data/usa.json'));

window.geomoment = require('./')(moment);

},{"../data/usa.json":2,"./":4}],4:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
var formatsJson,
  __slice = [].slice;

formatsJson = require('../data/formats.json');

module.exports = function(moment) {
  var geomoment, key, stubbedTime, tzid, val, zone, zones, _fn, _ref;
  stubbedTime = null;
  geomoment = function() {
    var args, first;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (stubbedTime != null) {
      first = args[0];
      if (moment.isMoment(first)) {

      } else if (first == null) {
        args[0] = stubbedTime.clone();
      } else if (typeof first === 'object') {
        if (!((first.y != null) || (first.year != null) || (first.years != null))) {
          first.year = stubbedTime.year();
        }
        if (!((first.M != null) || (first.month != null) || (first.months != null))) {
          first.month = stubbedTime.month();
        }
        if (!((first.d != null) || (first.day != null) || (first.days != null))) {
          first.day = stubbedTime.date();
        }
      }
    }
    return moment.apply(null, args);
  };
  for (key in moment) {
    val = moment[key];
    geomoment[key] = val;
  }
  geomoment.tz = function() {
    var args;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if ((stubbedTime != null) && (args[1] == null)) {
      return stubbedTime.clone().tz(args[0]);
    } else {
      return moment.tz.apply(null, args);
    }
  };
  _ref = moment.tz;
  for (key in _ref) {
    val = _ref[key];
    geomoment.tz[key] = val;
  }
  geomoment.formats = formatsJson;
  geomoment.day = function(day, tzid) {
    var formats;
    formats = geomoment.formats;
    return moment.tz(day, [formats.day, formats.iCalDay, formats.slashDay], tzid);
  };
  geomoment.fn.dayString = function() {
    return this.format(geomoment.formats.day);
  };
  zones = {
    eastern: 'America/New_York',
    central: 'America/Chicago',
    mountain: 'America/Denver',
    pacific: 'America/Los_Angeles'
  };
  _fn = function(zone, tzid) {
    geomoment[zone] = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      args.push(tzid);
      return geomoment.tz.apply(this, args);
    };
    return geomoment[zone].tzid = tzid;
  };
  for (zone in zones) {
    tzid = zones[zone];
    _fn(zone, tzid);
  }
  geomoment.stubTime = function(time) {
    return stubbedTime = moment(time);
  };
  geomoment.restoreTime = function() {
    return stubbedTime = null;
  };
  return geomoment;
};

},{"../data/formats.json":1}]},{},[3])