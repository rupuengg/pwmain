import { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { INavigationModel } from '../../../../models/NavigationModel';
import { IApplicationState } from '../../../../store/reducers';
import './Header.scss';

interface IHeader {
  navigation: INavigationModel[];
}

export const Header: React.FC<IHeader> = (props: IHeader) => {
  const { navigation } = props;
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);

  const makeMenu = (items: INavigationModel[], parentIndex: number = 0) => items.map((item: INavigationModel, index: number) => (
    <li key={`${parentIndex === 0 ? 'mainMenu-' : 'subMenu'}parentIndex - ${index}`}>
      <Link to={item.link} className="" onClick={() => setIsShowSubMenu(false)}> {item.title}</Link>
      {item.items && item.items.length > 0 && <ul>{makeMenu(item.items, index)}</ul>}
    </li>
  ));

  return <div className="PanacheLayout-mainHeader">
    <div className="lowerHeader">
      <div className="siteCss">
        <div className="navBar">
          <div className="logo-box">
            <Link to="/">
              <img src={'../../../../assets/images/logo_200.png'} alt={'PanacheWorld'} />
            </Link>
          </div>

          <div className="navMenu" >
            <nav className="navMenuIcon" >
              <div className="navbar-header" >
                <button type="button" onClick={() => setIsShowSubMenu(!isShowSubMenu)}>
                  <FontAwesomeIcon icon={isShowSubMenu ? faTimesCircle : faList} />
                </button>
              </div>
              <ul className={`navigation ${isShowSubMenu ? 'open' : ''}`}>
                {makeMenu(navigation, 0)}
              </ul>
              <div className="clear"> </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

const mapStateToProps = (store: IApplicationState) => ({
  navigation: store.navigation.navigationMenu,
});

export default connect(mapStateToProps)(Header);