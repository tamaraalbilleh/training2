'use strict';
//variables //
const form = document.getElementById ('form');
const table = document.getElementById ('table');
let all = [];
let clicked = false;
getData ();

//------------constructor-------------//
function Tasks (task,day){
  this.task = task;
  this.day = day;
  all.push (this);
}
//-------------event listener ----------//
form.addEventListener ('submit',handlerSubmit);

function handlerSubmit (e){
  e.preventDefault();
  table.innerHTML='';
  let taskElement = e.target.tasks.value;
  let dateElement = e.target.dates.value;
  let object = new Tasks (taskElement,dateElement);
  console.log (object);
  setData ();


  renderHeader();
  renderTable ();

}
function renderTable (){
  for (let i = 0 ; i<all.length;i++){
    let raw = document.createElement ('tr');
    table.appendChild (raw);

    let td1=document.createElement ('td');
    raw.appendChild (td1);
    td1.textContent= all[i].task;

    let td2=document.createElement ('td');
    raw.appendChild (td2);
    td2.textContent= all[i].day;

    let td3=document.createElement ('td');
    raw.appendChild (td3);

    let btn = document.createElement ('button');
    td3.appendChild (btn);
    btn.textContent ='X';
    btn.setAttribute ('id',i);
    btn.addEventListener ('click', function(){
      clicked =true;
      console.log (clicked);
    });
    btn.setAttribute ('onClick',`remove(${btn.id})`);
  }
}
function setData (){
  localStorage.setItem ('new',JSON.stringify (all));
}
function getData (){
  if (localStorage.getItem ('new')){
    all = JSON.parse (localStorage.getItem ('new'));
  }
}
function renderHeader (){
  let hr = document.createElement ('tr');
  table.appendChild (hr);

  let h1 = document.createElement ('th');
  hr.appendChild(h1);
  h1.textContent = 'Task';
  let h2 = document.createElement ('th');
  hr.appendChild(h2);
  h2.textContent = 'Date';
  let h3 = document.createElement ('th');
  hr.appendChild(h3);
  h3.textContent = 'Delete';
}

renderHeader();
renderTable();
function remove(i){
  let arrayUpdate = all;
  if (clicked=== true){
    table.innerHTML ='';
    arrayUpdate.splice (i,1);
    console.log (arrayUpdate);
    all = arrayUpdate;
    setData();
    renderHeader();
    renderTable();
  }
}

