import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import dynamicLinks from '@react-native-firebase/dynamic-links';

async function buildLink() {
  const link = await dynamicLinks().buildLink({
    link: 'https://firebasereferralreward.page.link',
    // domainUriPrefix is created in your Firebase console
    domainUriPrefix: 'https://referralrewardsapplication.page.link/DQbR',
    // optional setup which updates Firebase analytics campaign
    // "banner". This also needs setting up before hand
  });
  console.log(link);
  return link;
}

const App = () => {

  useEffect(() => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link.url === 'https://firebase-referral-reward.com') {
          // ...set initial route as offers screen
          console.log('Link: ', link);
        }
      });
  }, []);

  return (
    <View>
      <Button title='Test' onPress={buildLink} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})