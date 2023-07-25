import { Enquery } from './Enquery';
import { HeaderBox } from '../../components/HeaderBox/HeaderBox';
import './Contact.scss';

export interface IContact { }

export const Contact: React.FC<IContact> = (props: IContact) => {
  return <div className='PanacheWorld-about-us'>
    <HeaderBox title={'Contact Us'} shadowImage={'https://www.kbpartners.com.hk/wp-content/uploads/2022/07/blurred-office-interior-space-with-businessman-businesswoman-meeting-background.jpg?id=877'} />

    <Enquery />
  </div>
}