import './Footer.scss';

function Footer() {
  return (
    <div className="PanacheLayout-footer">
      <div className="bottom">
        <div className="siteCss">
          <ul>
            <li className='copyright'>Copyright &copy; 2021 panacheworld.in. All right reserved</li>
            <li className='separate'></li>
            <li className='phone'><a href="tel:9599385377">+91-9599385377</a></li>
            <li className='separate no-border'></li>
            <li className='email'><a href="mailto:sales@panacheworld.in">sales@panacheworld.in</a></li>
            <li className='last'><a target='_blank' href="https://www.facebook.com/profile.php?id=100094598601676"><img src={"../../../../assets/images/facebook_2168281.png"} /></a> </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
