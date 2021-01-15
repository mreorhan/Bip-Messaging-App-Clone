import {StyleSheet} from 'react-native';
import definitions from './definitions';
import {Colors} from './colors';

export default StyleSheet.create({
  profileBox: {
    backgroundColor: Colors.light,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 0.5,
    padding: definitions.layout.gutters.sm,
    marginBottom: definitions.layout.gutters.xs,
  },
});
