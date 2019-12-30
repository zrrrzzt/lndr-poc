import { useRouter } from 'next/router'
const QRCode = require('qrcode.react')

const Details = ({ item }) => {
  const router = useRouter()
  const { iid } = router.query
  return (
    <div>
      <h1>{ iid }</h1>
      <QRCode value={`https://lndr.allthethings.win/items/${iid}`} />
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          text-align: center;
        }
      `}
      </style>
    </div>
  )
}

Details.getInitialProps = async ({ req }) => {
  const path = req ? req.url : window.location.pathname
  const query = req ? req.query : window.location.query
  const list = path.split('/')
  const iid = list.length > 0 ? list.pop() : false
  return { iid, query }
}

export default Details