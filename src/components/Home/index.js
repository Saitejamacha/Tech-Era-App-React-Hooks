import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {HomeContainer, Heading, CourseUnList} from './styledComponents'

import Header from '../Header'
import CourseItem from '../CourseItem'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const Home = () => {
  const [apiStatus, setApiStatus] = useState({
    status: apiStatusConstant.initial,
    data: null,
    errorMsg: null,
  })

  useEffect(() => {
    const getApiResponse = async () => {
      setApiStatus({
        status: apiStatusConstant.inProgress,
        data: null,
        errorMsg: null,
      })

      const url = ' https://apis.ccbp.in/te/courses'
      const options = {
        methods: 'GET',
      }

      const response = await fetch(url, options)
      const data = await response.json()

      console.log(response)
      console.log(data)

      const formattedData = data.courses.map(eachCourses => ({
        id: eachCourses.id,
        logoUrl: eachCourses.logo_url,
        name: eachCourses.name,
      }))

      if (response.ok) {
        setApiStatus(prevState => ({
          prevState,
          status: apiStatusConstant.success,
          data: formattedData,
        }))
      } else {
        setApiStatus(prevState => ({
          ...prevState,
          status: apiStatusConstant.failure,
          errorMsg: response.error_msg,
        }))
      }
    }

    getApiResponse()
  }, [])

  const renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={60} width={80} />
    </div>
  )

  const renderSuccessView = () => {
    const {data} = apiStatus

    const courseList = data.map(eachCourse => (
      <CourseItem courseItem={eachCourse} key={eachCourse.id} />
    ))

    return courseList
  }

  const renderFailureView = () => (
    <div>
      <h1>Fail</h1>
    </div>
  )

  const renderRespectiveView = () => {
    const {status} = apiStatus

    switch (status) {
      case apiStatusConstant.inProgress:
        return renderLoadingView()
      case apiStatusConstant.success:
        return renderSuccessView()
      case apiStatusConstant.failure:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <HomeContainer>
        <Heading>Courses</Heading>
        <CourseUnList>{renderRespectiveView()}</CourseUnList>
      </HomeContainer>
    </>
  )
}

export default Home
