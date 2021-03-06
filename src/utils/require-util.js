const pathUtil = require('path');

/**
 * Allows you to require something from `./src/utils/`
 *
 * This function is avaliable anywhere globally as `requireUtil()`
 *
 * @param {string} path The module to require in `./src/utils/`
 * @global
 * @returns {*}
 */
function requireUtil(path) {
	return require(pathUtil.resolve('src/utils', path));
}

module.exports = requireUtil;
