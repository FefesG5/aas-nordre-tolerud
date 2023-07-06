import gingerHouseView from "../images/gingerHouseView.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <img className="home-image" src={gingerHouseView} alt="" />
      <p className="home-text">
        Nestled in the picturesque Tolerud region lies Nordre Tolerud Farm, a
        family-owned and operated piece of land with a rich history dating back
        centuries. Our farm is one of two in the Tolerud area, and has been
        passed down through our family since 1840. Our deep roots in the region
        extend even further back, with ancestors residing in Tolerud as far back
        as the Middle Ages. Come experience the timeless beauty of our farm and
        taste the quality of our locally-sourced products, all while supporting
        a piece of history.
      </p>
    </div>
  );
}

export default Home;
