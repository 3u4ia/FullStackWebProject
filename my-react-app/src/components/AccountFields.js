function AccountForm() {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Account</h1>
                </div>
            </div>





            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col-md-3"></div>
                    <form method="GET" className="col-md-6">
                        <div className="form-group">
                            <label>First Name: </label>
                            <input type="text" className="form-control" id="FirstName"/>
                        </div>
                        <div className="form-group p-8">
                            <label>Last Name: </label>
                            <input type="text" name="LastName" className="form-control" id="LastName"/>
                        </div>
                        <div className="form-group">
                            <label>Address line 1:</label>
                            <input type="text" name="Address1" className="form-control" id="Address1"/>
                        </div>
                        <div className="from-group">
                            <label>Address line 2:</label>
                            <input type="text" name="Address2" className="form-control" id="Address2"/>
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" name="City" className="form-control" id="City"/>
                        </div>
                        <div className="form-group">
                            <label>State:</label>
                            <select id="State" name="State">
                                <option value="">Select state</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AS">American Samoa</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="UM-81">Baker Island</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="GU">Guam</option>
                                <option value="HI">Hawaii</option>
                                <option value="UM-84">Howland Island</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="UM-86">Jarvis Island</option>
                                <option value="UM-67">Johnston Atoll</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="UM-89">Kingman Reef</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="UM-71">Midway Atoll</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="UM-76">Navassa Island</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="UM-95">Palmyra Atoll</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="VI">United States Virgin Islands</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="UM-79">Wake Island</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="ZipCode">Zip Code:</label>
                            <input type="number" name="ZipCode" id="ZipCode"/>
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="tel" id="phone" name="phone"/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="text" id="email" name="email"/>
                        </div>

                        <div className="checkbox">
                            <label><input type="checkbox"/>Remember me</label>
                        </div>

                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="reset" className="btn btn-default btn-secondary">Reset</button>
                    </form>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default AccountForm;