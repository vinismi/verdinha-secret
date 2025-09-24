'use client';

import Script from 'next/script';
import { Fragment } from 'react';

export function WistiaPlayer() {
  return (
    <>
      <div
        className="wistia_embed wistia_async_8cbxka7tns"
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
        }}
      >&nbsp;</div>
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
    </>
  );
}
