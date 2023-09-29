import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Pressable} from 'react-native';
import Input from '../../components/Input/Input';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from '../../navigation/Routes';

const Login = ({navigation})=> {
    const [fullname, setFullName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    console.log(email);
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex ]}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container} >
                    <View style={globalStyle.marginBottom24}>
                        <Header type={1} title={"Hello and Welcome!"}/>
                    </View>
                    <View>
                        <View style={globalStyle.marginBottom24}>
                            <Input 
                                 keyboardType={'email-address'}
                                label={'First & Last Name'} 
                                placeholder={'ّEnter your full name'} 
                                onChangeText={(value)=> setFullName(value)} />
                        </View>
                        <View style={globalStyle.marginBottom24}>
                            <Input 
                                 keyboardType={'email-address'}
                                label={'Email'} 
                                placeholder={'Enter your email'} 
                                onChangeText={(value)=> setEmail(value)} />
                        </View>
                        <View style={globalStyle.marginBottom24}>
                            <Input
                                secureTextEntry={true}
                                label={'Password'}
                                placeholder={'******'}
                                onChangeText={value => setEmail(value)}/>
          
                        </View>
                        <View>
                            <Button  title={'Login'} />
                        </View>
                        <Pressable style={style.registrationButton} onPress={()=>navigation.navigate(Routes.Registration)}>
                            <Header color={'#156CF7'} type={3} title={"Don't  have an account"} />
                        </Pressable>
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
};

export default Login;