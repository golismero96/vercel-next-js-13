'use client';

import React from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';

const Div = styled.div`
  color: green;
`;

const Span = styled.span`
  color: red;
`;

let curr;
function readName() {
  if (!curr) {
    curr = {
      status: 'pending',
      value: new Promise((resolve) => {
        setTimeout(() => {
          console.log('resolve');
          curr = {
            status: 'resolved',
            value: 'Obiwan',
          };
          resolve(curr.value);
        }, 2000);

        setTimeout(() => {
          console.log('clear cache');
          curr = undefined;
        }, 4000);
      }),
    };
    console.log('throw just created promise');
    throw curr.value;
  }
  if (curr.status === 'pending') {
    console.log('throw already pending promise');
    throw curr.value;
  }
  return curr.value;
}

const Kenobi = () => {
  const obiwan = readName();
  return <Span>{obiwan}</Span>;
};

const Child = () => {
  // return <Span>{'Obiwan'}</Span>;
  return (
    <React.Suspense fallback={null}>
      <Kenobi />
    </React.Suspense>
  );
};

export default function Page() {
  return (
    <Div>
      Hello
      <Child />
      <Button>MUI Button</Button>
    </Div>
  );
}
