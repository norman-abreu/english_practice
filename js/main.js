// main.js — wiring, topic loader, initialization
import { initTabs } from './tabs.js';
import * as R from './renderers.js';
import { check as checkFn } from './checker.js';

// List of topics available (folder names under /topics).
// Add new topic folder names here (and create folder with exercises.js + grammar.js)
const TOPICS = [
  { id: 'wh_tobe', name: "WH and yes/no questions with the verb TO BE" },
  { id: 'possessives', name: "Possessive Adjectives" }
];

// Build sidebar
const topicList = document.getElementById('topic-list');
TOPICS.forEach((t, idx) => {
  const a = document.createElement('a');
  a.href = '#';
  a.className = 'topic-link' + (idx===0 ? ' active' : '');
  a.dataset.topic = t.id;
  a.textContent = t.name;
  a.addEventListener('click', e => {
    e.preventDefault();
    loadTopic(t.id);
    document.querySelectorAll('.topic-link').forEach(n => n.classList.remove('active'));
    a.classList.add('active');
  });
  topicList.appendChild(a);
});

// Expose check globally so renderer buttons work
window.check = checkFn;

async function loadTopic(topicId){
  try{
    // dynamic imports relative to index.html - ensure folder exists
    const exercisesModule = await import(`../topics/${topicId}/exercises.js`);
    const grammarModule = await import(`../topics/${topicId}/grammar.js`);

    // Normalize exported names (support both named and default)
    const fills = exercisesModule.fills || exercisesModule.default?.fills || [];
    const qas   = exercisesModule.qas   || exercisesModule.default?.qas   || [];
    const mcs   = exercisesModule.mcs   || exercisesModule.default?.mcs   || [];
    const matches = exercisesModule.matches || exercisesModule.default?.matches || [];
    const story = exercisesModule.story || exercisesModule.default?.story || { title:'', lines:[] };

    // store current exercises globally for checker
    window.currentExercises = { fills, qas, mcs, matches, story };

    // render
    R.renderFills(fills);
    R.renderQAs(qas);
    R.renderMCs(mcs);
    R.renderMatch(matches);
    R.renderStory(story);

    // grammar
    const grammar = grammarModule.grammarExplanation || grammarModule.default?.grammarExplanation || { title:'', intro:'', sections:[] };
    R.renderGrammar(grammar);

    // update header
    const title = TOPICS.find(t=>t.id===topicId)?.name || topicId;
    document.getElementById('topic-title').textContent = title;
    document.getElementById('topic-lead').textContent = `Topic: ${title} — interactive exercises.`;

    // init tabs if not yet
    initTabs();
  } catch (err){
    console.error('Load topic error', err);
    alert('Error loading topic: ' + topicId + '. Check console for details.');
  }
}

// Load default topic
loadTopic(TOPICS[0].id);



