import css from './Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={css.container}>
      <h1 className={css.title}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
