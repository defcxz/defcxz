export default function Nav() {
  return (
    <nav className={'fixed w-screen bg-gradient-to-b from-black ...'}>
      <div className={'nav-icon'}>
        <span className={'nav-icon__line color-white'}></span>
        <span className={'nav-icon__line color-white'}></span>
      </div>
      <p
        className={'text-center mt-5 mb-5 font-bold text-2xl'}
        style={{
          textShadow: '#fff 0 0 10px'
        }}
      >
        mg.
      </p>
    </nav>
  )
}
