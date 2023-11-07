import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-perf-plugin' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const PerformancePluginModule = isTurboModuleEnabled
  ? require('./NativePerformancePlugin').default
  : NativeModules.PerformancePlugin;

const PerformancePlugin = PerformancePluginModule
  ? PerformancePluginModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return PerformancePlugin.multiply(a, b);
}
