import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface SessionLogoutPluginSetup {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SessionLogoutPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}

export interface ClientConfigType {
  inactivity_timeout_min: number;
}
