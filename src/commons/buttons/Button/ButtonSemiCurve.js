import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

const Root = styled.View`
    borderTopLeftRadius: ${props => props.bordertopleftradius ? props.bordertopleftradius : 0};
    borderTopRightRadius: ${props => props.bordertoprightradius ? props.bordertoprightradius : 0};
    borderBottomRightRadius: ${props => props.borderbottomrightradius ? props.borderbottomrightradius : 0};
    borderBottomLeftRadius: ${props => props.borderbottomleftradius ? props.borderbottomleftradius : 0};
    overflow: hidden;
`;

const Button = styled(Touchable).attrs(props => ({
    feedback: props.feedback ? props.feedback : 'opacity',
    hitSlot: {top: 25, bottom: 25, right: 25, left: 25}
}))`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    paddingVertical: ${props => props.paddingvertical ? props.paddingvertical : 0};
    paddingHorizontal: ${props => props.paddinghorizontal ? props.paddinghorizontal : 0};
    backgroundColor: ${props => props.background};    
`;
    // marginRight: ${props => props.side === 'right' ? 15 : 0};
    // marginLeft: ${props => props.side === 'left' ? 15 : 0};

export default function ButtonCurve({ feedback, children, onPress, disabled, background, paddinghorizontal, paddingvertical, borderbottomleftradius, borderbottomrightradius, bordertopleftradius, bordertoprightradius, opacity }) {
    return (
       <Root bordertopleftradius={bordertopleftradius} bordertoprightradius={bordertoprightradius} borderbottomrightradius={borderbottomrightradius} borderbottomleftradius={borderbottomleftradius}>
            <Button feedback={feedback} onPress={onPress} disabled={disabled} background={background} paddinghorizontal={paddinghorizontal} paddingvertical={paddingvertical} opacity={opacity}>
                {children}
            </Button>
       </Root>
    )
}