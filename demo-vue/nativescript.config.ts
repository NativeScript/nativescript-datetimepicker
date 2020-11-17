import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.datetimepicker.demovue',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    requireModules: {
      0: 'nativescript-datetimepicker'
    }
  },
  appPath: 'app'
} as NativeScriptConfig;
