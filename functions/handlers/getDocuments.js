const { db, firestore } = require('../utils/admin');

exports.getDocuments = (req, res) => {
  db.collection('courses')
    .get()
    .then((snapshot) => {
      let documents = [];
      snapshot.forEach((document) => {
        documents.push(document.data());
      });
      return res.status(200).json({ doc: documents });
    })
    .catch((err) => res.status(400).json({ message: err }));
};
