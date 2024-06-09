// // import 'tailwind-rn';
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const { width, height } = Dimensions.get('window');

// const DonateFood = () => {
//   const navigation = useNavigation();
//   const [loadingDonate, setLoadingDonate] = useState(false);

//   const handleDonatePress = () => {
//     setLoadingDonate(true);
//     // Simulate donation process with a delay
//     setTimeout(() => {
//       setLoadingDonate(false);
//       navigation.navigate('Again');
//     }, 2000);
//   };

//   return (
//     <View className="flex-1 bg-black">
//       <Image
//         source={{
//           uri: 'https://i.pinimg.com/564x/7f/82/f5/7f82f50915fe46d9979a960da40895ba.jpg',
//         }}
//         className="h-2/3 w-full"
//         resizeMode="cover"
//       />

//       <View className="flex-1 p-6">
//         <Text style={styles.title} className="text-white text-3xl mb-6">Need4Need</Text>
//         <Text  style={styles.title} className="text-gray-300 mb-6">
//           Your contribution can make a difference. Help us feed those in need by donating food items today.
//         </Text>

//         <TouchableOpacity onPress={handleDonatePress}>
//           <View style={styles.button} className="bg-[#049bff] py-4 rounded-full items-center">
//             {loadingDonate ? (
//               <ActivityIndicator size="small" color="white" />
//             ) : (
//               <Text style={styles.title} className="text-white text-lg font-semibold">Proceed</Text>
//             )}
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = {
//   title: {
//     fontFamily: 'Poppins-Regular',
//   },
//   button: {
//     shadowColor: '#eca8ff', // Blue shadow color
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpt5acity: 0.8,
//     shadowRadius: 3,
//     elevation: 8, // For Android
//   },
// };

// export default DonateFood;
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const DonateFood: React.FC = () => {
  const navigation = useNavigation();
  const [loadingDonate, setLoadingDonate] = useState(false);

  const handleDonatePress = () => {
    setLoadingDonate(true);
    // Simulate donation process with a delay
    setTimeout(() => {
      setLoadingDonate(false);
      navigation.navigate('Tab');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/564x/d5/c2/10/d5c2106f6e6a9a8ff6a462a71371f58a.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text style={[styles.title, styles.heading]}>Indulge in the rich flavors and inviting atmosphere of Coffee.</Text>
        <Text style={[styles.title, styles.description]}>
        Step into our caffeinated oasis and savor the warmth of every cup.
        </Text>

        <TouchableOpacity onPress={handleDonatePress} style={styles.button}>
          <View>
            {loadingDonate ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={[styles.title, styles.buttonText]}>Proceed</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0907',
  },
  image: {
    height: height * 2 / 3,
    width: width,
  },
  textContainer: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontFamily: 'Poppins-Regular',
  },
  heading: {
    color: 'white',
    fontSize: 20,
    textAlign:'center',
    marginBottom: 12,
  },
  description: {
    color: '#6c6767',
    textAlign:'center',
    // fontSize: 12,

    marginBottom: 20,
  },
  button: {
    backgroundColor: '#c67c4e',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#e3691e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default DonateFood;
