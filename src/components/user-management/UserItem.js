import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actEditUser } from "../../store/actions";

class UserItem extends Component {
  render() {
    const { user, editUser, deleteUser } = this.props;

    return (
      <tr>
        <td>{user ? user.fullname : ""}</td>
        <td>{user ? user.username : ""}</td>
        <td>{user ? user.email : ""}</td>
        <td>{user ? user.phoneNumber : ""}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-bs-toggle="modal"
            data-bs-target="#modelIdUser"
            onClick={() => {
              editUser(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //key là props cho component UserItem
    deleteUser: (id) => {
      //dispatch gửi action lên reducer
      dispatch(actDeleteUser(id));
    },

    editUser: (user) => {
      dispatch(actEditUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
