import styles from '@/styles/loading.module.css';

export default function Loading() {
  return (
    <div className={'w-screen text-white text-2xl flex justify-center items-center'}>
      <div className={styles.loadership_KIWDU}>
        {[...Array(20)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
}
