"use strict";
console.log("practiceUsers.js");

const usersGridEl = document.getElementById("users");

// 1. su funkcija pasissiusti vartotoju masyva is https://reqres.in/api/users?page=1. iskonsolinti rezultata

/* su Fetch ir then 
function fetchData() {
  return fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json())
    .then((dataFromJson) => dataFromJson.data)
    .catch((err) => console.warn("klaida", err));
}
// kviesdami funkcija, turim ideti then, kad gautume dataFromJson.data poto, kai uzsikraus;
fetchData().then((dataArr) => console.log("dataArr ===", dataArr));
*/

/*  Destytojo sprendimas 
const url = "https://reqres.in/api/users?page=1";

function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs.data)
    .catch((err) => console.warn("klaida getData", err));
}

getData(url).then((dataArr) => console.log("dataArr ===", dataArr));
*/

/* su async ir await */
async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1"); // nes fetch yra asinchronine operacija
    const data = await response.json();
    // console.log("data ===", data);
    return data.data;
  } catch (error) {
    console.warn("klaida gaunant todo", err);
  }
}
// pasiimti rezultata, reikia su .then();
fetchData().then((dataArr) => {
  console.log("dataEl", dataArr[0]);
  makeCardList(dataArr);
});
// console.log("rtnFetchData ===", rtnFetchData);

// getData(url).then((dataArr) => {
//   console.log('dataArr ===', dataArr[0]);
//   makeCardList(dataArr);

// 2. su pagalbine funkcija sugeneruoti korteliu sarasa is gautu duomenu. Pridedi siek tiek stiliaus is css.
//  i. paveiklsleliai turi matytis

function makeCard(obj) {
  const divEl = document.createElement("div");
  divEl.className = "card card--user";
  const imgEl = document.createElement("img");
  imgEl.src = obj.avatar;
  imgEl.alt = obj.email;
  const h3El = document.createElement("h3");
  h3El.textContent = `${obj.first_name} ${obj.last_name}`;
  const pEl = document.createElement("p");
  pEl.textContent = `${obj.email} (id:${obj.id})`;
  divEl.append(imgEl, h3El, pEl);
  return divEl;
}
// makeCard(Data);

/*
one user obj
{
  id: 1,
  email: 'george.bluth@reqres.in',
  first_name: 'George',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
}
*/

/*
<div class="card card--user">
  <img src="https://reqres.in/img/faces/1-image.jpg" alt="">
  <h3>title</h3>
  <p>email id</p>
</div>
*/

// sukurti cardList;
function makeCardList(arr) {
  // sukuriam tuscia html kur talpinsim data;
  usersGridEl.innerHTML = "";
  arr
    .map((uObj) => makeCard(uObj))
    .forEach((htmlEl) => usersGridEl.append(htmlEl));
}
