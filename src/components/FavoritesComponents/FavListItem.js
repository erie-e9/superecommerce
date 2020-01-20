import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Touchable from '@appandflow/touchable';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Text from '../../commons/texts/Text/Text';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';
import Separator from '../../commons/layouts/Separator/Separator';

const Root = styled(Touchable).attrs({
    feedback: 'highlight'
})`
    flex: 1;
    flexDirection: row;
    backgroundColor: ${props => props.theme.THIRD_BACKGROUND_COLOR_LIGHT};
    width: 100%;
    height: 150;
    justifyContent: center;
    borderBottomColor: ${props => props.theme.BLACK20};
    borderBottomWidth: 1.3;
    marginBottom: 5;
`;
const DataItem = styled.View`
    width: 45%;
    flexDirection: column;
    alignContent: center;
    justifyContent: center;
    paddingHorizontal: 15;
`;
const FavItemTitle = styled.View`
    paddingVertical: 5
`;
const TimeAgo = styled.View`
`;
const ImageItem = styled.View`
    width: 55%;
    height: 100%;
    flexDirection: column;
    alignItems: center;
    alignContent: center;
    alignSelf: center;
    justifyContent: center;
`;
const CurrentBannerTO = styled.View`
    top: 13;
    alignItems: center;
    alignContent: center;
    alignSelf: center;
    justifyContent: center;
`;
const CurrentBannerImage = styled.Image`
    justifyContent: center;
    alignSelf: center;
    width: 200;
    height: 120;
    boxShadow: 5px 10px;
    borderRadius: 12;
    backgroundColor: ${props => props.theme.WHITE85};
`;
const NoteContainer = styled.View`
    flexDirection: row;
    alignContent: flex-end;
    justifyContent: flex-end;
    bottom: 7;
    right: 13.7;
    width: 100%;
`;
const NoteButtonContainer = styled.View`
    alignSelf: center;
    justifyContent: center;
    height: 20;
    width: 50;
    borderTopLeftRadius: 12;
    borderTopRightRadius: 0;
    borderBottomRightRadius: 12;
    borderBottomLeftRadius: 12;
    backgroundColor: ${props => props.theme.PRIMARY_BACKGROUND_COLOR_LIGHT};
`;
const ButtonContainer = styled.View`
    flexDirection: row;
    alignSelf: center;
    justifyContent: center;
`;
const ScoreView = styled.View`
    flexDirection: row;
    alignItems: center;
    paddingTop: 3;
`;
const ScoreTextContainer = styled.View`
    flexDirection: row;
    paddingVertical: 5;
    paddingHorizontal: 10;
    justifyContent: center;
    alignItems: center;
`;
const TotalScoreTextContainer = styled.View`
    justifyContent: flex-end;
`;
const Optionview = styled.View`
    flexDirection: row;
    alignSelf: center;
    alignContent: center;
    width: 100%;
    justifyContent: space-between;
    marginTop: 12;
`;
const AddCartView = styled.View`
    justifyContent: center;
    alignSelf: flex-end;
    paddingHorizontal: 3;
`;
const PriceTextContainer = styled.View`
    justifyContent: center;
    marginLeft: 10;
`;
const DisccountTextContainer = styled.View`
    justifyContent: center;
    marginLeft: 5;
`;

class FavListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <DataItem>
                        <FavItemTitle>
                            <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMIMEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{this.props.favitem.title}</Text>
                        </FavItemTitle>
                        <TimeAgo>
                            <Text color={props => props.theme.THIRD_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMISMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>Last time ordered: 2 days ago</Text>
                        </TimeAgo>
                        <ScoreView>
                            <FontAwesome name='star' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.YELLOW}/>
                            <FontAwesome name='star' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.YELLOW}/>
                            <FontAwesome name='star' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.YELLOW}/>
                            <FontAwesome name='star-half-empty' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.YELLOW}/>
                            <FontAwesome name='star' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.FOURTH_BACKGROUND_COLOR}/>
                            <ScoreTextContainer>
                                <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>3.7</Text>
                                <TotalScoreTextContainer>
                                    <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_TINY} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>(247)</Text>
                                </TotalScoreTextContainer>
                            </ScoreTextContainer>
                        </ScoreView>
                        <Separator borderbottomwidth={0.3} width={'100%'} paddingvertical={5} paddinghorizontal={0} alignself='center'/>
                        <Optionview>
                            <PriceTextContainer>
                                <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>${this.props.favitem.price}</Text>
                            </PriceTextContainer>
                            <DisccountTextContainer>
                                <Text color={props => props.theme.GREEN} fontsize={props => props.theme.FONT_SIZE_SEMISMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>28% OFF</Text>
                            </DisccountTextContainer>
                            <AddCartView>
                                <ButtonCurve
                                    feedback='opacity'
                                    disabled={false}
                                    background={props => props.theme.PRIMARY_COLOR}
                                    paddinghorizontal={7}
                                    paddingvertical={3}
                                    borderradius={10}>
                                    <ButtonContainer>
                                        <MaterialCommunityIcons name='cart-outline' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.WHITE}/>
                                        <MaterialCommunityIcons name='plus' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.WHITE}/>
                                    </ButtonContainer>
                                </ButtonCurve>
                            </AddCartView>
                        </Optionview>
                    </DataItem>
                    <ImageItem>
                        <CurrentBannerTO>
                            <CurrentBannerImage source={{ uri: this.props.favitem.thumbnail ? this.props.favitem.thumbnail : this.props.theme.noImage }} />
                        </CurrentBannerTO>
                        <NoteContainer>
                            <NoteButtonContainer>
                                <ButtonCurve
                                    feedback='opacity'
                                    disabled={false}
                                    background={props => props.theme.TRANSPARENT}
                                    paddinghorizontal={4}
                                    paddingvertical={3}>
                                    <ButtonContainer>
                                        <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMISMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>Note</Text>
                                        <MaterialCommunityIcons name='plus' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.PRIMARY_TEXT_COLOR_LIGHT}/>
                                    </ButtonContainer>
                                </ButtonCurve>
                            </NoteButtonContainer>
                        </NoteContainer>
                    </ImageItem>
                </Root>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(FavListItem);