import {Dimensions, Image, SafeAreaView, StyleSheet, Text, View,TextInput, TouchableOpacity,Button} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <SafeAreaView style={styles.Login}>
      <View style={styles.wrapAvatar}>
        <Image
          source={require('../asset/image/User_font_awesome.svg.png')}
          style={styles.avatar}
        />
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View>
        <TextInput
          style={styles.usernameInput}
          placeholder="Username"
          keyboardType="text"
        />
        <TextInput
          style={styles.usernameInput}
          placeholder="Password"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.loginTouch}>
          <Text>Forgot Your Password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonLogin}>
          <Button
          color={"green"}
            title="Login"
            onPress={() => Alert.alert('Login succesfully')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Login: {
    backgroundColor: '#714272',
    flex: 1,
  },
  wrapAvatar: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginTop: 30,
  },
  avatar: {width: 200, height: 200},
  loginText: {
    fontSize: 30,
    color: 'black',
    marginBottom: 15,
  },
  usernameInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    marginTop: 15,
  },
  loginTouch: {
    alignSelf: 'center',
  },
  buttonLogin: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    marginTop: 15,
  },
});
