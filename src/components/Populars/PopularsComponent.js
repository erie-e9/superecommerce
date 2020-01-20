import React, { Component } from 'react';
import { FlatList, Dimensions, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Touchable from '@appandflow/touchable';
import Capitalize from '../../utils/functions';
import ButtonDefault from '../../commons/buttons/Button/ButtonDefault';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';
import Card from '../../commons/layouts/Card/Card';
import Text from '../../commons/texts/Text/Text';

const itemWidth = Dimensions.get('window').width;

const Root = styled.View`
    flex: 0.65;
`;
const HeaderView = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    paddingHorizontal: 15;    
    paddingTop: 15;
`;
const Touch = styled(Touchable).attrs({
    feedback: 'opacity',
    hitSlot: { top: 15, bottom: 15, right: 15, left: 15 }
}) `
    alignSelf: center;
`;
const CardContainerView = styled.View`
    top: 30
`;
const BannerDataView = styled.View`
    flexDirection: row;
    alignContent: flex-end;
    justifyContent: flex-end;
    bottom: 145;
    width: 100%;
`;
const Optionview = styled.View`
    flexDirection: row;
    alignContent: flex-end;
    justifyContent: flex-end;
    alignItems: flex-end;
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
const CardPopularImage = styled.Image`
    borderRadius: 10;
    opacity: 1;
`;
const CardMetaContainer = styled.View`
    justifyContent: flex-start;
    bottom: 45;
    left: 10;
    shadowColor: rgba(0, 0, 0, 0.4);
    shadowOffset: -1px 1px;
    shadowOpacity: 0.7;
    shadowRadius: 0.5;
`;
const FlatListContainer = styled.View`
    alignItems: center;
    alignContent: center;
    justifyContent: center;
`;

class PopularsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            columns: 2,
            loading: false,
            isFetching: false,
        }
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
                            index: 1,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/campaign/loaded-beef-sns-tacos16x9.jpg?w=768',
                            title: 'Tacos de carne picada con Barquitas',
                            origincountry: 'Mexican',
                            price: '$20.00',
                            favorite: true
                        }, {
                            id: 'VOgFZfRVaww',
                            index: 2,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/creamy-salsa-dip16-9.jpg?w=768',
                            title: 'Salsa cremosa para nachos',
                            origincountry: 'Mexican',
                            price: '$17.00',
                            favorite: true
                        }, {
                            id: 'sNPnbI1arSE',
                            index: 3,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/guacamole-picante-con-maiz.jpg?w=768',
                            title: 'Guacamole picante con maíz',
                            origincountry: 'Mexican',
                            price: '$10.00',
                            favorite: false
                        }, {
                            id: 'WpIAc9by5iUD',
                            index: 4,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/fajitas-de-ternera-hero.jpg?w=768',
                            title: 'Fajitas de ternera',
                            origincountry: 'Mexican',
                            price: '$20.00',
                            favorite: false
                        }, {
                            id: 'VOgFZfRVaww',
                            index: 5,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/creamy-salsa-dip16-9.jpg?w=768',
                            title: 'Salsa cremosa para nachos',
                            origincountry: 'Mexican',
                            price: '$17.00',
                            favorite: false
                        }, {
                            id: 'sNPnbI1arSE',
                            index: 6,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/guacamole-picante-con-maiz.jpg?w=768',
                            title: 'Guacamole picante con maíz',
                            origincountry: 'Mexican',
                            price: '$10.00',
                            favorite: true
                        }, {
                            id: 'WpIAc9by5iU',
                            index: 7,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/campaign/loaded-beef-sns-tacos16x9.jpg?w=768',
                            title: 'Tacos de carne picada con Barquitas',
                            origincountry: 'Mexican',
                            price: '$20.00',
                            favorite: false
                        }, {
                            id: 'VOgFZfRVaww',
                            index: 8,
                            thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/creamy-salsa-dip16-9.jpg?w=768',
                            title: 'Nachos',
                            origincountry: 'Mexican',
                            price: '$17.00',
                            favorite: true
                        }
                    ],
                    loading: false,
                    isFetching: false
                })
            })
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this.getItems() });
    }

    render() {
        if (this.state.loading) {
            return (
                <Root>
                    <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>Loading...</Text>
                </Root>
            )
        }
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <HeaderView>
                        <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>Popular food</Text>
                        <ButtonDefault
                            feedback='opacity'
                            disabled={false}
                            background={props => props.theme.TRANSPARENT}
                            paddinghorizontal={3}
                            paddingvertical={3}
                            borderradius={10}>
                            <Text color={props => props.theme.PRIMARY_COLOR} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>More</Text>
                        </ButtonDefault>
                    </HeaderView>
                    <FlatListContainer>
                        <FlatList
                            numColumns={this.state.columns}
                            data={this.state.data}
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.isFetching}
                            renderItem={
                                ({ item }) => (
                                    <Touch>
                                        <Card
                                            minheight={185} maxheight={185} backgroundcolor={props => props.theme.WHITE} width={(itemWidth - 45 * this.state.columns) / this.state.columns} 
                                            padding={`0%`} shadowcolor={props => props.theme.SHADOW} shadowoffset={`0px 3px`} shadowradius={2}
                                            shadowopacity={0.2} elevation={2} marginvertical={10} marginhorizontal={10} borderradius={10}>
                                            {/* <CarContainerView>
                                                <CardPopularImage source={{ uri: item.thumbnail ? item.thumbnail : this.props.theme.noImage}}></CardPopularImage>
                                                    <CardMetaContainer>
                                                        <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{item.title}</Text>
                                                    </CardMetaContainer>
                                            </CarContainerView> */}
                                            <CardContainerView>
                                                <ImageBackground 
                                                    style={{width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden', justifyContent: "center", alignContent: "center", alignItems: "center", alignSelf: "center"}} 
                                                    resizeMode='cover' 
                                                    source={{ uri: item.thumbnail ? item.thumbnail : this.props.theme.noImage}}>
                                                </ImageBackground>
                                            </CardContainerView>
                                            <BannerDataView>
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
                                            <CardMetaContainer>
                                                <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_SEMIMEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{item.title}</Text>
                                            </CardMetaContainer>
                                        </Card>
                                    </Touch>
                                )}
                            keyExtractor={item => item.index.toString()}
                            // keyExtractor={item => item.email}
                            showsVerticalScrollIndicator={false}
                            automaticallyAdjustContentInsets={false}
                        />
                    </FlatListContainer>
                </Root>
            </ThemeProvider>        
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(PopularsComponent);