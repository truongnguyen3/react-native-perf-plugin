
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNPerformancePluginSpec.h"

@interface PerformancePlugin : NSObject <NativePerformancePluginSpec>
#else
#import <React/RCTBridgeModule.h>

@interface PerformancePlugin : NSObject <RCTBridgeModule>
#endif

@end
