import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView } from 'react-native';
import NaviBar, { GOBACK_BUTTON, getSafeAreaInset, DEFAULT_NAVBAR_HEIGHT, InnerNaviBar } from 'react-native-pure-navigation-bar';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
// import Text from '../../commons/texts/Text/Text';

const Root = styled(Touchable).attrs({
    feedback: 'none'
  })`
    flex: 1;
`;

class HeaderNavigationBar extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            title: this.props.title,
            titleCenter: false,
            seperator: true,
            leftElement: undefined,
            rightElement: undefined,
            containerStyle: undefined,
            titleStyle: undefined,
            leftStyle: undefined,
            rightStyle: undefined,
            maxHeight: 150,
            mediumHeight: 100,
            minHeight: 75 
        };
    }

    render() {
        const { backgroundColor } = this.props
        // InnerNaviBar.defaultProps.isTranslucent = true;
        // // InnerNaviBar.defaultProps.gobackImage = false;
        InnerNaviBar.defaultProps.navbarHeight = this.props.searchComponent ? this.state.maxHeight : this.state.mediumHeight;
        InnerNaviBar.defaultProps.hasSeperatorLine = true;
        // InnerNaviBar.defaultProps.isTranslucent = true;
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <NaviBar
                        title={this.state.title}
                        titleCenter={this.state.titleCenter}
                        hasSeperatorLine={this.state.seperator}
                        leftElement={this.state.leftElement}
                        rightElement={this.state.rightElement}
                        leftElement={null}
                        style={{
                            container: {
                                backgroundColor: backgroundColor ? backgroundColor : this.props.theme.BACKGROUND_COLOR
                            },
                            seperator: {
                                borderBottomColor: this.props.theme.BLACK50,
                                borderBottomWidth: 0.3,
                            },
                            titleContainer: {
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'flex-end',
                                alignSelf: 'stretch',
                                paddingHorizontal: 0,
                                paddingBottom: 14,
                            },
                            title: {
                                fontSize: this.props.theme.FONT_SIZE_MASSIVE,
                                color: this.props.theme.PRIMARY_TEXT_COLOR,
                                fontWeight: 'bold',
                            },
                            leftView: {
                                // marginLeft: 16,
                            },
                            rightView: {
                                marginRight: 8,
                            },
                        }}
                    />
                    {this.props.children}
                </Root>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
});
  
export default connect(mapStateToProps)(HeaderNavigationBar);
