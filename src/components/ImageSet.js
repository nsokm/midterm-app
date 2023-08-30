import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageSet = ({source,title,sub ="",sam=""}) => {
  return (
    <View  style={styles.imageContainer}>
      <Image source={source} style={styles.image} onPress={() => navigation.navigate("Item")}/>
      <Text style={styles.imgTitle}>{title}</Text>
      <Text style={styles.imgSubTitle}>{sub}</Text>
      <Text style={styles.pink}>{sam}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: "center",
        marginVertical: 10,
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
        justifyContent:'center',
        alignItems:'center'
      },
      imgSubTitle: {
        color: "#666",
        alignItems:'center',
        justifyContent:'center'
      },
      sam:{
        color: "blue",
        alignItems:'center',
        justifyContent:'center'
      }
});

export default ImageSet