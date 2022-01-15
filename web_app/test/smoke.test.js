const fetch = require('node-fetch');
const t = require('zora');

t.test('Server responds', async t => {
  const res = await fetch('http://localhost:8080/');
  t.is(res.status, 200);
});

t.test('Backend responds', async t => {
  const res = await fetch('http://localhost:8080/api');
  t.is(res.status, 200);
});
