// @flow
import React from 'react';
import {Text as TextNative} from 'react-native';
import PropTypes from 'prop-types';
import styles from '_styles/typography';

const getStyleVariant = variant => {
  switch (variant) {
    case 'bigbold1':
      return styles.bigbold1;
    case 'bigregular1':
      return styles.bigregular1;
    case 'bigregular2':
      return styles.bigregular2;
    case 'medium1':
      return styles.medium1;
    case 'bold1':
      return styles.bold1;
    case 'headline1':
      return styles.headline1;
    case 'headline2':
      return styles.headline2;
    case 'headline3':
      return styles.headline3;
    case 'headline4':
      return styles.headline4;
    case 'bodytext1':
      return styles.bodytext1;
    case 'bodytext2':
      return styles.bodytext2;
    case 'bottomnavbar':
      return styles.bottomnavbar;
    case 'textprice1':
      return styles.textprice1;
    case 'textprice2':
      return styles.textprice2;
    case 'textprice3':
      return styles.textprice3;
    case 'discountPrice':
      return styles.discountPrice;
    case 'highlightText1':
      return styles.highlightText1;
    case 'highlightText2':
      return styles.highlightText2;
    case 'highlightText3':
      return styles.highlightText3;
    case 'highlightText4':
      return styles.highlightText4;
    case 'highlightText5':
      return styles.highlightText5;
    case 'regular1':
      return styles.regular1;
    case 'confirmationText':
      return styles.confirmationText;
    case 'errorText':
      return styles.errorText;
    case 'smallNoteText':
      return styles.smallNoteText;
    default:
      return {};
  }
};

function Text({variant, children, onPress}) {
  const styleVariant = getStyleVariant(variant);
  return (
    <TextNative onPress={onPress} style={[styleVariant]}>
      {children}
    </TextNative>
  );
}

Text.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

Text.defaultProps = {
  variant: 'bodytext1',
  onPress: () => {},
};

export default Text;
