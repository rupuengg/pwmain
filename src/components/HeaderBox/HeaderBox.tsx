import './HeaderBox.scss';

export interface IHeaderBox {
  shadowImage: string;
  title: string;
}

export const HeaderBox: React.FC<IHeaderBox> = (props: IHeaderBox) => {
  const { shadowImage, title } = props;

  return <div className="page-header-box">
    <section className="parallax-section">
      <div className="overlay"></div>
      <div className="box" data-top-bottom="transform: translateY(200px);" data-bottom-top="transform: translateY(-200px);" style={{ transform: 'translateY(117.371px)', backgroundImage: `url("${shadowImage}")` }}></div>
      <div className="container">
        <div className="row">
          <h2>{title}</h2>
          <div className="separator-image">
            <img decoding="async" className="alignnone size-full wp-image-13" src={'../assets/images/separator1.png'} alt="separator" width="42" height="8" />
          </div>
        </div>
      </div>
      <a className="custom-scroll-link sect-scroll" href="#sec1"><i className="fa fa-angle-double-down"></i></a>
    </section>
  </div>;
}