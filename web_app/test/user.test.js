const fetch = require('node-fetch');
const t = require('zora');

const baseUrl = 'http://localhost:8080/api';

t.test('/user endpoint', async t => {
  const url = baseUrl + '/user';

  const userData = {
      property: "hello",
  };
  let userId;

  await t.test('create user', async t => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    });
    t.is(res.status, 200);
    const resBody = await res.json();
    t.is(resBody.user.property, userData.property);
    userId = resBody.user._id;
  });

  await t.test('read user', async t => {
    const res = await fetch(url + "?_id=" + userId, {
      method: 'GET',
    });
    t.is(res.status, 200);
    const resBody = await res.json();
    debugger;
    t.is(resBody.property, "hello");
  });

  await t.test('update user', async t => {
    const userData = {
        property: "hello2",
    };
    const res = await fetch(url + "?_id=" + userId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    });
    t.is(res.status, 200);
  });

  await t.test('user was modified', async t => {
    const res = await fetch(url + "?_id=" + userId, {
      method: 'GET',
    });
    t.is(res.status, 200);
    t.is((await res.json()).property, "hello2");
  });

  await t.test('delete user', async t => {
    const res = await fetch(url + "?_id=" + userId, {
      method: 'DELETE',
    });
    t.is(res.status, 200);
  });

  await t.test('user was deleted', async t => {
    const res = await fetch(url + "?_id=" + userId, {
      method: 'GET',
    });
    t.is(res.status, 400);
  });
});
