import { LinearProgress } from '@mui/material';
import * as React from 'react';

interface icontextLoading {
  visible: boolean | undefined;
}

export default function GlobalLoading(props: icontextLoading) {
  return (
    <LinearProgress
      color='secondary'
      sx={{
        width: '100%',
        color: 'grey.500',
        visibility: props.visible === true ? 'visible' : 'hidden',
      }}
    />
  );
}
