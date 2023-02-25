import {Link} from 'react-router-dom'

import {CourseList, Image, Text} from './styledComponents'

const CourseItem = props => {
  const {courseItem} = props
  const {id, name, logoUrl} = courseItem

  return (
    <Link to={`/courses/${id}`} style={{textDecoration: 'none'}}>
      <CourseList>
        <Image src={logoUrl} alt={name} />
        <Text>{name}</Text>
      </CourseList>
    </Link>
  )
}

export default CourseItem
