import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import dynamicLinks from '@react-native-firebase/dynamic-links';

async function buildLink() {
  const link = await dynamicLinks().buildLink({
    link: 'https://firebasereferralreward.page.link',
    // domainUriPrefix is created in your Firebase console
    domainUriPrefix: 'https://firebasereferralreward.page.link/76UZ',
    // optional setup which updates Firebase analytics campaign
    // "banner". This also needs setting up before hand
    analytics: {
      campaign: 'banner',
    },
  });
  console.log(link)
  return link;
}

const App = () => {
  return (
    <View>
      <Button title='Test' onPress={buildLink} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})