
import EventsBanner from './common/eventsbanner';
import FeaturesBanner from './common/featuresbanner';
import HeroBanner from './common/herobanner';
import Newsletter from './common/newsletter';
import Product from './common/product';


export default async function Home() {

  return (
    <>
      <HeroBanner></HeroBanner>
      <EventsBanner></EventsBanner>
      <Product></Product>
      <FeaturesBanner></FeaturesBanner>
      <Newsletter></Newsletter>
    </>
  )

}
