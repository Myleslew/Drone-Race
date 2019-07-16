const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600, 
        webPreferences: { nodeIntegration: true }
        });

    mainWindow.loadURL('http://localhost:3000');
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        app.quit()
    })
    const mainMenu = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(mainMenu)
}

app.on('ready', createWindow);

menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit()
                }
            }
        ]
        
    }
]