import {FC, ReactNode} from "react"
import s from './Section.module.css';

interface Props {
  children: ReactNode;
}

const Section: FC<Props> = (props) => {
  return (
    <section className={s.section}>
      <div className={s.container}>{props.children}</div>
    </section>
  );
};


export default Section;
