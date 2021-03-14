'use strict';
const table = document.getElementById ('table');
const form = document.getElementById ('form');
let all =getData () || [] ;
console.log (all);
// let array= [];

// if (localStorage.getItem ('data')){
//   all.unshift (getData ());

// }

//----------------------random number generator -----------------------//
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


//--------------------------constructor ------------------------------//
function Student (fName,grade,course){
  this.fName = fName;
  this.grade = grade;
  this.course = course;
  all.push (this);

}

form.addEventListener ('submit', handleSubmit);


//----------------------table header ---------------------------------//
function headerRender (){
  let hr = document.createElement ('tr');
  table.appendChild (hr);

  let th1 = document.createElement ('th');
  hr.appendChild (th1);
  th1.textContent = 'Student Name';

  let th2 = document.createElement ('th');
  hr.appendChild (th2);
  th2.textContent = 'Student Grade';
  let th3 = document.createElement ('th');
  hr.appendChild (th3);
  th3.textContent = 'Course';
}
headerRender ();


renderTable();


function renderTable (){

  table.innerHTML = '';
  headerRender ();

  for (let i = 0 ; i < all.length;i++){
    let raw = document.createElement ('tr');
    table.appendChild (raw);

    let td1 = document.createElement ('td');
    raw.appendChild (td1);
    td1.textContent =all[i].fName;

    let td2 = document.createElement ('td');
    raw.appendChild (td2);
    td2.textContent=all[i].grade;
    let td3 = document.createElement ('td');
    raw.appendChild (td3);
    td3.textContent = all[i].course;
  }}
//--------------------------submitting -------------------------------------//
function handleSubmit (e){
  e.preventDefault ();

  let sName = e.target.name.value;
  let random = getRndInteger (0,100);
  let cName = e.target.course.value;
  let obj = new Student (sName,random,cName);
  console.log(obj);
  setData (all);
  renderTable();
}

function setData (arrays){
  localStorage.setItem ('data', JSON.stringify(arrays));
}
function getData (){
  return JSON.parse(localStorage.getItem ('data'));
}



