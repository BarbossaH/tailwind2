import Nav from './components/Nav';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className=" xl:padding-l wide:padding-r padding-b border-2">
        <Hero />
      </section>
      <section className="padding border-2">
        <PopularProducts />
      </section>
      <section className="padding border-2">
        <SuperQuality />
      </section>
      <section className="padding-x py-10 border-2">
        <Services />
      </section>
      <section className="padding border-2">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding border-2">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full border-2">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <Footer />
      </section>
    </main>
  );
}
