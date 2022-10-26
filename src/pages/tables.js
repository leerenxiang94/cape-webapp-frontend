import response from "../sgfreevsl"

return (
    
        <div className = "freevsl-figure-row-figure">{
    response.map( name => 
    <ul>
        {name[0]}{" "}
        {name[1]}/
        {name[2]}{" "}
        {name[3]}{" "}
        {name[4]}
        </ul>)}
  </div>
  
)
