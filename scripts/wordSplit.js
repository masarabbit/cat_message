function init() {

  const calcWrapIndex = () =>{
    const wrapper = document.querySelector('.flex_wrapper')
    const bannerContent = window.location.hash.replace('#','')
    const wrapIndex = []
    wrapper.innerHTML = bannerContent.split('#').map(word=>{
      return `
        <div class="message">
          ${word}
        </div>
      `
    }).join('')
    const messages = document.querySelectorAll('.message')
    messages.forEach((message,i)=>{
      if (i === (messages.length - 1)) return
      if (message.getBoundingClientRect().y < messages[i + 1].getBoundingClientRect().y){
        wrapIndex.push(i)
      }
    })
    return wrapIndex
  }

  window.addEventListener('resize', ()=>{
    console.log('wrapIndex', calcWrapIndex())
  })

}

window.addEventListener('DOMContentLoaded', init)

