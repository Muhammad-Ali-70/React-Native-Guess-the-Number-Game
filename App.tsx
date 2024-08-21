import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ fontSize: 25, color: "black" }}>This is Home Sign</Text>
      <Text style={{ fontSize: 25, color: "black" }}>This is Home Sign</Text>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})