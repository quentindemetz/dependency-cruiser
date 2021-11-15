const { shouldDeriveMetrics } = require("./utl");

module.exports = function deriveModuleMetrics(pModules, pOptions) {
  if (shouldDeriveMetrics(pOptions)) {
    return pModules.map((pModule) => ({
      ...pModule,
      instability:
        pModule.dependencies.length /
          (pModule.dependents.length + pModule.dependencies.length) || 0,
    }));
  }
  return pModules;
};