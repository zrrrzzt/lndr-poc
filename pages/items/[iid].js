import { useRouter } from 'next/router'
const QRCode = require('qrcode.react')

const Details = ({ item }) => {
  const router = useRouter()
  const { iid } = router.query
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-mono">{ iid }</h1>
      <QRCode value={`https://lndr.allthethings.win/items/${iid}`} />
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