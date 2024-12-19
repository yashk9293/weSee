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
          {type === 'upload' && (
            <div className="flex flex-wrap gap-4 mt-4">
              {icons?.map((icon, index) => (
                <img key={index} src={icon} alt="" className="w-10 h-10" />
              ))}
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
  
  