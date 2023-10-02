import { useState } from 'react';
import './App.css';


function App() {

  const [FormData, setformData] = useState({
    firstName: "", lastName: "", email: "",
    country: "India", streetAddress: "", city: "", state: "",
    postalcode: "", component: false, candidate: false, offer: false, pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing the form data:");
    console.log(FormData);
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName">First Name:</label><br></br>
        <input type="text"
          id='firstName'
          name='firstName'
          placeholder='shubham'
          value={FormData.firstName}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="lastName">Last Name:</label><br></br>
        <input type="text"
          id='lastName'
          name='lastName'
          placeholder='dhobale'
          value={FormData.lastName}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="email">Email:</label><br></br>
        <input type="email"
          id='email'
          name='email'
          placeholder='sd@gmail.com'
          value={FormData.email}
          onChange={changeHandler}
        /><br></br>


        <label htmlFor="country">Country:</label><br></br>
        <select
          id='country'
          name='country'
          value={FormData.country}
          onChange={changeHandler}
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select><br></br>

        <label htmlFor="streetAddress">Street Address:</label><br></br>
        <input type="text"
          id='streetAddress'
          name='streetAddress'
          placeholder='1234 Main St.'
          value={FormData.streetAddress}
          onChange={changeHandler}
        /><br></br>

        <label htmlFor="city"> City:</label><br></br>
        <input type="text"
          id='city'
          name='city'
          placeholder='pune'
          value={FormData.city}
          onChange={changeHandler}
        /><br></br>


        <label htmlFor="state"> state:</label><br></br>
        <input type="text"
          id='state'
          name='state'
          placeholder='Maharastra'
          value={FormData.state}
          onChange={changeHandler}
        /><br></br>


        <label htmlFor="postalcode"> Postal code:</label><br></br>
        <input type="text"
          id='postalcode'
          name='postalcode'
          placeholder='412406'
          value={FormData.postalcode}
          onChange={changeHandler}
        /><br></br>

        <fieldset>
          <legend>By Email:</legend>

          <label htmlFor="component">  Coponents:</label>
          <input
            type="checkbox"
            name="component"
            id="component"
            checked={FormData.component}
            onChange={changeHandler}
          />



          <label htmlFor="candidate">  candidate:</label>
          <input
            type="checkbox"
            name="candidate"
            id="candidate"
            checked={FormData.candidate}
            onChange={changeHandler}

          />


          <label htmlFor="offer">  Offer:</label>
          <input
            type="checkbox"
            name="offer"
            id="offer"
            checked={FormData.offer}
            onChange={changeHandler}

          />
        </fieldset>


        <fieldset>
          <br></br>
          <legend>Push Notification:</legend>
          <input
            type="radio"
            name='pushNotifications'
            id='pushEverything'
            onChange={changeHandler}
            value="Everything"
          />
          <label htmlFor="pushEverything">Everything</label>


          <br></br>
          <input
            type="radio"
            name='pushNotifications'
            id='pushemail'
            onChange={changeHandler}
            value="Same as Email"
          />
          <label htmlFor="pushemail">Same as Email</label>


          <br></br>
          <input
            type="radio"
            name='pushNotifications'
            id='pushNothing'
            onChange={changeHandler}
            value="Nothing to push"
          />
          <label htmlFor="pushNothing">Nothing to push</label>
        </fieldset>

        <button>Save</button>


      </form>
    </div>
  );
}

export default App;