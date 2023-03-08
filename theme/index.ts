import {
  extendTheme,
  type ThemeConfig,
  type RecursiveObject,
} from '@chakra-ui/react';
import colors from './colors';

const typography: RecursiveObject = {
  fonts: {
    heading: `"Open Sans", sans-serif`,
    body: `"Abel", sans-serif`,
    mono: `"JetBrains Mono", monospace`,
  },
};
const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};
// possible types:
// export { ChakraTheme, ColorHues, Colors, ComponentDefaultProps, ComponentMultiStyleConfig, ComponentSingleStyleConfig, ComponentStyleConfig, RecursiveObject, RecursiveProperty, SystemStyleObjectRecord, ThemeComponentFunction, ThemeComponentProps, ThemeComponents, ThemeConfig, ThemeDirection, ThemeTransitions, ThemingPropsThunk };
// https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/foundations
export default extendTheme({ config, colors, ...typography });
