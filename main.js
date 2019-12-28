const path = require("path");
const url = require("url");
//const electron = require("electron");
const {app, BrowserWindow, ipcMain, dialog, ipcRenderer} = require("electron");
// const ipc = electron.ipcMain;
// const dialog = electron.dialog;
// 

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 700, 
    height: 500, 
    icon: __dirname+"/img/icon.png",
    resizable: true,
    vibrancy: 'dark'
  });
  // win.autoHideMenuBar;

  win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
    slashes: true
  }));

  win.webContents.openDevTools();


  ipcMain.on('open-send-dialog', function(event){
    dialog.showMessageBox('Send info to registration', 'Demo of sending info to registration');
  })


  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});


