import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native';

export default function MovieList(props) {

    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        fetch('http://192.168.1.7:8000/api/movies/',{
            method:'GET',
            headers:{
                'Authorization':`Token 2b91d439d909018447820d6ccb05c2acbd39d31c`,
                'Accept': 'application/json',

            }
        })
        .then(res => res.json())
        .then(jsonRes => setMovies(jsonRes))
        .catch(error=> console.log(error));
        
    },[]);
  const movieclicked = (movie) =>{
    props.navigation.navigate("Detail",{movie: movie,title:movie.title})
  }
  return (
    <View >
      <Image source={require('../assets/logo.png')}
      style={{width:'100%',height:135,paddingTop:30}}
      resizeMode='contain'/>

      <FlatList
       data={movies}
       renderItem={({item})=>(
        <TouchableOpacity onPress={()=>movieclicked(item)}>

          <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>

          </View>
        </TouchableOpacity>
  )}
  keyExtractor={(item,index)=>index.toString()}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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

  }
});

