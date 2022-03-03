import axios from "axios";
import API from "../api/ApiURL";
import store from "../store";
let response = [];
export default {
  async login(user, password) {
    response = await axios.post(API.proximate + "login", {
      user: user,
      password: password,
    });
    let datos = JSON.parse(response.data.data);
    console.log(datos);
    let token = datos.userToken;
    if (response) {
      store.dispatch("saveToken", token);
    }
  },
};
