/**
 * https://reactnavigation.org/docs/stack-navigator/#transitionpresets
 */
import CustomHeader from './components/CustomHeader';
import {TransitionPresets} from '@react-navigation/stack';

const defaultScreenOptions = {
  header: CustomHeader,
  ...TransitionPresets.SlideFromRightIOS,
};

export {defaultScreenOptions};
