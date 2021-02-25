// ITEM READY TO DISPLAY TO THE DOM
export const domItems = (rgb, hex, type) => {
  return `<div id= 'color-box' class='hex' style='background-color:rgb(${rgb.join()})'>
        <div class='time' style="color:${
          type != 'tint' ? 'white' : 'black'
        }">#${hex}</div>
        </div>`
}

// #####  this function display the item to the DOM &
// ----- And add event to each to get the tex

export function displayColorToTheDom(
  code,
  html,
  randomBtn,
  container,
  spinner,
  inputValue,
  showCopyTo
) {
  // THE CODE ABOVE IN THE FUNCTION ARE VARIABLE PASSDOWN ✔ TO USE

  return () => {
    randomBtn.style.background = `${code}`
    container.insertAdjacentHTML('beforeend', html.join(' '))
    spinner.classList.add('activeSpinner')
    inputValue.value = ''
    randomBtn.disabled = false

    // COPY FUNCTIONALITIES
    Array.from(document.querySelectorAll('.hex')).map((el, i) => {
      el.addEventListener('click', async () => {
        const b = document.querySelectorAll('.time')[i].textContent
        await navigator.clipboard.writeText(b)
        showCopyTo.classList.add('show')
        setTimeout(() => {
          showCopyTo.classList.remove('show')
        }, 500)
      })
    })
  }
}
