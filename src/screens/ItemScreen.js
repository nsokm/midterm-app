import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ItemScreen = ({route}) => {
    const {id_x, name_x, photo_x, foods_x, des_x} = route.params;
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={{uri:photo_x}}/>
    <Text style={styles.imgTitle}>{name_x}</Text>
    <Text style={styles.description}>{foods_x}</Text>
    <Text style={styles.description}>{des_x}</Text>
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2EBBF",
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "#000",
      },
      imgTitle: {
        fontSize: 18,
        fontWeight: "bold",
      },
      title:{
        fontSize:18,
        fontWeight:'bold'
    },
    description:{
        fontSize:16,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
        margin:10
    }
});

export default ItemScreen