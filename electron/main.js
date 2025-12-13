const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
    icon: path.join(__dirname, "pos.ico"),
  });

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();

  // Load the app
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    // In production, load the built files
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "../dist/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }

  // Handle navigation errors
  mainWindow.webContents.on("did-fail-load", () => {
    console.log("Failed to load, retrying...");
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
