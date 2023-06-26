import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { IApplicationState } from "../../../store/reducers";
import { INavigationModel } from "../../../models/NavigationModel";
// import Logo from '../../../assets/images/logo_200.png';
import './Header.scss';

export interface IHeader {
  navigation: INavigationModel[];
}

const Header: React.FC<IHeader> = (props: IHeader) => {
  const { navigation } = props;
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const makeMenu = (items: INavigationModel[], parentIndex: number = 0) => {
    return items.map((item, index) => (
      <li key={`${parentIndex === 0 ? 'mainMenu-' : 'subMenu-'}parentIndex - ${index}`}>
        <Link to={item.link} className="" onClick={() => setIsShowSubMenu(false)}>{item.title}</Link>
        {item.items && item.items.length > 0 && (
          <ul>
            {makeMenu(item.items, index)}
          </ul>
        )}
      </li>
    ));
  }

  return <header>
    <div className="topHeader">
      <div className="siteCss">
        <ul className="contactInfo">
          <li><span>PHONE : </span><a href="tel:9599385377">+91-9599385377</a></li>
          <li><span>EMAIL : </span> <a href="mailto:sales@panacheworld.in">sales@panacheworld.in</a></li>
        </ul>
        <div className="clear"></div>
      </div>
    </div>
    <div className="lowerHeader">
      <div className="siteCss">
        <div className="navBar">
          <div className="logo-box">
            <Link to="/">
              {/* <img src={Logo} alt={'PanacheWorld'} /> */}
            </Link>
          </div>
          <div className="navMenu">
            <nav className="navMenuIcon">
              <div className="navbar-header">
                <button type="button" onClick={() => setIsShowSubMenu(!isShowSubMenu)}>
                  {/* <FontAwesomeIcon icon={isShowSubMenu ? faTimesCircle : faList} /> */}
                  {/* <PWIcon iconName={'times-circle'} /> */}
                </button>
              </div>
              <ul className={`navigation ${isShowSubMenu ? 'open' : ''}`}>
                {makeMenu(navigation, 0)}
              </ul>
              <div className="clear"></div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>;
}

const mapStateToProps = (store: IApplicationState) => ({
  navigation: store.navigation.navigationMenu,
});

export default connect(mapStateToProps)(Header);