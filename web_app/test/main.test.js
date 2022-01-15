const fetch = require('node-fetch');
const t = require('zora');

const url = 'http://localhost:8080/api';

t.test('expected UI flow', async t => {
  const userData = {
    userName: "andrew",
    password: "lkasdjf;lk",
    email: "asdf@gmail.com",
  };
  let userId;

  await t.test('create user', async t => {
    const res = await fetch(url + '/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    });
    t.is(res.status, 200);
    const resBody = await res.json();
    userId = resBody.user._id;
  });

  // The frontend doesn't need to do this
  let habitId_reading;
  await t.test('create global habit', async t => {
    const res = await fetch(url + '/habit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "Read 30 min per day",
        explanation: "reading is good for you",
      }),
    });
    t.is(res.status, 200);
    const resBody = await res.json();
    habitId_reading = resBody.habit._id;
  });

  await t.test('get global habits', async t => {
    const res = await fetch(url + '/habit', {
      method: 'GET',
    });
    t.is(res.status, 200);
    const resBody = await res.json();
    // console.log(resBody);
    const habitId = resBody.habits.filter(x => x._id == habitId_reading)[0];
    t.ok(habitId);
    console.log("habit id reading:" + habitId_reading)
  });

  const habitData = [
    {
      habit: { // this will be created in the habit collection
        name: "Sleep on time",
        explanation: "sleeping is good for you",
        // suggestion: ["have a good night routine"],
      },
      reminder: Date(""), // TODO: support recurring reminders
      score: 0.7,
    },
    {
      ref: habitId_reading,
      reminder: Date(),
      score: 0.7,
    },
  ];
  await t.test('post user habits', async t => {
    const res = await fetch(url + "/userHabit" + "?_id=" + userId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(habitData),
    });
    t.is(res.status, 200);
  });

  // assert(false);

  let habitId_sleeping;
  await t.test('get user habits', async t => {
    const res = await fetch(url + "/userHabit" + "?_id=" + userId, {
      method: 'GET',
    });
    t.is(res.status, 200);
    const resBody = await res.json();
    const habits = resBody.habits;
    habitId_sleeping = habits.filter(h => h._id != habitId_reading)[0]._id;
  });

  await t.test('post habit success', async t => {
    const res = await fetch(url + "/habitSuccess", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        habitId_sleeping,
        success: true,
      }),
    });
    t.is(res.status, 200);
  });

  // The frontend doesn't need to do this
  await t.test('delete user', async t => {
    const res = await fetch(url + "/user" + "?_id=" + userId, {
      method: 'DELETE',
    });
    t.is(res.status, 200);
  });

  // The frontend doesn't need to do this
  await t.test('delete habit', async t => {
    {
      const res = await fetch(url + "/habit" + "?_id=" + habitId_sleeping, {
        method: 'DELETE',
      });
      t.is(res.status, 200);
    }
    {
      const res = await fetch(url + "/habit" + "?_id=" + habitId_reading, {
        method: 'DELETE',
      });
      t.is(res.status, 200);
    }
  });
});
