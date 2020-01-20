import React, { Component } from 'react';
import { FlatList, Dimensions, ScrollView, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import BannerNewFooter from './BannerNewFooter';
import ButtonDefault from '../../commons/buttons/Button/ButtonDefault';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';
import Text from '../../commons/texts/Text/Text';
import PopularsComponent from '../Populars/PopularsComponent';

const horizontalMargin = 8;
const slideWidth = 260;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 155;

const Root = styled.View`
  flex: 1;
`;
const HeaderView = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  paddingHorizontal: 15;
  paddingTop: 15;
  paddingBottom: 5;
`;
const StickView = styled.View`
  alignSelf: center;
  justifyContent: center;
  paddingTop: 15;
`;
const Stick = styled.View`
  height: 10;
  width: 55;
  borderRadius: 5;
  backgroundColor: ${props => props.theme.THIRD_BACKGROUND_COLOR};
`;
const FlatListContainer = styled.View`
  flex: 1.60;
  marginLeft: 15;
`;
const ThumbnailBackgroundView = styled.View`
  justifyContent: flex-start;
  alignSelf: flex-start;
  width: ${itemWidth};
  height: ${itemHeight};
  marginHorizontal: ${horizontalMargin};
  borderRadius: 10;
`;
const BannerTitleTextContainer = styled.View`
  justifyContent: flex-start;
  bottom: 80;
  left: 10;
  shadowColor: rgba(0, 0, 0, 0.4);
  shadowOffset: -1px 1px;
  shadowOpacity: 0.7;
  shadowRadius: 0.5;
`;
const BannerDataView = styled.View`
  flexDirection: row;
  alignContent: space-between;
  justifyContent: space-between;
  bottom: 140;
  width: 100%;
`;
const Optionview = styled.View`
  flexDirection: row;
  alignContent: flex-end;
  justifyContent: space-between;
  alignItems: center;
`;
const AddFavoriteView = styled.View`
  justifyContent: center;
  paddingHorizontal: 5;
  paddingRight: 8;
`;
const ButtonContainer = styled.View`
  flexDirection: row;
  justifyContent: center;
  shadowColor: rgba(0, 0, 0, 0.4);
  shadowOffset: 1px 1px;
  shadowOpacity: 0.5;
  shadowRadius: 0.5;
`;
const CategorySlugView = styled.View`
  alignSelf: flex-start;
  justifyContent: center;
  height: 20;
  width: 60;
  borderTopRightRadius: 10;
  borderBottomRightRadius: 10;
  backgroundColor: ${props => props.theme.WHITE};
`;
const CategorySlugTextContainer = styled.View`
  alignSelf: center;
`;
const CurrentBannerImage = styled.Image`
  justifyContent: center;
  alignSelf: center;
  width: ${itemWidth};
  height: ${itemHeight};
  boxShadow: 5px 10px;
  borderRadius: 12;
  backgroundColor: ${props => props.theme.GREEN};
`;
const CurrentBannerTO = styled.View`
`;
const SubHeader = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR_LIGHT};
`;

class BannerNewComponent extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      columns: 1,
      loading: false,
      isFetching: false,
      yValuesubheader: new Animated.Value(600),
    }
    this.props = props;
    this._carousel = {}; 
  }

  componentDidMount() {
    this.getItems();
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
      this.setState({ loading: true })
      const url = 'https://randomuser.me/api/?seed=1&page=1&results=20';
      fetch(url)
          .then(res => res.json())
          .then(res => {
              this.setState({
                  data: [
                    {
                      id: 'WpIAc9by5iU',
                      thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/fajitas-de-ternera-hero.jpg?w=768',
                      title: 'Fajitas de ternera',
                      origincountry: 'Mexican',
                      price: '80.00',
                      favorite: true
                    }, {
                      id: 'VOgFZfRVaww',
                      thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/humus-rapido.jpg?w=768',
                      title: 'Humus mexicano rápido',
                      origincountry: 'Italian',
                      price: '17.00',
                      favorite: false
                    }, {
                      id: 'sNPnbI1arSE',
                      thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/guacamole-picante-con-maiz.jpg?w=768',
                      title: 'Guacamole picante con maíz',
                      origincountry: 'Mexican',
                      price: '10.00',
                      favorite: true
                    }
                  ],
                  loading: false,
                  isFetching: false
              })    
              setTimeout(() => {
                this._moveAnimationBottomTop();
              }, 500)
          })
  }

  onRefresh() {
      this.setState({ isFetching: true }, function() { this.getItems() });
  }


  _moveAnimationBottomTop = () => {
    Animated.timing(this.state.yValuesubheader, {
      toValue: 0,
      duration: 300,
      asing: Easing.linear
    }).start();
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <Animated.View style={{             
          flex: 1,
          backgroundColor: this.props.theme.PRIMARY_BACKGROUND_COLOR_LIGHT,
          top: this.state.yValuesubheader,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          overflow: 'hidden', }}>
          <SubHeader>
            <StickView>
              <Stick/>
            </StickView>
            <HeaderView>
              <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>New orders</Text>
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
                <Text color={props => props.theme.PRIMARY_COLOR} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>More</Text>
              </ButtonCurve>
            </HeaderView>
            <ScrollView
            showsVerticalScrollIndicator={false}>
              <FlatListContainer>
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
                              <CurrentBannerImage source={{uri: item.thumbnail ? item.thumbnail : this.props.theme.noImage}} />
                            </CurrentBannerTO>
                            <BannerDataView>
                              <CategorySlugView>
                                <ButtonCurve
                                  feedback='opacity'
                                  disabled={false}
                                  background={props => props.theme.TRANSPARENT}
                                  paddinghorizontal={3}
                                  paddingvertical={3}>
                                  <CategorySlugTextContainer>
                                    <Text color={props => props.theme.PRIMARY_COLOR} fontsize={props => props.theme.FONT_SIZE_SMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{item.origincountry}</Text>
                                  </CategorySlugTextContainer>
                                </ButtonCurve>
                              </CategorySlugView>
                              <Optionview>
                                <AddFavoriteView>
                                    <ButtonCurve
                                      feedback='highlight'
                                      disabled={false}
                                      background={props => props.theme.TRANSPARENT}
                                      paddinghorizontal={6}
                                      paddingvertical={5}
                                      borderradius={15}>
                                      <ButtonContainer>
                                        {item.favorite 
                                          ? <FontAwesome name='heart' size={this.props.theme.FONT_SIZE_SEMILARGE} color={this.props.theme.RED}/>
                                          : <FontAwesome name='heart-o' size={this.props.theme.FONT_SIZE_SEMILARGE} color={this.props.theme.WHITE}/>
                                        }
                                      </ButtonContainer>
                                    </ButtonCurve>
                                </AddFavoriteView>
                              </Optionview>
                            </BannerDataView>
                            <BannerTitleTextContainer>
                              <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{item.title}</Text>
                            </BannerTitleTextContainer>
                            <BannerNewFooter item={item}/>
                        </ThumbnailBackgroundView>
                      )}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}/>
              </FlatListContainer>
              <PopularsComponent/>
            </ScrollView>
          </SubHeader>
        </Animated.View>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.themeReducer.theme
});

export default connect(mapStateToProps)(BannerNewComponent);