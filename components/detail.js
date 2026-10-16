import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function Detail(props) {

  const movie = props.route.params?.movie ?? null;
  return (
    <View style={styles.Container}>
        {/* <Text>{movie?.title ?? 'Movie not found'}</Text>    */}
        <Text>Rating: {String(movie?.avg_ratings)}</Text>
        <View style={styles.starContainer}>
            <FontAwesomeIcon style={movie.avg_ratings >0 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_ratings >1 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_ratings >2 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_ratings >3 ? styles.orange : styles.white} icon={faStar}/>
            <FontAwesomeIcon style={movie.avg_ratings >4 ? styles.orange : styles.white} icon={faStar}/>
            <Text style={styles.white}>({movie.no_of_ratings})</Text>
        </View>

        <Text style={styles.description}>{movie?.description ?? 'Movie not found'}</Text>    
    </View>
  );
}

// Detail.navigationOptions= screenProps=>({
//     title:screenProps.navigation.getParam('title'),
//     headerStyle:{
//         backgroundColor:'orange'
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle:{
//         fontWeight:"bold",
//         fontSize:24
//     }
//  })

// Detail.options = {
//   title: 'Movie Details',
//   headerStyle: {
//     backgroundColor: 'orange',
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
// };
 
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:'#282C35',
    padding:10
  },
  item:{
    flex:1,
    padding:10,
    height:50,
    backgroundColor:'#282C35'

  },
  itemText:{
    color:'#fff',
    fontSize:24

  },
  description:{
    fontSize:20,
    color:'white',
    padding:10

  },
  starContainer:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:"row"
  },
  orange:{
    color:'orange'

  },
  white:{
    color:'white'

  }

});

