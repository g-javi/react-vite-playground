import React, { FC, useState } from 'react';
import styles from './Counter.module.scss';
import { generatePath, useNavigate, useParams } from 'react-router-dom';

interface CounterProps {}

const Counter: FC<CounterProps> = () => {
  const [count, setCount] = useState(0);
  // let { count } = useParams();
  // count = `${parseInt(count ?? '0', 10) + 1}`
  // const navigate = useNavigate();
  

  return (
    <div className={styles.Counter}>
        <button onClick={() => {
            // navigate( 
            //   generatePath("/:count", { count })
            // );
            setCount((count) => count + 1)
          }}>
          count is {count} 
        </button>
    </div>
  );
};

export default Counter;
