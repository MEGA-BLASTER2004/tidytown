import React, { useState, useEffect } from 'react'
import SignIn from '../../components/Collector/SignIn/SignIn'
import { Loader } from '@mantine/core'
import Router from 'next/router'
import db from '../../firebase'
import firebase from 'firebase'

function signin() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('Collectors')
          .doc(user.uid)
          .get()
          .then((data) => {
            if (data.exists) {
              Router.push('/collector/dashboard')
            } else {
              setLoading(false)
              firebase.auth().signOut()
            }
          })
      } else {
        setLoading(false)
      }
    })
  })
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader color="green" size="xl" />
      </div>
    )
  } else {
    return (
      <div className="h-screen w-screen">
        <SignIn />
      </div>
    )
  }
}

export default signin
