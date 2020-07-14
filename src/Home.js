import React from 'react';
import github from './assets/images/github.svg';
import twitter from './assets/images/twitter.svg';
import email from './assets/images/email.svg'


function Home(props) {
  return (
    <div className="bg-gray-200 flex flex-col h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}


function Header() {
  return (
    <header className="w-full bg-cover bg-center bg-black crt">
      <div className="font-mono text-white p-6">
        <h1 className="text-4xl">[Jérôme <span className="text-indigo-400">Fink</span>]$</h1>
        <p className="text-2xl">Computer Science Researcher</p>
      </div>
    </header >
  )
}


function Body() {
  return (
    <div className='flex p-10'>
      <div className="p-4 flex-1 text-center">
        <img src={github} className="h-32 w-32 mr-auto ml-auto" alt="logo" />
        <h3 className="text-2xl"><a href="https://github.com/Jefidev">Github</a></h3>
      </div>
      <div className="p-4 flex-1 text-center">
        <img src={twitter} className="h-32 w-32 mr-auto ml-auto" alt="logo" />
        <h3 className="text-2xl"><a href="https://twitter.com/jefidev">Twitter</a></h3>
      </div>
      <div className="p-4 flex-1 text-center">
        <img src={email} className="h-32 w-32 mr-auto ml-auto" alt="logo" />
        <h3 className="text-2xl"><a href="https://directory.unamur.be/staff/jfink">Contact</a></h3>
      </div>
    </div>
  )
}


function Footer() {
  return (
    <footer className='absolute inset-x-0 bottom-0 text-center'>
      <h3 className="p-5">Jfink - 2020</h3>
    </footer>
  )
}

export default Home;