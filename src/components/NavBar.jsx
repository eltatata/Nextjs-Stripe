function NavBar() {
  return (
    <nav className='flex justify-around items-center border-b border-black p-5'>
      <a className='text-2xl font-extrabold' href="/">Stripe - Nextjs</a>
      <ul className='flex gap-5'>
        <li><a className='font-semibold hover:underline' href="/">Home</a></li>
        <li><a className='font-semibold hover:underline' href="/pricing">Pricing</a></li>
      </ul>
    </nav>
  )
}

export default NavBar