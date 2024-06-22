import React, { ReactNode, useMemo } from 'react';
import { createPortal } from 'react-dom';
import cs from 'classnames';

import './style.scss';

export enum DrawerPositions {
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
}

export enum DrawerTypes {
  CARD = 'card',
}

interface DrawerRef {}

interface DrawerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    React.RefAttributes<DrawerRef> {
  getContainer?: () => HTMLElement;
  footer?: ReactNode;
  title?: ReactNode;
  position?: DrawerPositions;
  type?: DrawerTypes;
  distroyOnClose?: boolean;
  visible?: boolean;
  onClose?: () => void;
  onMaskClose?: boolean;
}

const Drawer = (props: React.PropsWithChildren<DrawerProps>) => {
  const {
    key,
    getContainer,
    children,
    position = DrawerPositions.RIGHT,
    title,
    footer,
    type,
    distroyOnClose,
    visible,
    onClose,
    onMaskClose = true,
  } = props;

  const container = useMemo(() => {
    let c = document.body;
    if (getContainer) {
      c = getContainer();
    }
    return c;
  }, []);

  let layout = (
    <div
      className={cs('dudu-drawer', {
        'is-hide': visible && !distroyOnClose ? true : false,
      })}
    >
      <div
        className={cs('dudu-drawer-mask')}
        onClick={onMaskClose ? onClose : undefined}
      ></div>
      <div
        className={cs('dudu-drawer-main', `from-${position}`, {
          'card-type': type === DrawerTypes.CARD,
        })}
      >
        <div className={cs('dudu-drawer-container')}>
          <div className={cs('dudu-drawer-header')}>
            <div>{title}</div>
          </div>
          <div className={cs('dudu-drawer-body')}>{children}</div>
          <div className={cs('dudu-drawer-footer')}>{footer}</div>
        </div>
      </div>
    </div>
  );

  if (!visible) {
    layout = null;
  }
  return createPortal(layout, container, key as string);
};

export default Drawer;
