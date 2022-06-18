import { DefaultTheme } from 'styled-components';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const colors = {
  black: '#141529',
  white: '#ffffff',
  fail: '#EE7057',
  done: '#F7B048',
};

const theme: DefaultTheme = {
  colors,
};

export default theme;
