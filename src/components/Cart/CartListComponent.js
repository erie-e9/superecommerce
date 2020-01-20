import React, { Component } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import CartListItem from './CartListItem';
import Text from '../../commons/texts/Text/Text';

const Root = styled.View`
    flex: 1;
`;
const RootActivator = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

class CartListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            columns: 1,
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
                    data: [{
                        id: 'VOgFZfRdVaww',
                        thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/humus-rapido.jpg?w=768',
                        title: 'Humus mexicano rápido',
                        origincountry: 'Italian',
                        price: '17.00'
                        }, {
                        id: 'sNPnbI13arSE',
                        thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/guacamole-picante-con-maiz.jpg?w=768',
                        title: 'Guacamole picante con maíz',
                        origincountry: 'Mexican',
                        price: '10.00'
                        },  {
                        id: 'WpIAc9by5iU',
                        thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/fajitas-de-ternera-hero.jpg?w=768',
                        title: 'Fajitas de ternera',
                        origincountry: 'Mexican',
                        price: '80.00'
                        }, {
                        id: 'VOgFZfRVaww',
                        thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/humus-rapido.jpg?w=768',
                        title: 'Humus mexicano rápido',
                        origincountry: 'Italian',
                        price: '17.00'
                        }, {
                        id: 'sNPnbI1arSE',
                        thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/guacamole-picante-con-maiz.jpg?w=768',
                        title: 'Guacamole picante con maíz',
                        origincountry: 'Mexican',
                        price: '10.00'
                        }, {
                        id: 'WpIAc9by5wiU',
                        thumbnail: 'https://www.oldelpaso.es/-/media/oep/spain/recipes/fajitas-de-ternera-hero.jpg?w=768',
                        title: 'Fajitas de ternera',
                        origincountry: 'Mexican',
                        price: '80.00'
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
                <RootActivator>
                    <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_BOLD}>Loading...</Text>
                </RootActivator>
            )
        }
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <FlatList
                        numColumns={this.state.columns}
                        data={this.state.data}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        renderItem={({ item }) => <CartListItem cartlistitem={item}/>}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={true}
                        horizontal={false}
                    />
                </Root>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(CartListComponent);