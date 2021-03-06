import React from 'react';
import classnames from 'classnames/bind';
import styles from './Result.module.scss';
import { ResultType } from 'types';

interface ResultProps {
  type: ResultType;
}

const cx = classnames.bind(styles);

const Result = ({ type }: ResultProps) => (
  <span className={cx('Result', type)}>
    {type}
  </span>
);

export default Result;
