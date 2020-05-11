const { db, firestore } = require('../utils/admin');

exports.deleteDocument = (req, res) => {
  let id = req.query.id;

  db.collection('courses')
    .doc(id)
    .delete()
    .then((resp) => res.status(202).json({ message: 'docuemnte deleted' }))
    .catch((err) => res.status(400).json({ message: err }));
};
