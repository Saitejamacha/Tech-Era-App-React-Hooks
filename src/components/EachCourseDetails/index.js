import {
  CourseDetailsList,
  TextCon,
  CourseImg,
  CourseName,
  CourseText,
} from './styledComponents'

const EachCourseDetails = props => {
  const {eachCourseDetails} = props
  const {id, imageUrl, name, description} = eachCourseDetails

  return (
    <CourseDetailsList>
      <CourseImg src={imageUrl} />
      <TextCon>
        <CourseName>{name}</CourseName>
        <CourseText>{description}</CourseText>
      </TextCon>
    </CourseDetailsList>
  )
}

export default EachCourseDetails
