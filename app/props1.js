class Badge extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.img} />
        <h1>Name: {this.props.name} </h1>
        <h3>username: {this.props.username} </h3>
      </div>
    )
  }
}

ReactDOM.render(
  <Badge
    name='Kirby James'
    username='kirbygit'
    img='https://avatars2.githubusercontent.com/u/20747057?v=3&s=400'/>,
  document.getElementById('app')
);
