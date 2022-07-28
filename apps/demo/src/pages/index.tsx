import styles from './index.less';
import { Button } from 'antd';
import { useEffect } from 'react';
import { sum, CustomerButton } from 'ui';

export default function IndexPage() {
  useEffect(() => {
    console.log(sum(1, 2));
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <CustomerButton />
      <Button>12344</Button>
    </div>
  );
}
