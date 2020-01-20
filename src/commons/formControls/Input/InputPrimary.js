import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { colors, colorsthemeone } from '../../../utils/constants';

const Input = styled.TextInput.attrs(props => ({
    selectionColor: Platform.OS === 'ios' ? colorsthemeone.SECONDARY : undefined,
    autoCorrect: false,
}))`
    width: 100%;
    height: 45;
    alignSelf: center;
    borderRadius: 20;
    paddingHorizontal: 20;
    color: ${props => props.theme.GRAYFBINPUTTEXT};
    backgroundColor: ${props => props.theme.TRANSPARENT};
    borderColor: ${props => props.theme.PRIMARY_COLOR_LIGHT};
    borderWidth: 0.2;
`;
// color: ${props => props.theme.GRAY600};

export default function Einput({
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
    returnkeytype
 }) {
    return (
            <Input
                value=''
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : props => props.theme.GRAYFBINPUTTEXT}
                keyboardType={keyboardtype}
                autoCapitalize='none'
                allowFontScaling={true}
                autoCorrect={true}
                autoFocus={autofocus}
                blurOnSubmit={false}
                caretHidden={false}
                clearButtonMode='always'
                contextMenuHidden={false}
                editable={true}
                enablesReturnKeyAutomatically={false}
                underlineColorAndroid='transparent'
                keyboardAppearance='dark'
                maxLength={100}
                multiline={false}
                numberOfLines={0} //android
                returnKeyLabel='ewe' //android
                secureTextEntry={securetextentry} //password
                selectionColor={props => props.theme.PRIMARY_COLOR}
                spellCheck={true}
                textContentType={textcontenttype}
                returnKeyType={returnkeytype}

                // selection="1, 4"//? no sé we xd
                // onBlur={text => this._onBlur(text)}
                // onChange={text => this._onChange(text)}
                // onEndEditing={text => this._onEndEditing(text)}
                // onFocus={text => this._onFocus(text)}
                // onChangeText={text => this._onChangeText(text, 'email')}
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