import React, { useState } from 'react';
import { Alert, Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [phone, setPhone] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      
      <Text style={styles.label}>Nhập Số Điện Thoại:</Text>
      <Text style={styles.label}>Dùng Số Điện Thoại Để Đăng Nhập Hoặc Đăng Ký Tài Khoản Trên Redmi Turbo 4:</Text>


      
      <TextInput 
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn..."
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone} 
      />
      
      <Button 
        title="Tiếp Tục" 
        onPress={() => Alert.alert("Thông báo", "Số vừa nhập: " + phone)} 
      />
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 200,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'flex-start' 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%', 
    padding: 15,
    marginBottom: 20,
    fontSize: 18
  }
});
