import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Pressable} from 'react-native';
import Input from '../../components/Input/Input';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

const Registration = ({navigation})=> {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    console.log(email);
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite,globalStyle.flex ]}>
            <View style={style.backButton}>
                <BackButton onPress={()=>navigation.goBack() }/>
            </View>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container} >
                    <View style={globalStyle.marginBottom24}>
                        <Header type={1} title={"Welcome Back"}/>
                    </View>
                    <View>
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
                      
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
};

export default Registration;