import {app, BrowserWindow} from 'electron'
import { start } from './server'

let mainWindow = null

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    frame: false
  })

  start()

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.setFullScreen(true)
})
