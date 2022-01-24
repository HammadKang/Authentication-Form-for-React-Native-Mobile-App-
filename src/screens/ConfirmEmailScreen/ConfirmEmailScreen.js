import React,{useState}from 'react';
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

    const[code,setCode] = useState('');

    const navigation = useNavigation();

    const onConfirmPressed = () =>{
        navigation.navigate("Home");
    }
    const onSingnInPressed = () =>{
        navigation.navigate("Sign In");
    }
    const onResendPressed = () =>{
        console.warn("onResendPressed");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.text}>Confirm your e-mail</Text>

            <CustomInput placeholder="Enter your Confirmation Code" value={code} setValue={setCode}/>
           
            <CustomButton text="Confirm" onPress={onConfirmPressed}/>
            <CustomButton text="Resend Code" onPress={onResendPressed} type="SECONDARY"/>
            <CustomButton text="Back to Sign-In" onPress={onSingnInPressed} type="TERTIARY"/>
        </View>
        </ScrollView>
    );
};

const styles= StyleSheet.create({
   root:{
       alignItems: 'center',
       padding: 20,
   },
   text:{
       fontSize: 28,
       fontWeight: 'bold',
       marginVertical:10,
       color:'black',
   },
   register:{
       marginVertical:7,
       color:'black',
   },
   internal:{
       color: 'yellow',
   },
    
})

export default ConfirmEmailScreen;
