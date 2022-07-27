import * as React from 'react';
import { useEffect, useState } from 'react';
import { currencies } from '../inputCurrency/currencies';
import getCurrency from '../../exPoints/privatAPI';

const ActualCurse = () => {
  const [course, updateCourse] = useState(new Map());
  useEffect(() => {
    getCurrency.then((value) => {
      updateCourse(value);
    });
  }, []);
  return <div>
      {currencies.EUR}: {course.get(currencies.EUR)} {currencies.USD}: {course.get(currencies.USD)}
    </div>;
};

export default ActualCurse;
