import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button className='bg-red-600'>One</Button>
      <Button className='bg-green-600'>Two</Button>
      <Button className='bg-red-600'>Three</Button>
    </ButtonGroup>
  );
}
