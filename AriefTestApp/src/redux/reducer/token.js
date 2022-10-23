const tokenState = {
  walletContents: [],
  isHomeLoading: true
};

export default function reducer(state = tokenState, action) {
  const { type, payload } = action;
  switch (type) {
    case "token/fetchWalletContents":
      return {
        ...state,
        walletContents: payload
      }
    
    case "token/homeLoading":
      return {
        ...state,
        isHomeLoading: payload
      }

    default:
      return state
  }
}