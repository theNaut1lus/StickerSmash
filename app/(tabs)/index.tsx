import { StyleSheet, View } from "react-native";

import Button from '@/components/Button';
import PrimaryButton from '@/components/PrimaryButton';

import ImageViewer from "@/components/imageViewer";

const PlaceHolderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
      <View style={styles.footerContainer}>
        <PrimaryButton label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
