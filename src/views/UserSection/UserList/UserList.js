import React, {Component} from 'react';
import axios from 'axios';

class UserList extends Component {

  state = {
    posts: []
  };


  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({posts: res.data});
      });
  }


  render() {
    const posts = this.state.posts.map(post => {
        return (<tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.email}</td>
          <td>{post.company.name}</td>
        </tr>)
      }
    );
    return (
      <div className="card animated fadeIn">
        <div className="table-responsive">
          <table className="table table-hover earning-box">
            <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company Name</th>
            </tr>
            </thead>
            <tbody>
              {posts}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default UserList;
