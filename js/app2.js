'use strict';
const form = document.getElementById ('form');
const table = document.getElementById ('table');
renderHeader ();
let total = 0 ;
let all =[];
getData ();



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function renderHeader (){
  const hr = document.createElement ('tr');
  table.appendChild (hr);

  const th1 = document.createElement ('th');
  hr.appendChild(th1);
  th1.textContent = 'Id';

  const th2 = document.createElement ('th');
  hr.appendChild(th2);
  th2.textContent = 'Name';

  const th3 = document.createElement ('th');
  hr.appendChild(th3);
  th3.textContent = 'Email';

  const th4 = document.createElement ('th');
  hr.appendChild(th4);
  th4.textContent = 'Mobile';

  const th5 = document.createElement ('th');
  hr.appendChild(th5);
  th5.textContent = 'Age';

  const th6 = document.createElement ('th');
  hr.appendChild(th6);
  th6.textContent = 'Tuition';
}

function renderFooter (){
  const rawLast = document.createElement ('tr');
  table.appendChild(rawLast);

  const tf = document.createElement ('th');
  rawLast.appendChild (tf);
  if (localStorage.getItem ('total')){
    tf.textContent = `Total : ${JSON.parse(localStorage.getItem ('total'))}`;
  }else {
    tf.textContent = `Total : ${total}`;
  }
}

function Student (email, tel,tuition ){
  this.fName = email.split('@', 1);
  this.email = email;
  this.tel = tel;
  this.age = getRndInteger(18,24);
  this.tuition = tuition;
  all.push (this);
}

form.addEventListener('submit',handlerSubmit);
renderTableData ();
renderFooter();
function handlerSubmit (e){
  e.preventDefault();
  table.innerHTML='';
  renderHeader();

  let emailElement = e.target.email.value;
  let telephone = e.target.phone.value;
  let tuitionFees = e.target.fees.value;
  total =total+ parseInt(tuitionFees);
  localStorage.setItem ('total',total);
  let object = new Student (emailElement,telephone,tuitionFees);
  console.log (object);
  setData ();

  renderTableData ();
  renderFooter();
}

function renderTableData (){
  for (let i = 0; i <all.length;i++){

    let raw = document.createElement ('tr');
    table.appendChild (raw);

    let td = document.createElement ('td');
    raw.appendChild (td);
    td.textContent = raw.rowIndex;

    let td1 = document.createElement ('td');
    raw.appendChild (td1);
    td1.textContent = all[i].fName;

    let td2 = document.createElement ('td');
    raw.appendChild (td2);
    td2.textContent = all[i].email;

    let td3 = document.createElement ('td');
    raw.appendChild (td3);
    td3.textContent = all[i].tel;

    let td4 = document.createElement ('td');
    raw.appendChild (td4);
    td4.textContent = all[i].age;

    let td6 = document.createElement ('td');
    raw.appendChild (td6);
    td6.textContent = all[i].tuition;

  }
}
function setData (){
  localStorage.setItem ('data',JSON.stringify (all));
}

function getData (){
  if (localStorage.getItem ('data')){
    all =JSON.parse (localStorage.getItem ('data'));
  }
}
