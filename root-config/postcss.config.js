const buildHelpers = require('@borngroup-accelerator/born-build').helpers;

let envType = buildHelpers.getConfigValue('type', 'development'),
    isProduction = envType === 'production';

module.exports = {
    plugins: {
        autoprefixer: {},
        cssnano: isProduction ? {
            // sourcemap: true,
            mergeRules: true,
            zindex: false
        } : false
    },
};
