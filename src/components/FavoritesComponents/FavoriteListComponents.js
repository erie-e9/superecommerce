import React, { Component } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import FavoriteListItem from './FavListItem';

const Root = styled.View`
    flex: 1;
`;

class FavoriteListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
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
              }, {
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
              }
            ],
              columns: 1
        }
    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <FlatList
                        numColumns={this.state.columns}
                        data={this.state.data}
                        renderItem={({ item }) => <FavoriteListItem favitem={item}/>}
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
  
export default connect(mapStateToProps)(FavoriteListComponent);