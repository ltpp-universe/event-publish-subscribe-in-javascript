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
  list(name: string) {
    const func_list = this.event_map.get(name) || [];
    return func_list;
  }
  listAll() {
    let res = new Map();
    for (var [event, func_list] of this.event_map) {
      res.set(event, func_list);
    }
    return res;
  }
}

export const event_listener = new EventManager();
