import React from "react";
import './Services.scss';
import { HeaderBox } from "../../components/HeaderBox/HeaderBox";

export interface IServicesAll { }

export const ServicesAll: React.FC<IServicesAll> = (props: IServicesAll) => {
  return <div className='PanacheWorld-services'>
    <HeaderBox title={'All Services'} shadowImage={'https://www.kbpartners.com.hk/wp-content/uploads/2022/07/blurred-office-interior-space-with-businessman-businesswoman-meeting-background.jpg?id=877'} />

  </div>;
}