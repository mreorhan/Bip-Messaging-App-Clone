const Colors = {
  green: '#25D366',
  grey: 'gray',
  light: 'white',
  lightGrey: '#e8e8e8',
  lightestGrey: '#ececec',
  lightBlue: '#ecf0f6',
  red: '#dc024c',
  darkBlack: '#121212',
  darkGrey: '#373737',
  lavender: '#8252d7',
};

const NativeColorTheme = {
  dark: false,
  colors: {
    primary: Colors.green,
    background: Colors.light,
    card: Colors.green,
    text: '#000',
    border: Colors.lightGrey,
    notification: Colors.darkBlack,
    backgroundLight: Colors.lightGrey,
    backgroundChat: Colors.lightBlue,
    input: Colors.lightGrey,
    chatInputContainer: Colors.light,
  },
};

const NightColorTheme = {
  dark: true,
  colors: {
    primary: Colors.light,
    background: Colors.darkBlack,
    card: Colors.darkBlack, // header
    text: Colors.light,
    border: '#232323',
    notification: Colors.darkBlack,
    backgroundLight: Colors.darkGrey,
    backgroundChat: Colors.darkGrey,
    input: '#2c2c2e',
    chatInput: Colors.darkBlack,
  },
};
const LavenderTheme = {
  dark: true,
  colors: {
    primary: Colors.lavender,
    background: Colors.light,
    card: Colors.lavender, // header
    text: Colors.lavender,
    border: '#232323',
    notification: Colors.darkBlack,
    backgroundLight: Colors.lightGrey,
    backgroundChat: Colors.lightGrey,
    input: '#2c2c2e',
    chatInput: Colors.lightGrey,
  },
};

export {Colors, NightColorTheme, NativeColorTheme, LavenderTheme};
