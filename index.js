// 'use strict'
import Values from 'values.js'
import { randomColor, randomNumber, selectedItemsFromTheDom } from './another'
import { displayColorToTheDom, domItems } from './displayItems'

// Destructure Item of Dom Use
const {
  container,
  submitBtn,
  randomBtn,
  spinner,
  inputValue,
  showCopyTo,
} = selectedItemsFromTheDom()

// ColorGen function for reusability purpose
const colorGen = (code = randomColor[randomNumber()]) => {
  try {
    const color = new Values(code).all(11)

    // this return an array, so we use JOIN method in the displayColorToTheDom
    const html = color.map((el) => {
      const { rgb, hex, type } = el
      return domItems(rgb, hex, type)
    })

    container.innerHTML = null
    spinner.classList.remove('activeSpinner')

    setTimeout(
      // PASS VARIABLE TO BE USE BY THI FUNCTION ❗
      displayColorToTheDom(
        code,
        html,
        randomBtn,
        container,
        spinner,
        inputValue,
        showCopyTo
      ),
      1500
    )
  } catch (err) {
    console.log(err)
  }
}

// GENERATE A RANDOM COLOR
randomBtn.addEventListener('click', () => {
  colorGen(randomColor[randomNumber()])
  randomBtn.disabled = true
})

// SUBMIT TEXT INPUT TO VALUES.JS
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const val = inputValue.value
  if (val) return colorGen(val)
  return alert('please enter a valid color code or name')
})
colorGen()
