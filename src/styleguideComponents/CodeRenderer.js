import React from 'react';
import Styled from 'rsg-components/Styled';

const styles = ({ fontFamily }) => ({
  code: {
    fontFamily: fontFamily.monospace,
    fontSize: 'inherit',
    // color: 'inherit',
    background: 'transparent',
    whiteSpace: 'inherit',
    color: '#f3a4b5',
  },
});

const CodeRenderer = ({ classes, children }) => <code className={classes.code}>{children}</code>;

export default Styled(styles)(CodeRenderer);
