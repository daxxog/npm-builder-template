/* {{Name}} / test / basic.js
 * basic test
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var vows = require('vows'),
    assert = require('assert'),
    {{Name}} = require('../{{name}}.min.js');

vows.describe('basic').addBatch({
    'when creating a new {{Name}}': {
        topic: function() {
            return new {{Name}}();
        },
        'we get no errors thrown': function(topic) {
            assert.doesNotThrow(topic);
        },
    }
}).export(module);