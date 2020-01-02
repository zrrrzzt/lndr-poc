const nanoid = require('nanoid')
const QRCode = require('qrcode.react')

const HomePage = () => {
  const thisId = nanoid()
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-mono'>Velkommen</h1>
      <QRCode value={`https://lndr.allthethings.win/items/${thisId}`} />
      <a href='/api/login' className='text-4xl font-mono'>Login</a>
      <a href='/api/logout' className='text-4xl font-mono'>Logout</a>
    </div>
  )
}

export default HomePage
