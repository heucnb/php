function Table(props) {
    
  let table_excel_height = props.value.height  ;
  let table_excel_width = props.value.width  ;
  let data_2d = props.value.data ;
     return (  
        <div id="id_table" style={  {  height: `${table_excel_height}px`, width :  `${table_excel_width}px`,      overflow: 'scroll',  position: 'relative',} }  >
        {data_2d.map((row, i) => {
         
         return (
            <div   style={{  display: "table-row" } }   >
                                {row.map((cell, j) => { return <div  style={  {    position: 'relative',   backgroundColor: "white" ,  border: "1px ridge #ccc", height: "20px", display: "table-cell", paddingLeft: "4px", paddingRight : "4px",  borderRightStyle: (function(){    if (j===data_2d[0].length -1) { return 'ridge'  } else { return 'none'  }         })(), borderTopStyle:  (function(){    if (i===0 ) { return 'ridge'  } else { return 'none'  }         })(), } }  > {(function(){  if (+cell===0) { return "" }else{ return cell }         })()}  </div> })}   
            </div> 

          );
        })}    
        
        </div>   

     );

 
    } ;