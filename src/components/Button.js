import styled from 'styled-components';
import {colors, spacing, fonts} from '../theme';

const Button = styled.button`
    background: ${colors.lightBlue};
    padding: 5px 15px;
    border-radius: ${spacing.radius};
    cursor: pointer;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: ${colors.blue};
    font-family: 'Playfair Display';
    margin: auto 0 0 auto;
`

export default Button;