import { PluginInitializerContext } from '../../../src/core/server';
import { SessionLogoutPlugin } from './plugin';
import { schema, TypeOf } from '@kbn/config-schema';
import type { PluginConfigDescriptor } from 'kibana/server';

const configSchema = schema.object({
  inactivity_timeout_min: schema.number({ defaultValue: 10 }),
});

type ConfigType = TypeOf<typeof configSchema>;

export const config: PluginConfigDescriptor<ConfigType> = {
  exposeToBrowser: {
    inactivity_timeout_min: true,
  },
  schema: configSchema,
};

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new SessionLogoutPlugin(initializerContext);
}

export { SessionLogoutPluginSetup, SessionLogoutPluginStart } from './types';
