import { Link, router, usePage } from '@inertiajs/react'

export default function Layout({ children }) {
    const { auth } = usePage().props;

  function logout(e) {
    e.preventDefault();
    router.post('/logout');
  }
  return (
  <>
      <header>
        <nav>
        <Link className='nav-link text-white' href="/">Home</Link>
        <Link className='nav-link text-white' href="/blogs/create">Create</Link>
        <form onSubmit={logout}>
            <button type='submit' className='text-white bg-red-600 p-2 rounded-4xl'>Logout</button>
        </form>
        </nav>
      </header>    
      <main>{children}</main>
      </>
  )
}