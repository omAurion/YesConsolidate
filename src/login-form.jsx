var React = require("react");
var ReactDOM = require("react-dom");
var {Route} = require("react-router");

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {error: null};
    }

    onSubmit(e) {
        e.preventDefault();
        var custId = ReactDOM.findDOMNode(this.refs.custId).value;
        var dob = ReactDOM.findDOMNode(this.refs.dob).value;
        if (this.props.onLogin)
            this.props.onLogin(custId, dob);
    }

    render() {
        if (this.props.error) {
            var error = (
                <div className="alert alert-danger" role="alert">
                    {this.props.error}
                </div>
            );
        }
        return (

            <div className="container-fluid">
                <header className="headerStyle">
                    <div className="yesBankLogo"></div>
                </header>
                <section className="row">
                    <div className="loginPage">
                        <div className="col-xs-12 col-md-4 col-sm-6 whiteTxt">
                            <h1>Presenting <span className="redTxt"><strong>MY-SITE</strong></span></h1>
                            <div className="redHr"></div><br/>
                            <p>You can access all the details of your banking relationships at one place. No need to check account statements or browse through hundreds of emails for past informations. <span className="blue">Everything,</span> <span className="redTxt"> right here.</span></p>
                        </div>
                        <div className="col-md-3"></div>
                        <div className="col-xs-12 col-md-5 col-sm-6">
                            {error}
                            <form className="whiteTxt transparentBlueBackground" onSubmit={this.onSubmit.bind(this)}>
                                <h3>Login</h3>
                                <div className="redHr"></div>
                                <div className="row topMargin15">
                                    <div className="col-xs-8 col-md-7 col-sm-7">
                                        <p>Your YES BANK Customer ID</p>
                                    </div>
                                    <div className="col-xs-4 col-md-5 col-sm-5">
                                        <input type="text" className="form-control" name="custId" ref="custId"/>
                                    </div>
                                </div>
                                <div className="row topMargin15">
                                    <div className="col-xs-8 col-md-7 col-sm-7">
                                        <p>Your Date of Birth in mmddyyy</p>
                                    </div>
                                    <div className="col-xs-4 col-md-5 col-sm-5">
                                        <input type="password" className="form-control" name="dob" ref="dob"/>
                                    </div>
                                </div>
                                <div className="row topMargin15">
                                    <div className="col-xs-8 col-md-7 col-sm-7">
                                        <p></p>
                                    </div>
                                    <div className="col-xs-4 col-md-5 col-sm-5">
                                        <button className="redLoginBtn">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = LoginForm;