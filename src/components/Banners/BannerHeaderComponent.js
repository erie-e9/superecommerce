import React, { Component } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '../../commons/texts/Text/Text';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';
import ButtonDefault from '../../commons/buttons/Button/ButtonDefault';
import Separator from '../../commons/layouts/Separator/Separator';

const horizontalMargin = 10;
const slideWidth = 300;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 175;

const Root = styled.View`
  flex: 0.75;
`;
const HeaderView = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  paddingHorizontal: 15;
  paddingTop: 30;
`;
const SectionRightView = styled.View`
  flexDirection: row;
  justifyContent: flex-start;
`;
const SectionRightContainer = styled.View`
  paddingLeft: 10;
`;
const SectionleftContainer = styled.View`
  flexDirection: row;  
  paddingRight: 5;
`;
const SectionLeftView = styled.View`
  flexDirection: row;
  justifyContent: flex-end;
`;
const CarouselBackgroundView = styled.View`
  flex: 1;
  height: ${itemHeight};
  justifyContent: center;
  alignItems: center;
  alignContent: center;
  marginTop: 10;
`;
const ThumbnailBackgroundView = styled.View`
  justifyContent: center;
  alignItems: center;
  alignSelf: center;
  width: ${itemWidth};
  height: ${itemHeight};
  marginHorizontal: ${horizontalMargin};
  borderRadius: 7;
  paddingTop: 75;
`;
const MetaContainer = styled.View`
  alignItems: center;
  bottom: 125;
`;
const BannerTitleTextContainer = styled.View`
  marginBottom: 10;
`;
const CategoryTextContainer = styled.View`
  shadowColor: rgba(0, 0, 0, 0.2);
  shadowOffset: -1px 1px;
  shadowOpacity: 1;
  shadowRadius: 0.5;
  marginBottom: 10;
`;
const CurrentBannerImage = styled.Image`
  justifyContent: center;
  alignSelf: center;
  width: ${itemWidth};
  height: ${itemHeight};
  boxShadow: 5px 10px;
  borderRadius: 12;
  backgroundColor: ${props => props.theme.WHITE85};
`;
const CurrentBannerTO = styled.View`
  justifyContent: center;
`;

class BannerHeaderComponent extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        id: 'WpIAc9by5iU',
        thumbnail: 'https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/slow-cooked-pulled-pork-nachos-hero.jpg?w=768',
        title: 'Slow Cooker Pulled Pork Nachos',
        category: 'Mexican food'
      }, {
        id: 'sNPnbI1arSE',
        thumbnail: 'https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/hearty-beef-bean-chilli-burritos-hero.jpg?w=768',
        title: 'Burritos with minced meat filling',
        category: 'Mexican food'
      }, {
        id: 'VOgFZfRVaww',
        thumbnail: 'https://www.oldelpaso.co.uk/-/media/oep/uk/recipes/easy-salsa-burrito-hero.jpg?w=768',
        title: 'Easy Salsa Chicken Burritos',
        category: 'Mexican food'
      }],
      errors: [],
      columns: 1
    }
    this.props = props;
    this._carousel = {};
  }

  _handleSnapToItem(index){
    console.log('snapped to ', index)
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Root>
            <HeaderView>
              <SectionRightView>
                <ButtonCurve
                  feedback='opacity'
                  disabled={false}
                  background={props => props.theme.TRANSPARENT}
                  paddinghorizontal={3}
                  paddingvertical={3}
                  bordertopleftradius={10}
                  bordertoprightradius={10}
                  borderbottomrightradius={10}
                  borderbottomleftradius={10}>
                  <Text color={props => props.theme.PRIMARY_COLOR} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>Now</Text>
                </ButtonCurve>
                  <SectionRightContainer>
                    <ButtonCurve
                      feedback='opacity'
                      disabled={false}
                      background={props => props.theme.TRANSPARENT}
                      paddinghorizontal={3}
                      paddingvertical={3}
                      bordertopleftradius={10}
                      bordertoprightradius={10}
                      borderbottomrightradius={10}
                      borderbottomleftradius={10}>
                      <Text color={props => props.theme.THIRD_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>Hot</Text>
                    </ButtonCurve>
                  </SectionRightContainer>
              </SectionRightView>
              <SectionLeftView>
                  <SectionleftContainer>
                  <ButtonCurve
                    feedback='opacity'
                    disabled={false}
                    background={props => props.theme.TRANSPARENT}
                    paddinghorizontal={3}
                    paddingvertical={3}  
                    bordertopleftradius={10}
                    bordertoprightradius={10}
                    borderbottomrightradius={10}
                    borderbottomleftradius={10}>
                    <MaterialCommunityIcons name='map-marker-radius' color={this.props.theme.PRIMARY_TEXT_COLOR_LIGHT} size={this.props.theme.FONT_SIZE_SMALL}/>
                    <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMISMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>Bayacora</Text>
                    </ButtonCurve>
                  </SectionleftContainer>
              </SectionLeftView>
            </HeaderView>
            <Separator borderbottomwidth={0.3} width={'90%'} paddingvertical={2} paddinghorizontal={30} alignself='center'/>
            <CarouselBackgroundView>
                <FlatList
                    numColumns={this.state.columns}
                    data={this.state.data}
                    renderItem={
                      ({ item }) => (
                      <ThumbnailBackgroundView>
                          <CurrentBannerTO
                              // onPress={ () => { 
                              //     this._carousel.snapToItem(index);
                              //   }}
                              >
                              <CurrentBannerImage source={{ uri: item.thumbnail ? item.thumbnail : this.props.theme.noImage}} />
                          </CurrentBannerTO>
                          <MetaContainer>
                            <BannerTitleTextContainer>
                              <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{item.title}</Text>
                            </BannerTitleTextContainer> 
                            <CategoryTextContainer>
                              <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>{item.category}</Text>
                            </CategoryTextContainer>
                            <ButtonCurve                              
                              feedback='opacity'
                              disabled={false}
                              background={props => props.theme.WHITE}
                              paddinghorizontal={15}
                              paddingvertical={5}
                              borderradius={12}>
                              <Text color={props => props.theme.BLACK} fontsize={props => props.theme.FONT_SIZE_SEMIMEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>View</Text>
                            </ButtonCurve>
                          </MetaContainer>
                      </ThumbnailBackgroundView>
                      )}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    />
            </CarouselBackgroundView>
        </Root>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(BannerHeaderComponent);