import style from './Container.module.css';

export default function Container({ children }) {
  return <div className={style.box}>{children}</div>;
}
