function Cai_sua() {
    let arrayjavascript_so_tai ;
    function handleChange(event) {
        var gia_tri_tim = event.target.value ;			
        var chuoi_ban_dau = "," + arrayjavascript_so_tai.join();
        var gia_tri_tim =new RegExp("," + "[A-Z]*[0-9]*" +gia_tri_tim,'i');
        var vi_tri_tim_thay = chuoi_ban_dau.search(gia_tri_tim);
        var chuoi_cat_ra = chuoi_ban_dau.substr(vi_tri_tim_thay,20);
        var mang_cat_ra_tu_chuoi = chuoi_cat_ra.split(",");
         document.getElementById('id_tim_1').innerHTML = mang_cat_ra_tu_chuoi[1];	
      }

    useEffect(() => {  

 $.post("from_cai_sua.php", {post8:$("#id_8").val()}, function(data){ arrayjavascript_so_tai =JSON.parse(data) ; });


/* phím enter */
$(document).ready(function(){
    $('#id_1').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
	  if(document.getElementById("id_checkbox").checked == true)
	  { document.getElementById('id_1').value =  document.getElementById('id_tim_1').innerHTML ;}
	
    document.getElementById("id_2").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_2').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_3").focus();
  }
    });
});

$(document).ready(function(){
    $('#id_3').keypress(function(){
    var x = event.keyCode;
  if (x == 13) {
    document.getElementById("id_gui").focus();
  }
    });
});

















$(document).ready(function(){
	$("#id_gui").click(function(){
        let width_table = document.getElementById('id_nhan').getBoundingClientRect().width ;
        let height_table = document.getElementById('id_nhan').getBoundingClientRect().height ;
	    	
	if (isNaN(Number($("#id_3").val())) || $("#id_3").val() < 0 || $("#id_3").val() > 30 || $("#id_3").val() == null || $("#id_3").val() == "" )
	{return  _alert("Số heo cai sữa  phải định dạng số từ 0-30 và không được để trống")  }
	
	    
	    
	    
	    
		var dem_string = $("#id_8").val();	
var count_dem_string = dem_string.length;

		
	if (
		$("#id_1").val() == null || $("#id_1").val() == "" ||
		$("#id_2").val() == null || $("#id_2").val() == "" ||
		$("#id_3").val() == null || $("#id_3").val() == "" ||
		count_dem_string > 50 ||
		$("#id_8").val() == null || $("#id_8").val() == ""
		) 
		{
            return  _alert("Bạn phải điền đầy đủ thông tin hoặc lỗi chọn công ty có chứa *")  ;
        } 
		else 
	    {
	      
			$.post("fuction_thêm--from_cai_sữa.php", {post1:$("#id_1").val() , post2:$("#id_2").val(), post3:$("#id_3").val(),  post8:$("#id_8").val() }, function(data){
			
            
        if ( data.trim().slice(0, 2) !== "[[") {
            _alert(data)
        } else {
     
         
            ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
           
            ReactDOM.render(React.createElement(Table,  { value: { data : JSON.parse(data) , width:width_table , height :height_table }}), document.getElementById('id_nhan')); 
           
        }
                 
            
        
        
        
        });
	
        }

		
	});
});

/* nút thêm, sửa, xóa*/
$(document).ready(function(){
	$("#id_gui_research").click(function(){
		
	    
    ReactDOM.unmountComponentAtNode(document.getElementById('id_nhan')); 
    ReactDOM.render(<Tim_kiem  /> 
    ,document.getElementById('id_nhan'));
     
     
	
    
		
	});
});





        }, []);
    
  return (  <div  className={`flex flex-col w-full h-full border bg-gray-100   border-sky-500 `} > 
     <input id="id_gui_research" type="button" value="Tìm kiếm, sửa, xóa"/> 
     <div className={`ml-1 border-b border-sky-500 mr-1`}> Nhập Heo Cai Sữa </div>

     <div  className={` flex grow  mt-2 `} >  
             <div className={` shrink-0 ml-2 `} >
                 <div> Mã thẻ nái:  </div>
                 <input  id="id_1" className={`  border border-sky-500 `} onChange={handleChange}   /> <label  id="id_tim_1"  type="text" >Nhập theo số tai gợi ý</label><input type="checkbox" id="id_checkbox"  ></input>
                 <div> Ngày cai: </div>
                 <input id="id_2" type="date"  className={`  border border-sky-500 `}    /> 
                 
                 <div> Số con cai: </div>
                 <input  id="id_3"  className={`  border border-sky-500 `}    /> 
                
                 <input type="button" value="Thêm"   id="id_gui" className={` mt-2 mb-2  _shadow rounded w-full  bg-sky-500 hover:bg-sky-700 h-8 flex items-center justify-center pl-2  font-medium `}   /> 
               

             </div>
             <div  id="id_nhan"  className={` text-sm grow ml-1 `}> 
             
             </div>
     </div>
     
     
    </div>
  );

 } ;