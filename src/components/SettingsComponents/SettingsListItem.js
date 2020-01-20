import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Touchable from '@appandflow/touchable';
import { EvilIcons } from '@expo/vector-icons';
import Text from '../../commons/texts/Text/Text';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';
import Separator from '../../commons/layouts/Separator/Separator';

const Root = styled(Touchable).attrs({
    feedback: 'highlight'
})`
    flex: 1;
    flexDirection: row;
    backgroundColor: ${props => props.theme.THIRD_BACKGROUND_COLOR_LIGHT};
    alignItems: center;
    justifyContent: center;
    width: 100%;
    height: 44;
    paddingLeft: 20;
`;
const ItemContainer = styled.View`
    flex: 1;
    width: 100%;
    height: 44;
    flexDirection: row;
`;
const DataContainer = styled.View`
    width: 90%;
    justifyContent: center;
    borderBottomColor: ${props => props.theme.BLACK30};
    borderBottomWidth: 0.3;
`;
const SettingsItemTitle = styled.View`
    justifyContent: center;
`;
const IconContainer = styled.View`
    width: 10%;
    alignItems: center;
    justifyContent: center;
    borderBottomColor: ${props => props.theme.BLACK30};
    borderBottomWidth: 0.3;
`;

class SettingsListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <ItemContainer>
                        <DataContainer>
                            <SettingsItemTitle>
                                <Text color={props => props.theme.PRIMARY_TEXT_COLOR} fontsize={props => props.theme.FONT_SIZE_LARGE} fontweight={props => props.theme.FONT_WEIGHT_SEMIMEDIUM}>{this.props.settingsitem.title}</Text>
                            </SettingsItemTitle>
                        </DataContainer>
                        <IconContainer>
                            <EvilIcons name='chevron-right' size={this.props.theme.FONT_SIZE_MASSIVE} color={this.props.theme.SECONDARY_TEXT_COLOR_LIGHT}/>
                        </IconContainer>
                        {/* <Separator borderbottomwidth={0.15} width={'100%'} paddingvertical={3} paddinghorizontal={0} alignself={'center'}/> */}
                    </ItemContainer>
                </Root>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(SettingsListItem);