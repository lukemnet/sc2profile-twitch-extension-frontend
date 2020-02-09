import React from 'react';
import classnames from 'classnames/bind';
import styles from './DragDropIcon.module.scss';

interface DragDropIconProps {
  disabled?: boolean;
}

const cx = classnames.bind(styles);

const DragDropIcon = ({ disabled }: DragDropIconProps) => (
  <div
    className={cx('DragDropIcon', { disabled })}
  />
);

export default DragDropIcon;
