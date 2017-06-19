var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./props5.css');

class Users extends React.Component {
  render() {
      var friends = this.props.list.filter(function (name) {
        return name.friend === true;
      });

      var nonFriends = this.props.list.filter(function (name) {
        return name.friend === false;
      });

      const friendList = friends.map(person => <li>{person.name}</li>);

      const nonFriendList = nonFriends.map(person => <li>{person.name}</li>);
      // const friendList = friends.map(function (person) {
      //   return (
      //     <li key={person.name}>
      //        {person.name}
      //      </li>
      //    );
      // });

      // const nonFriendList = nonFriends.map (function (person) {
      //   return (
      //     <li key={person.name}>
      //        {person.name}
      //      </li>
      //    );
      // });

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

User.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friends: PropTypes.bool.isRequired,
  })),
}

ReactDOM.render(
  <Users list={[
    { name: 'Kirby', friend: true },
    { name: 'James', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]}
  />,
  document.getElementById('app')
);
