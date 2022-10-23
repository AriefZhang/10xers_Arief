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
