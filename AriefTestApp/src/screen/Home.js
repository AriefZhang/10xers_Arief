import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, View, FlatList, SafeAreaView, Image, Dimensions, Text } from "react-native"
import { setWalletContent, setHomeLoading } from "../redux/action/token"
import { getWalletContent } from '../../api/10xers'
import HomeCardCollection from '../components/card'

let windowWidth = Dimensions.get("window").width;

const widthHomeCard = (windowWidth - 30) * 0.5

const groupingColection = (value) => {
  let listColection = {}

  value.forEach(token => {
    let collection = JSON.parse(token.collection_json)

    if (!listColection[collection.id]) {
      listColection[collection.id] = {
        id: collection.external_id,
        image_url: collection.image_url,
        name: collection.name,
        collections: []
      }
    }
    listColection[collection.id].collections.push(token)
  })

  let groupOfCollection = []

  for (let list in listColection) {
    groupOfCollection.push(listColection[list])
  }

  return groupOfCollection
}

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const { walletContents, isHomeLoading } = useSelector(store => store.tokenReducer)

  useEffect(() => {
    getWalletContent
      .get()
      .then(({data}) => {
        let collections = groupingColection(data)
        dispatch(setWalletContent(collections))
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setHomeLoading(false)))
  }, [dispatch])

  const view = (id) => {
    navigation.navigate("Details", { id })
  }

  const renderItem = ({ item }) => {
    return (
      <HomeCardCollection data={item} view={view} />
    )
  }

  return (
    <SafeAreaView style={styles.homeContainer}>
      <FlatList
        numColumns={2}
        data={walletContents}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 5,
    paddingBottom: 10
  },
  cardWallet: {
    backgroundColor: '#5DA7DB',
    height: widthHomeCard,
    width: widthHomeCard,
    borderRadius: 8,
    overflow: "hidden",
    margin: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5
  },
  img: {
    width: '100%',
    height: '100%'
  }
})

export default Home