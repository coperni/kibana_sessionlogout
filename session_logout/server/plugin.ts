import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { SessionLogoutPluginSetup, SessionLogoutPluginStart } from './types';
import { defineRoutes } from './routes';

export class SessionLogoutPlugin
  implements Plugin<SessionLogoutPluginSetup, SessionLogoutPluginStart> {
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('sessionLogout: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('sessionLogout: Started');
    return {};
  }

  public stop() {}
}
