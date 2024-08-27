declare class EventManager {
    private event_map;
    constructor();
    add(name: string, cb?: EventListener): void;
    remove(name: string, cb?: EventListener): void;
}
export declare const event_listener: EventManager;
export {};
//# sourceMappingURL=event.d.ts.map