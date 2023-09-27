import './about.css';

const About = () => {
  return (
    <main>
      <h2 className='main-title'>About</h2>
      <section className='about-content'>
        <p>Address: Suite 1414 14th Floor AIC Burgundy Empire Tower, ADB Avenue Ortigas Center, Pasig City. Philippines</p>
        <p>email: kdoz@live.com</p>
        <p>Phone: (+63) 965-277-5629</p>
        <img className="about-human" src="./src/assets/icons/about-human.svg" alt="" />
      </section>
    </main>
  )
}

export default About