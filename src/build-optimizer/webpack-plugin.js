"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildOptimizerWebpackPlugin = void 0;
class BuildOptimizerWebpackPlugin {
    apply(compiler) {
        compiler.hooks.normalModuleFactory.tap('BuildOptimizerWebpackPlugin', nmf => {
            nmf.hooks.module.tap('BuildOptimizerWebpackPlugin', (module, data) => {
                const { descriptionFileData } = data.resourceResolveData;
                if (descriptionFileData) {
                    // Only TS packages should use Build Optimizer.
                    // Notes:
                    // - a TS package might not have defined typings but still use .d.ts files next to their
                    // .js files. We don't cover that case because the Angular Package Format (APF) calls for
                    // using the Typings field and Build Optimizer is geared towards APF. Maybe we could
                    // provide configuration options to the plugin to cover that case if there's demand.
                    // - a JS-only package that also happens to provides typings will also be flagged by this
                    // check. Not sure there's a good way to skip those.
                    const skipBuildOptimizer = !descriptionFileData.typings;
                    module.factoryMeta = { ...module.factoryMeta, skipBuildOptimizer };
                }
                return module;
            });
        });
    }
}
exports.BuildOptimizerWebpackPlugin = BuildOptimizerWebpackPlugin;
