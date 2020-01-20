import React, { Component } from 'react';
import { AlertIOS, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import Touchable from '@appandflow/touchable';
import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons';
import Text from '../../commons/texts/Text/Text';
import ButtonCurve from '../../commons/buttons/Button/ButtonCurve';
import ButtonDefault from '../../commons/buttons/Button/ButtonDefault';
import ButtonHold from '../../commons/buttons/Button/ButtonHold';
import InputDefault from '../../commons/formControls/Input/InputDefault';
import Separator from '../../commons/layouts/Separator/Separator';
import { colors } from '../../utils/constants';

const placeholder = '10';

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
    paddingVertical: 5;
`;
const SubDataItem = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignContent: center;
    width: 100%;
    paddingVertical: 10;
`;
const TimerContainer = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignContent: center;
    alignItems: center;
    alignSelf: center;
    marginRight: 5;
`;
const DisccountTextContainer = styled.View`
    justifyContent: center;
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
    backgroundColor: ${props => props.theme.PRIMARY_COLOR};
`;
const ButtonContainer = styled.View`
    flexDirection: row;
    alignSelf: center;
    justifyContent: center;
`;
const Optionview = styled.View`
    flexDirection: row;
    alignSelf: center;
    alignContent: center;
    width: 100%;
    justifyContent: space-between;
    marginTop: 12;
`;
const AddedCartView = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignSelf: flex-end;
    paddingHorizontal: 3;
`;
const ViewHigh = styled.View`
    flex: 1;
    marginBottom: 30;
    width: 60;
    alignItems: center;
    backgroundColor: #2196F3;
`;
const PriceTextContainer = styled.View`
    flexDirection: row;
    alignContent: space-between;
    justifyContent: center;
    marginLeft: 10;
`;
class CartListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemCount: 1,
            minusButtonDisabled: true,
            plusButtonDisabled: true,
        }
    }

    componentDidMount() {
        this._itemCountMinMax(this.state.itemCount);
    }

    _onChangeText = (text, type) => this.setState({[type]:text});

    _itemCountMinus() {
        newValue = this.state.itemCount - 1
        this._itemCountMinMax(newValue);

        this.setState({
            itemCount: newValue
        })
    }

    _onPressOut() {
        console.warn(':O se soltó!')
    }

    _itemCountPlus () {
        newValue = this.state.itemCount + 1
        this._itemCountMinMax(newValue);

        this.setState({
            itemCount: newValue
        })
        
    }

    _itemCountMinMax (value) {
       if (value <= 1) {
            this.setState({
                itemCount: 1,
                plusButtonDisabled: false,
                minusButtonDisabled: true,
            });
            // console.warn(`el valor es igual a 1 (${value})`)
        } else if (value >= 10) {
            this.setState({
                itemCount: 10,
                plusButtonDisabled: true,
                minusButtonDisabled: false,
            });
            // console.warn(`el valor es mayor a 1 (${value})`)
        } else {
            this.setState({
                plusButtonDisabled: false,
                minusButtonDisabled: false,
            });
            // console.warn(`el valor es mayor a 1 y menor a 10 (${value})`)
        }
    }

    _onLongPressButton() {
        AlertIOS.prompt(
            'Add note',
            'Tell us what you want in this plate',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Add',
                onPress: (plaintext) => console.warn('OK Pressed: ' + plaintext),
              },
            ],
            'plain-text',
          );
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Root>
                    <DataItem>
                        <FavItemTitle>
                            <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMIMEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>{this.props.cartlistitem.title}</Text>
                        </FavItemTitle>
                        <SubDataItem>
                            <TimerContainer>
                                <MaterialIcons name='watch-later' color={this.props.theme.PRIMARY_TEXT_COLOR_LIGHT} size={this.props.theme.FONT_SIZE_SEMIMEDIUM}/>
                                <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_SEMIMEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>15-20 mins</Text>
                            </TimerContainer>
                            <DisccountTextContainer>
                                <Text color={props => props.theme.GREEN} fontsize={props => props.theme.FONT_SIZE_SEMISMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>28% OFF</Text>
                            </DisccountTextContainer>
                        </SubDataItem>
                        <Separator borderbottomwidth={0.3} width={'100%'} paddingvertical={3} paddinghorizontal={0} alignself='center'/>
                        <Optionview>
                           <PriceTextContainer>
                                <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM} decoration={false}>${this.props.cartlistitem.price}</Text>
                            </PriceTextContainer>
                            {/* <PriceTextContainer>
                                <Text color={props => props.theme.SECONDARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_SEMIMEDIUM} decoration={true}>$25.00</Text>
                            </PriceTextContainer> */}
                            <AddedCartView>
                                <ButtonDefault
                                    feedback='highlight'
                                    disabled={this.state.minusButtonDisabled}
                                    onPress={() => this._itemCountMinus()}
                                    background={props => props.theme.TRANSPARENT}
                                    paddinghorizontal={3}
                                    paddingvertical={3}
                                    borderradius={8}>
                                    <MaterialCommunityIcons name='minus' size={this.props.theme.FONT_SIZE_LARGE} color={this.state.minusButtonDisabled ? this.props.theme.GRAYSEMILIGHT : this.props.theme.PRIMARY_TEXT_COLOR_LIGHT}/>
                                </ButtonDefault>
                                <InputDefault
                                    value={`${this.state.itemCount}`}
                                    placeholder={placeholder}
                                    autofocus={false}
                                    keyboardtype='number-pad'
                                    clearButtonMode='never'
                                    editable={false}
                                    textalign='center'
                                    textsize={10}
                                    height={25}
                                    width={30}
                                    onchangetext={text => this._onChangeText(text, 'postalCode')}/>
                                <ButtonDefault
                                    feedback='highlight'
                                    disabled={this.state.plusButtonDisabled}
                                    onPress={() => this._itemCountPlus(this.state.itemCount)}
                                    background={props => props.theme.TRANSPARENT}
                                    paddinghorizontal={3}
                                    paddingvertical={3}
                                    borderradius={8}>
                                    <MaterialCommunityIcons name='plus' size={this.props.theme.FONT_SIZE_LARGE} color={this.state.plusButtonDisabled ? this.props.theme.GRAYSEMILIGHT : this.props.theme.PRIMARY_TEXT_COLOR_LIGHT}/>
                                </ButtonDefault>
                            </AddedCartView>
                                {/* <TouchableWithoutFeedback onPressIn={this._onLongPressButton.bind(this)}>
                                    <ViewHigh>
                                        <Text color={props => props.theme.PRIMARY_TEXT_COLOR_LIGHT} fontsize={props => props.theme.FONT_SIZE_MEDIUM} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM} decoration={false}>Long press</Text>
                                    </ViewHigh>
                                </TouchableWithoutFeedback> */}
                        </Optionview>
                    </DataItem>
                    <ImageItem>
                        <CurrentBannerTO>
                            <CurrentBannerImage source={{uri: this.props.cartlistitem.thumbnail ? this.props.cartlistitem.thumbnail : this.props.theme.noImage}} />
                        </CurrentBannerTO>
                        <NoteContainer>
                            <NoteButtonContainer>
                                <ButtonCurve
                                    feedback='opacity'
                                    disabled={false}
                                    background={props => props.theme.TRANSPARENT}
                                    paddinghorizontal={4}
                                    paddingvertical={3}
                                    onPress={() => this._onLongPressButton()}>
                                    <ButtonContainer>
                                        <Text color={props => props.theme.WHITE} fontsize={props => props.theme.FONT_SIZE_SEMISMALL} fontweight={props => props.theme.FONT_WEIGHT_MEDIUM}>Note</Text>
                                        <MaterialCommunityIcons name='plus' size={this.props.theme.FONT_SIZE_SMALL} color={this.props.theme.WHITE}/>
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
  
export default connect(mapStateToProps)(CartListItem);