import { HeaderBox } from '../HeaderBox/HeaderBox';
import { HeaderBox2 } from '../HeaderBox2/HeaderBox2';
import './AboutUs.scss';

export interface IAboutUs { }

export const AboutUs: React.FC<IAboutUs> = (props: IAboutUs) => {
  return <div>
    <HeaderBox title={'About Us'} shadowImage={'https://www.kbpartners.com.hk/wp-content/uploads/2022/07/blurred-office-interior-space-with-businessman-businesswoman-meeting-background.jpg?id=877'} />
    <HeaderBox2 title={'About Us'} shadowImage={'https://www.kbpartners.com.hk/wp-content/uploads/2022/07/blurred-office-interior-space-with-businessman-businesswoman-meeting-background.jpg?id=877'} />

    <section id="sec1" className="outdoor_sec section-columns">
      <div className="section-columns-img">
        <div className="bg transition" style={{ backgroundImage: 'url(https://www.kbpartners.com.hk/wp-content/uploads/2022/06/123-scaled.jpg)' }}></div>
      </div>
      <div className="section-columns-text">
        <div className="custom-inner">
          <div className="container">
            <div className="row ">
              <div className="wpb_column vc_column_container vc_col-sm-12">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_text_column wpb_content_element ">
                      <div className="wpb_wrapper">
                        <h2>KB Partners Hong Kong Associates Ltd.</h2>
                        <div className="separator"></div>
                        <div className="clearfix"></div>
                        <h3 className="subtitle">Established for 10 years. Since then, corporate interior design has been the mainstay of our company development.</h3>
                        <p>Apart from that, retail Services, residential and public facilities are the second channel of our business.</p>
                        <p>We are committed to bring creativity, cost effectiveness and high quality to every project undertaken. Today, KB has established itself as one of the leading corporate interior design and contracting companies in Hong Kong.</p>
                        <p>We believe that good design is investment that can help organizations meet their objectives. A facade of a company reflects the image of the enterprise. Internally the communication flow can be improved and externally it conveys a goodimage to the public if the company is well designed. Therefore we are trying our best to be your dynamic interior designer, strategic space-planning consultant and contractor.</p>
                        <p>Actually we are not only a service provider to our clients, but also the business partners for them. The working partnerships enhance our ability to understand and anticipate clients’ needs and to formulate solutions responding to those needs.</p>
                        <p>KB provides creative concept, professional planning, and reliable construction to clients. Our expert designers, experienced project managers and skillful technicians aim to offer our clients a valued quality product and professional project management services which included cost control, time management and site supervision. Customer feedback is welcomed as the basis for continuous improvement and development, so we can serve our<br />
                          clients better and better.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
}