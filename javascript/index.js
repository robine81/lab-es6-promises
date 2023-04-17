// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 1, (step2) => {
       document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
       getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          getInstruction("mashedPotatoes", 4, (step5) => {
              document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
              document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
              const mashedPotatoesImage = document.querySelector('#mashedPotatoesImg')
              mashedPotatoesImage.style.display = "block"
            }, (error) => console.log(error));
           }, (error) => console.log(error));          
         }, (error) => console.log(error));
    }, (error) => console.log(error));

  }
);

// Iteration 2 - using promises .then and .catch
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak',1)
  }).then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  }).then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  }).then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  }).then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  }).then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  }).then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    const steakImage = document.querySelector('#steakImg')
    steakImage.style.display = "block"
    return obtainInstruction('steak', 7)
  });

// Iteration 3 using async/await
async function makeBroccoli() {
  console.log("asd")
  try {
    const valueFromPreviousPromise = await obtainInstruction('broccoli', 0)
    document.querySelector("#broccoli").innerHTML += `<li>${valueFromPreviousPromise}</li>`

    const valueFromPreviousPromiseTwo = await obtainInstruction('broccoli', 1)
    document.querySelector("#broccoli").innerHTML += `<li>${valueFromPreviousPromiseTwo}</li>`

    const valueFromPreviousPromiseThree = await obtainInstruction('broccoli', 2)
    document.querySelector("#broccoli").innerHTML += `<li>${valueFromPreviousPromiseThree}</li>`

    const valueFromPreviousPromiseFour = await obtainInstruction('broccoli', 3)
    document.querySelector("#broccoli").innerHTML += `<li>${valueFromPreviousPromiseFour}</li>`

    const valueFromPreviousPromiseFive = await obtainInstruction('broccoli', 4)
    document.querySelector("#broccoli").innerHTML += `<li>${valueFromPreviousPromiseFive}</li>`

    const valueFromPreviousPromiseSix = await obtainInstruction('broccoli', 5)
    document.querySelector("#broccoli").innerHTML += `<li>${valueFromPreviousPromiseSix}</li>`

    const valueFromPreviousPromiseSeven = await obtainInstruction('broccoli', 6)
    document.querySelector("#broccoli").innerHTML += `<li>${valueFromPreviousPromiseSeven}</li>`
  }
  catch (error) {
    console.log("Entering error statement")
    console.error(error);
  }
  
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  const broccoliImage = document.querySelector('#broccoliImg')
  broccoliImage.style.display = "block"
}
makeBroccoli()

// Bonus 2 - Promise all
async function makeBrusselSprouts() {
  console.log("check")
  let brusselsSproutsArr = []
  brusselsSprouts.forEach ((currentSprout, currentIndex) => {
    brusselsSproutsArr.push(obtainInstruction('brusselsSprouts' ,currentIndex))
  })
  const pizza = await Promise.all(brusselsSproutsArr)
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[0]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[1]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[2]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[3]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[4]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[5]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[6]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${pizza[7]}</li>`

  document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
  const brusselsSproutsImage = document.querySelector('#brusselsSproutsImg')
  brusselsSproutsImage.style.display = "block"

  console.log(pizza)
}
makeBrusselSprouts()