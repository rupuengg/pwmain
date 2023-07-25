import Gallery from "react-photo-gallery";
import './Gllery.scss';
import Gallery_JSON from './Gallery.json';

export interface IGllery { }

export const Gllery: React.FC<IGllery> = (props: IGllery) => {
  return <div className='PanacheWorld-gallery'>
    <Gallery photos={Gallery_JSON} direction={"column"} />
  </div>
}