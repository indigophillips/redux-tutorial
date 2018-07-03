const aminals = (state = [], action) => {
  switch (action.type) {
    case 'ADD_AMINAL':
      return [
        ...state,
        {
          id: action.id,
          aminal: action.aminal
        }
      ]

    default:
      return state
  }
}

export default aminals
