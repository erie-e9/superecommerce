import React from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';
import { Ionicons } from '@expo/vector-icons';;
import { colors } from '../../../utils/constants';
import Capitalize from '../../../utils/functions';

const Root = styled.View`
    flex: 1;
`;

export default function ECardBody({ children }) {
    return (
        <Root>
            {children}
        </Root>
    )
}