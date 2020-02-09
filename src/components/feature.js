import styled from 'styled-components';
import {colors, spacing, fonts} from '../theme';

const Feature = styled.span`
    background-color: ${colors.lightBlue};
    padding: 3px 8px;
    font-size: 14px;
    margin: auto 0;
    border-radius: ${spacing.radius};
    color: ${colors.blue};
    font-weight: bold;
`
export default Feature;