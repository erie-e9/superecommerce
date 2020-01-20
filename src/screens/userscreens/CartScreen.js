import React, { Component } from 'react';
import { StatusBar, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Touchable from '@appandflow/touchable';
// import I18n from '../../i18n';

import HeaderNavigationBarComponent from '../../ios11/HeaderNavigationBar/HeaderNavigationBarComponent';
import CartListComponent from '../../components/Cart/CartListComponent';
import Text from '../../commons/texts/Text/Text';
import { variables } from '../../utils/constants';

const Root = styled(Touchable).attrs({
    feedback: 'none'
  })`
    flex: 1;
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

class CartScreen extends Component {
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

    render() {
    return (
        <ThemeProvider theme={this.props.theme}>
            <Root onPress={this._onOutSidePress}>
                <StatusBar
                    backgroundColor='rgba(255, 59, 48, 1)'
                    barStyle={this.props.theme.THIRD_BACKGROUND_COLOR_LIGHT === '#333333' ? 'light-content' : 'dark-content'}/>
                <HeaderNavigationBarComponent 
                title={'Cart'}
                searchComponent={true}>
                    <CartListComponent/>
                </HeaderNavigationBarComponent>
            </Root>
        </ThemeProvider> 
    )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
});
  
export default connect(mapStateToProps)(CartScreen);