const { db, firestore } = require('../utils/admin');

exports.updateDocument = (req, res) => {
  let doc = req.body.doc;
  let courseContent = doc['courseContent'];
  let instructorContent = doc['instructorContent'];

  db.collection('courses')
    .doc(courseContent.courseTitle)
    .update({
      courseContent: courseContent,
      instructorContent: instructorContent,
    })
    .then((resp) => res.status(204).json({ message: 'document updated' }))
    .catch((err) => res.status(400).json({ message: err }));
};
