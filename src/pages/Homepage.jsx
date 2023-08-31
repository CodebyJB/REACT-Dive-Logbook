import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      Homepage
      <h1>
        Explore the Depths
        <br />
        Underwater Memories Captures Your Diving Adventures
      </h1>
      <h2>
        An interactive map to log your underwater escapades in every dive spot
        imaginable. Never lose the memories of your incredible dives and share
        your underwater adventures with your fellow divers.
      </h2>
      <Footer />
    </div>
  );
}

export default Homepage;
