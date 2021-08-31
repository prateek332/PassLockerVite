import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import MyNavbar from "../Layout/MyNavbar"
import MyFooter from "../Layout/MyFooter"

function UserProfile() {
  const profPicUrl = useSelector(state => state.user.profilePictureUrl)
  const username = useSelector(state => state.user.userName)
  const userData = useSelector(state => state.user.userData)
  
  useEffect(() => {

  }, [profPicUrl])

  return (
    <>
      <MyNavbar />

      <Container className="my-4">
        <Row>
          <Col>
            <img
              alt="ProfilePicture"
              src={profPicUrl}
              width={200}
              height={200}
            />
            <br />
            <h3>{userData.name}</h3>
            <h4>{username}</h4>
          </Col>
          <Col>
            <h3>About User</h3>
            <h5>Member since : {userData.memberSince}</h5>
            <h5>Location : {userData.location}</h5>
            <h5>Gender: {userData.gender}</h5>
          </Col>
        </Row>
      </Container>
      
      <MyFooter />
    </>
  )
}

export default UserProfile