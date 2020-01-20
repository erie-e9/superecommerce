import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../../utils/constants';

const Input = styled.TextInput.attrs({
    selectionColor: Platform.OS === 'ios' ? colors.GRAYFBINPUTTEXT : colors.GRAYFBINPUTTEXT,
    autoCorrect: false,
})`
    width: ${props => props.width};
    height: ${props => props.height};
    alignSelf: center;
    borderRadius: 10;
    color: ${props => props.theme.PRIMARY_TEXT_COLOR_LIGHT};
    backgroundColor: ${props => props.theme.GRAYLIGHT};
    borderColor: ${props => props.theme.GRAYLIGHT};
    borderWidth: 0.2;
    fontSize: ${props => props.textsize};
    fontWeight: ${props => props.theme.FONT_WEIGHT_MEDIUM};
`;
// color: ${props => props.theme.GRAY600};

export default function EinputDefault({
    value,
    placeholder,
    placeholderTextColor,
    keyboardtype,
    autocapitalize,
    allowfontscaling,
    autocorrect,
    autofocus,
    bluronsubmit,
    carethidden,
    clearbuttonmode,
    contextmenuhidden,
    editable,
    enablesreturnkeyautomatically,
    underlinecolorandroid,
    keyboardappearance,
    maxlength,
    multiline,
    numberoflines,
    returnkeylabel,
    securetextentry,
    selectioncolor,
    spellcheck,
    textcontenttype,
    returnkeytype,
    textalign,
    textsize,
    height,
    width,
    onchangetext
 }) {
    return (
            <Input
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : 'rgba(141, 148, 158, 1)'} //GRAYFBINPUTTEXT
                keyboardType={keyboardtype}
                autoCapitalize='none'
                allowFontScaling={true}
                autoCorrect={true}
                autoFocus={autofocus}
                blurOnSubmit={false}
                caretHidden={false}
                clearButtonMode={clearbuttonmode}
                contextMenuHidden={false}
                editable={editable}
                enablesReturnKeyAutomatically={false}
                underlineColorAndroid='transparent'
                keyboardAppearance='dark'
                maxLength={100}
                multiline={false}
                numberOfLines={0} //android
                returnKeyLabel='ewe' //android
                secureTextEntry={securetextentry} //password
                spellCheck={true}
                textContentType={textcontenttype}
                returnKeyType={returnkeytype}
                textAlign={textalign}
                textsize={textsize}
                height={height}
                width={width}
                // selection="1, 4"//? no sé we xd
                // onBlur={text => this._onBlur(text)}
                onChangeText={onchangetext}
                // onEndEditing={text => this._onEndEditing(text)}
                // onFocus={text => this._onFocus(text)}
                // ref={(input) => {this.emailInput = input }}
                // onKeyPress={}
                // onScroll={}
                />
    )
}

/*  Notes
autoCapitalize enum:('none', 'sentences', 'words', 'characters')

keyboardType enum:('default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 
                'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search', 'visible-password')

textContentType enum:('none', 'URL', 'addressCity', 'addressCityAndState', 'addressState', 'countryName', 'creditCardNumber', 
'emailAddress', 'familyName', 'fullStreetAddress', 'givenName', 'jobTitle', 'location', 'middleName', 'name', 'namePrefix', 
'nameSuffix', 'nickname', 'organizationName', 'postalCode', 'streetAddressLine1', 'streetAddressLine2', 'sublocality', 
'telephoneNumber', 'username', 'password')

returnKeyType enum:('done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 
                    'google', 'join', 'route', 'yahoo')
*/