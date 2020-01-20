import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { Ionicons, EvilIcons, Entypo } from '@expo/vector-icons';
import Input from '../../commons/formControls/Input/InputDefault'
import { colors, colorsthemeone } from '../../utils/constants';
import Capitalize from '../../utils/functions';

const placeholder = 'Search';

const Root = styled.View`
    flex: 1;
    paddingHorizontal: 10;
`;

export default function SearchComponent( ) {
    return (
        <Root>
            <Input 
                placeholder={`${placeholder}`}
                autofocus={false}
                returnkeytype='search'/>
        </Root>
    )
}
