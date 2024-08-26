class EventListener {
  private event_map: EventMap = new Map();
  constructor() {}
  add(name: string, cb: Function = () => {}) {
    const func_list = this.event_map.get(name);
    if (!!func_list?.length) {
      func_list.push(cb);
      return;
    }
    this.event_map.set(name, [cb]);
  }
}

export const event_listener = new EventListener();
