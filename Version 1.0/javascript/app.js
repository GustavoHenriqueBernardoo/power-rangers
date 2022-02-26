const panels = document.querySelectorAll('.panel');

// Fetching the JSON file
const getData = () => {
  const endPoint = "JSON/power-rangers.json";
  fetch(endPoint)
    .then(getResponse)
    .then(returnData)
    .catch(catchError)
}

const getResponse = (response) => {
  if (!response.ok) {
    throw new Error(`Network response not valid returned: ${response}`);
  }
  else {
    return response.json();
  }
}

const returnData = (payload) => {
  handleClick(payload);
}

const catchError = (error) => {
  throw new Error(`Oh no: ${error}`)
}

// get year for copyright 
const getYear = () => {
  return document.querySelector("footer").innerHTML = `<div> Copyright ${new Date().getFullYear()} </div>`;
}

// Creating a click eventListener to add class active and show content from JSON
function handleClick(data){
  panels.forEach((panel)=>{
    panel.addEventListener('click', ((event) =>{
      removeActive();
      panel.classList.add('active');
      if(event.currentTarget.classList.contains('active')){
        showJSON(data, event.currentTarget);
      }
    }))
  })
}
// Remove class active
function removeActive(){
  panels.forEach((panel)=>{
    panel.classList.remove('active');
  })
}

// Get the content from JSON to the HTML
function showJSON(data, target){
  console.log(target.id)
  const h3 = document.querySelector('.panel h3')
  data.power_rangers.forEach((ranger)=>{
    target.innerHTML =`
      <div class="each-ranger">
        <p> ${ranger.name} </p>
        <img src="${ranger.images}">
        <p> ${ranger.power_level} </p>
        <p> ${ranger.role} </p>
        <p> ${ranger.abilities} </p>
        <p> ${ranger.limitations} </p>
        <div> ${ranger.abilities} </div>
      </div>
    `
    const eachRanger = document.querySelector('.each-ranger');
    // const redRanger = document.querySelector('pwrRed');
    target.style.pointerEvents = 'none';
    target.style.height = 'auto';
    eachRanger.style.display = 'flex';
    eachRanger.style.textAlign = 'center';
    eachRanger.style.flexDirection = 'column';
    eachRanger.style.padding = '10px';
    eachRanger.style.color = 'black';
    eachRanger.style.fontSize = '20px';
    eachRanger.style.background = 'url(https://kanto.legiaodosherois.com.br/w750-h750-k1/wp-content/uploads/2015/06/49e5fc5ddeec05e9017939a675186e6c.jpg.jpeg) no-repeat center'
    eachRanger.style.background.opacity = '15%';

  })

}

handleClick();
getData();
getYear();
