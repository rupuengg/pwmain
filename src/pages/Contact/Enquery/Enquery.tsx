import './Enquery.scss';

const Enquery = () => {
  return (
    <div className="enquire">
      <div className="siteCss" style={{ 'marginLeft': '-32px' }}>
        <iframe title="PanacheWorld" id="quote_form" className="quote_form" src="https://docs.google.com/forms/d/e/1FAIpQLSdPharPv_A5_XryCnkNpM-3kOELA9BLvnGF5sbdVTYcfW4ZyA/viewform?embedded=true" width="640" height="1000">Loading…</iframe>
        {/* <div className="formBox">
          <h1>Enquire for services</h1>
          <div className="formItem">
            <label>Name</label>
            <input name="" />
          </div>
          <div className="formItem">
            <label>Phone no</label>
            <input name="" />
          </div>
          <div className="formItem">
            <label>Email</label>
            <input name="" />
          </div>
          <div className="formItem">
            <label>Query</label>
            <input name="" />
          </div>
          <div className="formItem">
            <button type="submit">Submit</button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Enquery;