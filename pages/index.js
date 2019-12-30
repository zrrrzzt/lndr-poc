const nanoid = require('nanoid')
const QRCode = require('qrcode.react')

const HomePage = () => {
  const thisId = nanoid()
  return (
    <>
      <h1>Velkommen</h1>
      <QRCode value={`https://lndr.allthethings.win/items/${thisId}`} />
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          text-align: center;
        }
      `}
      </style>
    </>
  )
}

export default HomePage