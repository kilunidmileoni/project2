import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Form from './form';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    { name: 'Google', anons: 'Google!!!', full: 'Google is cool!', key: '1', img: 'https://itproger.com/img/courses/x1615637098.jpg.pagespeed.ic.OU0Vkmnzo7.jpg'},
    { name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!', key: '2', img: 'https://itproger.com/img/courses/x1606232997.jpg.pagespeed.ic.B0rS2gG5ea.jpg'},
    { name: 'FaceBook', anons: 'FaceBook!!!', full: 'FaceBook is cool!', key: '3', img: 'https://itproger.com/img/courses/x1550320843.jpg.pagespeed.ic.TdWnk6_L-N.jpg'}
  ]);

  const [modelWindow, setModelWindow] = useState(false);

  const addArticle = (article) => {
    setNews ((list) => {
      article.key = Math.random().toString();
      return [
        article, 
        ...list
      ]
    });
    setModelWindow(false);
  }

  return (
    <View style={gStyle.main}>
      <Modal visible={ modelWindow }>
        <View style={gStyle.main}>
        <AntDesign name="closecircle" size={34} color="red" style={styles.iconClose} onPress={() => setModelWindow(false)}/>
          <Text style={styles.title}>Форма добавления статей</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons name="add-circle" size={34} color="green" style={styles.iconAdd} onPress={() => setModelWindow(true)}/>
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <FlatList data={news} renderItem={({item}) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
          <Image style={styles.image} source={{uri: item.img }} />
          <Text style={styles.title}>{ item.name }</Text>
          <Text style={styles.anons}>{ item.anons }</Text>
        </TouchableOpacity>
      )} />
      </View>
  );
}

const styles = StyleSheet.create({
  iconClose: {
    textAlign: 'center',
    marginTop: 40
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: 200
  },
  header: {
    marginBottom: 30
  },
  item: {
    width: '100%',
    marginBottom: 30.
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  }
});
