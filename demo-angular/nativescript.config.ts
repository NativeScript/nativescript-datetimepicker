import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.datetimepicker.demong',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    requireModules: {
      0: 'nativescript-datetimepicker'
    }
  },
  appPath: 'src'
} as NativeScriptConfig;
