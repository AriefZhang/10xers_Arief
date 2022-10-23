import { StyleSheet, View, Image, Dimensions, TouchableOpacity, Text } from "react-native"
import { useDispatch } from 'react-redux'
import { setCurrentWalletContent } from "../redux/action/token"

let windowWidth = Dimensions.get("window").width;

const widthHomeCard = (windowWidth - 30) * 0.5

export default function HomeCardCollection ({ navigation, data, view }) {
  const dispatch = useDispatch()

  const setWalletContent = () => {
    dispatch(setCurrentWalletContent(data))
    view(data.id)
  }

  return (
    <TouchableOpacity style={styles.cardWallet} onPress={setWalletContent}>
      <Image source={{ uri: data.image_url }} style={styles.img} />
      <View style={styles.badge}>
        <Image source={require('../assets/icons8-picture-48.png')} style={styles.badgeIcon} />
        <Text style={styles.badgeText}>{data.collections.length}</Text>
      </View>
      <View style={styles.cardTitleWrapper}>
        <Text style={styles.cardTitle}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardWallet: {
    position: 'relative',
    backgroundColor: 'rgb(89, 69, 69)',
    height: widthHomeCard + 30,
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
  cardTitleWrapper: {
    width: widthHomeCard,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20
  },
  img: {
    width: widthHomeCard,
    height: widthHomeCard,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  badge: {
    position: 'absolute',
    right: 10,
    bottom: 40,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 100, 100, 0.8)',
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600'
  },
  badgeIcon: {
    height: 24,
    width: 24,
    marginRight: 8
  }
})