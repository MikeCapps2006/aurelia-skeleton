import toastr from 'toastr'
import './home.scss';

export class Home {

    constructor() {
        this.notification = toastr;
    }

    attached() {
        //The attached function is going to fire BEFORE the page is loaded
    }

    async activate() {
        //The activate function is going to fire AFTER the page is loaded
        //Typically this is where you would want to do any routes to bring in the data for a page.
        //If this data is going to take awhile to load, I would do it in the attached.
        //Aurelia supports ES6/7 Methods so using async/await is going to be your best friend
    }

    rangeSliderValue = 75; //We use this variable to store our selected value from the input slider

    buttons = [
        {type: 'error', message: "Open Error Message"},
        {type: 'info', message: "Open Info Message"},
        {type: 'success', message: "Open Success Message"}
    ];

    johnSmith = {firstName: "John", lastName: "Smith"};

    openNotification(button) {
        this.notification[button.type](button.message)
        //FOR YOU JAVASCRIPT NUBS:
        // IF button = {type: 'success', message: "Open Success Message"}
        // this.notification[button.type](button.message) translates to this.notification.success("Open Success Message")
    }

}
