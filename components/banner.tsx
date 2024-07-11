export default function Banner() {
  function randomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  const bannerItems = ["$POV", "$POV", "$POV", "$POV", "$POV"];

  return (
    <div className="overflow-hidden whitespace-nowrap ">
      <div className="max-w-2xl mx-auto overflow-hidden">
        <div className="flex space-x-16 animate-scroll text-black">
          <div className="space-x-16">
            {bannerItems.concat(bannerItems).map((item, index) => (
              <div key={index} className="inline-block py-2 font-extrabold">
                {item}
              </div>
            ))}
          </div>
          <div className="space-x-16">
            {bannerItems.concat(bannerItems).map((item, index) => (
              <div key={index} className="inline-block py-2 font-extrabold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
