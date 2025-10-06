// renderers.js — renders UI given data objects
export function renderFills(fills){
  const c = document.getElementById('fills'); c.innerHTML = '';
  fills.forEach((ex,i)=>{
    const html = `<div class="exercise">
      <div class="text">${i+1}. ${ex.q.replace('___', `<input type="text" id="fill-${i}" placeholder="Type answer">`)}</div>
      <button class="btn btn-green" onclick="check('fill',${i})">Check</button>
      <span id="fill-fb-${i}" class="feedback"></span>
    </div>`;
    c.insertAdjacentHTML('beforeend', html);
  });
}

export function renderQAs(qas){
  const c = document.getElementById('qas'); c.innerHTML = '';
  qas.forEach((ex,i)=>{
    const html = `<div class="exercise">
      <div class="text">${i+1}. ${ex.q.replace('___', `<input type="text" id="qa-${i}" placeholder="Type answer">`)}</div>
      <button class="btn btn-green" onclick="check('qa',${i})">Check</button>
      <span id="qa-fb-${i}" class="feedback"></span>
    </div>`;
    c.insertAdjacentHTML('beforeend', html);
  });
}

export function renderMCs(mcs){
  const c = document.getElementById('mcs'); c.innerHTML = '';
  mcs.forEach((ex,i)=>{
    const opts = ex.opts.map(o=>`<option value="${o}">${o}</option>`).join('');
    const html = `<div class="exercise">
      <div class="text">${i+1}. ${ex.q.replace('___', `<select id="mc-${i}"><option value="">--</option>${opts}</select>`)}</div>
      <button class="btn btn-green" onclick="check('mc',${i})">Check</button>
      <span id="mc-fb-${i}" class="feedback"></span>
    </div>`;
    c.insertAdjacentHTML('beforeend', html);
  });
}

/*export function renderMatch(matches){
  const c = document.getElementById('match'); c.innerHTML = '';
  matches.forEach((p,i)=>{
    const html = `<div class="exercise">
      <div class="text">${i+1}. ${p.left}</div>
      <input type="text" id="match-${i}" placeholder="Type matching answer">
      <button class="btn btn-green" onclick="check('match',${i})">Check</button>
      <span id="match-fb-${i}" class="feedback"></span>
    </div>`;
    c.insertAdjacentHTML('beforeend', html);
  });
}*/

// --- MATCHING EXERCISE (DRAG & DROP) ---
export function renderMatch(matches) {
  window.currentPairs = matches;
  
  const c = document.getElementById('match');
  c.innerHTML = `
    <div class="match-container">
      <h2>Match the Sentences</h2>
      <p>Drag the items on the right column to match the sentences on the left column.</p>
      <div class="grid">
        <div class="left-col" id="left-col"></div>
        <div class="right-col" id="right-col"></div>
      </div>
      <div class="controls">
        <button id="check">Check answers</button>
        <button id="reset" class="secondary">Reset</button>
        <div id="feedback" class="result"></div>
      </div>
    </div>
  `;

  const leftCol = c.querySelector("#left-col");
  const rightCol = c.querySelector("#right-col");
  const feedback = c.querySelector("#feedback");

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function populate() {
    leftCol.innerHTML = "";
    rightCol.innerHTML = "";
    matches.forEach(p => {
      const leftDiv = document.createElement("div");
      leftDiv.className = "item";
      leftDiv.textContent = p.left;
      leftCol.appendChild(leftDiv);
    });
    shuffle([...matches]).forEach(p => {
      const rightDiv = document.createElement("div");
      rightDiv.className = "item draggable";
      rightDiv.draggable = true;
      rightDiv.textContent = p.right;
      rightCol.appendChild(rightDiv);
    });
    enableDrag();
  }

  function enableDrag() {
    const draggables = c.querySelectorAll(".draggable");
    draggables.forEach(d => {
      d.addEventListener("dragstart", () => d.classList.add("dragging"));
      d.addEventListener("dragend", () => d.classList.remove("dragging"));
    });
    rightCol.addEventListener("dragover", e => {
      e.preventDefault();
      const afterElement = getDragAfterElement(rightCol, e.clientY);
      const dragging = c.querySelector(".dragging");
      if (!dragging) return;
      if (afterElement == null) rightCol.appendChild(dragging);
      else rightCol.insertBefore(dragging, afterElement);
    });
  }

  function getDragAfterElement(container, y) {
    const draggables = [...container.querySelectorAll(".draggable:not(.dragging)")];
    return draggables.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else return closest;
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  function checkAnswers() {
    const rightItems = [...rightCol.querySelectorAll(".draggable")];
    let score = 0;
    rightItems.forEach((item, i) => {
      item.classList.remove("correct", "wrong");
      if (item.textContent === matches[i].right) {
        item.classList.add("correct");
        score++;
      } else {
        item.classList.add("wrong");
      }
    });
    feedback.textContent = `Score: ${score} / ${matches.length}`;
  }

  function reset() {
    populate();
    feedback.textContent = "";
  }

  c.querySelector("#check").onclick = checkAnswers;
  c.querySelector("#reset").onclick = reset;
  populate();
}


export function renderStory(story){
  const c = document.getElementById('story'); c.innerHTML = `<strong>${story.title}</strong>`;
  story.lines.forEach((l,i)=>{
    const html = `<div class="dialogue-line">
      <span class="speaker">${l.speaker}</span>
      ${l.text.replace('___', `<input type="text" id="story-${i}" placeholder="Type answer">`)}
      <button class="btn btn-green" onclick="check('story',${i})">Check</button>
      <span id="story-fb-${i}" class="feedback"></span>
    </div>`;
    c.insertAdjacentHTML('beforeend', html);
  });
}

export function renderGrammar(data){
  const c = document.getElementById('grammar-content');
  c.innerHTML = `<h2>${data.title}</h2><p>${data.intro}</p>` +
    data.sections.map(s=>`
      <div class="grammar-section">
        <h3>${s.heading}</h3>
        ${s.content?`<ul>${s.content.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
        ${s.table?`<table class="grammar-table"><thead><tr>${s.table[0].length===3?'<th>Word</th><th>Meaning</th><th>Example</th>':'<th>Subject</th><th>Possessive Adj.</th>'}</tr></thead>
          <tbody>${s.table.map(r=>`<tr>${r.map(cel=>`<td>${cel}</td>`).join('')}</tr>`).join('')}</tbody></table>`:''}
      </div>`).join('');
}


