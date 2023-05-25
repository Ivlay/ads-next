import React, { type ReactNode, type ReactHTML } from 'react';
import clsx from 'clsx';

import styles from './layout.module.css';

interface Props {
  tag?: keyof ReactHTML;
  children: ReactNode;
  className?: string;
  rootClassName?: string;
}

const ContentLayout: React.FC<Props> = ({
  tag = 'div',
  rootClassName = '',
  className = '',
  children,
}) => {
  return React.createElement(
    tag,
    { className: rootClassName },
    <div className={clsx(className, styles.contentLayout)}>{children}</div>
  );
};

export default ContentLayout;
