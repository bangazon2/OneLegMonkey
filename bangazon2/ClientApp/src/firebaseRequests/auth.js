import firebase from 'firebase';
import axios from 'axios';

// add token to every single request to the API
axios.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');

  if (token != null) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function (err) {
  return Promise.reject(err);
});

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

const logoutUser = () => {
  return firebase.auth().signOut();
};

export default { registerUser,addCustomer,loginUser,logoutUser }