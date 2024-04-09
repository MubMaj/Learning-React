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
      <div className="border border-black flex flex-col items-center w-6/12">
        <h2 className="font-bold text-lg">{name}</h2>
        <h3 className="font-bold text-sm">Loaction: {location}</h3>
        <h4 className="font-bold text-sm">
          Contact -
          <a className=" text-blue-500 underline" href={blog} target="_blank">
            Mub.io
          </a>
        </h4>
        <a className="w-8/12" href={html_url} target="_blank">
          <img src={avatar_url}></img>
        </a>
        <p className="text-blue-950 underline">Note: This is a Class Based Component just for learning</p>
      </div>
    );
  }
}

export default UserClass;
