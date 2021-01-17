import {StyleSheet} from 'react-native';
import definitions from './definitions';
import {Colors} from './colors';

export default StyleSheet.create({
  scrollViewChat: {
    flex: 1,
    width: '100%',
    padding: definitions.layout.gutters.sm,
  },
  scrollViewChatContainer: {
    paddingBottom: 80,
  },
  bottomAreaContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.light,
    width: '100%',
    padding: 5,
  },
  bottomAreaEmoji: {
    bottom: 280,
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
  messageBySender: {
    borderBottomRightRadius: 0,
    marginVertical: definitions.layout.gutters.xxs,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  messageByReceiver: {
    borderBottomLeftRadius: 0,
    marginVertical: definitions.layout.gutters.xxs,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
  },
  timeText: {
    fontSize: 11,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  messageBox: {
    paddingHorizontal: definitions.layout.gutters.xs,
    paddingVertical: definitions.layout.gutters.xxs,
    borderRadius: 10,
    backgroundColor: Colors.light,
    elevation: 1,
    shadowColor: Colors.lightGrey,
  },
});
