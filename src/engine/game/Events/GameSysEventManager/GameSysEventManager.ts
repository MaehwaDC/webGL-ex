import { GameSysEvents } from './types';

import { EventEmitter } from '../../../modules/EventSystem';

class GameSysEventManager extends EventEmitter<typeof GameSysEvents> {}

export default new GameSysEventManager(GameSysEvents);
