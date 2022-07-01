import React from 'react';
import { Redirect } from 'react-router-dom'


class AdminLogin extends Component {
  constructor(props) {
      super(props)
      this.state = {
          employeeID: '',
          password: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  handleSubmit(event) {
      event.preventDefault()
      this.props.login(this.state.employeeID, this.state.password)
  }
  render() {
    if (this.props.isAuthenticated) {
        return <Redirect to="/AdminBookingLog" />
    }
      return (
          <div className="container">
              <div className="row">
                  <div className="col-md-6 mx-auto">
                      <div className="card">
                          <div className="card-header">
                              <h4>Admin Login</h4>
                          </div>
                          <div className="card-body">
                              <form onSubmit={this.handleSubmit}>
                                  <div className="form-group">
                                      <label htmlFor="employeeID">Employee ID</label>
                                      <input type="text" className="form-control" id="username" name="username" value={this.state.employeeID} onChange={this.handleChange} />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="password">Password</label>
                                      <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                  </div>
                                  <button type="submit" className="btn btn-primary">Login</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
}
export default AdminLogin;
