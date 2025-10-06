export const fills = [
  { q:"This is ___ book.", a:["my"] },
  { q:"That is ___ car.", a:["his"] },
  { q:"___ name is Maria.", a:["Her","her"] },
  { q:"These toys are ___.", a:["theirs"] },
  { q:"Is this ___ pen?", a:["your"] },
  { q:"The cat is eating ___ food.", a:["its"] },
  { q:"We have ___ classroom.", a:["our"] },
  { q:"He forgot ___ keys.", a:["his"] },
  { q:"That is ___ school.", a:["their"] },
  { q:"This jacket is ___.", a:["mine"] },
  { q:"Please take ___ books.", a:["your"] },
  { q:"She said ___ phone is lost.", a:["her"] },
  { q:"I like ___ teacher.", a:["my"] },
  { q:"They invited ___ friends.", a:["their"] },
  { q:"Is that ___ umbrella?", a:["your"] }
];

export const qas = [
  { q:"Whose book is this? — ___ book.", a:["My","my"] },
  { q:"Whose car is red? — ___ is red.", a:["His","his"] },
  { q:"Whose phone rang? — ___ rang.", a:["Her","her"] },
  { q:"Are these your shoes? — No, they're ___.", a:["not mine","not mine","someone else's"] },
  { q:"Who is that? — ___ teacher.", a:["Our","our"] }
];

export const mcs = [
  { q:"This is ___ pencil.", opts:["my","mine","me"], a:["my"] },
  { q:"Those are ___ toys.", opts:["their","theirs","them"], a:["their","theirs"] },
  { q:"Is that ___ bag?", opts:["your","yours","you"], a:["your"] },
  { q:"These seats are ___.", opts:["ours","our","us"], a:["ours"] },
  { q:"The dog wagged ___ tail.", opts:["its","it's","it"], a:["its"] }
];

export const matches = [
  { left:"This is my book.", right:"It belongs to me." },
  { left:"Is that her pen?", right:"Yes, it is her pen." },
  { left:"Those are our desks.", right:"They are our desks." },
  { left:"Whose coat is this?", right:"It’s Sarah’s coat." },
  { left:"The red bike is his.", right:"That bike is his." }
];

export const story = {
  title: "Labels and Possessions",
  lines: [
    { speaker:"Teacher", text:"Please write ___ name on your book.", a:["your"] },
    { speaker:"Anna", text:"I lost ___ pencil.", a:["my"] },
    { speaker:"Tom", text:"Is this ___ hat?", a:["your"] },
    { speaker:"Anna", text:"No, it’s not ___. I think it’s ___.", a:["mine","my"] }
  ]
};
