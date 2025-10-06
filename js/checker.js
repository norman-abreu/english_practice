import { normalize } from './utils.js';

// checker reads exercise data stored on window.currentExercises
export function check(type, i){
  const data = window.currentExercises || {};
  let val = '', answers = [], ok = false;

  try{
    if(type === 'fill'){
      val = (document.getElementById(`fill-${i}`)?.value || '').trim();
      answers = normalize(data.fills?.[i]?.a);
    } else if(type === 'qa'){
      val = (document.getElementById(`qa-${i}`)?.value || '').trim();
      answers = normalize(data.qas?.[i]?.a);
    } else if(type === 'mc'){
      val = (document.getElementById(`mc-${i}`)?.value || '').trim();
      answers = normalize(data.mcs?.[i]?.a);
    } else if(type === 'match'){
      val = (document.getElementById(`match-${i}`)?.value || '').trim();
      answers = normalize(data.matches?.[i]?.right);
    } else if(type === 'story'){
      val = (document.getElementById(`story-${i}`)?.value || '').trim();
      answers = normalize(data.story?.lines?.[i]?.a);
    }
  }catch(e){
    console.error('Checker read error', e);
  }

  ok = answers.includes(String(val).toLowerCase().trim());
  const fb = document.getElementById(`${type}-fb-${i}`);

  // ✅ Add this block:
  const container =
    fb?.closest(".exercise") || fb?.closest(".dialogue-line") || null;

  if(ok){
    fb.textContent = '✅ Correct!';
    fb.className = 'feedback correct';
    if(container) container.classList.add("correct");
  } else {
    const show = answers && answers.length ? answers[0] : '—';
    fb.textContent = `❌ Correct: ${show}`;
    fb.className = 'feedback wrong';
    if(container) container.classList.remove("correct");
  }
}
