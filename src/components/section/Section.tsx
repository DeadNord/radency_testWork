import React from "react"
import classNames from "classnames";
import s from './Section.module.css';

interface Props {
  children: React.ReactNode;
}

const Section: React.FC<Props> = (props) => {
  return (
    <section className={classNames( s.section)}>
      <div className={classNames( s.container)}>{props.children}</div>
    </section>
  );
};


export default Section;
