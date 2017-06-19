var USER_DATA = {
  name: 'Kirby James',
  img: 'https://avatars2.githubusercontent.com/u/20747057?v=3&s=400',
  username: 'kirbygit'
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.img} />
        <h1>Name: {this.props.user.name} </h1>
        <h3>username: {this.props.user.username} </h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge user={USER_DATA}/>,
  document.getElementById('app')
);
