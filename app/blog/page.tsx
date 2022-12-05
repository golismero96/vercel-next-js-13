'use client';

import * as React from 'react';
import ClientComponent from './ClientComponent';
import ServerComponent from './ServerComponent';

export default function Page() {
  return (
    <div>
      <ClientComponent />
      <ServerComponent />
    </div>
  );
}
