import { Link } from 'react-router-dom';
import BannerList from '../BannerList';
import OfferList from '../OfferList';
import Enquery from '../Enquery';
import './Home.scss';
import project1d1 from '../../../assets/images/projects/1/designer_images/001-mb-tv-wr.jpeg';

const Home = () => {
  return (
    <>
      {/* Banner for showing images */}
      <BannerList />

      {/* Offer list */}
      {/* <OfferList /> */}

      {/* Project list - Start */}
      {/* <div className="siteCss">
        <div className="all_projects">
          <h1>All Projects</h1>
          <ul className="p0 m0">
            <li className="p0 m0">
              <Link to="/projects/1">
                <img src={project1d1} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
      {/* Project list - End */}

      {/* Enquery form */}
      {/* <Enquery /> */}
    </>
  );
}

export default Home;
