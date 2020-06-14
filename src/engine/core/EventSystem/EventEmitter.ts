import _ from 'lodash';
import { ListenersList, CallFunc } from './types';
import EventList from './EventList';

/**
 * entity for management of events
 */
class EventEmitter<T extends Utils.Enum> {
  private listeners: ListenersList = {};

  private readonly events: EventList;

  constructor(events: Array<Utils.Keys<T>>) {
    this.events = new EventList(events as string[]);
  }

  /**
   * emit event
   * @param eventType event type
   * @param args params for call func
   */
  emit(eventType: keyof T, args?: Utils.SomeObject): void {
    window.dispatchEvent(this.defineEvent(eventType, args));
  }

  /**
   * fun for subscribe to event
   * @param eventType event type
   * @param func call func
   */
  subscribe(eventType: keyof T, func: CallFunc): void {
    this.listeners = {
      ...this.listeners,
      [eventType]: [..._.get(this.listeners, eventType, []), func],
    };

    window.addEventListener(eventType as string, func);
  }

  /**
   * create new event
   * @param eventName name of new event
   * @param args params of new event
   */
  private defineEvent(eventName: keyof T, args?: Utils.SomeObject): CustomEvent {
    const event = new CustomEvent(eventName as string, args);

    this.events.push(eventName as string);

    return event;
  }

  /**
   * get event list
   */
  get eventList(): EventList {
    return this.events;
  }

  /**
   * get listeners list
   */
  get listenersList(): ListenersList {
    return { ...this.listeners };
  }
}

export default EventEmitter;
