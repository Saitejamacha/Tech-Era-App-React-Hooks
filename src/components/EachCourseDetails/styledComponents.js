import styled from 'styled-components'

export const CourseDetailsList = styled.li`
  width: 70vw;
  height: 60vh;
  background-color: white;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TextCon = styled(CourseDetailsList)`
  //   background-color: lightblue;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
  margin-left: 20px;
  box-shadow: none;
`

export const CourseImg = styled.img`
  width: 25vw;
  height: 60vh;
`

export const CourseText = styled.p`
  font-family: roboto;
  font-size: 20px;
  color: #475569;
  width: 40vw;
  margin-right: 20px;
`
export const CourseName = styled.h1`
  font-family: roboto;
  font-size: 25px;
`
