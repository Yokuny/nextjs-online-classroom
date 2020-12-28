import {NextPage} from 'next';
import {signIn, signOut, useSession} from 'next-auth/client';
import Nav from '../components/nav';

const IndexPage: NextPage = () => {
  const [ session, loading ] = useSession();
  return (
    <div>
      <Nav />
      {!session && (
        <div className="text-3xl">
          Not signed in <br/>
          <button className="text-3p btn-blue" onClick={(): Promise<void> => signIn('auth0')}>Sign in</button>
        </div>
      )}
      {session && (
        <div className="text-3xl">
          Signed in as {session.user.email} <br/>
          <button className="text-3p btn-blue" onClick={(): Promise<void> => signOut()}>Sign out</button>
        </div>
      )}
      {loading && (
        <div className="text-4xl">
          <h1>Carregando</h1>
        </div>
      )}
    </div>
  )
}
export default IndexPage;