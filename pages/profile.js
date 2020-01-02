import auth0 from '../utils/auth0'

const Profile = ({ user }) => {
  const { name, picture } = user
  return (
    <div className='container mx-auto flex flex-col items-center'>
      <h1 className='text-4xl font-mono text-center'>{name}</h1>
      <img src={picture} className='rounded-lg text-center' />
      {JSON.stringify(user)}
    </div>
  )
}

Profile.getInitialProps = async ({ req, res }) => {
  if (typeof window === 'undefined') {
    const session = await auth0.getSession(req)
    if (!session) {
      res.writeHead(302, {
        Location: '/api/login'
      })
      res.end()
    } else {
      const { user } = session
      return { user }
    }
  }
}

export default Profile
