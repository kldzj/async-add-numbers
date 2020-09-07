const asyncAddNumbers = require('./');
const tape = require('tape');
var _test = require('tape-promise').default;
var test = _test(tape);

test('asyncAddNumbers', assert => {
	assert.plan(4);

	assert.doesNotReject(asyncAddNumbers(1, 2), 3);
	assert.doesNotReject(asyncAddNumbers(-1, 3), 2);
	assert.doesNotReject(asyncAddNumbers(-1, -1), -2);
	assert.rejects(asyncAddNumbers('a', -1));
});
