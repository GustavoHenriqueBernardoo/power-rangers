const getData = () => {
  const endPoint = "JSON/power-rangers.json";
  fetch(endPoint)
    .then(getResponse)
    .then(returnData)
    .then(catchError)
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

getData()
