import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
    borderBottomColor: ${props => props.theme.BLACK30};
    borderBottomWidth: ${props => props.borderbottomwidth ? props.borderbottomwidth : 0.3};
    width: ${props => props.width};
    paddingVertical: ${props => props.paddingvertical};
    paddingHorizontal: ${props => props.paddinghorizontal};
    alignSelf: ${props => props.alignself ? props.alignself : center }
`;

export default function Separator({ borderbottomwidth, width, paddingvertical, paddinghorizontal, alignself }) {
    return <Root borderbottomwidth={borderbottomwidth} width={width} paddingvertical={paddingvertical} paddinghorizontal={paddinghorizontal} alignself={alignself} />
}