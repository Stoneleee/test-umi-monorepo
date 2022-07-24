import styles from './index.less';
import { CustomerButton } from 'ui';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <CustomerButton />
    </div>
  );
}
