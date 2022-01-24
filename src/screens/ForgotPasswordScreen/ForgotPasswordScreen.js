import React,{useState}from 'react';
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

    const[username,setUsername] = useState('');
    
    const navigation = useNavigation();

    const onSendPressed = () =>{
        navigation.navigate("New Password");
    }
    const onSingnInPressed = () =>{
        navigation.navigate("Sign In");
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.text}>Reset your Password</Text>

            <CustomInput placeholder="Enter your Username" value={username} setValue={setUsername}/>
           
            <CustomButton text="SEND" onPress={onSendPressed}/>
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

export default ForgotPasswordScreen;
