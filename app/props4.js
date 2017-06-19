class Users extends React.Component {
  render() {
    return (
      <ul>
        {/*Create an <li> for every name in the list array*/}
        {this.props.list.map(function(list) {
          return <li> {list} </li>;
        })}
      </ul>
    )
  }
}

ReactDOM.render(
  <Users list={['Kirby', 'Hanna', 'James', 'Keyz']} />,
  document.getElementById('app')
);
