import firebase from 'firebase';

const registerUser = (user) => {
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
};

// const postFirebaseId = () => {
//   return new Promise((resolve, reject) => {
//     axios
//         .post(`/api/customer/addcustomer`, customer)
//         .then((res) => {
//             resolve(res);
//         })
//         .catch((err) => {
//             reject(err);
//         })
//   })
// }

export default { registerUser }