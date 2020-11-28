import {AppStateStore} from "./appStateStore";

class RootStore {
  appStateStore: AppStateStore | undefined
  constructor() {
    this.init();
  }

  init() {
    this.appStateStore = new AppStateStore()
  }
}

export default new RootStore()
