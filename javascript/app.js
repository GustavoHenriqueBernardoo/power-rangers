const panels = document.querySelectorAll('.panel');
const modalContainer = document.querySelector('.modal-container')
const modalHeader = document.querySelector('.modal-header')
const modalBody = document.querySelector('.modal-body')
const closeBtn = document.querySelector('.closeBtn')

const modalTitle = document.createElement('div');


const API = 'JSON/power-rangers.json';

//Get PowerRangers info
getPowerRangers(API);

// Fetching the JSON file
async function getPowerRangers(url){
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  returnData(data);
}
const returnData = (payload) => {
  handleClick(payload);
}

// get year for copyright 
const getYear = () => {
  return document.querySelector("footer").innerHTML = `<div> Copyright ${new Date().getFullYear()} </div>`;
}

panels.forEach(panel => {
  panel.addEventListener('click', openModal)
})

closeBtn.addEventListener('click', closeModal)

function openModal(){
  modalContainer.classList.remove('hidden')
}

function closeModal(){
  modalContainer.classList.add('hidden')
}

// Creating a click eventListener to add class active and show content from JSON
function handleClick(data) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel) => {
    panel.addEventListener('click', ((event)=> {
      removeActiveClasses();
      panel.classList.add('active');
      console.log(event.currentTarget)
      if(event.currentTarget.classList.contains("active")) {
        showJson(data,event.currentTarget);
      } 
    }))
  })
}
// Remove class active
function removeActiveClasses(){
  const panels = document.querySelectorAll('.panel');
  panels.forEach((panel)=>{
    panel.classList.remove('active');
    panel.style.pointerEvents = "auto";
  })
}

// Clear the html
function clearRangers(){
  target.innerHTML = '';
  modalHeader.innerText = '';
  modalTitle.innerText = '';

}

// Get the content from JSON to the HTML
function showJson(data,target) {
  data.power_rangers.forEach((ranger) => {
    const {name, images, power_level, role, abilities, limitations} = ranger;
    if(ranger.name.includes(target.id)) {
      modalTitle.classList.add('each-ranger-title');
      modalTitle.innerHTML = `<p>Name: ${name}</p>`  
      modalHeader.appendChild(modalTitle) 


      modalBody.innerHTML = `
        <div class="each-ranger"> 
          <img src="${images}">
          <p>Power Level: ${power_level} </p>
          <p>Role: ${role} </p>
          <p>Abilities: ${abilities} </p>
          <p>Limitations: ${limitations} </p>
        </div>
      `
      target.style.pointerEvents = "none";
      target.style.height = "auto";
      
      // setTimeout(clearRangers, 100)
      
      // const redRanger = document.querySelector('pwrRed');
    // target.style.pointerEvents = 'none';
    // target.style.height = 'auto';
    // eachRanger.style.display = 'flex';
    // eachRanger.style.textAlign = 'center';
    // eachRanger.style.flexDirection = 'column';
    // eachRanger.style.padding = '10px';
    // eachRanger.style.color = 'black';
    // eachRanger.style.fontSize = '20px';
    // eachRanger.style.background = 'url(https://kanto.legiaodosherois.com.br/w750-h750-k1/wp-content/uploads/2015/06/49e5fc5ddeec05e9017939a675186e6c.jpg.jpeg) no-repeat center'
    // eachRanger.style.background.opacity = '15%';
    }
  })
}
getYear();
