import React, { Component } from "react";
import "./Profile.css";
import { Input, FormBtn } from "../../components/Form";
import { Container, Col, Row } from "../../components/Grid";
import API from "../../utils/API";

class Profile extends Component {
  state = {
    name: "",
    image: "",
    msg: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.image) {
      API.createUser({ name: this.state.name, image: this.state.image });
      this.setState({
        name: "",
        image: "",
        msg: "Sign Up Successful!"
      });
    } else if (this.state.name || !this.state.image) {
      API.createUser({
        name: this.state.name,
        image: "https://via.placeholder.com/200"
      });
      this.setState({
        name: "",
        image: "",
        msg: "Sign Up Successful!"
      });
    } else {
      this.setState({ msg: "Please Enter At Least Your Name!" });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-4 sm-4">
                      <Input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInput}
                        placeholder="Enter your name"
                      />
                    </Col>
                    <Col size="xs-4 sm-4">
                      <Input
                        name="image"
                        value={this.state.image}
                        onChange={this.handleInput}
                        placeholder="Link to your profile pic"
                      />
                    </Col>
                    <Col size="xs-2 sm-2">
                      <FormBtn onClick={this.handleSubmit}>Submit</FormBtn>
                    </Col>
                    <Col size="xs-2 sm-2">
                      <FormBtn onClick={this.handleUpdate}>Update</FormBtn>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <div className="msg">{this.state.msg}</div>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

export default Profile;
