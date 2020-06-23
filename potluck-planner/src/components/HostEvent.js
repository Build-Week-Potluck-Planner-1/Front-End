import React from 'react';

function HostEvent(props) {
    return (
        <form className='locationForm'>
            <h2>Host a New Event</h2>
            <h3>Fill out Location of Event below:</h3>
            <div className='formInputDiv'>
                <div><label>Name/Descr of Location:</label></div>
                <div><input type='text' name='locationName' /></div>
            </div>
            <div className='formInputDiv'>
                <div><label>Address #:</label></div>
                <div><input type='number' name='locationAddress' /></div>
            </div>
            <div className='formInputDiv'>
                <div><label>Street:</label></div>
                <div><input type='text' name='locationStreet' /></div>
            </div>
            <div className='formInputDiv'>
             <div><label>City:</label></div>
                <div><input type='text' name='locationCity' /></div>
            </div>
            <div className='formInputDiv'>
                <div><label>State:</label></div>
                <div>
                    <select name='locationState'>
                        <option value=''>--- Select State ---</option>
                        <option value="AL">AL - Alabama</option>
                        <option value="AK">AK - Alaska</option>
                        <option value="AZ">AZ - Arizona</option>
                        <option value="AR">AR - Arkansas</option>
                        <option value="CA">CA - California</option>
                        <option value="CO">CO - Colorado</option>
                        <option value="CT">CT - Connecticut</option>
                        <option value="DE">DE - Delaware</option>
                        <option value="FL">FL - Florida</option>
                        <option value="GA">GA - Georgia</option>
                        <option value="HI">HI - Hawaii</option>
                        <option value="ID">ID - Idaho</option>
                        <option value="IL">IL - Illinois</option>
                        <option value="IN">IN - Indiana</option>
                        <option value="IA">IA - Iowa</option>
                        <option value="KS">KS - Kansas</option>
                        <option value="KY">KY - Kentucky</option>
                        <option value="LA">LA - Louisiana</option>
                        <option value="ME">ME - Maine</option>
                        <option value="MD">MD - Maryland</option>
                        <option value="MA">MA - Massachussets</option>
                        <option value="MI">MI - Michigan</option>
                        <option value="MN">MN - Minnesota</option>
                        <option value="MS">MS - Mississippi</option>
                        <option value="MO">MO - Missouri</option>
                        <option value="MT">MT - Montana</option>
                        <option value="NE">NE - Nebraska</option>
                        <option value="NV">NV - Nevada</option>
                        <option value="NH">NH - New Hampshire</option>
                        <option value="NJ">NJ - New Jersey</option>
                        <option value="NM">NM - New Mexico</option>
                        <option value="NY">NY - New York</option>
                        <option value="NC">NC - North Carolina</option>
                        <option value="ND">ND - North Dakota</option>
                        <option value="OH">OH - Ohio</option>
                        <option value="OK">OK - Oklahoma</option>
                        <option value="OR">OR - Oregon</option>
                        <option value="PA">PA - Pennsylvania</option>
                        <option value="RI">RI - Rhode Island</option>
                        <option value="SC">SC - South Carolina</option>
                        <option value="SD">SD - South Dakota</option>
                        <option value="TN">TN - Tennessee</option>
                        <option value="TX">TX - Texas</option>
                        <option value="UT">UT - Utah</option>
                        <option value="VT">VT - Vermont</option>
                        <option value="VA">VA - Virginia</option>
                        <option value="WA">WA - Washington</option>
                        <option value="WV">WV - West Virginia</option>
                        <option value="WI">WI - Wisconsin</option>
                        <option value="WY">WY - Wyoming</option>
                        <option value="DC">DC - Dist. of Columbia</option>
                    </select>
                </div>
            </div>
            <div className='formInputDiv'>
                <div><label>ZIP Code:</label></div>
                <div><input type='text' name='locationPostalcode' /></div>
            </div>
            <div className='formInputDiv'>
                <div><label>Country:</label></div>
                <div>
                    <select name='locationCountry'>
                        <option value=''>--- Select Country ---</option>
                        <option value='US'>United States</option>
                        <option value='Canada'>Canada</option>
                        <option value='Cuba'>Cuba</option>
                        <option value='Dominican Republic'>Dominican Republic</option>
                        <option value='Brazil'>Brazil</option>
                        <option value='Panama'>Panama</option>
                        <option value='Costa Rica'>Costa Rica</option>
                        <option value='Venezuela'>Venezuela</option>
                        <option value='Argentina'>Argentina</option>
                        <option value='Ecuador'>Ecuador</option>
                        <option value='Bolivia'>Bolivia</option>
                        <option value='Chile'>Chile</option>
                        <option value='Colombia'>Colombia</option>
                        <option value='Paraguay'>Paraguay</option>
                        <option value='Uruguay'>Uruguay</option>
                        <option value='Mexico'>Mexico</option>
                        <option value='England'>England</option>
                        <option value='Wales'>Wales</option>
                        <option value='Ireland'>Ireland</option>
                        <option value='Scotland'>Scotland</option>
                        <option value='Germany'>Germany</option>
                        <option value='France'>France</option>
                        <option value='Italy'>Italy</option>
                        <option value='Netherlands'>Netherlands</option>
                        <option value='Poland'>Poland</option>
                        <option value='Spain'>Spain</option>
                        <option value='Portugal'>Portugal</option>
                        <option value='Belgium'>Belgium</option>
                        <option value='Denmark'>Denmark</option>
                        <option value='Sweden'>Sweden</option>
                        <option value='Norway'>Norway</option>
                        <option value='Finland'>Finland</option>
                        <option value='Hungary'>Hungary</option>
                        <option value='Slovakia'>Slovakia</option>
                        <option value='Turkey'>Turkey</option>
                        <option value='Greece'>Greece</option>
                        <option value='Russia'>Russia</option>
                        <option value='Ukraine'>Ukraine</option>
                        <option value='Georgia'>Georgia</option>
                        <option value='Lithuania'>Lithuania</option>
                        <option value='Luxembourg'>Luxembourg</option>
                        <option value='Slovenia'>Slovenia</option>
                        <option value='Austria'>Austria</option>
                        <option value='Bulgaria'>Bulgaria</option>
                        <option value='Romania'>Romania</option>
                        <option value='Belarus'>Belarus</option>
                        <option value='Estonia'>Estonia</option>
                        <option value='Iceland'>Iceland</option>
                        <option value='Greenland'>Greenland</option>
                        <option value='Antartica'>Antartica</option>
                        <option value='Egypt'>Egypt</option>
                        <option value='Iran'>Iran</option>
                        <option value='Iraq'>Iraq</option>
                        <option value='Syria'>Syria</option>
                        <option value='Israel'>Israel</option>
                        <option value='Palestine'>Palestine</option>
                        <option value='United Arab Emirates'>United Arab Emirates</option>
                        <option value='Libya'>Libya</option>
                        <option value='Algeria'>Algeria</option>
                        <option value='Morocco'>Morocco</option>
                        <option value='Chad'>Chad</option>
                        <option value='Sudan'>Sudan</option>
                        <option value='Mauritania'>Mauritania</option>
                        <option value='Ghana'>Ghana</option>
                        <option value='Ethiopia'>Ethiopia</option>
                        <option value='Kenya'>Kenya</option>
                        <option value='Tanzania'>Tanzania</option>
                        <option value='Zambia'>Zambia</option>
                        <option value='Madagascar'>Madagascar</option>
                        <option value='Namibia'>Namibia</option>
                        <option value='South Africa'>South Africa</option>
                        <option value='India'>India</option>
                        <option value='Pakistan'>Pakistan</option>
                        <option value='Turkmenistan'>Turkmenistan</option>
                        <option value='Kazakhstan'>Kazakhstan</option>
                        <option value='China'>China</option>
                        <option value='Mongolia'>Mongolia</option>
                        <option value='Myanmar'>Myanmar</option>
                        <option value='Vietnam'>Vietnam</option>
                        <option value='Cambodia'>Cambodia</option>
                        <option value='Laos'>Laos</option>
                        <option value='Thailand'>Thailand</option>
                        <option value='Philippines'>Philippines</option>
                        <option value='Malaysia'>Malaysia</option>
                        <option value='Singapore'>Singapore</option>
                        <option value='South Korea'>South Korea</option>
                        <option value='Japan'>Japan</option>
                        <option value='Indonesia'>Indonesia</option>
                        <option value='Papua New Guinea'>Papua New Guinea</option>
                        <option value='Australia'>Australia</option>
                        <option value='New Zealand'>New Zealand</option>
                    </select>
                </div>
            </div>
            <div className='formInputDiv'>
                <button>Create Event</button>
                <button>Cancel</button>
            </div>
        </form>
    );
}

export default HostEvent;