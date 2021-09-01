import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Card = ({user}) => {
  const {name, image, bio} = user;
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri:
              image ||
              'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
          }}
          style={styles.image}>
          <View style={styles.cardInner}>
            <Text style={styles.name}>{name || 'error'}</Text>
            <Text style={styles.bio}>{bio || 'error'}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  cardInner: {
    padding: 10,
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },
});
