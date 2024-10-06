

export function Speaker({image,name,post,title,href}){
return(<div className="grid grid-cols-12 gap-3 m-4">
        <div className="col-span-3">
          <img src={image} className="w-20 h-20 object-cover" style={{width:'160px', height:"160px"}}/>
        </div>
        <div className="col-span-9">
        <p className="text-base text-wrap font-extrabold">{title}</p>
          <h4 className="font-base">{name}</h4>
          <p className="italic font-thin text-sm">{post}</p>
         
          <a href={href} className="text-blue-800 text-xs hover:font-bold">Personal Website</a>
        </div>
      </div>)
}