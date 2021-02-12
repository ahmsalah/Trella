import aprecuLightProWoff from 'assets/fonts/apercu-light-pro.woff';
import aprecuLightProWoff2 from 'assets/fonts/apercu-light-pro.woff2';
import aprecuMediumProWoff from 'assets/fonts/apercu-medium-pro.woff';
import aprecuMediumProWoff2 from 'assets/fonts/apercu-medium-pro.woff2';
import aprecuRegularProWoff from 'assets/fonts/apercu-regular-pro.woff';
import aprecuRegularProWoff2 from 'assets/fonts/apercu-regular-pro.woff2';
import aprecuBoldProWoff from 'assets/fonts/apercu-bold-pro.woff';
import aprecuBoldProWoff2 from 'assets/fonts/apercu-bold-pro.woff2';
import aprecuBlackProWoff from 'assets/fonts/apercu-black-pro.woff';
import aprecuBlackProWoff2 from 'assets/fonts/apercu-black-pro.woff2';

export default [
  {
    fontFamily: 'apercu',
    src: `url(${aprecuLightProWoff}) format("woff2"), url(${aprecuLightProWoff2}) format("woff")`,
    fontStyle: 'normal',
    fontWeight: 300,
  },
  {
    fontFamily: 'apercu',
    src: `url(${aprecuRegularProWoff}) format("woff2"), url(${aprecuRegularProWoff2}) format("woff")`,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  {
    fontFamily: 'apercu',
    src: `url(${aprecuMediumProWoff}) format("woff2"), url(${aprecuMediumProWoff2}) format("woff")`,
    fontStyle: 'normal',
    fontWeight: 500,
  },
  {
    fontFamily: 'apercu',
    src: `url(${aprecuBoldProWoff}) format("woff2"), url(${aprecuBoldProWoff2}) format("woff")`,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  {
    fontFamily: 'apercu',
    src: `url(${aprecuBlackProWoff}) format("woff2"), url(${aprecuBlackProWoff2}) format("woff")`,
    fontStyle: 'normal',
    fontWeight: 800,
  },
];
