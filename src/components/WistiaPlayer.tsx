'use client';

import Script from 'next/script';

export function WistiaPlayer() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <div
        className="wistia_embed wistia_async_8cbxka7tns videoFoam=true"
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          className="wistia_swatch"
          style={{
            height: '100%',
            left: 0,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            transition: 'opacity 200ms',
            width: '100%',
          }}
        >
          <img
            src="https://fast.wistia.com/embed/medias/8cbxka7tns/swatch"
            style={{
              filter: 'blur(5px)',
              height: '100%',
              objectFit: 'contain',
              width: '100%',
            }}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}

