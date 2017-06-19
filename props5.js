class Users extends React.Component {
  render() {
      var friends = this.props.list.filter(function (name) {
        return name.friend === true
      });

      var nonFriends = this.props.list.filter(function (name) {
        return name.friend === false
      });

      const friendList = friends.map(function (person) {
        return <li> {person.name} </li>
      });

      const nonFriendList = nonFriends.map (function (person) {
        return <li> {person.name} </li>
      });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {/*Create an <li> for every name in the list array who is also your friend*/}
          {friendList}
        </ul>

        <hr />

        <h1> Non Friends </h1>
        <ul>
          {/*Create an <li> for every name in the list array who is NOT your friend*/}
          {nonFriendList}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);
