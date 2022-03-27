const BannerAds = () => {
  return (
    <>
      <div
        className="bg-cover bg-center  h-auto text-white py-48 px-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}>
        <div className="md:w-1/2 ">
          <p className="font-bold text-sm uppercase text-white">Services</p>
          <p className="text-3xl font-bold text-white">Multimedia products</p>
          <p className="text-2xl mb-10 leading-none text-white">Atractive designs for your brand</p>
          <a
            href="#"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">
            Contact us
          </a>
        </div>
      </div>
    </>
  )
}

export default BannerAds
