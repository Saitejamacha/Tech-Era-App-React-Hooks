import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {useHistory, useParams} from 'react-router-dom'
import Header from '../Header'
import EachCourseDetails from '../EachCourseDetails'
import {CourseDetailsCon} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const CourseDetails = () => {
  const [courseDetailsApiStatus, setCourseDetailsApi] = useState({
    status: apiStatusConstant.initial,
    data: null,
    errorMsg: null,
  })

  // const history = useHistory()
  //  console.log(history)
  const {id} = useParams()
  // console.log(id)

  useEffect(() => {
    const getCourseDetailsApi = async () => {
      setCourseDetailsApi({
        status: apiStatusConstant.inProgress,
        data: null,
        errorMsg: null,
      })

      const url = `https://apis.ccbp.in/te/courses/${id}`

      const options = {
        methods: 'GET',
      }

      const response = await fetch(url, options)
      const data = await response.json()

      // console.log(response)
      console.log(data)

      const formattedData = eachItem => ({
        description: eachItem.description,
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        name: eachItem.name,
      })

      const updatedData = formattedData(data.course_details)

      // console.log(updatedData)

      if (response.ok) {
        setCourseDetailsApi(prevState => ({
          ...prevState,
          status: apiStatusConstant.success,
          data: updatedData,
        }))
      } else {
        setCourseDetailsApi(prevState => ({
          ...prevState,
          status: apiStatusConstant.failure,
          errorMsg: response.error_msg,
        }))
      }
    }

    getCourseDetailsApi()
  }, [])

  const renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#00BFFF" height={60} width={80} />
    </div>
  )

  const renderSuccessView = () => {
    const {data} = courseDetailsApiStatus
    console.log(data)
    const details = <EachCourseDetails eachCourseDetails={data} key={data.id} />

    return details
  }

  const renderFailureView = () => (
    <div>
      <h1>Fail</h1>
    </div>
  )

  const renderRespectiveView = () => {
    const {status} = courseDetailsApiStatus

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
      <CourseDetailsCon>{renderRespectiveView()}</CourseDetailsCon>
    </>
  )
}

export default CourseDetails
