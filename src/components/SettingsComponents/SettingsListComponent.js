import React, { Component } from 'react';
import { FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import SettingsItem from './SettingsListItem';
import Text from '../../commons/texts/Text/Text';

const Root = styled.View`
    flex: 1;
`;
const ItemContent = styled.View``;
const SectionHead = styled.View`
    width: 100%;
    height: 44;
    backgroundColor: ${props => props.theme.FOURTH_BACKGROUND_COLOR};
    alignItems: flex-start;
    justifyContent: center;
    paddingHorizontal: 15;
    borderBottomColor: ${props => props.theme.BLACK30};
    borderBottomWidth: 0.3;
`;
//! checar si procede
// borderTopColor: ${props => props.theme.BLACK30};
// borderTopWidth: 0.3;

class SettingsListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        data: [{
                id: 'dasdad',
                title: 'ACCOUNT INFO',
                description: '',
                subsections: [{
                    id: 'fsffs1',
                    title: 'Profile',
                    link: ''
                }, {
                    id: 'fsffs2',
                    title: 'Activity Log',
                    link: ''
                }, {
                    id: 'fsffs3',
                    title: 'Linked Accounts',
                    link: ''
                }, {
                    id: 'fsffs4',
                    title: 'Payment Methods',
                    link: ''
                }, {
                    id: 'fsffs5',
                    title: 'Language',
                    link: ''
                }]
            }, {
                id: 'fsfsaf',
                title: 'NOTIFICATIONS',
                description: '',
                subsections: [{
                    id: 'fsffs6',
                    title: 'Push Notifications',
                    link: ''
                }, {
                    id: 'fsffs7',
                    title: 'Email and SMS Notifications',
                    link: ''
                }]
            }, {
                id: '41fasd',
                title: 'PRIVACY AND SECURITY',
                description: '',
                subsections: [{
                    id: 'fsffs8',
                    title: 'Two-Factor Authentication (2FA)',
                    link: ''
                }, {
                    id: 'fsffs9',
                    title: 'Privacy and Security Help',
                    link: ''
                }, {
                    id: 'fsffs10',
                    title: 'Account info',
                        link: ''
                    }]
            }, {
                id: 'dasdadda',
                title: 'DON ÑEÑE',
                description: '',
                subsections: [{ 
                    id: 'fsffs',
                    title: 'ñeñe',
                    link: ''
                }]
            }],
              columns: 1
        }
    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                {/* {this.state.data.map((item, i) => {
                    return (
                        <SettingsItem settingsitem={item}/>
                        )
                })} */}
                    <FlatList
                        numColumns={this.state.columns}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ItemContent>
                                <SectionHead>
                                    <Text color={props => props.theme.SECONDARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMIMEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{item.title}</Text>
                                </SectionHead>
                                {this.state.data.map((itemheader) => {
                                    return (
                                        itemheader.subsections.map((itemsubheader, i) => {
                                            return (
                                                // <Text key={i} color={props => props.theme.SECONDARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMIMEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{itemsubheader.title}</Text>
                                                <SettingsItem key={i} settingsitem={itemsubheader}/>
                                                )
                                        })
                                        )
                                })}
                            </ItemContent>
                        )}
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
  
export default connect(mapStateToProps)(SettingsListComponent);