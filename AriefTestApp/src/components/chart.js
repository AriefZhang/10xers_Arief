import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from "react-native"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import PureChart from 'react-native-pure-chart';

let windowWidth = Dimensions.get("window").width;

export default function Chart() {
  const { collectionStats } = useSelector(store => store.tokenReducer)

  const dataChart = useMemo(() => computeDataChart(collectionStats), [collectionStats])

  return (
    <View style={styles.chartWrapper}>
      <PureChart
        type={'line'}
        data={dataChart}
        width={'100%'}
        height={75}
        customValueRenderer={(index, point) => {
          return (
            <Text style={{textAlign: 'center'}}>{point.y}</Text>
          )
        }}
      />
    </View>
    )
}

const computeDataChart = (collectionStats) => {
  return collectionStats.map(stat => Number(stat.floor_price_eth)).slice(0,30).reverse()
}

const styles = StyleSheet.create({
  chartWrapper: {
    width: windowWidth - 40
  }
})
