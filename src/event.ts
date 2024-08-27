class EventManager {
  private event_map: EventMap = new Map();
  constructor() {}
  add(name: string, cb: EventListener = () => {}) {
    const func_list = this.event_map.get(name) || [];
    func_list.push(cb);
    this.event_map.set(name, func_list);
    window.addEventListener(name, cb);
  }
  remove(name: string, cb: EventListener = () => {}) {
    const func_list = this.event_map.get(name) || [];
    if (!!!func_list?.length) {
      return;
    }
    const len = func_list?.length || 0;
    for (let i = 0; i < len; ++i) {
      if (func_list[i] == cb) {
        window.removeEventListener(name, cb);
      }
    }
  }
}

export const event_listener = new EventManager();
