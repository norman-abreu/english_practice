export const fills = [
  { q:"___ your name?", a:["What's","What is"] },
  { q:"Where ___ you from?", a:["are"] },
  { q:"___ she your teacher?", a:["Is"] },
  { q:"How old ___ you?", a:["are"] },
  { q:"This is ___ brother.", a:["my"] },
  { q:"Who ___ he?", a:["is"] },
  { q:"Where ___ your parents?", a:["are"] },
  { q:"My name ___ Tom.", a:["is"] },
  { q:"___ they from Spain?", a:["Are"] },
  { q:"This is my teacher. ___ name is Mr Lewis.", a:["His"] },
  { q:"___ you a student?", a:["Are"] },
  { q:"How ___ you today?", a:["are"] },
  { q:"___ your favorite color?", a:["What's","What is"] },
  { q:"Where ___ she from?", a:["is"] },
  { q:"This is ___ book.", a:["my"] }
];

export const qas = [
  { q:"What’s your name? — ___ name’s Anna.", a:["My","my"] },
  { q:"Where are you from? — I’m ___ Brazil.", a:["from"] },
  { q:"Who’s your best friend? — ___ is Carla.", a:["She","she"] },
  { q:"Is he your brother? — Yes, ___ is.", a:["he","He"] },
  { q:"Are they from Spain? — No, they ___ not.", a:["are","aren't","aren't","'re"] },
  { q:"What is your favorite food? — ___ favorite food is pizza.", a:["My","my"] },
  { q:"Where is she from? — ___ from Japan.", a:["She's","She is"] },
  { q:"Who is that boy? — ___ my cousin.", a:["He's","He is"] },
  { q:"How old are you? — I’m ___ years old.", a:["ten","10"] },
  { q:"Are you a student? — Yes, I ___.", a:["am","I'm","I am"] },
  { q:"Who is your English teacher? — ___ name is Miss Taylor.", a:["Her","her"] },
  { q:"What’s your dad’s name? — ___ name’s Carlos.", a:["His","his"] },
  { q:"Where are your friends? — ___ at school.", a:["They're","They are"] },
  { q:"Is this your notebook? — No, it’s not ___.", a:["mine"] },
  { q:"How are you today? — I’m ___.", a:["fine","good","okay"] }
];

export const mcs = [
  { q:"___ your name?", opts:["What's","Where's","Who's"], a:["What's","What is"] },
  { q:"Where ___ you from?", opts:["is","are","am"], a:["are"] },
  { q:"___ he your friend?", opts:["Is","Are","Am"], a:["Is"] },
  { q:"How old ___ you?", opts:["am","are","is"], a:["are"] },
  { q:"This is ___ sister.", opts:["my","me","mine"], a:["my"] },
  { q:"___ they from Canada?", opts:["Is","Are","Am"], a:["Are"] },
  { q:"Who ___ she?", opts:["are","is","am"], a:["is"] },
  { q:"Where ___ your mother?", opts:["are","is","am"], a:["is"] },
  { q:"I ___ from Colombia.", opts:["am","is","are"], a:["am"] },
  { q:"They ___ my friends.", opts:["is","are","am"], a:["are"] }
];

export const matches = [
  { left:"What’s your name?", right:"My name is John." },
  { left:"Where are you from?", right:"I’m from Argentina." },
  { left:"Who is she?", right:"She’s my sister." },
  { left:"Is he your friend?", right:"Yes, he is." },
  { left:"How old are you?", right:"I’m twelve years old." }
];

export const story = {
  title: "Meeting New Friends",
  lines: [
    { speaker:"Anna", text:"Hi! ___ your name?", a:["What's","What is"] },
    { speaker:"Tom", text:"Hello! ___ Tom.", a:["I'm","I am"] },
    { speaker:"Anna", text:"Nice to meet you, Tom! ___ you from?", a:["Where are","where are"] },
    { speaker:"Tom", text:"I’m from the U.S. ___ this your first English class?", a:["Is"] },
    { speaker:"Anna", text:"Yes, it is. The teacher looks nice, ___ she?", a:["doesn't she","doesn't"] }
  ]
};
