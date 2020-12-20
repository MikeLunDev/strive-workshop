import React from 'react'
import "./index.scss"
class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", submitted: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: this.state.value })
  }

  componentDidMount() {
    console.log("mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      console.log("Something was written in class")
    }
  }

  render() {
    return (
      <>
        <form className="box-form" onSubmit={this.handleSubmit}>
          <label>
            {this.props.label}:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.submitted.length > 0 && <p>Event submitted: {this.state.submitted}</p>}
      </>
    );
  }
}

export default ClassForm;