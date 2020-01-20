import React from 'react';
import styled from 'styled-components/native';

const Text = styled.Text`
    color: ${props => props.color};
    fontSize: ${props => props.fontsize};
    fontWeight: ${props => props.fontweight};
    textDecorationLine: ${props => props.decoration ? 'line-through' : 'none' };
    textDecorationStyle ${props => props.decoration ? 'solid ' : 'none' }
`;

    // fontFamily: ${props => props.fontfamily};
// fontSize: ${props => props.fontsize};

export default function Etext({ children, color, fontsize, fontweight, decoration }) {
    return (
        <Text color={color} fontsize={fontsize} fontweight={fontweight} decoration={decoration}>
            {children}
        </Text>
    )
}