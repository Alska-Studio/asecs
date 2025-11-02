'use client';
import React from 'react';

type PageClientProps = {
  slug: string;
};

const PageClient: React.FC<PageClientProps> = ({ slug }) => {
  return <React.Fragment>
    <h1>{slug}</h1>
  </React.Fragment>;
};

export default PageClient;
