const inputDate = document.querySelector("#date-input");
const luckyNumber = document.querySelector("#lucky-number");
const checkbtn = document.querySelector("#check");
const massage = document.querySelector("#massage");

function calculate() {
  let date = inputDate.value;
  let dateinput = date.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dateinput.length; i++) {
    sum += Number(dateinput.charAt(i));
  }
  return sum;
}

function checkLuckyBirthday() {
  let sum = calculate();
  let luckynum = luckyNumber.value 
  if(sum % luckynum === 0){
    massage.innerText = `${luckynum} is that Lucky!! 🥳 🎉`
  }else{
    massage.innerText = `${luckynum} is not that Lucky!! 😔`
  }
}

checkbtn.addEventListener("click", checkLuckyBirthday);
