'use strict';
//---------variables and arrays------//
let all = [];
const form = document.getElementById ('form');
const list = document.getElementById ('list');
let clicked = false;
getData ();
renderList ();
//-------------date header-----------//
let d = new Date();
let b = JSON.stringify(d);
b.split ('2021',1);
document.getElementById('dateHeader').innerHTML =JSON.parse(b);

//-------------constructor-----------//
function Tasks (task,dates){
  this.task = task;
  this.dates = dates;
  all.push (this);
}
//-----------------------------------//
getData ();
//------adding an event listener-----//
form.addEventListener ('submit',submitHandler);

//----------handler function---------//
function submitHandler (e){
  e.preventDefault ();
  const task = e.target.task.value;
  const dates = e.target.day.value;

  let object = new Tasks (task,dates);
  console.log (object);
  setData ();
  renderList ();

}

//----------render function----------//
function renderList (){
  list.innerHTML = '';
  let ol = document.createElement ('ol');
  list.appendChild (ol);

  for (let i =0 ;i < all.length ; i++){
    let li = document.createElement ('li');
    ol.appendChild (li);
    li.textContent = all[i].task;

    let p = document.createElement ('p');
    li.appendChild (p);
    p.textContent = all[i].dates;

    let btn = document.createElement ('button');
    li.appendChild (btn);
    btn.textContent = 'X';
    btn.setAttribute ('id',i);
    btn.addEventListener ('click',function (){
      clicked =true;
    });
    btn.setAttribute ('onClick',`removeItem (${btn.id})`);


  }
}

//----------set data in LS----------//
function setData (){
  localStorage.setItem ('tasks',JSON.stringify(all));

}
//----------get data from LS--------//
function getData (){
  if (localStorage.getItem ('tasks')){
    all = JSON.parse (localStorage.getItem ('tasks'));
  }
}

function removeItem (i) {
  if (clicked=== true){
    console.log (i);
    let arr =JSON.parse (localStorage.getItem ('tasks'));
    console.log (arr);
    arr.splice (i,1);
    all=arr;
    setData();
    renderList ();

  }
}
