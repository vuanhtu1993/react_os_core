import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

// The `withStyles()` higher-order component is injecting a `classes`
// property that is used by the `Button` component.
// return component
export const WithStyleButton = withStyles(({palette, spacing}) => ({
  root: {
    background: palette.primary.main,
    padding: spacing(1, 1),
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    // padding: '0 30px',
    '&:hover': {
      background: 'red'
    }
  },
  label: {
    textTransform: 'capitalize',
  },
}))(Button);

//
export const StyledButton = styled(Button)`
  &&& {
    background-color: blue;
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    &:hover {
      background-color: red;
    }
  }
`;

// return style
export const styleButton = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));
