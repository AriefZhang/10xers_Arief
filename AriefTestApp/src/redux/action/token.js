export function setWalletContent(payload) {
  return {
    type: "token/fetchWalletContents",
    payload
  }
}

export function setHomeLoading(payload) {
  return {
    type: "token/homeLoading",
    payload
  }
}

export function setCurrentWalletContent(payload) {
  return {
    type: "token/currentWalletContent",
    payload
  }
}

export function setCollectionDetail(payload) {
  return {
    type: "token/CollectionDetail",
    payload
  }
}

export function setCollectionStatsById(payload) {
  return {
    type: "token/CollectionStatsById",
    payload
  }
}
