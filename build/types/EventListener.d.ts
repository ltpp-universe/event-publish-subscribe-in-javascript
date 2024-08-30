type EventMap = Map<string, Array<EventListener>>;
declare class EventManager {
    private event_map;
    constructor();
    add(name: string, cb?: EventListener): void;
    remove(name: string, cb?: EventListener): void;
    list(name: string): EventListener[];
    listAll(): Map<string, EventListener[]>;
}
//# sourceMappingURL=EventListener.d.ts.map