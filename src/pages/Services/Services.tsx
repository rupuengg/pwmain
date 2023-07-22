import React from "react";
import './Services.scss';
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";
import { HeaderBox2 } from "../../components/HeaderBox2/HeaderBox2";

export interface IServices { }

export const Services: React.FC<IServices> = (props: IServices) => {
  return <div className='PanacheWorld-services'>
    <HeaderBox title={'Services'} shadowImage={'https://www.kbpartners.com.hk/wp-content/uploads/2022/07/blurred-office-interior-space-with-businessman-businesswoman-meeting-background.jpg?id=877'} />

    <HeaderBox2 leftImage={'https://www.kbpartners.com.hk/wp-content/uploads/2022/06/123-scaled.jpg'}>
      <div className="wpb_wrapper">
        <div className="wpb_text_column wpb_content_element  vc_custom_1656604155222 fl-fw">
          <div className="wpb_wrapper">
            <h2>Services</h2>
            <div className="separator"></div>
            <div className="clearfix"></div>
            <p>As part of our pre-lease service, KBPAL can provide a free service to help you to find the best space in the best building to meet your business needs and your budget. By our professional analysis, we provide you with the comparative base building analysis and assist you in selecting the building that will satisfy your objective.</p>
          </div>
        </div>
        <div className="vc_row wpb_row vc_inner vc_row-fluid">
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="service-box " data-bgscr="https://www.kbpartners.com.hk/wp-content/uploads/2022/07/Resize-of-IMG_0024cs2-scaled.jpg">
                  <i className="fa fa-map-signs"></i>
                  <h4>Design Consultant</h4>
                  <p>KBPAL creates design concepts that perform as business solutions for our clients.</p>
                  <p><a href="https://www.kbpartners.com.hk/design-consultant/"><span className="no-rep">Read More</span></a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="service-box " data-bgscr="https://www.kbpartners.com.hk/wp-content/uploads/2022/07/engineering-architecture-drawings-1994275-1100x734-2.jpg">
                  <i className="fa fa-industry"></i>
                  <h4>Design &amp; Build</h4>
                  <p className="no-rep">We provide you with the comparative base building analysis and assist you in selecting the building that will satisfy your objective.</p>
                  <p><a href="https://www.kbpartners.com.hk/design-build/"><span className="no-rep">Read More</span></a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="service-box " data-bgscr="https://www.kbpartners.com.hk/wp-content/uploads/2022/07/blueprint-with-magnifying-glass-1.jpg">
                  <i className="fa fa-sticky-note-o"></i>
                  <h4>Project Management</h4>
                  <p className="no-rep">Our project mangers are experiences professionals committed to coordinating all aspects of your project</p>
                  <p><a href="https://www.kbpartners.com.hk/project-management/"><span className="no-rep">Read More</span></a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="service-box " data-bgscr="https://www.kbpartners.com.hk/wp-content/uploads/2022/07/electricians-hands-testing-current-electric-control-panel.jpg">
                  <i className="fa fa-cog"></i>
                  <h4>Technical</h4>
                  <p className="no-rep">KBPAL will analysis our client’s IT infrastructure needs, especially for our clients with heavy technology demands.</p>
                  <p><a href="https://www.kbpartners.com.hk/technical/"><span className="no-rep">Read More</span></a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="service-box " data-bgscr="https://www.kbpartners.com.hk/wp-content/uploads/2022/07/close-up-shoot-hands-shaking-front-car-1.jpg">
                  <i className="fa fa-handshake-o"></i>
                  <h4>Professional Associates</h4>
                  <p>KBPAL will provide full range of design service, mostly KBPAL also work with Fung Shui Master.</p>
                  <p><a href="https://www.kbpartners.com.hk/professional-associates/"><span className="no-rep">Read More</span></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderBox2>
  </div>;
}