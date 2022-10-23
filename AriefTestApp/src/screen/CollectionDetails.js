import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Text } from "react-native"

let windowWidth = Dimensions.get("window").width;

const widthHomeCard = (windowWidth - 30) * 0.5

export default function CollectionDetails({ route, navigation }) {
  const { id } = route.params
  
  return (
    <>
      <Text>HALAMAN Detail</Text>
    </>
  )
}