import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import cloudflareLogo from './assets/Cloudflare_Logo.svg'
import honoLogo from './assets/hono.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const initCount = async () => {
    await fetch('/v1/count')
      .then(res => res.json() as Promise<{ count: number }>)
      .then(data => setCount(data.count))
  }
  useEffect(() => {
    initCount()
  }, [])

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://hono.dev/' target='_blank'>
          <img src={honoLogo} className='logo cloudflare' alt='Hono logo' />
        </a>
        <a href='https://workers.cloudflare.com/' target='_blank'>
          <img src={cloudflareLogo} className='logo cloudflare' alt='Cloudflare logo' />
        </a>
      </div>
      <h1>Vite + React + Hono + Cloudflare</h1>
      <div className='card'>
        <button
          onClick={() => {
            fetch('/v1/count-plus').then(() => setCount(count => count + 1))
          }}
          aria-label='get name'
        >
          db count: {count}
        </button>
      </div>
      <p className='read-the-docs'>Click on the logos to learn more</p>
    </>
  )
}

export default App
