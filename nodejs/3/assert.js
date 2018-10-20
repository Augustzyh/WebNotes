const assert = require('assert')
assert(true,'你前面不为true吖')
assert.equal('1',1,'aaa')   //notEqual  ==  !=
assert.deepEqual({a:2},{a:2},'报错')  //notDeepEqual   == !=
//strictEqual ===