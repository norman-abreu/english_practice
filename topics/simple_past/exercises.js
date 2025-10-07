export const fills = [
  { q: "She ___ at the party last night.", a: ["was"] },
  { q: "They ___ not at school yesterday.", a: ["were"] },
  { q: "___ you tired after the trip?", a: ["Were"] },
  { q: "I ___ at home all weekend.", a: ["was"] },
  { q: "We ___ late for the meeting.", a: ["were"] },
  { q: "___ he at the concert?", a: ["Was"] },
  { q: "The weather ___ cold yesterday.", a: ["was"] },
  { q: "Where ___ you last night?", a: ["were"] },
  { q: "He ___ not happy with the result.", a: ["was"] },
  { q: "___ they in the classroom?", a: ["Were"] },
  { q: "She ___ very tired after work.", a: ["was"] },
  { q: "We ___ in London two years ago.", a: ["were"] },
  { q: "___ she your teacher last year?", a: ["Was"] },
  { q: "I ___ not at the cinema.", a: ["was"] },
  { q: "They ___ very friendly.", a: ["were"] }
];
export const qas = [
  { q: "Where were you yesterday? — I ___ at home.", a: ["was"] },
  { q: "Was he sick? — Yes, he ___.", a: ["was"] },
  { q: "Were they at the mall? — No, they ___ not.", a: ["were"] },
  { q: "What did you do? — I ___ my homework.", a: ["did"] },
  { q: "Did she call you? — Yes, she ___", a: ["did"] },
  { q: "Did they arrive late? — No, they ___ not.", a: ["did"] },
  { q: "Was it cold outside? — Yes, it ___", a: ["was"] },
  { q: "Did you like the movie? — Yes, I ___", a: ["did"] },
  { q: "Where was Tom? — He ___ at work.", a: ["was"] },
  { q: "Did he eat breakfast? — No, he ___ not.", a: ["did"] },
  { q: "Was she your friend in school? — Yes, she ___", a: ["was"] },
  { q: "Did you play football? — Yes, I ___", a: ["did"] },
  { q: "Where were they? — They ___ at the museum.", a: ["were"] },
  { q: "Did you clean your room? — No, I ___ not.", a: ["did"] },
  { q: "Were you busy last weekend? — Yes, I ___", a: ["was"] }
];
export const mcs = [
  { q: "He ___ at school yesterday.", opts: ["was", "were", "did"], a: ["was"] },
  { q: "They ___ happy with the results.", opts: ["was", "were", "did"], a: ["were"] },
  { q: "___ you at the party?", opts: ["Was", "Were", "Did"], a: ["Were"] },
  { q: "___ she call you last night?", opts: ["Was", "Did", "Were"], a: ["Did"] },
  { q: "I ___ not go to the gym.", opts: ["was", "did", "did not"], a: ["did not"] },
  { q: "What ___ he do yesterday?", opts: ["was", "did", "were"], a: ["did"] },
  { q: "___ they come to the event?", opts: ["Did", "Was", "Were"], a: ["Did"] },
  { q: "It ___ cold last night.", opts: ["was", "were", "did"], a: ["was"] },
  { q: "Where ___ you last weekend?", opts: ["was", "were", "did"], a: ["were"] },
  { q: "We ___ tired after the game.", opts: ["was", "were", "did"], a: ["were"] },
  { q: "___ she your neighbor?", opts: ["Was", "Were", "Did"], a: ["Was"] },
  { q: "He ___ not answer the phone.", opts: ["did", "was", "did not"], a: ["did not"] },
  { q: "They ___ on vacation last month.", opts: ["were", "was", "did"], a: ["were"] },
  { q: "What time ___ you arrive?", opts: ["did", "was", "were"], a: ["did"] },
  { q: "I ___ at the doctor’s office.", opts: ["was", "were", "did"], a: ["was"] }
];
export const matches = [
  { left: "I was sick yesterday.", right: "I didn’t feel well." },
  { left: "He did his homework.", right: "He finished it before dinner." },
  { left: "They were in Paris last year.", right: "They visited the Eiffel Tower." },
  { left: "Did she go to school?", right: "Yes, she did." },
  { left: "We weren’t late.", right: "We arrived on time." },
  { left: "Was it hot last weekend?", right: "No, it wasn’t." },
  { left: "Did you enjoy the party?", right: "Yes, I had fun." },
  { left: "She was my teacher.", right: "She taught me English." },
  { left: "Were they at the park?", right: "Yes, they were playing there." },
  { left: "I didn’t eat breakfast.", right: "I wasn’t hungry." },
  { left: "He wasn’t at the meeting.", right: "He was at home." },
  { left: "Did you see the movie?", right: "Yes, I did." },
  { left: "The test was easy.", right: "I answered all the questions." },
  { left: "Were you tired?", right: "Yes, I went to bed early." },
  { left: "She didn’t call me.", right: "My phone was silent." }
];
export const story = {
  title: "A Busy Weekend",
  lines: [
    { speaker: "Narrator", text: "Last weekend ___ very busy for me.", a: ["was"] },
    { speaker: "Narrator", text: "On Saturday morning, I ___ up early and had breakfast.", a: ["woke"] },
    { speaker: "Narrator", text: "Then I ___ some shopping with my sister.", a: ["did"] },
    { speaker: "Narrator", text: "The supermarket ___ very crowded.", a: ["was"] },
    { speaker: "Sister", text: "Let’s go quickly, this ___ a long line.", a: ["is"] },
    { speaker: "Narrator", text: "After shopping, we ___ to a café to rest.", a: ["went"] },
    { speaker: "Narrator", text: "The coffee ___ really good.", a: ["was"] },
    { speaker: "Narrator", text: "In the afternoon, I ___ my friend Mark.", a: ["called"] },
    { speaker: "Narrator", text: "We ___ to the park to play basketball.", a: ["went"] },
    { speaker: "Mark", text: "That ___ a fun game!", a: ["was"] },
    { speaker: "Narrator", text: "On Sunday, my parents and I ___ to my grandmother’s house.", a: ["went"] },
    { speaker: "Narrator", text: "She ___ very happy to see us.", a: ["was"] },
    { speaker: "Grandmother", text: "I ___ some cake for you!", a: ["made"] },
    { speaker: "Narrator", text: "The cake ___ delicious!", a: ["was"] },
    { speaker: "Narrator", text: "In the evening, I ___ my homework and got ready for bed.", a: ["did"] },
    { speaker: "Narrator", text: "I ___ very tired, but it ___ a great weekend.", a: ["was", "was"] }
  ]
};
