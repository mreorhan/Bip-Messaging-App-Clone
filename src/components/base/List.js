import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import definitions from '../../styles/definitions';
import gStyles from '../../styles/gStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Press from './Press';
import {useState} from 'react';
import {Colors} from '../../styles/colors';
import {useTheme} from '@react-navigation/native';

const styles = StyleSheet.create({
  listItemText: {
    fontSize: 16,
  },
  listItemContainer: {
    marginLeft: definitions.layout.gutters.sm,
    marginHorizontal: definitions.layout.gutters.sm,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    paddingVertical: 18,
    paddingBottom: 14,
    width: '100%',
  },
  listItemIcon: {
    alignSelf: 'center',
    padding: definitions.layout.gutters.xxs,
    paddingLeft: definitions.layout.gutters.sm,
  },
});

export default ({list}) => {
  const theme = useTheme();
  const [renderedList, setList] = useState([]);
  useState(() => {
    setList(
      list.map((item, index) => {
        return (
          <Press {...item} key={index}>
            <View
              style={[
                gStyles.flex,
                gStyles.row,
                {backgroundColor: theme.colors.background},
              ]}>
              <View style={styles.listItemIcon}>
                <Icon name={item.icon} size={28} color={Colors.grey} />
              </View>
              <View
                style={[
                  styles.listItemContainer,
                  {borderBottomColor: theme.colors.border},
                ]}>
                <Text style={[styles.listItemText, {color: theme.colors.text}]}>
                  {item.title}
                </Text>
              </View>
            </View>
          </Press>
        );
      }),
    );
  });

  return <View>{renderedList}</View>;
};
