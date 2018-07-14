import { css } from 'glamor';
import classNames from 'classnames';
import React from 'react';

const ROOT_CSS = css({
  backgroundColor: 'Transparent',
  border: 0,
  cursor: 'pointer',
  height: '100%',
  padding: 0,
  width: 40,

  '& > svg': {
    fill: '#999'
  },

  '&:disabled > svg': {
    fill: '#CCC'
  }
});

export default ({ children, className, onClick }) =>
  <button
    className={ classNames(
      ROOT_CSS + '',
      (className || '') + ''
    ) }
    onClick={ onClick }
  >
    { children }
  </button>
