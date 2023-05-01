// import React from 'react';
// import { SafeAreaView,View, StyleSheet, Text, Button,TouchableOpacity,Image } from 'react-native';
// import Donation from './Payment';
// import QuranChapters from './QuranChapters';


// const HomeScreen = ({navigation}) => {
//     return (
//     <SafeAreaView style={{ flex:1,backgroundColor:'#F2ECD8', }}>
//     <Image
//       source={require('../assets/Logo.jpg')}
//       style={styles.LogoImageStyle}
//     />
//     <View style={styles.container}>
//       <TouchableOpacity
//       onPress={() => navigation.navigate('ZakatCalculator')} 
//         style={styles.buttonStyle}
//         activeOpacity={.5}>
//         <Image
//           source={{
//             uri:
//               'https://www.islamic-relief.org.uk/wp-content/uploads/2022/11/zakat-rules-hero.jpg',
//           }}
//           style={styles.buttonImageIconStyle}
//         />
//         <Text style={styles.buttonTextStyle}>Zakat Calculator </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('QuranChapters')} 
//         style={styles.buttonStyle}
//         activeOpacity={.5}>
//         <Image
//           source={{
//             uri:
//               'https://i0.wp.com/islamtheultimatepeace.com/wp-content/uploads/2021/09/holy-quran.jpeg?fit=2000%2C1333&ssl=1',
//           }}
//           style={styles.buttonImageIconStyle}
//         />
//         <Text style={styles.buttonTextStyle}>Al-Quran</Text>
//       </TouchableOpacity>
      
//     </View>
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={() => console.log('Ramadan Guide Pressed')} 
//         style={styles.buttonStyle}
//         activeOpacity={.5}>
//         <Image
//           source={{
//             uri:
//               'https://images.template.net/122624/ramadan-symbol-vector-zbcqk.jpg',
//           }}
//           style={styles.buttonImageIconStyle}
//         />
//         <Text style={styles.buttonTextStyle}>Ramadan Guide</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => console.log('Alarm Pressed')} 
//         style={styles.buttonStyle}
//         activeOpacity={.5}>
//         <Image
//           source={{
//             uri:
//               'https://media.istockphoto.com/id/1173500687/vector/red-alarm-clock-isolated-on-blue-background.jpg?s=612x612&w=0&k=20&c=Ttc6l3lBmrtOmwfTPruG6jmMGj5Y2dPV8OPsQjjYw0E=',
//           }}
//           style={styles.buttonImageIconStyle}
//         />
//         <Text style={styles.buttonTextStyle}>Alarm</Text>
//       </TouchableOpacity>
      
//     </View>

//     <TouchableOpacity
//     onPress={() => navigation.navigate(Donation)}
//     style={styles.donateButton}
//     activeOpacity={.5}>
//       <Text style={styles.buttonTextStyle}>I want to Donate</Text>
//     </TouchableOpacity>

//    </SafeAreaView>
    
//         );
// }

// const styles = StyleSheet.create({
//     container: {
//         // flex: 0.5,
//         flexDirection:'row',
//         justifyContent:'center',
//         alignItems:'center',
        
//         // margin: 10,
//         // marginTop: 30,
//         // padding: 10,
//       },
//       donateButton:{
//         alignSelf:'center',
//         borderColor:'#362222',
//         borderWidth:3,
//         marginTop:50,
//         marginBottom:10,
//         borderRadius:100,
//         width:'90%',
//         backgroundColor:'#B5C7E6',
//       },
//       buttonStyle: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         borderWidth: 3,
//         borderColor: '#362222',
//         height: 180,
//         width:170,
//         borderRadius: 20,
//         margin: 5,
//       },
//       buttonImageIconStyle: {
//         padding: 50,
//         margin: 5,
//         height: 130,
//         width: 150,
//         // resizeMode:'st',
//       },
//       LogoImageStyle:{
//         borderRadius:70,
//         margin:20,
//         alignSelf:'center',
//         height:200,
//         width:200,
//       },
//       buttonTextStyle: {
//         color: '#1E255A',
//         textAlign:'center',
//         fontSize:22,
//         fontWeight:'bold',
//         textAlign:'center',
//       },

//   });
import React from 'react';
import { ScrollView,View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Islamic Hub</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ZakatCalculator')}
          >
            <ImageBackground
              source={{ uri: 'https://www.islamic-relief.org.uk/wp-content/uploads/2022/11/zakat-rules-hero.jpg' }}
              style={styles.buttonBackground}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <Text style={styles.buttonText}>Zakat Calculator</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('QuranChapters')}
          >
            <ImageBackground
              source={{ uri: 'https://i0.wp.com/islamtheultimatepeace.com/wp-content/uploads/2021/09/holy-quran.jpeg?fit=2000%2C1333&ssl=1' }}
              style={styles.buttonBackground}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <Text style={styles.buttonText}>Al-Quran</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TasbihScreen')}
          >
            <ImageBackground
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7222/7222042.png' }}
              style={styles.buttonBackground}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <Text style={styles.buttonText}>Tasbih</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Alarm Pressed')}
          >
            <ImageBackground
              source={{ uri: 'https://media.istockphoto.com/id/1173500687/vector/red-alarm-clock-isolated-on-blue-background.jpg?s=612x612&w=0&k=20&c=Ttc6l3lBmrtOmwfTPruG6jmMGj5Y2dPV8OPsQjjYw0E=' }}
              style={styles.buttonBackground}
              imageStyle={{ resizeMode: 'cover' }}
            >
              <Text style={styles.buttonText}>Alarm</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#B5C7E6' }]}
            onPress={() => navigation.navigate('Donation')}
          >
            <Text style={styles.buttonText}>I Want to Donate</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  background: {
    flex: 5,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    padding:10,
  },
  button: {
    height: 150,
    justifyContent: 'flex-end',
    borderRadius: 15,
    marginBottom: 10,
    overflow: 'hidden',
  },
  buttonBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
});

export default HomeScreen;

