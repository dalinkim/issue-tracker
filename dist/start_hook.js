'use strict';

// initialize the compiler with a present because this module does not load any presets by default
// This module automatically ignores libraries loaded from node_modules
require('babel-register')({
    presets: ['es2015-node4']
});

require('./server.js');
//# sourceMappingURL=start_hook.js.map