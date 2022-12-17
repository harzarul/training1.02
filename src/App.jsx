
import styles from './styles';
import { Navbar, Hero, Trending, TopRated, Browse, Discover, Highlight, How, Subscribe, Footer } from './containers';

const App = () => {
  return (
    <div className={`w-full overflow-hidden bg-gray`}>
      <div className={`${styles.flexCenter} ${styles.paddingsX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <Hero/>
          <Trending/>
          <TopRated/>
          <Browse/>
          <Discover/>
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className='w-full'>
          <Highlight/>
        </div>
      </div>

      <div className={`${styles.flexCenter} ${styles.paddingsX}`}>
        <div className={`${styles.boxWidth}`}>
          <How/>
          <Subscribe/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App