import {StyleSheet} from 'react-native';
import definitions from './definitions';
import {Colors} from './colors';

export default StyleSheet.create({
  //general
  flexCenter: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  bgWhite: {
    backgroundColor: Colors.light,
  },
  bgLightGrey: {
    backgroundColor: Colors.lightBlue,
  },
  alignHorizontalCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationText: {
    backgroundColor: Colors.lightGrey,
    color: Colors.grey,
    borderRadius: definitions.button.radius,
    paddingHorizontal: definitions.layout.gutters.sm,
    paddingVertical: definitions.layout.gutters.xs,
  },

  //general
  //messages begin
  floatButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    shadowColor: '#3d3d3d4a',
    shadowOpacity: 1,
    elevation: 8,
    height: definitions.button.size.sm,
    width: definitions.button.size.sm,
  },
  tabBar: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    borderBottomColor: Colors.grey,
    borderBottomWidth: 0.5,
  },
  flex: {
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  //messages end

  //contactlist
  contactIndex: {
    marginLeft: definitions.layout.gutters.sm,
    fontWeight: 'bold',
  },
  fixTop: {
    marginTop: definitions.layout.gutters.sm,
  },
  //contactlist

  //app
  userNameTextHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.light,
  },
  userLastSeenTextHeader: {
    fontSize: 11,
    fontWeight: 'bold',
    color: Colors.light,
  },
  actionIcon: {
    padding: definitions.layout.gutters.xs,
  },
  //app
});
