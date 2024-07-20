import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      lastName: props.lastName,
      phone: props.phone,
      email: props.email,
      city: props.city,
      experience: props.experience,
      skills: props.skills,
    };

    this.handleChange = this.handleChange.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  resetFields() {
    this.setState({
      name: this.props.name,
      lastName: this.props.lastName,
      phone: this.props.phone,
      email: this.props.email,
      city: this.props.city,
      experience: this.props.experience,
      skills: this.props.skills,
    });
  }

  render() {
    return (
      <div className="personal-info">
        <img src={`${process.env.PUBLIC_URL}/${this.props.photo}`} alt="Фото" />
        <h2>{this.state.name} {this.state.lastName}</h2>
        <p>
          Телефон: <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </p>
        <p>
          Email: <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </p>
        <p>
          Місто проживання: <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
        </p>
        <p>
          Досвід роботи: <input type="text" name="experience" value={this.state.experience} onChange={this.handleChange} />
        </p>
        <p>
          Навички: <input type="text" name="skills" value={this.state.skills} onChange={this.handleChange} />
        </p>
        <button onClick={this.resetFields}>Повернути початкові значення</button>
      </div>
    );
  }
}

export default PersonalInfo;
