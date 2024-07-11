export function MemeGallery() {
  const memeLinks = ['pov1.jpg', 'pov2.jpg', 'pov3.jpg', 'pov4.jpg', 'pov5.jpg', 'pov6.jpg', 'pov7.jpg', 'pov8.jpg', 'pov9.jpg', 'pov10.jpg', 'pov11.jpg', 'pov12.jpg', 'pov13.jpg', 'pov14.jpg', 'pov15.jpg', 'pov16.jpg']

  return <div className="grid grid-cols-2 sm:grid-cols-4">
    {memeLinks.map((link, i) => (<div key={i} className="h-32 w-32 hover:scale-105">
      <img src={`/${link}`} alt="pov meme" height={48} width={48} className="h-full w-full" />

    </div>))}
  </div>
}
