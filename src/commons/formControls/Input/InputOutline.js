import React, { Component }  from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { colors } from '../../../utils/constants';

const Input = styled.TextInput.attrs(props => ({
    selectionColor: Platform.OS === 'ios' ? colors.GRAYFBINPUTTEXT : colors.GRAYFBINPUTTEXT,
    autoCorrect: false,
}))`
    width: 100%;
    height: 36;
    alignSelf: center;
    borderRadius: 20;
    paddingHorizontal: 20;
    color: ${props => props.color};
    backgroundColor: ${props => props.theme.TRANSPARENT};
    borderColor: ${props => props.bordercolor};
    borderWidth: 0.2;
    zIndex: 1000;
    fontSize: ${props => props.textsize ? props.textsize : props.theme.FONT_SIZE_SEMIMEDIUM};
    fontWeight: ${props => props.theme.FONT_WEIGHT_MEDIUM};
`;
// color: ${props => props.theme.GRAY600};

class EinputOutline extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        
    }
    render() {
        const { 
            color,
            bordercolor,
            placeholder,
            keyboardtype,
            autofocus,
            securetextentry,
            textcontenttype,
            returnkeytype,
            onchangetext,
            textalign,
            placeholderTextColor } = this.props;
        return (
            <ThemeProvider theme={this.props.theme}>
                <Input
                    color={color ? color : this.props.theme.GRAYFBINPUTTEXT}
                    bordercolor={bordercolor ? bordercolor : this.props.theme.GRAYLIGHT}
                    // value=''
                    placeholder={placeholder ? placeholder : 'placeholder'}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : this.props.theme.GRAYFBINPUTTEXT}
                    keyboardType={keyboardtype}
                    autoCapitalize='none'
                    allowFontScaling={true}
                    autoCorrect={true}
                    autoFocus={autofocus ? autofocus : false}
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
                    secureTextEntry={securetextentry ? securetextentry : false} //password
                    // selectionColor={props => props.theme.PRIMARY_COLOR}
                    spellCheck={true}
                    textContentType={textcontenttype ? textcontenttype : 'none'}
                    returnKeyType={returnkeytype}
                    textAlign={textalign}
                    // selection="1, 4"//? no sé we xd
                    // onBlur={text => this._onBlur(text)}
                    // onChange={text => this._onChange(text)}
                    // onEndEditing={text => this._onEndEditing(text)}
                    // onFocus={text => this._onFocus(text)}
                    onChangeText={onchangetext}
                    // ref={(input) => {this.emailInput = input }}
                    // onKeyPress={}
                    // onScroll={}
                    />
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(EinputOutline);

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