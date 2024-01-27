import HeroBanner from './herobanner/HeroBanner';
import './style.scss'
import Trending from './trending/Trending';
export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending/>
      <div style={{height:1000}}></div>
    </div>
  )
}
