import { get, toArray } from 'lodash';
import { ListenersList, CallFunc } from './types';
import EventList from './EventList';
import '../../index.d';

class EventEmitter<T extends Utils.Enum> {
  private listeners: ListenersList = {};

  private readonly events: EventList;

  constructor(events: T) {
    this.events = new EventList(toArray(events));
  }

  emit(event: keyof T, args?: Utils.SomeObject): void {
    window.dispatchEvent(this.defineEvent(event, args));
  }

  subscribe(eventType: keyof T, func: CallFunc): void {
    this.listeners = {
      ...this.listeners,
      [eventType]: [...get(this.listeners, eventType, []), func],
    };

    window.addEventListener(eventType as string, func);
  }

  private defineEvent(eventName: keyof T, args?: Utils.SomeObject): CustomEvent {
    const event = new CustomEvent(eventName as string, args);

    this.events.push(eventName as string);

    return event;
  }

  get eventList(): EventList {
    return this.events;
  }

  get listenersList(): ListenersList {
    return { ...this.listeners };
  }
}

export default EventEmitter;
