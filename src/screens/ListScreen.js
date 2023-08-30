import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import ImageSet from '../components/ImageSet';
import data from '../data/data-001.json';


const ListScreen = ({navigation}) => {

// 

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      //key={item}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Item',{id_x: item.id+1,
                    name_x: item.name,
                    photo_x: item.photo_url,
                    foods_x: item.sample_foods,
                    des_x: item.description})}>
          <ImageSet source={{uri:item.photo_url}} title={item.name}/>
        </TouchableOpacity>
        </View> 
     }
        
      />
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
});

export default ListScreen