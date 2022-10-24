const tokenState = {
  walletContents: [],
  isHomeLoading: true,
  isDetailsLoading: true,
  currentWalletContent: {},
  collectionDetail: {},
  collectionStats: []
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

    case "token/currentWalletContent":
      return {
        ...state,
        currentWalletContent: payload
      }

    case "token/CollectionDetail":
      return {
        ...state,
        collectionDetail: payload
      }

    case "token/CollectionStatsById":
      return {
        ...state,
        collectionStats: payload
      }

    case "token/detailsLoading":
      return {
        ...state,
        isDetailsLoading: payload
      }

    default:
      return state
  }
}