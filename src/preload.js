// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

const WINDOW_API = {
  lockAPI: (message) => ipcRenderer.send("lockAPI", message)
}
contextBridge.exposeInMainWorld("api", WINDOW_API);