'use client';

import Script from 'next/script';

export function WistiaPlayer() {
  return (
    <>
      <div
        className="wistia_responsive_padding"
        style={{ padding: '177.78% 0 0 0', position: 'relative' }}
      >
        <div
          className="wistia_responsive_wrapper"
          style={{
            height: '100%',
            left: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        >
          <div
            className="wistia_embed wistia_async_8cbxka7tns videoFoam=true"
            style={{ height: '100%', position: 'relative', width: '100%' }}
          >
            &nbsp;
          </div>
        </div>
      </div>
      <Script
        src="https://fast.wistia.com/embed/medias/8cbxka7tns.jsonp"
        strategy="lazyOnload"
        async
      />
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
        async
      />
    </>
  );
}
