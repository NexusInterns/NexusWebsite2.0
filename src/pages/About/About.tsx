import './about.css';

const About = () => {
  return (
    <main>
      <h2 className='main-title'>About</h2>
      <section className='about-content'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla dapibus euismod. Fusce et dolor ac ex interdum viverra eu quis lectus. Duis arcu elit, scelerisque blandit diam eget, lacinia ullamcorper massa. Quisque nec elit euismod nunc scelerisque viverra eu sit amet orci. In hac habitasse platea dictumst. Integer ut rhoncus nisi. Sed non ex a enim blandit aliquam et imperdiet leo.
        <img className="about-human" src="./src/assets/icons/about-human.svg" alt="" />
      </section>
    </main>
  )
}

export default About