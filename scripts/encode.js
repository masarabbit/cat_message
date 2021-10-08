function init() {

  const textarea = document.querySelector('textarea')
  const output = document.querySelector('.output')
  const createButton = document.querySelector('button')

  const encryptKey = {
    'a': 'v',
    'b': 'B',
    'c': 'p',
    'd': 's',
    'e': 'K',
    'f': 'M',
    'g': 'H',
    'h': 'X',
    'i': 'U',
    'j': 'Q',
    'k': 'O',
    'l': 'D',
    'm': 'x',
    'n': 'R',
    'o': 'A',
    'p': 'g',
    'q': 'b',
    'r': 't',
    's': 'Z',
    't': 'J',
    'u': 'r',
    'v': 'k',
    'w': 'd',
    'x': 'm',
    'y': 'u',
    'z': 'C',
    'A': 'F',
    'B': 'S',
    'C': 'Y',
    'D': 'L',
    'E': 'n',
    'F': 'E',
    'G': 'h',
    'H': 'c',
    'I': 'w',
    'J': 'q',
    'K': 'I',
    'L': 'P',
    'M': 'N',
    'N': 'W',
    'O': 'o',
    'P': 'a',
    'Q': 'f',
    'R': 'y',
    'S': 'G',
    'T': 'T',
    'U': 'z',
    'V': 'i',
    'W': 'V',
    'X': 'e',
    'Y': 'j',
    'Z': 'l',
    ' ': '#',
    '!': '1',
    '?': '2'
    // '#': '&num;'
  }

  const swapObject = obj =>{
    const ret = {}
    for (const key in obj){
      ret[obj[key]] = key
    }
    return ret
  }
  
  const decodeKey = swapObject(encryptKey)


  textarea.addEventListener('change',()=>{
    // output.innerHTML = textarea.value.replaceAll('#','&num;').split('').reverse().join('').replaceAll(' ','#') //? old encode
    const text = textarea.value.replaceAll('#','&num;').split('')
    let skip = 0
    output.innerText = text.map((letter,i)=>{
      if (skip > 0){
        skip--
        return letter
      }
      
      if (letter === '&' && text[i + 1] === 'n' && text[i + 2] === 'u' && text[i + 3] === 'm' && text[i + 4] === ';'){
        skip = 4
        return letter
      }
      if (!encryptKey[letter]) return letter
      return encryptKey[letter]
    }).join('')
    
    //* testing decode
    const encoded = output.innerText.split('')
    skip = 0
    console.log('decode', encoded.map((letter,i)=>{
      if (skip > 0){
        skip--
        return letter
      }
      if (letter === '&' && encoded[i + 1] === 'n' && encoded[i + 2] === 'u' && encoded[i + 3] === 'm' && encoded[i + 4] === ';'){
        skip = 4
        return letter
      }
      if (letter === '#') return ' '
      if (!decodeKey[letter]) return letter
      return decodeKey[letter]
    }))
  })

  createButton.addEventListener('click',()=>{
    window.location = `/message/#en#${output.innerHTML}`
  })
}

window.addEventListener('DOMContentLoaded', init)
