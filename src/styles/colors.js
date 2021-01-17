const Colors = {
  green: '#25D366',
  grey: 'gray',
  light: 'white',
  lightGrey: '#e8e8e8',
  lightestGrey: '#ececec',
  lightBlue: '#ecf0f6',
  red: '#dc024c',
};

// const MyTheme = {
//   dark: false,
//   colors: {
//     primary: 'rgb(255, 45, 85)',
//     background: 'rgb(242, 242, 242)',
//     card: 'rgb(255, 255, 255)',
//     text: 'rgb(28, 28, 30)',
//     border: 'rgb(199, 199, 204)',
//     notification: 'rgb(255, 69, 58)',
//   },
// };

const NativeColorTheme = {
  dark: false,
  colors: {
    primary: Colors.green,
    background: Colors.light,
    card: Colors.green,
    text: '#fff',
    border: '#fff',
    notification: '#121212',
    backgroundLight: Colors.lightGrey,
    backgroundChat: Colors.lightBlue,
    input: Colors.light,
  },
};

const NightColorTheme = {
  dark: true,
  colors: {
    primary: '#fff',
    background: '#121212',
    card: '#121212', // header
    text: '#fff',
    border: '#232323',
    notification: '#121212',
    backgroundLight: '#373737',
    backgroundChat: '#373737',
    input: '#2c2c2e',
  },
};

export {Colors, NightColorTheme};
