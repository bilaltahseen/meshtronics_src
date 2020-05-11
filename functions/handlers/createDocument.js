const { db, firestore } = require('../utils/admin');

exports.createDocument = (req, res) => {
  let doc = req.body.doc;
  let courseContent = doc['courseContent'];
  let instructorContent = doc['instructorContent'];
  const courseKeys = [
    'courseBody',
    'courseTitle',
    'courseImage',
    'hasVideo',
    'videoLink',
    'videoCaption',
  ];
  const instructorKeys = [
    'instrutorName',
    'instructorExpertie',
    'instructorDetails',
    'instructorImage',
  ];
  let conditions = [];
  Object.keys(courseContent).forEach((key) => {
    conditions.push(courseKeys.includes(key) && courseContent[key] !== '');
  });
  Object.keys(instructorContent).forEach((key) => {
    conditions.push(
      instructorKeys.includes(key) && instructorContent[key] !== ''
    );
  });
  if (
    conditions.length == [...courseKeys, ...instructorKeys].length &&
    Object.keys(courseContent).length !== 0 &&
    Object.keys(instructorContent).length !== 0
  ) {
    db.collection('courses')
      .doc(doc.courseContent.courseTitle)
      .create(doc)
      .then((resp) => res.status(201).json({ message: 'document created' }))
      .catch((err) => res.status(400).json({ message: err }));
  } else {
    return res.status(400).json({ message: 'Bad Request' });
  }
};
