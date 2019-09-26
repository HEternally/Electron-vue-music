import { app, BrowserWindow, Tray, Menu} from 'electron' // eslint-disable-line
import '../renderer/store';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow;
// let music;
// let love;
// let next;
// let prev;
// let play;
const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;
const musicIcon = process.env.NODE_ENV === 'development' ? 'static/images/icon.png' : `${global.__static}/static/images/icon.png`;// eslint-disable-line
function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: musicIcon,
    width: 1002,
    height: 670,
    minWidth: 1002,
    minHeight: 670,
    useContentSize: true,
    show: false,
    frame: false,
    skipTaskbar: true,
    disableAutoHideCursor: true,
    titleBarStyle: 'hiddenInset',
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
    },
  });

  // 加载远程URL/本地HTML文件
  mainWindow.loadURL(winURL);

  mainWindow.on('close', () => {
    // 窗口关闭
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('show', () => {
    // 窗口显示
  });
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  // music = new Tray('static/images/tray/music.png');
  // love = new Tray('static/images/tray/love.png');
  // next = new Tray('static/images/tray/next.png');
  // play = new Tray('static/images/tray/play.png');
  // prev = new Tray('static/images/tray/prev.png');
  // music.setToolTip('HMusic');
  // love.setToolTip('love music');
  // next.setToolTip('next music');
  // prev.setToolTip('prev music');
  // play.setToolTip('play music');
  // music.on('click', () => {
  //   mainWindow.show();
  // });
  // play.on('click', () => {
  //   play.setImage('static/images/tray/pause.png');
  //   play.setToolTip('pause music');
  //   // TODO 任务栏播放歌曲
  // });
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
