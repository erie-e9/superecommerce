import React, { Component } from 'react';
import { StatusBar, Keyboard, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Touchable from '@appandflow/touchable';
import HeaderNavigationBarComponent from '../../ios11/HeaderNavigationBar/HeaderNavigationBarComponent';
import BannerHeaderComponent from '../../components/Banners/BannerHeaderComponent';
import BannerNewComponent from '../../components/Banners/BannerNewComponent';
import PopularsComponent from '../../components/Populars/PopularsComponent';

const Root = styled(Touchable).attrs({
    feedback: 'none'
  })`
  flex: 1;
  backgroundColor: ${props => props.theme.THIRD_BACKGROUND_COLOR_LIGHT};
`;
const BodyContainer = styled.View`
  flex: 0.85;
  backgroundColor: ${props => props.theme.WHITE};
`;

  class HomeScreen extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        fadeValue: new Animated.Value(0),
        xValue: new Animated.Value(600),
        yValue: new Animated.Value(600),
        yValuesubheader: new Animated.Value(600),
      }
    }
  
    componentDidMount() {
      // setTimeout(() => {
      //   this._moveAnimationTopBottom()
      // }, 1600)
  
      // setTimeout(() => {
      //   this._moveAnimationHeader()
      // }, 700)
    }
  
    _onOutSidePress = () => Keyboard.dismiss();
    // reloadEffects  = () => {
    //   Animated.timing(this.state.yValue, {
    //     toValue: 200,
    //     duration: 300,
    //     asing: Easing.linear
    //   }).start();
    //   Animated.timing(this.state.xValue, {
    //         toValue: 900,
    //         duration: 300,
    //         asing: Easing.linear
    //   }).start();
    //   Animated.timing(this.state.yValuesubheader, {
    //         toValue: 900,
    //         duration: 300,
    //         asing: Easing.linear
    //   }).start();
  
    //   setTimeout(() => {
    //     this._moveAnimationTopBottom()
    //   }, 1200)
  
    //   setTimeout(() => {
    //     this._moveAnimationHeader()
    //   }, 700)
  
    //   setTimeout(() => {
    //     this._moveAnimationBottomTop()
    //   }, 1200)
  
    // }
  
    _moveAnimationTopBottom = () => {
      Animated.timing(this.state.yValue, {
        toValue: 0,
        duration: 300,
        asing: Easing.linear
      }).start();
    }
  
    _moveAnimationHeader = () => {
      Animated.timing(this.state.xValue, {
        toValue: 0,
        duration: 300,
        asing: Easing.linear
      }).start();
    }
  
    render() {
      return (
        <ThemeProvider theme={this.props.theme}>
          <Root>
            {/* <StatusBar
              backgroundColor='rgba(255,255,255,1)'
              barStyle={this.props.theme.THIRD_BACKGROUND_COLOR_LIGHT == '#333333' ? 'light-content' : 'dark-content'}/> */}
              <HeaderNavigationBarComponent
                title='Menu'
                searchComponent={false}
                backgroundColor={this.props.theme.THIRD_BACKGROUND_COLOR_LIGHT}>
                <BannerHeaderComponent/>
                <BodyContainer>
                  <BannerNewComponent/>
                </BodyContainer>
            </HeaderNavigationBarComponent>
          </Root>
        </ThemeProvider>
      )
    }
  }
  
const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(HomeScreen);