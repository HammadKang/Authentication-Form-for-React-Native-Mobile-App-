import React from 'react'
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {

    const onSignInApple = () =>{
        console.warn("Sign In With Apple");
    }
    const onSignInGoogle = () =>{
        console.warn("Sign In with Google");
    }
    const onSignInFacebook = () =>{
        console.warn("Sign In with Facebook");
    }
    return (
        <>
            <CustomButton 
            text="Sign In with Facebook"
            onPress={onSignInFacebook}
            bgColor="#E7EAF4"
            fgColor="#4765A9"/>
            <CustomButton text="Sign In with Google" onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"/>
            <CustomButton text="Sign In with Apple" onPress={onSignInApple}
            bgColor="#e3e3e3"
            fgColor="#363636"/>
        </>
    )
}

export default SocialSignInButtons
