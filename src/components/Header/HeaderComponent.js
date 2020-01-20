import React, { Component } from 'react';
import { ScrollView, Animated, Platform, StyleSheet, Easing } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import ButtonHeader from '../../commons/buttons/Button/ButtonHeader';
import SearchComponent from '../searchcomponent/SearchComponent';
import { variables } from '../../utils/constants';
import Capitalize from '../../utils/functions';
import Text from '../../commons/texts/Text/Text';

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const IMAGE_MAX_HEIGHT = 80;
const IMAGE_MIN_HEIGHT = 40;
const ICONHEADERSIZE = 20;
const AVATAR_USER = 'http://static.oprah.com/images/obc/201207/201207-happy-steps-6-600x411.jpg';

const Root = styled.View`
    flex: 1;
`;
const HeaderContainer = styled.View`
    flex: 1;
    flexDirection: row;
    paddingVertical: 15;
`;
const HeaderTitle = styled.View`
    flexDirection: row;
    paddingVertical: 15;
    paddingHorizontal: 15;
`;
const EnterImage = styled.Image`
    flex: 1;
    width: null;
    height: null;
`;

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollY: new Animated.Value(0),
            yValue: new Animated.Value(600),
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this._moveAnimationTopBottom()
        }, 1600)
    }
 
    _moveAnimationTopBottom = () => {
        Animated.timing(this.state.yValue, {
            toValue: 0,
            duration: 300,
            asing: Easing.linear
        }).start();
    }

    render() {

        const HEADERHEIGHT = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        const PROFILEIMAGEHEIGHT = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [IMAGE_MAX_HEIGHT, IMAGE_MIN_HEIGHT],
            extrapolate: 'clamp'
        })

        const PROFILEIMAGEMARGINTOP = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT - ( IMAGE_MAX_HEIGHT / 2 ), 
                HEADER_MAX_HEIGHT + 5],
            extrapolate: 'clamp'
        })

        const HEADERZINDEX = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        const HEADERTITLEBOTTOM = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + IMAGE_MIN_HEIGHT,
                HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + IMAGE_MIN_HEIGHT + 26],
            outputRange: [-20, -20, -20, 5],
            extrapolate: 'clamp'
        })

        const OPACITYHEADERTEXT = this.state.scrollY.interpolate({
            inputRange: [0, ( HEADER_MAX_HEIGHT + 100 ) - HEADER_MIN_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <Animated.View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        // backgroundColor: 'lightskyblue',
                        backgroundColor: this.props.theme.THIRD_BACKGROUND_COLOR_LIGHT,
                        height: HEADERHEIGHT,
                        zIndex: HEADERZINDEX,
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Animated.View style={{ 
                            position: 'absolute',
                            top: 40,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            // bottom: HEADERTITLEBOTTOM,
                            width: '100%', 
                            opacity: OPACITYHEADERTEXT,
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <Text color={props => props.theme.PRIMARY_TEXT_COLOR} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{this.props.headerText}</Text>
                        </Animated.View>
                    </Animated.View>
                    <ScrollView
                        style={[ styles.headercontainer ]}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{nativeEvent: { contentOffset: { y: this.state.scrollY }}}]
                        )}>                    
                        {/* <Animated.View style={[ styles.header, { bottom: this.state.yValue, 
                            justifyContent: 'center',
                        }]}> */}
                            <Animated.View style={{
                                height: PROFILEIMAGEHEIGHT,
                                width: PROFILEIMAGEHEIGHT,
                                borderRadius: IMAGE_MAX_HEIGHT / 2,
                                borderColor: this.props.theme.THIRD_BACKGROUND_COLOR_LIGHT,
                                borderWidth: 4,
                                overflow: 'hidden',
                                marginTop: PROFILEIMAGEMARGINTOP,
                                marginHorizontal: 10,
                                backgroundColor: this.props.theme.THIRD_BACKGROUND_COLOR_LIGHT
                            }}>
                                {/* <HeaderContainer>
                                    <ButtonHeader>
                                        <Entypo name='menu' size={ICONHEADERSIZE} color={colors.BLACK}/>
                                    </ButtonHeader>
                                    <SearchComponent/>
                                    <ButtonHeader>
                                        <FontAwesome name='filter' size={ICONHEADERSIZE} color={colors.BLACK}/>
                                    </ButtonHeader>
                                </HeaderContainer> */}
                                <EnterImage source={{ uri: AVATAR_USER ? AVATAR_USER : variables.AVATAR_USER_DEFAULT }} />
                            </Animated.View>
                            <HeaderTitle>
                                <Text color={props => props.theme.PRIMARY_TEXT_COLOR} fontsize={props => props.theme.FONT_SIZE_MASSIVE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>{this.props.headerText}</Text>
                            </HeaderTitle>
                            {this.props.children}
                        {/* </Animated.View> */}
                    </ScrollView>
                </Root>
            </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    headercontainer: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        minHeight: 35,
        height: 35
      },
})

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(HeaderComponent);
