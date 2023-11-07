package com.perfplugin;

import com.facebook.react.bridge.ReactApplicationContext;

abstract class PerformancePluginSpec extends NativePerformancePluginSpec {
  PerformancePluginSpec(ReactApplicationContext context) {
    super(context);
  }
}
