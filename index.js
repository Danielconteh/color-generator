// 'use strict'
import Values from 'values.js'
import { randomColor } from './another'
console.log(randomColor)
// const randomColor = [
//   'Tomato',
//   'Orange',
//   'DodgerBlue',
//   'MediumSeaGreen',
//   'Gray',
//   'SlateBlue',
//   'Violet',
//   'LightGray',
//   'Crimson',
//   'Chocolate',
//   'Coral',
//   'DarkRed',
// ]

const container = document.querySelector('.colorContainer')
const btn = document.querySelector('.btnSubmit')
const randomBtn = document.querySelector('.randomBtn')
const spinner = document.querySelector('.spinner')

const randomNumber = Math.floor(Math.random() * randomColor.length - 1)

const colorGen = (code = randomColor[randomNumber]) => {
  try {
    const color = new Values(code).all(11)
    const html = color.map((el) => {
      const { rgb, hex, type } = el
      return `<div class='hex' style='background-color:rgb(${rgb.join()})'>
        <div class='time' style="color:${
          type != 'tint' ? 'white' : 'black'
        }">#${hex}</div>
        </div>`
    })
    container.innerHTML = null
    spinner.classList.remove('activeSpinner')
    setTimeout(() => {
      randomBtn.style.background = `${code}`
      container.insertAdjacentHTML('beforeend', html.join(' '))
      spinner.classList.add('activeSpinner')
      document.querySelector('.inputValue').value = ''
      randomBtn.disabled = false
    }, 1500)
  } catch (err) {
    console.log(err.message)
  }
}

randomBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * randomColor.length - 1)
  colorGen(randomColor[randomNumber])
  randomBtn.disabled = true
})

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const val = document.querySelector('.inputValue').value
  if (val) return colorGen(val)
  return alert('please enter a valid color code or name')
})
colorGen()

// window.addEventListener('click', (e) => {})
