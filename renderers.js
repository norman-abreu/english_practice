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

export function renderMatch(matches){
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
