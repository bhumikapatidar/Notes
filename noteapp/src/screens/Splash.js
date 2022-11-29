import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';


export default function Splash({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/splash.json')} 
                loop ={false} 
                autoPlay 
                speed={0.5}
                onAnimationFinish={() => {
                    console.log("Animation Finished!")
                    navigation.replace('ViewNotes')
                }}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    }
})