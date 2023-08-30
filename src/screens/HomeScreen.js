import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageSet from '../components/ImageSet';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View  style={styles.container}>
     <ImageSet  source={require("../img/Profile.jpg") }title=" Koranut Boonsukkerd" sub="6321655546"/>
     <ImageSet  
     source={{uri:"https://static.wikia.nocookie.net/hellokitty/images/8/8d/Sanrio_Characters_Kuromi_Image016.png"}} 
     title="Koromi" 
     sub="6321655546"/>
     <View style={styles.btnView}>
        <TouchableOpacity onPress={() => navigation.navigate("List")} >
            <Text style={styles.btnTitle}>
                Let's get started
            </Text>
        </TouchableOpacity>
     </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
        container: {
            flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2EBBF"
          },
      btnView: {
        width: 200,
        backgroundColor: "#F3B562",
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#fff",
        margin: 10,
        alignItems: "center",
      },
      btnTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#5C4B51",
      },
});

export default HomeScreen