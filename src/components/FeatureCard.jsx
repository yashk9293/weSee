// import img4 from '../assets/main/img4.png';

export default function FeatureCard({ title, image, subtitle, date, icons, type }) {
  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden">
      <div className="p-4">
        <h3 className="font-medium mb-4">{title}</h3>
        {type === 'video' && (
          <div className="relative">
            <img src={image} alt="" className="w-full h-48 object-cover rounded" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50">
              <div className="text-white text-sm">{subtitle}</div>
              <div className="text-white/70 text-xs">{date}</div>
            </div>
          </div>
        )}
        {/* {type === 'upload' && (
          <div className="flex flex-wrap gap-4 mt-4">
            {icons?.map((icon, index) => (
              <img key={index} src={icon} alt="" className="w-10 h-10" />
            ))}
          </div>
        )} */}
        {type === 'upload' && (
          <div className="flex justify-center items-center relative w-48 h-40 mx-auto mt-4">
            {/* Center photo */}
            <img
              src={'/img4.svg'} // Assuming the center image is passed through the `image` prop
              alt=""
              className="absolute w-10 h-10 object-cover z-10" // Center photo
            />
            {/* Circular arrangement for 6 photos */}
            {icons?.slice(0, 5).map((icon, index) => {
              const angle = (index * 360) / 5; // Distribute images evenly for 6 items
              const transform = `rotate(${angle}deg) translate(60px) rotate(-${angle}deg)`;
              return (
                <img
                  key={index}
                  src={icon}
                  alt=""
                  className="absolute w-10 h-10 object-cover"
                  style={{ transform }}
                />
              );
            })}
          </div>
        )}
        {type === 'blueprint' && (
          <div className="mt-4">
            <img src={image} alt="" className="w-full rounded" />
          </div>
        )}
      </div>
    </div>
  )
}

