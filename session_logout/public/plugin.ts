import { CoreSetup, CoreStart, Plugin } from '../../../src/core/public';
import { SessionLogoutPluginSetup, SessionLogoutPluginStart, ClientConfigType } from './types';

export class SessionLogoutPlugin
  implements Plugin<SessionLogoutPluginSetup, SessionLogoutPluginStart> {
  // @ts-ignore : initializerContext not used
  constructor(private readonly initializerContext: PluginInitializerContext) {}
  public setup(core: CoreSetup): SessionLogoutPluginSetup {
    const config = this.initializerContext.config.get<ClientConfigType>();

    $(function () {
      let lastActiveTime = new Date().getTime(); // milliseconds
      const MILLISEC_TO_MIN = (1 / 1000) * (1 / 60);
      $(document).on('mousemove keypress click', function () {
        lastActiveTime = new Date().getTime();
      });
      function sessionTimeout() {
        const thisTime = new Date().getTime();
        if (
          !window.location.pathname.includes('login') &&
          (thisTime - lastActiveTime) * MILLISEC_TO_MIN >= config.inactivity_timeout_min
        ) {
          window.location.href = '/app/login?nextUrl=%2Fapp%2Fhome';
        }
      }
      setInterval(function () {
        sessionTimeout();
      }, 1000);
    });

    // Return methods that should be available to other plugins
    return {};
  }

  public start(core: CoreStart): SessionLogoutPluginStart {
    return {};
  }

  public stop() {}
}
