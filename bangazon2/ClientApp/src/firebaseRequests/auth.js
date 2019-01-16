import firebase from 'firebase';
import axios from 'axios';

const registerUser = (user) => {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
};

const addCustomer = (customer) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/api/customer/addcustomer`, customer)
      .then((res) => {
          resolve(res.data);
      })
      .catch((err) => {
          reject(err);
      })
  })
}

const loginUser = (user) => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(cred => {
    cred.user.getIdToken()
      .then(token => sessionStorage.setItem('token',token));
  });
};

export default { registerUser,addCustomer,loginUser }