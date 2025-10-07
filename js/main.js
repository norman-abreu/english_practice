// main.js — wiring, topic loader, initialization
import { initTabs } from './tabs.js';
import * as R from './renderers.js';
import { check as checkFn } from './checker.js';

// List of topics available (folder names under /topics).
// Add new topic folder names here (and create folder with exercises.js + grammar.js)
const TOPICS = [
  { id: 'wh_tobe', name: "WH and yes/no questions with the verb TO BE" },
  { id: 'possessives', name: "Possessive Adjectives" },
  { id: 'simple-present-1', name: "Present simple - basic rules" },
  { id: 'simple_past', name: "Simple past with did and BE}
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

// --- GLOBAL CHECK & RESET ---
// --- GLOBAL CHECK & RESET (runs after DOM is ready) ---
document.addEventListener("DOMContentLoaded", () => {
  const checkAllBtn = document.getElementById("check-all");
  const resetAllBtn = document.getElementById("reset-all");
  const feedback = document.getElementById("global-feedback");

  if (checkAllBtn) {
    checkAllBtn.addEventListener("click", () => {
      // count all elements with the .correct class
      const correctEls = document.querySelectorAll(".correct");
      const totalExercises =
        document.querySelectorAll(".exercise").length +
        document.querySelectorAll(".mc").length +
        document.querySelectorAll("#match .draggable").length;

      const correct = correctEls.length;
      const percent = totalExercises
        ? Math.round((correct / totalExercises) * 100)
        : 0;

      feedback.textContent = `You got ${correct} / ${totalExercises} correct (${percent}%)`;
    });
  }

  if (resetAllBtn) {
    resetAllBtn.addEventListener("click", () => {
      // clear all inputs and selections
      document.querySelectorAll("input, select").forEach(el => (el.value = ""));
      // remove visual markers
      document
        .querySelectorAll(".correct, .wrong")
        .forEach(el => el.classList.remove("correct", "wrong"));
      // clear global feedback
      if (feedback) feedback.textContent = "";
      // optional: reset drag & drop if it’s active
      if (typeof window.populate === "function") window.populate();
    });
  }
});








