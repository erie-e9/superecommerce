import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

const Button = styled(Touchable).attrs(props => ({
    feedback: props.feedback ? props.feedback : 'opacity',
    hitSlot: {top: 25, bottom: 25, right: 25, left: 25}
}))`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    paddingVertical: ${props => props.paddingvertical ? props.paddingvertical : 0};
    paddingHorizontal: ${props => props.paddinghorizontal ? props.paddinghorizontal : 0};
    backgroundColor: ${props => props.disabled ? props.theme.GRAYLIGHT : props.background}; 
    borderRadius: ${props => props.borderradius ? props.borderradius : 0};
    overflow: hidden;
`;
    // marginRight: ${props => props.side === 'right' ? 15 : 0};
    // marginLeft: ${props => props.side === 'left' ? 15 : 0};

export default function ButtonCurve({ feedback, children, onPress, disabled, background, paddinghorizontal, paddingvertical, borderradius}) {
    return (
        <Button feedback={feedback} onPress={onPress} disabled={disabled} background={background} paddinghorizontal={paddinghorizontal} paddingvertical={paddingvertical} borderradius={borderradius}>
            {children}
        </Button>
    )
}