import { Footer, Header } from "./Common";
import './PanacheLayout.scss';

export interface IPanacheLayout {
  children: JSX.Element | JSX.Element[] | string;
  pageTitle?: string;
}

export const PanacheLayout: React.FC<IPanacheLayout> = ({ children, pageTitle = 'Home' }: IPanacheLayout) => {
  return <div className="PanacheLayout-main-container">
    {/* Header */}
    <Header />

    {/* Content */}
    <div className="PanacheLayout-container">
      <div className="leftBox">
        <h1>{pageTitle}</h1>
      </div>
      <div className="siteCss">
        {children}
      </div>
      <div className="rightBox">
        <a href=''><img src={'../../../../assets/images/icons8-whatsapp.gif'} /></a>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
}