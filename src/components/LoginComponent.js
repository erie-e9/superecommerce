import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import InputOutline from '../commons/formControls/Input/InputOutline';
import { colors, colorsthemeone } from '../utils/constants';
// import Capitalize from '../utils/functions';
import ButtonCurve from '../commons/buttons/Button/ButtonCurve';
import Text from '../commons/texts/Text/Text';

const email = 'Email';
const password = 'Password';

const Root = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;
const InputContainer = styled.View`
    width: 100%;
    paddingVertical: 2;
    paddingBottom: 8;
`;
const ButtonContainer = styled.View`
    paddingTop: 14;
`;

class LoginComponent extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    _onChangeText = (text, type) => this.setState({[type]:text});
    _checkIfDisabled() {
        const { email, password } = this.state;
        if(!email || !password){
            return true
        }
        return false
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <InputContainer>
                        <InputOutline 
                            textalign='flex-start'
                            color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT}
                            bordercolor={props => props.theme.GRAYFBINPUTTEXT}
                            placeholder={email} 
                            keyboardtype='email-address'
                            autofocus={false}
                            textcontenttype='username'
                            onchangetext={text => this._onChangeText(text, 'email')}
                            />
                    </InputContainer>
                    <InputContainer>
                        <InputOutline 
                            textalign='flex-start'
                            color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT}
                            bordercolor={props => props.theme.GRAYFBINPUTTEXT}
                            placeholder={password} 
                            keyboardtype='default'
                            autofocus={false}
                            securetextentry={true}
                            textcontenttype={'none'}
                            onchangetext={text => this._onChangeText(text, 'password')}
                            />
                    </InputContainer>
                    <ButtonContainer>
                        <ButtonCurve
                            feedback='opacity'
                            disabled={this._checkIfDisabled()}
                            background={props => props.theme.PRIMARY_COLOR}
                            paddinghorizontal={45}
                            paddingvertical={9}
                            borderradius={16}>
                            <Text color={this._checkIfDisabled() ? props => props.theme.GRAYSEMILIGHT : props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>Log in</Text>
                        </ButtonCurve>
                    </ButtonContainer>
                </Root>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(LoginComponent);

/*
color={} backgroundcolor={} bordercolor={} borderwidth={} borderradius={} height={}
                value={}
                placeholder={`${placeholder}`} 
                placeholderTextColor={}
                keyboardtype='phone-pad'
                autocapitalize={``}
                allowfontscaling={``}
                autocorrect={``}
                autofocus={``}
                bluronsubmit={``}
                carethidden={``}
                clearbuttonmode={``}
                contextmenuhidden={``}
                editable={``}
                enablesreturnkeyautomatically={``}
                underlinecolorandroid={``}
                keyboardappearance={``}
                maxlength={``}
                multiline={``}
                numberoflines={``}
                returnkeylabel={``}
                securetextentry={``}
                selectioncolor={``}
                spellcheck={``}
                textcontenttype={``}
                returnkeytype={``}
*/