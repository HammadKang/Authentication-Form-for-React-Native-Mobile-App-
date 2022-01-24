import React,{useState}from 'react';
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {

    const[code,setCode] = useState('');
    const[newPassword,setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () =>{
        navigation.navigate("Home");
    }
    const onSingnInPressed = () =>{
        navigation.navigate("Sign In");
    }
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.text}>Reset your Password</Text>

            <CustomInput placeholder="Enter your Code" value={code} setValue={setCode}/>
            <CustomInput placeholder="Enter your New Password" value={newPassword} setValue={setNewPassword}/>
           
            <CustomButton text="Submit" onPress={onSubmitPressed}/>
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

export default NewPasswordScreen;
