// SELECTING ITEMS FROM THE DOM
export const selectedItemsFromTheDom = () => {
  return {
    container: document.querySelector('.colorContainer'),
    submitBtn: document.querySelector('.btnSubmit'),
    randomBtn: document.querySelector('.randomBtn'),
    spinner: document.querySelector('.spinner'),
    inputValue: document.querySelector('.inputValue'),
    showCopyTo: document.querySelector('.copyText'),
  }
}

// RANDOM NUMBER GENERATOR
export const randomNumber = () =>
  Math.floor(Math.random() * randomColor.length - 1)

// A RANDOM COLOR LIST
export const randomColor = [
  'Tomato',
  'red',
  'orangered',
  'Orange',
  'DodgerBlue',
  'MediumSeaGreen',
  'SlateBlue',
  'Violet',
  'Crimson',
  'Chocolate',
  'Coral',
  'DarkRed',
  'Aquamarine',
  'Aqua',
  'Bisque',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'DarkBlue',
  'DarkGoldenRod',
  'DarkCyan',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkSlateBlue',
  'DeepPink',
  'DarkViolet',
  'DarkTurquoise',
  'FireBrick',
  'DodgerBlue',
  'Indigo',
  'IndianRed',
  'LightCoral',
  'MidnightBlue',
  'Navy',
  'teal',
]
