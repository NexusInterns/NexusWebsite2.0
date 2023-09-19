import EffectsContainer from '../../components/Effects/EffectsContainer';
import './home.css';

const Home = () =>
{
  return (
    <>
    <div className='home-contents'>
      <EffectsContainer effects='hide'>
        <h1>This is a website</h1>
        <p>Heeyyy</p>
      </EffectsContainer> 
    </div>
    <div className='home-contents'>
      <EffectsContainer effects='hide fromLeft'>
        <h2>Please me</h2>
        <p>
          Today i don't feel like doing anything
        </p>
      </EffectsContainer> 
    </div>
    <div className='home-contents'>
      <EffectsContainer effects='fromLeft'>
        <h2>OOOOO</h2>
        <p>
          YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
        </p>
      </EffectsContainer> 
    </div>
    </>
  );
}

export default Home