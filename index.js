const currencyOne = document.getElementById('currency_one')
const amountOne = document.getElementById('amount-one')
const currencyTwo = document.getElementById('currency_two')
const amountTwo = document.getElementById('amount-two')
const showRate = document.getElementById('rate-display')
const swap = document.getElementById('currency-swap')
function calculate() {
  const currency_one = currencyOne.value
  const currency_two = currencyTwo.value
  console.log(currency_one)
  fetch(
    ` https://v6.exchangerate-api.com/v6/254a11d8f15a5856e25b8df5/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two]
      showRate.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
      amountTwo.value = (amountOne.value * rate).toFixed(2)
      console.log(currency_one)
      console.log(rate)
    })
}

currencyOne.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
currencyTwo.addEventListener('change', calculate)
amountTwo.addEventListener('input', calculate)
swap.addEventListener('click', () => {
  const temp = currencyOne.value
  currencyOne.value = currencyTwo.value
  currencyTwo.value = temp
  calculate()
})
