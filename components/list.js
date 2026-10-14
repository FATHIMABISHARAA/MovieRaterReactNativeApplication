import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function MovieList() {

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

  return (
    <View >
      
      <FlatList
       data={movies}
       renderItem={({item})=>(
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.title}</Text>

        </View>

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



// import { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

// export default function MovieList() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetch('http://192.168.1.7:8000/api/movies/', {
//       method: 'GET',
//       headers: {
//         Authorization: 'Token 2b91d439d909018447820d6ccb05c2acbd39d31c',
//       },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((jsonRes) => {
//         // DRF pagination may return movies inside a results property.
//         setMovies(Array.isArray(jsonRes) ? jsonRes : jsonRes.results ?? []);
//       })
//       .catch((err) => {
//         console.log('Movie fetch error:', err);
//         setError(err.message);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) {
//     return <ActivityIndicator style={{ flex: 1 }} size="large" />;
//   }

//   if (error) {
//     return <View style={styles.container}><Text>Error: {error}</Text></View>;
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={movies}
//         keyExtractor={(item) => String(item.id)}
//         renderItem={({ item }) => (
//           <Text style={styles.movie}>{item.title}</Text>
//         )}
//         ListEmptyComponent={<Text>No movies found.</Text>}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//     paddingTop: 50,
//   },
//   movie: {
//     fontSize: 18,
//     paddingVertical: 10,
//   },
// });