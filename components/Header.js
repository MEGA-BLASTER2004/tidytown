import Router from 'next/router'
import React from 'react'

const links = [
  { text: 'About', route: '/' },
  { text: 'Features', route: '/' },
  { text: 'Join Us', route: '/' },
  { text: 'Connect', route: '/' },
]

const Links = ({ route, text }) => (
  <div>
    <button
      className="text-gray-500 duration-150 hover:text-gray-700"
      onClick={() => {
        Router.push(route)
      }}
    >
      {text}
    </button>
  </div>
)

const BtnSignIn = ({ collector }) => (
  <div>
    <button
      className=" border-b border-transparent px-2 py-1 duration-150 hover:scale-105 hover:border-black active:scale-95 md:px-4 md:py-2"
      onClick={() => {
        Router.push(collector ? '/collector/signin' : '/signin')
      }}
    >
      Sign In
    </button>
  </div>
)

const BtnSignUp = ({ collector }) => (
  <div>
    <button
      className="rounded-full border border-green-500 px-2 py-1 text-sm text-green-500 duration-150 hover:scale-105 hover:bg-green-500 hover:text-white hover:shadow-lg active:scale-95 md:px-4 md:py-2 md:text-base"
      onClick={() => {
        Router.push(collector ? '/collector/signup' : '/signup')
      }}
    >
      Sign Up
    </button>
  </div>
)

function Header({ collector }) {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between bg-white px-6 py-5 text-sm shadow-lg md:px-14 md:py-6 md:text-base">
      <img
        src="tidytown.svg"
        alt=""
        className="h-6 cursor-pointer md:h-10"
        onClick={() => {
          Router.push('/')
        }}
      />
      <div className="hidden space-x-4 md:flex">
        {links.map((btn) => {
          return <Links text={btn.text} route={btn.route} />
        })}
      </div>
      <div className="flex space-x-3">
        <BtnSignIn collector={collector} />
        <BtnSignUp collector={collector} />
      </div>
    </div>
  )
}

export default Header
