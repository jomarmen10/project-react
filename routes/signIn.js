// router.post('/signup', (req, res, next) => {
//   const { body } = req;
//   const {
//     firstName,
//     lastName,
//     email,
//     password
//   } = body;
//
//   if (!firstName) {
//     return res.send({
//       success: false,
//       message: "Error: first name cannot be blank"
//     })
//   }
//   if (!lastName) {
//     return res.send({
//       success: false,
//       message: "Error: last name cannot be blank"
//     })
//   }
//   if (!email) {
//     return res.send({
//       success: false,
//       message: "Error: email cannot be blank"
//     })
//   }
//   if (!password) {
//     return res.send({
//       success: false,
//       message: "Error: password cannot be blank"
//     })
//   }
//
//   email = email.toLowerCase();
//
//   User.find({
//     email: email
//   }, (err, prevUser) => {
//     if(err){
//       return res.send({
//         success: false,
//         message: "Error: server error"
//       })
//     } else if ( prevUser.length > 0) {
//       return res.send({
//         success: false,
//         message: "Error: Acct already exist"
//       })
//     } else {
//       const newUser = new User();
//       newUser.firstName = firstName;
//       newUser.lastName = lastName;
//       newUser.email = email;
//       newUser.password = newUser.generateHash(password);
//       newUser.save((err, user) => {
//         if(err) {
//           return res.send({
//             success: false,
//             message: "Error: server error"
//           })
//         }
//         return res.send({
//           success: true,
//           message: "Signed Up"
//         })
//       })
//     }
//   })
//
// })
