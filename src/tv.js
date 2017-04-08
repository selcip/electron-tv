'use strict';

var _electron = require('electron');

var _server = require('./server');

var mainWindow = null;

_electron.app.on('window-all-closed', function () {
  _electron.app.quit();
});

_electron.app.on('ready', function () {
  mainWindow = new _electron.BrowserWindow({
    width: 1366,
    height: 768,
    frame: false
  });

  (0, _server.start)();

  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.setFullScreen(true);
});
