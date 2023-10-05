const About = () => {
  return (
    <section classname='section' id='about'>
      <div classname='section-title'>
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div classname='section-center about-center'>
        <div classname='about-img'>
          <img
            src='./images/about.jpeg'
            classname='about-photo'
            alt='awesome beach'
          />
        </div>
        <article classname='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href='#' classname='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
}
export default About