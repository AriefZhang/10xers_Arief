import axios from 'axios'

export const getWalletContent = axios.create({
  baseURL: "https://api-generator.retool.com/jlEsLB/wallet_content"
})

export const getCollection = axios.create({
  baseURL: "https://api-generator.retool.com/j3Iz08/collections"
})

export const getCollectionStats = axios.create({
  baseURL: "https://api-generator.retool.com/ELI42D/collection_stats",
})
