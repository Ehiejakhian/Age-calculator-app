let dayLabel = document.querySelector('.day-label')
let monthLabel = document.querySelector('.month-label')
let yearLabel = document.querySelector('.year-label')

let inputDay = document.querySelector('#date-input')
let inputMonth = document.querySelector('#month-input')
let inputYear = document.querySelector('#year-input')

let dayErrorMessage = document.querySelector('#day-error-message')
let monthErrorMessage = document.querySelector('#month-error-message')
let yearErrorMessage = document.querySelector('#year-error-message')

let summitBtn = document.querySelector('button')

let dayResult = document.querySelector('#days-result')
let monthResult = document.querySelector('#months-result')
let yearResult = document.querySelector('#years-result')

summitBtn.addEventListener('click', checkInputs)

var todaysDate = new Date()
console.log(todaysDate)
var currentYear = todaysDate.getFullYear()


function checkInputs() {
  var dateIsValid = false
  var monthIsValid = false
  var yearIsValid = false
  
  //Date
  if (!parseInt(inputDay.value)) {
    console.log('InputDay is empty')
    dayErrorMessage.classList.add('error-message')
    dayErrorMessage.textContent = "This field is required"
    
    inputDay.classList.add('input-error-state')
    dayLabel.classList.add('label-error-state')
    
  } else if (inputDay.value > 31 || inputDay.value < 1) {
    console.clear()
    console.log('inputDay is not a valid date')
    dayErrorMessage.classList.add('error-message')
    dayErrorMessage.textContent = "Must be a valid date"
    
    inputDay.classList.add('input-error-state')
    dayLabel.classList.add('label-error-state')
    
  } else {
    dayErrorMessage.classList.remove('error-message')
    dateIsValid = true
    
    inputDay.classList.remove('input-error-state')
    dayLabel.classList.remove('label-error-state')
  }
  
  //Month
  if (!parseInt(inputMonth.value)) {
    console.log('InputMonth is empty')
    monthErrorMessage.classList.add('error-message')
    monthErrorMessage.textContent = "This field is required"
    
    inputMonth.classList.add('input-error-state')
    monthLabel.classList.add('label-error-state')
  } else if (inputMonth.value > 12 || inputMonth.value < 1) {
    console.clear()
    console.log('inputMonth is not a valid date')
    monthErrorMessage.classList.add('error-message')
    monthErrorMessage.textContent = "Must be a valid month"
    
    inputMonth.classList.add('input-error-state')
    monthLabel.classList.add('label-error-state')
  } else {
    monthErrorMessage.classList.remove('error-message')
    monthIsValid = true
    
    inputMonth.classList.remove('input-error-state')
    monthLabel.classList.remove('label-error-state')
  }
  
  //Year
  if (!parseInt(inputYear.value)) {
    console.log('InputYear is empty')
    yearErrorMessage.classList.add('error-message')
    yearErrorMessage.textContent = "This field is required"
    
    inputYear.classList.add('input-error-state')
    yearLabel.classList.add('label-error-state')
  } else if (inputYear.value < 1) {
    console.clear()
    console.log('inputYear is not a valid date')
    yearErrorMessage.classList.add('error-message')
    yearErrorMessage.textContent = "Must be a valid month"
    
    inputYear.classList.add('input-error-state')
    yearLabel.classList.add('label-error-state')

  } else if (inputYear.value > currentYear) {
    console.clear()
    console.log('inputYear is not a valid date')
    yearErrorMessage.classList.add('error-message')
    yearErrorMessage.textContent = "Must be in the past"
    
    inputYear.classList.add('input-error-state')
    yearLabel.classList.add('label-error-state')

  } else {
    yearErrorMessage.classList.remove('error-message')
    yearIsValid = true
    
    inputYear.classList.remove('input-error-state')
    yearLabel.classList.remove('label-error-state')
  }

  if (dateIsValid && monthIsValid && yearIsValid) {
    calculate()
  }
}

function calculate() {
  let birthYear = parseInt(inputYear.value);
  let birthMonth = parseInt(inputMonth.value);
  let birthDay = parseInt(inputDay.value);
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();

  let years, months, days;

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  if (birthYear === currentYear) {
    years = 0;
    months = currentMonth - birthMonth;
    days = currentDay - birthDay;
    if (days < 0) {
      months -= 1;
      let prevMonth = currentMonth - 1;
      let prevYear = currentYear;
      if (prevMonth === 0) {
        prevMonth = 12;
        prevYear -= 1;
      }
      days += getDaysInMonth(prevYear, prevMonth);
    }
    if (months < 0) {
      months = 0;
      days = 0;
    }
  } else {
    years = currentYear - birthYear;
    months = currentMonth - birthMonth;
    days = currentDay - birthDay;
    if (days < 0) {
      months -= 1;
      let prevMonth = currentMonth - 1;
      let prevYear = currentYear;
      if (prevMonth === 0) {
        prevMonth = 12;
        prevYear -= 1;
      }
      days += getDaysInMonth(prevYear, prevMonth);
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  }

  if (years === 0 && months === 0 && days === 0) {
    yearResult.innerHTML = `<h1 id="years-result"><span>--</span> years</h1>`;
    monthResult.innerHTML = `<h1 id="months-result"><span>--</span> months</h1>`;
    dayResult.innerHTML = `<h1 id="days-result"><span>--</span> days</h1>`;
  } else if (months === 0 && days === 0) {
    monthResult.innerHTML = `<h1 id="months-result"><span>--</span> months</h1>`;
    dayResult.innerHTML = `<h1 id="days-result"><span>--</span> days</h1>`;
  } else {
    if (years === 1) {
      yearResult.innerHTML = `<h1 id="years-result"><span>${years}</span> year</h1>`;
    } else {
      yearResult.innerHTML = `<h1 id="years-result"><span>${years}</span> years</h1>`;
    }

    if (months === 1) {
      monthResult.innerHTML = `<h1 id="months-result"><span>${months}</span> month</h1>`;
    } else {
      monthResult.innerHTML = `<h1 id="months-result"><span>${months}</span> months</h1>`;
    }

    if (days === 1) {
      dayResult.innerHTML = `<h1 id="days-result"><span>${days}</span> day</h1>`;
    } else {
      dayResult.innerHTML = `<h1 id="days-result"><span>${days}</span> days</h1>`;
    }
  }
}