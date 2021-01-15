import {Dimensions} from 'react-native';

export default {
  font: 'SlateBook',
  button: {
    radius: 100,
    size: {
      sm: 55,
    },
  },
  layout: {
    screenWidth: Dimensions.get('window').width,
    gutters: {
      xxs: 5,
      xs: 10,
      sm: 15,
      md: 20,
    },
  },
};
