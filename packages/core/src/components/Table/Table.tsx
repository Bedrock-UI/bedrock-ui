import clsx from 'clsx';
import React from 'react';

import type { Props } from './Table.types';

function Table({ className, fixed = false, ...props }: Props) {
  return <table className={clsx('table', className, { fixed })} {...props} />;
}

export default Table;
