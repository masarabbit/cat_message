function init() {

  const textarea = document.querySelector('textarea')
  const output = document.querySelector('.output')
  const createButton = document.querySelector('button')

  textarea.addEventListener('change',()=>{
    output.innerHTML = textarea.value.replaceAll('#','&num;').split('').reverse().join('').replaceAll(' ','#')
  })

  createButton.addEventListener('click',()=>{
    window.location = `/#${output.innerHTML}`
  })
}

window.addEventListener('DOMContentLoaded', init)
