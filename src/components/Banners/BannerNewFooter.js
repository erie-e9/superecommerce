import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Text from '../../commons/texts/Text/Text';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';

const Root = styled.View`
    width: 100%;
    height: 30;
    justifyContent: space-between;
    flexDirection: row;
    bottom: 70;
    backgroundColor: ${props => props.theme.THIRD_BACKGROUND_COLOR_LIGHT};
    borderBottomLeftRadius: 12;
    borderBottomRightRadius: 12;
`;
const ScoreView = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    marginLeft: 10;
`;
const ScoreTextContainer = styled.View`
    flexDirection: row;
    paddingHorizontal: 5;
    justifyContent: center;
    alignItems: center;
`;
const TotalScoreTextContainer = styled.View`
    justifyContent: flex-end;
`;
const ButtonContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
`;
const Optionview = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    right: 10;
`;
const AddCartView = styled.View`
    justifyContent: center;
    alignItems: center;
    paddingHorizontal: 3;
`;
const DisccountTextContainer = styled.View`
    left: 50;
    alignItems: flex-end;
    justifyContent: flex-start;
`;
const PriceTextContainer = styled.View`
    right: 10;
    justifyContent: center;
`;

class BannerNewFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
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
                    <Optionview>
                        {/* <DisccountTextContainer>
                            <Text color={props => props.theme.GREEN} fontsize={props => props.theme.FONT_SIZE_TINY} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>28% OFF</Text>
                        </DisccountTextContainer> */}
                        <PriceTextContainer>
                            <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>${this.props.item.price}</Text>
                        </PriceTextContainer>
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
                </Root>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state => ({
    theme: state.themeReducer.theme
  });
  
export default connect(mapStateToProps)(BannerNewFooter);