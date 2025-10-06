// 1️⃣ FILL-IN-THE-BLANK EXERCISES
export const fills = [
  { q: "I ___ in a bank. (verb: work)", a: ["work"] },
  { q: "She ___ in a hospital. (verb: work)", a: ["works"] },
  { q: "They ___ English at school. (verb: study)", a: ["study"] },
  { q: "He ___ French at university. (verb: study)", a: ["studies"] },
  { q: "I ___ in Bogotá. (verb: live)", a: ["live"] },
  { q: "My brother ___ in Mexico City. (verb: live)", a: ["lives"] },
  { q: "We ___ to work by bus. (verb: go)", a: ["go"] },
  { q: "She ___ to work by car. (verb: go)", a: ["goes"] },
  { q: "I ___ a job in a restaurant. (verb: have)", a: ["have"] },
  { q: "He ___ a job at a school. (verb: have)", a: ["has"] },
  { q: "You ___ English classes on Mondays. (verb: take)", a: ["take"] },
  { q: "Maria ___ dance classes. (verb: take)", a: ["takes"] },
  { q: "Where ___ you live?", a: ["do"] },
  { q: "What time ___ she go to work?", a: ["does"] },
  { q: "I ___ work on Sundays. (negative form)", a: ["don’t", "do not"] }
];

// 2️⃣ QUESTIONS AND ANSWERS (STUDENTS COMPLETE THE BLANKS IN THE ANSWERS)
export const qas = [
  { q: "Do you work in an office? — Yes, I ___.", a: ["do"] },
  { q: "Does he work on weekends? — No, he ___.", a: ["doesn’t", "does not"] },
  { q: "Do they live near here? — No, they ___ in the city center.", a: ["don’t", "do not"] },
  { q: "Does she study English? — Yes, she ___.", a: ["does"] },
  { q: "Where do you work? — I ___ in a hotel.", a: ["work"] },
  { q: "Does your father go to work by car? — No, he ___ by bus.", a: ["goes"] },
  { q: "Do you have a job? — No, I ___ a student.", a: ["am"] },
  { q: "Does Maria take classes on Fridays? — Yes, she ___ classes at 10 a.m.", a: ["takes"] },
  { q: "Do we go to work together? — Yes, we ___.", a: ["do"] },
  { q: "Does he have a job? — No, he ___ at the moment.", a: ["doesn’t", "does not"] },
  { q: "Where does she study? — She ___ at a language school.", a: ["studies"] },
  { q: "Do you live far from here? — No, I ___ nearby.", a: ["live"] },
  { q: "Does Daniel take English classes? — Yes, he ___ every Monday.", a: ["does"] },
  { q: "Do they go to work early? — Yes, they ___ at 7 a.m.", a: ["go"] },
  { q: "Does your sister work in a shop? — No, she ___ in a hospital.", a: ["works"] }
];

// 3️⃣ MULTIPLE CHOICE EXERCISES
export const mcs = [
  { q: "I ___ English every day.", opts: ["study", "studies", "studied"], a: ["study"] },
  { q: "She ___ in a big company.", opts: ["work", "works", "working"], a: ["works"] },
  { q: "They ___ to work by train.", opts: ["go", "goes", "going"], a: ["go"] },
  { q: "He ___ in Bogotá.", opts: ["live", "lives", "living"], a: ["lives"] },
  { q: "We ___ classes in the morning.", opts: ["take", "takes", "taking"], a: ["take"] },
  { q: "My brother ___ a job at a school.", opts: ["have", "has", "having"], a: ["has"] },
  { q: "Do you ___ in an office?", opts: ["work", "works", "working"], a: ["work"] },
  { q: "Does she ___ Spanish?", opts: ["study", "studies", "studied"], a: ["study"] },
  { q: "I ___ go to work on Sundays.", opts: ["don’t", "doesn’t", "not"], a: ["don’t", "do not"] },
  { q: "He ___ go to work late.", opts: ["doesn’t", "don’t", "isn’t"], a: ["doesn’t", "does not"] },
  { q: "___ you have a job?", opts: ["Do", "Does", "Are"], a: ["Do"] },
  { q: "___ she live in Paris?", opts: ["Do", "Does", "Is"], a: ["Does"] },
  { q: "We ___ in a small town.", opts: ["live", "lives", "are live"], a: ["live"] },
  { q: "She ___ classes every week.", opts: ["take", "takes", "taking"], a: ["takes"] },
  { q: "He ___ English every morning.", opts: ["study", "studies", "studying"], a: ["studies"] }
];

// 4️⃣ MATCHING EXERCISES
export const matches = [
  { left: "Do you work in an office?", right: "Yes, I do." },
  { left: "Does she study English?", right: "Yes, she does." },
  { left: "Where do you live?", right: "I live in Bogotá." },
  { left: "Does he go to work by bus?", right: "No, he goes by car." },
  { left: "Do they have jobs?", right: "Yes, they do." },
  { left: "Does Maria live near here?", right: "No, she lives far away." },
  { left: "Do you take English classes?", right: "Yes, I take classes on Mondays." },
  { left: "Does your father work on weekends?", right: "No, he doesn’t." },
  { left: "Do we go to work together?", right: "Yes, we do." },
  { left: "Does he study at university?", right: "Yes, he studies law." },
  { left: "Do you live alone?", right: "No, I live with my family." },
  { left: "Does she have a job?", right: "Yes, she works in a hospital." },
  { left: "Do they go to work early?", right: "Yes, they go at 7 a.m." },
  { left: "Does your sister study French?", right: "No, she studies English." },
  { left: "Do you work on Sundays?", right: "No, I don’t." }
];

// 5️⃣ STORY WITH BLANKS (≈350 words)
export const story = {
  title: "A Busy Week for Laura",
  lines: [
    { speaker: "Narrator", text: "Laura is a nurse. She ___ in a hospital in the city. (verb: work)", a: ["works"] },
    { speaker: "Narrator", text: "She usually ___ to work at 7 a.m. (verb: go)", a: ["goes"] },
    { speaker: "Narrator", text: "Her husband, Tom, ___ a teacher. (verb: be)", a: ["is"] },
    { speaker: "Narrator", text: "He ___ English at a local school. (verb: teach)", a: ["teaches"] },
    { speaker: "Narrator", text: "They ___ in a small apartment near the hospital. (verb: live)", a: ["live"] },
    { speaker: "Laura", text: "Tom, what time ___ you go to work today?", a: ["do"] },
    { speaker: "Tom", text: "I ___ to work at 8 a.m., but today I have a meeting at 7:30. (verb: go)", a: ["go"] },
    { speaker: "Laura", text: "Oh no! You ___ be late again! (verb: not)", a: ["don’t", "do not"] },
    { speaker: "Narrator", text: "Tom smiles. He always ___ his coffee before leaving. (verb: drink)", a: ["drinks"] },
    { speaker: "Narrator", text: "Laura ___ breakfast quickly and goes to the hospital. (verb: eat)", a: ["eats"] },
    { speaker: "Narrator", text: "At the hospital, she ___ many patients. (verb: help)", a: ["helps"] },
    { speaker: "Narrator", text: "She ___ her job, but sometimes she is very tired. (verb: love)", a: ["loves"] },
    { speaker: "Narrator", text: "In the afternoon, she ___ home at 5 p.m. (verb: go)", a: ["goes"] },
    { speaker: "Laura", text: "Tom, do you ___ dinner tonight? (verb: make)", a: ["make"] },
    { speaker: "Tom", text: "Yes, I ___ pasta. (verb: make)", a: ["make"] },
    { speaker: "Narrator", text: "After dinner, they watch TV and talk about their day. Laura sometimes ___ English classes online. (verb: take)", a: ["takes"] },
    { speaker: "Narrator", text: "She wants to improve her English because she ___ with foreign patients. (verb: speak)", a: ["speaks"] },
    { speaker: "Tom", text: "You ___ a good student, Laura! (verb: be)", a: ["are"] },
    { speaker: "Laura", text: "Thanks! I ___ to learn something new every day. (verb: like)", a: ["like"] },
    { speaker: "Narrator", text: "They go to bed early because they both ___ early. (verb: wake up)", a: ["wake up"] }
  ]
};

