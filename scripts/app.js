function init() {
 
  const spriteContainer = document.querySelector('.sprite_container')
  const sprite = document.querySelector('.sprite')

  const fireContainer = document.querySelector('.fire_container')
  const fire = document.querySelector('.fire')

  const modules = document.querySelectorAll('.module')
  
  const cellD = 60
  // const frame = 2
  // let leftV = 0
  
  
  
  const animate = (actor, frame, cellD) =>{
    const leftV = +(actor.style.left).replace('px','')
    let newLeftV = leftV - cellD
    // console.log('newLeftV', newLeftV)
    newLeftV = newLeftV < ((-1 * (frame - 1)) * cellD) ? 0 : newLeftV
    actor.style.left = `${newLeftV}px`
  }

  setInterval(()=>{
    animate(sprite, 2, cellD)
  },200)

  setInterval(()=>{
    animate(fire, 3, cellD)
  },100)
  
  const bop = (actor, index) =>{
    const topV = actor[index].dataset.top ? actor[index].dataset.top : 6
    const newTopV = +topV === 6 ? -6 : 6
    actor[index].style.top = `${newTopV}px`
    actor[index].dataset.top = newTopV
    setTimeout(()=>{
      const newIndex = index >= (actor.length - 1) ? 0 : index + 1
      bop(actor,newIndex)
    },80)
  }

  bop(modules,0)

}

window.addEventListener('DOMContentLoaded', init)
