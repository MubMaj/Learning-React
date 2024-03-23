import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "something",
        location: "default L",
        blog: "/",
        avatar_url: "dummyurl",
        html_url: "/",
      },
    };
  }

  async componentDidMount() {
    console.log("componentDidmount");
    const data = await fetch("https://api.github.com/users/mubmaj");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  render() {
    const { name, location, avatar_url, html_url, blog } = this.state.userInfo;

    return (
      <div className="userCard">
        <h2>{name}</h2>
        <h3>Loaction: {location}</h3>
        <a href={html_url} target="_blank">
          <img src={avatar_url}></img>
        </a>
        <h4>
          Contact:{" "}
          <a href={blog} target="_blank">
            Mub.io
          </a>
        </h4>
        <h6>Its a Class Based Component</h6>
      </div>
    );
  }
}

export default UserClass;
