import React, { Component } from "react";
import TextInputs from './form/Inputs';
import Textarea from './form/textarea';
import SubmitForm from "./form/submit";
import FormHeader from "./form/form-header";
import InfoIcon from "./icon/infoSvg";


class BasicInfo extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="form-container">
                <FormHeader text={'Basic Information'} child={<InfoIcon />}/>
              <form>
                 <TextInputs text={"fName"} title={"First Name"} inputType={"text"}/>
                 <TextInputs text={"lName"} title={"Last Name"} inputType={"text"} />
                 <TextInputs text={"dob"} title={"Date of Birth"} inputType={"date"} />
                 <Textarea text={"about"}/>
                 <SubmitForm icon={'submit'}/>
             </form>
            </div>
        )
    }
}

export default BasicInfo;