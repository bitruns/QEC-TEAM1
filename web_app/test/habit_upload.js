const fetch = require("node-fetch");
const t = require("zora");

/**
 * This file is a temporary measure used to upload some of the habit explanations. The future goal is to have
 * this process automated via web scraping.
 */

const url = "http://localhost:8080/api";

const explanations = [
  "Inability to get a good night sleep which can be caused by stress among other sources",
  "A sign that your not eating enough can be exhaustion or even getting sick fairly often",
  "A healthy diet improves your life expectancy, immune system, and mood",
  "Exercise improves your immune system and overall health",
  "Minimal or moderate alcohol intake helps to maintain your brain health. It also reduces your risk of cancer",
  "Achieving productivity can make you more successful, and happier",
];
const habits = [
  "Insomnia",
  "Not eating enough",
  "Healthy diet",
  "Exercising at least 30 minutes per day",
  "Moderate alcohol intake",
  "Productive workday",
];
const sources = [
  "https://www.helpguide.org/articles/sleep/sleep-disorders-and-problems.htm#:~:text=Insomnia,such%20as%20anxiety%20and%20depression",
  "https://www.medicalnewstoday.com/articles/322157 ",
  "https://www.health.harvard.edu/blog/healthy-lifestyle-5-keys-to-a-longer-life-2018070514186",
  "https://www.health.harvard.edu/blog/healthy-lifestyle-5-keys-to-a-longer-life-2018070514186",
  "https://www.health.harvard.edu/blog/this-is-your-brain-on-alcohol-2017071412000",
  "https://www.activecampaign.com/blog/habits-of-highly-productive-people",
];

t.test("expected UI flow", async (t) => {
  let habitId_reading;

  for (let i = 0; i < sources.length; i++) {
    await t.test("create global habit", async (t) => {
      const res = await fetch(url + "/habit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: habits[i],
          explanation: explanations[i],
          source: sources[i],
        }),
      });

      t.is(res.status, 200);
      const resBody = await res.json();
      habitId_reading = resBody.habit._id;
    });
  }
});
