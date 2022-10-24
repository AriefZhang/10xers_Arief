import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, View, FlatList, SafeAreaView, Image, Dimensions, Text, TouchableOpacity } from "react-native"

import { getCollection, getCollectionStats } from '../../api/10xers'
import { setCollectionDetail, setCollectionStatsById } from "../redux/action/token"

import LineChart from '../components/chart'
import ButtonChart from '../components/button'

let windowWidth = Dimensions.get("window").width;

const widthDetailCard = (windowWidth - 30) * 0.5

export default function CollectionDetails({ route, navigation }) {
  const { id } = route.params
  const dispatch = useDispatch()
  const [isUpOrDown, setIsUpOrDown] = useState()
  
  const { currentWalletContent, collectionDetail, isDetailsLoading } = useSelector(store => store.tokenReducer)

  const checkCurrentCollectionId = (collection) => {
    return collection.filter(list => list.external_id === id)[0]
  }
  
  useEffect(() => {
    getCollection
    .get('collections')
    .then(({data}) => {
      const currentCollection = checkCurrentCollectionId(data)
      const oneDay = Number(currentCollection.one_day_change)
      if (oneDay >= 0) setIsUpOrDown('up')
      else if (oneDay < 0) setIsUpOrDown('down')
      dispatch(setCollectionDetail(currentCollection))

      return getCollectionStats.get(`collection_stats?collection_id=${currentCollection.id}`)
    })
    .then(({data}) => {
      dispatch(setCollectionStatsById(data))
    })
    .catch(err => console.error(err))
  }, [dispatch])

  const view = () => {
    navigation.navigate("Home")
  }

  const formatNum = (number) => {
    return Number(number).toFixed(4)
  }

  return (
    <SafeAreaView>
      <View style={styles.bannerWrapper}>
        <TouchableOpacity style={styles.iconBackWrapper} onPress={view} >
          <Image source={require('../assets/icons8-back-arrow-64.png')}style={styles.iconBack}/>
        </TouchableOpacity>
        <Image source={{uri: collectionDetail.banner_image_url}} style={styles.bannerImg} blurRadius={5} />
        <Image source={{uri: collectionDetail.image_url}} style={styles.collectionImg} />
        <View style={styles.informationWrapper}>
          <View style={styles.informationContent}>
            <Text style={styles.informationContentTitle}>ITEMS</Text>
            <Text style={styles.informationContentData}>{currentWalletContent.collections.length}</Text>
          </View>
          <View style={styles.informationContent}>
            <Text style={styles.informationContentTitle}>TOTAL VOLUME</Text>
            <Text style={styles.informationContentData}>{formatNum(collectionDetail.total_volume)}</Text>
          </View>
          <View style={styles.informationContent}>
            <Text style={styles.informationContentTitle}>1 DAY</Text>
            {
              isUpOrDown === 'up' ? (
                <Text style={styles.informationContentDataUp}>{formatNum(collectionDetail.one_day_change)}</Text>
              ) : (
                <Text style={styles.informationContentDataDown}>{formatNum(collectionDetail.one_day_change)}</Text>
              )
            }
          </View>
        </View>
      </View>
      <View style={styles.chartWrapper}>
        <View style={styles.buttonChartWrapper}>
          <Text style={styles.textName}>{currentWalletContent.name}</Text>
          <ButtonChart />
        </View>
        <View style={styles.ethereumWrapper}>
          <Image style={styles.iconEthereum} source={require('../assets/icons8-ethereum-100.png')}/>
          <Text style={styles.textEthereum}>{collectionDetail.total_sales}</Text>
        </View>
        <LineChart />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bannerWrapper: {
    position: 'relative'
  },
  iconBackWrapper: {
    position: 'absolute',
    left: 15,
    top: 15,
    zIndex: 2
  },
  iconBack: {
    width: 40,
    height: 40
  },
  bannerImg: {
    width: windowWidth,
    height: 165
  },
  collectionImg: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: 35,
    left: windowWidth / 2 - 40,
    zIndex: 1
  },
  informationWrapper: {
    width: windowWidth - 40,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: 3,
    left: 20,
    top: 135,
    shadowColor: '#000000',
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  informationContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  informationContentTitle: {
    color: '#BDBDBD',
    fontSize: 16,
    fontWeight: '400'
  },
  informationContentData: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500'
  },
  informationContentDataUp: {
    color: '#3D8361',
    fontSize: 16,
    fontWeight: '500'
  },
  informationContentDataDown: {
    color: '#E0144C',
    fontSize: 16,
    fontWeight: '500'
  },
  chartWrapper: {
    paddingHorizontal: 15,
    paddingTop: 150,
    backgroundColor: '#FFFFFF',
    position: 'relative'
  },
  buttonChartWrapper: {
    position: 'absolute',
    top: 50,
    right: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  textName: {
    color: '#16213E',
    textAlign: 'right',
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 6
  },
  ethereumWrapper: {
    position: 'absolute',
    zIndex: 5,
    left: 20,
    top: 60,
    width: 200,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconEthereum: {
    width: 25,
    height: 25
  },
  textEthereum: {
    color: '#16213E',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 6
  }
})