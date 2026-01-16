function Card({title="Card Component"}){
  return ( 
    <div className="mt-6 flex flex-col items-center border-2 border-white rounded-2xl p-6">
    <h1 className="text-shadow-cyan-500 text-cyan-500 mb-6 underline underline-offset-4">{title}</h1>
    <img className="max-w-full h-auto mt-2 mb-6" src="https://render.fineartamerica.com/images/rendered/default/print/8/5.5/break/images/artworkimages/medium/1/world-map-watercolor-michael-tompsett.jpg" alt="Must Check Url"></img>
   </div>
  );
}
export default Card; 