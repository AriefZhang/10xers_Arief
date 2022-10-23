import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { StyleSheet, View, FlatList, SafeAreaView, Image, Text } from "react-native"
import { setWalletContent, setHomeLoading } from "../redux/action/token"
import { getWalletContent } from '../../api/10xers'

const Home = () => {
  console.log('line atas')
  const dispatch = useDispatch()

  useEffect(() => {
    getWalletContent
      .get()
      .then(({data}) => {
        console.log(data, 'INI RESPONSE')
        dispatch(setWalletContent(data))
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setHomeLoading(false)))
  }, [dispatch])

  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.cardWallet}>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 12
  },
  cardWallet: {
    backgroundColor: '#7DE5ED',
    height: 100,
    width: '100%',
    borderRadius: 8
  }
})

const mapStateToProps = (state) => {
  const { walletContents, isHomeLoading } = state.tokenReducer;

  console.log(walletContents, '<<< Wallet Content')

  return {
    walletContents,
    isHomeLoading
  }
}

export default connect(mapStateToProps, { setWalletContent, setHomeLoading })(Home)