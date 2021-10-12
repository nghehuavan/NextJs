import { Box, Skeleton } from '@mui/material';
import * as React from 'react';

interface iStickyLoading {
  visible: boolean | undefined;
}

export default function StickyLoading(props: iStickyLoading) {
  return (
    <>
      <Box
        sx={{
          visibility: props.visible === true ? 'visible' : 'hidden',
          display : props.visible === true ? 'block' : 'none',
        }}
      >
        <Skeleton variant='rectangular' width={210} height={118} />
      </Box>
    </>
  );
}
