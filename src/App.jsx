export default function App() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="container-left">
          <h1>Laravel Web Development Solutions</h1>

          <div className="check-lists">
            <div className="check-list-first">
              <p className="checklist-1">Powerful MVC Architecture</p>
              <p className="checklist-1">Database Migration and Data Seeding</p>
              <p className="checklist-1">Sophisticated Routing Features</p>
            </div>

            <div className="check-list-secound">
              <p className="checklist-2">Language Localization and Multilingual Support</p>
              <p className="checklist-2">Efficient ORM with Eloquent</p>
              <p className="checklist-2">Integrated Authentication and Authorization</p>
            </div>
          </div>
        </div>

        <div className="container-right">
          <div className="container-first-child">
            <p className="form-title">Book Free Consultation</p>
            <p className="form-para">Fill Out the Form and Our Expert Will Contact You Within 24hrs</p>
          </div>

          <div className="container-form">
            <input type="text" placeholder="First Name" className="input-text a" />
            <input type="email" placeholder="Enter your email" className="input-text" />
            <input type="number" placeholder="Phone Number" className="input-number" />
            <input type="text" placeholder="Company" className="input-number" />
          </div>

          <div className="container-form-bottom">
            <input type="text" placeholder="Your Requirement*" className="input-bottom" />
            <button className="form-btn">Submit Your Requirement!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
