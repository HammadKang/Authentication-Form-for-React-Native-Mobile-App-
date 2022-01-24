import React,{useState}from 'react';
import { View, Text,Image,StyleSheet,ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[newPassword,setnewPassword] = useState('');

    const navigation = useNavigation();


    const onSignInPressed = () =>{
        navigation.navigate("Sign In");
    }
    const onRegisterPressed = () =>{
        navigation.navigate("Confirm E-mail");
    }
    const onPrivacyPressed = () =>{
        console.warn("onPrivacyPressed");
    }
    const onTermsPressed = () =>{
        console.warn("onTermsPressed");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.text}>Create an Account</Text>

            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="E-mail" value={email} setValue={setEmail}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder="New Password" value={newPassword} setValue={setnewPassword} secureTextEntry={true}/>

            <CustomButton text="Register" onPress={onRegisterPressed}/>
            <Text style={styles.register}>By registering, You confirm our<Text style={styles.internal} onPress={onTermsPressed}> Terms and Services</Text> and <Text style={styles.internal} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
            <SocialSignInButtons/>
            <CustomButton text="Have an Account? Sign-In" onPress={onSignInPressed} type="TERTIARY"/>
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

export default SignUpScreen;
