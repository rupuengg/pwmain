import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BannerModel } from '../../models/BannerModel';
import { IApplicationState } from '../../store/reducers';
import './BannerList.scss';

interface IBannerList {
  banners: BannerModel[];
}

const BannerList: React.FC<IBannerList> = (props: IBannerList) => {
  const { banners } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timer1 = setInterval(() => {
      let newIndex = activeIndex + 1;
      if (newIndex >= banners.length) {
        newIndex = 0;
      }
      // setActiveIndex(newIndex);
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, [activeIndex]);

  return (
    <div className="bannerBox">
      {
        banners.map((item: BannerModel, bannerIndex: number) => (
          <div key={`banner-${bannerIndex}`} className={`bannerItem ${bannerIndex === activeIndex ? 'active' : ''}`}>
            <div className="slideItem">
              <img src={item.img} />
              {/* <div className="siteCss">
                <div className="contentBox">
                  Text
                </div>
              </div> */}
            </div>
          </div>
        ))
      }
    </div>
  );
}

const mapStateToProps = (store: IApplicationState) => ({
  banners: store.global.bannerList,
});

export default connect(mapStateToProps)(BannerList);