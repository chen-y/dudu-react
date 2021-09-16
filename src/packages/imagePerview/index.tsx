import React, { useMemo, useState, WheelEvent } from 'react';
import { createPortal } from 'react-dom';

import cs from 'classnames';

import './style.scss';

interface PreviewProps {
  imgs?: Array<{ url: string, alt?: string; }>;
  current?: number;
  onChange?: (current: number) => void;
  container?: HTMLElement;
}

function ImagePerview({
  current = 0,
  imgs = [],
  container = document.body,
  onChange
}: React.PropsWithChildren<PreviewProps>) {
  const [zoom, setZoom] = useState<number>(1);
  const [translate, setTranslate] = useState<{ x: number, y: number }>({ x: 0, y: 0 });

  const transform = useMemo(() => {
    return `matrix(${zoom}, 0, 0, ${zoom}, ${translate.x}, ${translate.y})`;
  }, [zoom, translate]);

  const currentImg = useMemo(() => {
    return imgs[current];
  }, [current, imgs]);

  const onMouseWheel = (evt: WheelEvent) => {
    let z = zoom;
    if (evt.deltaY > 0) {
      z -= 0.1;
      if (z <= 0.1) {
        z = 0.1;
      }
    } else {
      z += 0.1;
      if (z >= 2) {
        z = 2;
      }
    }
    setZoom(z);
  };

  return createPortal(
    <div className={cs('image-perview')}>
      <div className={cs('image-perview__mask')} onWheel={onMouseWheel}></div>
      <div className={cs('iamge-perview__img')}>
        {currentImg && <img src={currentImg.url} alt={currentImg.alt} style={{ transform }} />}
      </div>
      <div className={cs('image-perview__thumbnail')}>
        {imgs.map((img, i) => {
          return (
            <div
              key={img.url}
              className={cs('thumbnail-item')}
              onClick={() => onChange(i)}
            >
              <img src={img.url} />
            </div>
          );
        })}
      </div>
    </div>,
    container
  );
}

export default ImagePerview;
