import { StyleSheet, View, FlatList, SafeAreaView, Image, Dimensions, Text, TouchableOpacity } from "react-native"

export default function buttonDetailChart() {
  return (
    <TouchableOpacity>
      <Text style={styles.button}>30d</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 8,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 65,
    borderRadius: 8,
    color: '#E94560'
  }
})