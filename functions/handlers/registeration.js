const { db, firestore } = require('../utils/admin');

exports.registeration = (req, res) => {
  let data = req.body.user;
  const userKeys = [
    'Fname',
    'Lname',
    'email',
    'number',
    'Scourse',
    'detail',
    'checked',
  ];
  let conditions = [];
  console.log(data);
  Object.keys(data).forEach((key) => {
    conditions.push(userKeys.includes(key) && data[key] !== '');
  });
  console.log(conditions);
  if (
    conditions.length == userKeys.length &&
    conditions.every((e) => e === true) &&
    Object.keys(userKeys).length !== 0
  ) {
    db.collection('registrations')
      .doc(data['email'])
      .create({
        data,
      })
      .then((resp) =>
        res.status(201).json({ message: 'Registration Succesful' })
      )
      .catch((err) => res.status(400).json({ message: err }));
  } else {
    return res.status(400).json({ message: 'Bad Request' });
  }
};
