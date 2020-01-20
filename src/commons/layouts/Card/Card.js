import React from 'react';
import styled from 'styled-components/native';
// import Capitalize from '../../../utils/constants';

const Root = styled.View`
    flex: 1;
    minHeight: ${props => props.minheight};
    maxHeight: ${props => props.maxheight};
    width: ${props => props.width};
    padding: ${props => props.padding ? props.padding : 0};
    backgroundColor: ${props => props.backgroundcolor ? props.backgroundcolor : props.theme.WHITE};
    shadowColor: ${props => props.shadowcolor};
    shadowOffset: ${props => props.shadowoffset};
    shadowRadius: ${props => props.shadowradius};
    shadowOpacity: ${props => props.shadowopacity};
    elevation: ${props => props.elevation};
    marginVertical: ${props => props.marginvertical};
    marginHorizontal: ${props => props.marginhorizontal}
    borderRadius: ${props => props.borderradius};
    zIndex: 10;
    justifyContent: center;
    alignSelf: center;
`;

export default function ECard({ children, minheight, maxheight, backgroundcolor, width, padding, shadowcolor, 
        shadowoffset, shadowradius, shadowopacity, elevation, marginvertical, marginhorizontal, borderradius }) {
    return (
        <Root minheight={minheight} maxheight={maxheight} backgroundcolor={backgroundcolor} width={width} 
            padding={padding} shadowcolor={shadowcolor} shadowoffset={shadowoffset} shadowradius={shadowradius}
            shadowopacity={shadowopacity} elevation={elevation} marginvertical={marginvertical} marginhorizontal={marginhorizontal} borderradius={borderradius}>
            {children}
        </Root>
    )
}