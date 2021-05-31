import { SessionLogoutPlugin } from './plugin';
import { PluginInitializerContext } from '../../../src/core/public';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin(initializerContext: PluginInitializerContext) {
  return new SessionLogoutPlugin(initializerContext);
}
export { SessionLogoutPluginSetup, SessionLogoutPluginStart } from './types';
