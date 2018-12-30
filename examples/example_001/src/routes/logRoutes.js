'use strict';
module.exports = [
  {
    path: '/log_entries',
    controller: require('../controllers/logEntries.controller')
  },
  {
    path: '/codes',
    controller: require('../controllers/codes.controller')
  },
  {
    path: '/logEntryCode',
    controller: require('../controllers/logEntryCode.controller')
  }
];
