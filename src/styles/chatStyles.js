import {StyleSheet} from 'react-native';
import definitions from './definitions';
import {Colors} from './colors';

export default StyleSheet.create({
  bottomAreaContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.light,
    width: '100%',
    padding: 5,
  },
  input: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 20,
    height: 44,
    width: definitions.layout.screenWidth - 130,
  },
  inputFull: {},
  attach: {
    position: 'absolute',
    right: 0,
  },
  sendButtonContainer: {
    marginLeft: 10,
  },
  sendButton: {
    backgroundColor: Colors.green,
    borderRadius: definitions.button.radius,
    padding: 10,
    height: 44,
    width: 44,
    elevation: 3,
    shadowColor: Colors.grey,
  },
});
