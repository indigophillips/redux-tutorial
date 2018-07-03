let nextWordId = 0
let nextAminalId = 0

export const addWord = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextWordId++,
    word
  }
}

export const addAminal = (aminal) => {
  return {
    type: 'ADD_AMINAL',
    id: nextAminalId++,
    aminal
  }
}
