const tokenState = {
  walletContents: [],
  isHomeLoading: true,
  isDetailsLoading: true,
  currentCollectionExternalId: null,
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

    case "token/collectionExternalId":
      return {
        ...state,
        currentCollectionExternalId: payload
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