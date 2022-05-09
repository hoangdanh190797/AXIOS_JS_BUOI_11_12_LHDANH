function Services() {
    this.fetchData = function () {
      return axios({
        url: "https://6255692652d8738c69217244.mockapi.io/api/UserManagerment",
        method: "GET",
      });
    };
  
    this.deleteUser = function (id) {
      return axios({
        url: `https://6255692652d8738c69217244.mockapi.io/api/UserManagerment/${id}`,
        method: "DELETE",
      });
    };
  
    this.addUsersApi = function (users) {
      return axios({
        url: "https://6255692652d8738c69217244.mockapi.io/api/UserManagerment",
        method: "POST",
        data: users,
      });
    };
  
    this.getUsersbyId = function (id) {
      return axios({
        url: `https://6255692652d8738c69217244.mockapi.io/api/UserManagerment/${id}`,
        method: "GET",
      });
    };
  
    this.updateInfoUsers = function (users) {
      return axios({
        url: `https://6255692652d8738c69217244.mockapi.io/api/UserManagerment/${users.id}`,
        method: "PUT",
        data: users,
      });
    };
  }
  