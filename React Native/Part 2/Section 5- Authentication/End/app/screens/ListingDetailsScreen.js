import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import Text from '../components/Text';
import AppTextInput from '../components/TextInput';
import AppButton from '../components/Button';
import { KeyboardAvoidingView } from 'react-native';
import send from '../api/messages';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  console.log('check', listing);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    send.send(message, listing.id);
  };
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}
    >
      <View>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>
          <View style={styles.userContainer}>
            <ListItem
              image={require('../assets/mosh.jpg')}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
