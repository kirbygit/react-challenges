var React = require('react');
var ReactDom = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name} </h1>
        <h3>username: {this.props.username} </h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

ReactDom.render(
  <Badge
    name='Kirby James'
    username='kirbygit'
    img={'https://avatars2.githubusercontent.com/u/20747057?v=3&s=400'}
  />,
  document.getElementById('root')
);
