import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'
import { generateImageSrc } from './helpers/generateImageSrc'

function App() {

  const posts = [
    {
      id: 1,
      title: 'Post title 1',
      body: 'Post Body 1 Post Body 1 Post Body 1 Post Body 1 Post Body 1 Post Body 1',
      image: generateImageSrc({ width: 600, height: 400, bg: 'green', color: 'white', text: 'Post 1 Image' })
    },
    {
      id: 2,
      title: 'Post title 2',
      body: 'Post Body 2 Post Body 2 Post Body 2 Post Body 2 Post Body 2 Post Body 2',
      image: generateImageSrc({ width: 600, height: 400, bg: 'orange', color: 'white', text: 'Post 2 Image' })
    },
    {
      id: 3,
      title: 'Post title 3',
      body: 'Post Body 3 Post Body 3 Post Body 3 Post Body 3 Post Body 3 Post Body 3',
      image: generateImageSrc({ width: 600, height: 400, bg: 'red', color: 'white', text: 'Post 3 Image' })
    },
    {
      id: 4,
      title: 'Post title 4',
      body: 'Post Body 4 Post Body 4 Post Body 4 Post Body 4 Post Body 4 Post Body 4',
      image: generateImageSrc({ width: 600, height: 400, bg: 'blue', color: 'white', text: 'Post 4 Image' })
    },
  ]

  return (
    <main className='bg-slate-900 text-gray-200 h-screen p-8'>
      <section className='grid grid-cols-4 gap-4'>
        {
          posts.map((post, index) => {
            return (
              <Card key={post.id} title={post.title} desc={post.body} image={post.image} />
            )
          })
        }
      </section>
    </main>
  )
}

export default App
