import React, { Component } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Touchable from '@appandflow/touchable';
// import I18n from '../../i18n';
import LoginComponent from '../../components/LoginComponent';
import Card from '../../commons/layouts/Card/Card';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';
import Text from '../../commons/texts/Text/Text';
import { variables } from '../../utils/constants';

const SLIDEWIDTH = 120;
const ITEMHEIGHT = 120;

const Root = styled(Touchable).attrs({
    feedback: 'none'
  })`
    flex: 1;
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
const EnterImage = styled.Image`
    boxShadow: 5px 5px;
    width: ${SLIDEWIDTH};
    height: ${ITEMHEIGHT};
    borderRadius: 7;
    marginTop: 40;
    shadowOpacity: 0.2;
`;
const EnterTop = styled.View`
    flex: 0.65;
    alignItems: center;
    paddingVertical: 5;
    zIndex: 1000;
`;
const EnterContainer = styled.View`
    top: 20;
`;
const EnterBody = styled.View`
    flex: 0.5;
    justifyContent: center;
    height: 400;
    width: 100%;
    bottom: 0;
    position: absolute;
    zIndex: 10;
`;
const EnterBodyHead = styled.View`
    flexDirection: row;
    alignContent: space-around;
    justifyContent: space-between;
    paddingHorizontal: 55;
    top: 10;
`;
const EnterBodyTitleView = styled.View`
    paddingVertical: 0;
`;
const UnderCard = styled.View`
    alignSelf: flex-end;
    marginHorizontal: 20;
    paddingVertical: 0;
    zIndex: 10;
`;
const EnterCurveContainer = styled.View`
    flex: 1;
`;
const Curve = styled.View`
    alignSelf: center;
    justifyContent: flex-start;
    width: 0;
    height: 0;
    borderLeftWidth: 500;
    borderLeftColor: ${props => props.theme.TRANSPARENT};
    borderRightWidth: 500;
    borderRightColor: ${props => props.theme.TRANSPARENT};
    borderBottomWidth: 1000;
    borderBottomColor: ${props => props.theme.PRIMARY_COLOR};
    borderRadius: 500;
    bottom: 850;
    overflow: hidden;
`;
const EnterFooter = styled.View`
    flex: 0.35;
    justifyContent: center;
    alignItems: center;
`;

class EnterScreen extends Component {
    constructor() {
        super();
        this.state = {
            loginButton: false,
            email: '',
            password: ''
        }
    }

    // componentDidMount() {

    // }
    
    _onOutSidePress = () => Keyboard.dismiss();
    
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
                <Root onPress={this._onOutSidePress}>
                    <StatusBar
                        backgroundColor='rgba(245,157,145,1)'
                        barStyle={this.props.theme.THIRD_BACKGROUND_COLOR_LIGHT == '#333333' ? 'light-content' : 'dark-content'}/>
                    <EnterTop>
                        <EnterImage source={{ uri: 'https://www.qdoba.com/static/images/picnic/FeaturedFood@2x_500x550_TacoSalad.png' }} />
                        <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_SEMIMASSIVE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>{variables.COMPANYNAME}</Text>
                        <Text color={props => props.theme.WHITE50} fontsize={props => props.theme.FONT_SIZE_SMALL} fontweight={props => props.theme.FONT_WEIGHT_SEMIMEDIUM}>{variables.COMPANYSLOGAN}</Text>
                    </EnterTop>
                    <EnterCurveContainer>
                        <Curve/>
                    </EnterCurveContainer>
                    <EnterContainer>
                        <EnterBody>
                            <EnterBodyHead>
                                <EnterBodyTitleView>
                                    <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_EXTRA_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>Log in</Text>
                                </EnterBodyTitleView>
                                <EnterBodyTitleView>
                                    <Text color={props => props.theme.WHITE50} fontsize={props => props.theme.FONT_SIZE_EXTRA_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>Sign up</Text>
                                </EnterBodyTitleView>
                            </EnterBodyHead>
                            <Card
                                minheight={100} maxheight={200} backgroundcolor={props => props.theme.THIRD_BACKGROUND_COLOR_LIGHT} width={370} 
                                padding={`11%`} shadowcolor={props => props.theme.SHADOW} shadowoffset={`0px 4px`} shadowradius={2}
                                shadowopacity={0.2} elevation={2} marginvertical={20} marginhorizontal={12} borderradius={6}>
                                <LoginComponent/>
                            </Card>
                            <UnderCard>
                                <ButtonCurve
                                    feedback='opacity'
                                    disabled={false}
                                    background={props => props.theme.TRANSPARENT}
                                    paddinghorizontal={3}
                                    paddingvertical={3}
                                    borderradius={10}>
                                    <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>Forgot password?</Text>
                                </ButtonCurve>
                            </UnderCard>
                        </EnterBody>
                    </EnterContainer>
                    <EnterFooter>
                    </EnterFooter>
                </Root>
            </ThemeProvider> 
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
});
  
export default connect(mapStateToProps)(EnterScreen);