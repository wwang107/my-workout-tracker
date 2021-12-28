import { Paper } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react'

const OverflowContent: React.FC = ({ children }) => (
    <Paper
        sx={{
            flex: 1,  /* 1 and it will fill whole space left if no flex value are set to other children*/
            background: 'gold',
            overflow: 'auto',
            position: 'relative',
        }}
    >
        {children}
    </Paper>
);

export default OverflowContent;