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
  console.log(payload);
}

const catchError = (error) => {
  throw new Error(`Oh no: ${error}`)
}

// get year for copyright 
const getYear = () => {
  return document.querySelector("footer").innerHTML = `<div> Copyright ${new Date().getFullYear()} </div>`;
}

getData();
getYear();

// Variables UI
// const btnRed = document.querySelector('pwrRed');
// const btnBlue = document.querySelector('pwrBlue');
// const btnBlack = document.querySelector('pwrBlack');
// const btnYellow = document.querySelector('pwrYellow');
// const btnPink = document.querySelector('pwrPink');
// const btnWhite = document.querySelector('pwrWhite');
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', (()=> {
    removeActiveClasses();
    panel.classList.add('active');
  }))
})

function removeActiveClasses(){
  panels.forEach((panel)=>{
    panel.classList.remove('active');
  })
}
console.log(panels);
