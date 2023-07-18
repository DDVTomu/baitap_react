import React, { Component } from "react";
// import Search from "./Search";
import Users from "./Users";
// import Modal from "./Modal";
import { connect } from "react-redux";
import { actSubmitUser } from "../../store/actions";
import Modal from "./Modal";
class UserManagement extends Component {
  constructor(props) {
    super(props);

    //lưu những value khi user nhập vào các thẻ input
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",

      errors: {
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
      },

      usernameValid: false,
      fullnameValid: false,
      emailValid: false,
      phoneNumberValid: false,

      formValid: false,
    };
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    //Ngăn việc load lại trang web khi click button "Submit"
    event.preventDefault();

    if (this.state.formValid === true) {
      this.props.submitUser(this.state);
    }
    //truyền this.state ra ngoài Home(index)
  };

  handleValidation = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    let mess = value.trim() ? "" : `${name} k dc rong`;

    let { usernameValid, fullnameValid, emailValid, phoneNumberValid } =
      this.state;

    switch (name) {
      case "username":
        usernameValid = mess === "" ? true : false;
        if (value && value.trim().length < 4) {
          mess = "Kí tự từ 4 trở lên";
          usernameValid = false;
        }
        break;

      case "fullname":
        fullnameValid = mess === "" ? true : false;
        if (value && value.trim().length < 4) {
          mess = "Kí tự từ 4 trở lên";
          fullnameValid = false;
        }
        break;

      case "email":
        emailValid = mess === "" ? true : false;
        if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
          mess = "Vui lòng nhâp email đúng định dang!";
          emailValid = false;
        }
        break;

      default:
        break;
    }

    //Cập nhật state.errors
    this.setState(
      {
        errors: { ...this.state.errors, [name]: mess },
        usernameValid,
        fullnameValid,
        emailValid,
        formValid: usernameValid && fullnameValid && emailValid,
      }
      // () => {
      //   console.log(this.state);
      // }
    );
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    /**
     * LifeCycle
     * - K chạy/thực lần đầu
     * - Chạy/thực thi khi mà nhận props mới
     */
    if (nextProps && nextProps.userEdit) {
      //Cập nhật lại state
      this.setState({
        id: nextProps.userEdit.id,
        fullname: nextProps.userEdit.fullname,
        username: nextProps.userEdit.username,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
      });
    } else {
      // reset state
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>

        <div>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header"></div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-box">
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        onChange={this.handleOnchange}
                        onBlur={this.handleValidation}
                        value={this.state.username}
                      />
                      {this.state.errors.username && (
                        <div className="text-danger">
                          {this.state.errors.username}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullname"
                        onChange={this.handleOnchange}
                        onBlur={this.handleValidation}
                        value={this.state.fullname}
                      />
                      {this.state.errors.fullname && (
                        <div className="text-danger">
                          {this.state.errors.fullname}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        onChange={this.handleOnchange}
                        onBlur={this.handleValidation}
                        value={this.state.email}
                      />
                      {this.state.errors.email && (
                        <div className="text-danger">
                          {this.state.errors.email}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        onChange={this.handleOnchange}
                        onBlur={this.handleValidation}
                        value={this.state.phoneNumber}
                      />
                      {this.state.errors.phoneNumber && (
                        <div className="text-danger">
                          {this.state.errors.phoneNumber}
                        </div>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Modal />
        <div className="d-flex justify-content-between align-items-center">
          {/* <Search /> */}
          {/* <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.resetUserEdit();
            }}
          >
            Add User
          </button> */}
        </div>
        <Users />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetUserEdit: () => {
      const action = {
        type: "EDIT_USER",
        payload: null,
      };

      dispatch(action);
    },
    submitUser: (user) => {
      dispatch(actSubmitUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserManagement);
