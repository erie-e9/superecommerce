import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

const Button = styled(Touchable).attrs(props => ({ //? :o nueva forma
    feedback: props.feedback ? props.feedback : 'opacity',
    hitSlot: {top: 25, bottom: 25, right: 25, left: 25}
}))`
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    paddingVertical: ${props => props.paddingvertical};
    paddingHorizontal: ${props => props.paddinghorizontal};
    backgroundColor: ${props => props.background ? props.background : props.theme.TRANSPARENT};
    borderRadius: ${props => props.borderradius ? props.borderradius : 0};
    borderColor: ${props => props.theme.TRANSPARENT};
`;
    // marginRight: ${props => props.side === 'right' ? 15 : 0};
    // marginLeft: ${props => props.side === 'left' ? 15 : 0};

export default function Ebuttondefault({ feedback, children, onPress, disabled, background, paddingvertical, paddinghorizontal, borderradius }) {
    return (
        <Button feedback={feedback} onPress={onPress} disabled={disabled} background={background} paddingvertical={paddingvertical} paddinghorizontal={paddinghorizontal} borderradius={borderradius}>
            {children}
        </Button>
    )
}