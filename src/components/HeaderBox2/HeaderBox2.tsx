import './HeaderBox2.scss';

export interface IHeaderBox2 {
  leftImage: string;
  children: JSX.Element | JSX.Element[];
}

export const HeaderBox2: React.FC<IHeaderBox2> = (props: IHeaderBox2) => {
  const { leftImage, children } = props;

  return <div className="page-header-box-2">
    <section id="sec1" className='parallax-section'>
      <div className="box" data-top-bottom="transform: translateY(200px);" data-bottom-top="transform: translateY(-200px);" style={{ backgroundImage: `url("${leftImage}")` }}></div>
      <div className="container">{children}</div>
    </section>
  </div>;
}