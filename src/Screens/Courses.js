import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import CourseCard from '../Components/CourseCard';
import { Store } from '../Store/Store';

const uesStyles = makeStyles((theme) => ({
  root: { flexGrow: 1, padding: 20 },
}));
const Courses = (props) => {
  const classes = uesStyles();
  const [state] = React.useContext(Store);
  const data = state.data.doc;
  const Card =
    data !== undefined
      ? data.map((elem) => {
          return (
            <Grid item xs={12} md={4} xl={4}>
              <CourseCard
                coursehasVideo={elem.courseContent.hasVideo}
                courseVideoLink={elem.courseContent.videoLink}
                courseImage={elem.courseContent.courseImage}
                courseTitle={elem.courseContent.courseTitle}
                courseDetail={elem.courseContent.courseBody}
                courseVideoCaption={elem.courseContent.videoCaption}
                instructorContent={elem.instructorContent}
              />
            </Grid>
          );
        })
      : '';
  return (
    <React.Fragment>
      <Container maxWidth='xl'>
        <center>
          <Grid className={classes.root} container spacing={5}>
            {Card}
          </Grid>
        </center>
      </Container>
    </React.Fragment>
  );
};

export default Courses;
