import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import dynamicLinks from '@react-native-firebase/dynamic-links';

async function buildLink() {
  const STRING = "invitedBy";
  const SENDER_UID = 'USER1234';
  const link = await dynamicLinks().buildShortLink({
    link: `https://firebase-referral-reward.com/?${STRING}=${SENDER_UID}`,
    // domainUriPrefix is created in your Firebase console
    domainUriPrefix: 'https://referralrewardsapplication.page.link',
    android: {
      packageName: 'com.rn_firebase_referral_rewards',
    },
    // optional setup which updates Firebase analytics campaign
    // "banner". This also needs setting up before hand
  });
  console.log(link);
  return link;
}

const App = () => {
  useEffect(() => {

    function getParameterFromUrl(url, parm) {
      var re = new RegExp('.*[?&]' + parm + '=([^&]+)(&|$)');
      var match = url.match(re);
      console.log(match)
      return match ? match[1] : '';
    }

    dynamicLinks()
      .getInitialLink()
      .then(link => {
        const url = link?.url;
        console.log(link)
        if(url){
          const id = getParameterFromUrl(url, 'invitedBy');
          console.log("id: ", id)
        }
      });
  }, []);

  return (
    <View>
      <Button title="Test" onPress={buildLink} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
