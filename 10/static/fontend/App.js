function App(props) {

    function remove_color_click(dom) {
        const collection = document.getElementById(dom).children;

        for (let i = 0; i < collection.length; i++) {
        collection[i].style.color = "black";
        // document.getElementById(dom).style.borderLeft  = "thin solid rgb(14 165 233)";
        // document.getElementById(dom).style.borderTop  = "thin solid rgb(14 165 233)";
        // document.getElementById(dom).style.borderBottom   = "thin solid rgb(14 165 233)";
        }
  
    }

       useEffect(() => {  

        let	id_nhan_index  =  document.getElementById('id_nhan_index') ;
        
       
     
        if( arrayjavascript_3[0]!=="Chưa đăng nhập")
        {
         document.getElementById('id_td_1').innerHTML="Đăng nhập - " + arrayjavascript_3[0][0];
        
        
         console.log(arrayjavascript_3);
        var array_option = new Array();
        // This will return an array with strings "1", "2", etc.
        array_option = arrayjavascript_3[0][2].split(",");
        console.log(array_option);
        
        array_option_ten_day_du = arrayjavascript_3[0][3].split(",");
        console.log(array_option_ten_day_du);
    
           var select = document.getElementById("id_8") ;
           select.innerHTML = '' ;
           for(var i = 0; i < array_option.length; i++)
                 {
                     var option = document.createElement("OPTION");
                 

                    option.text = array_option_ten_day_du[i];
                    option.value = array_option[i];
                    select.appendChild(option);
                 }
         // kiểm tra xem có được quyền thêm người dùng và khóa dữ liệu không
                var quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu = arrayjavascript_3[0][4] ;
                if(quyen_them_nguoi_dung_va_khoa_ngay_sua_du_lieu==1)
                {
                 document.getElementById('id_them_user').style.display = 'inline';   
                 document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'inline';  
                }
                else
                {
                   document.getElementById('id_them_user').style.display= 'none'; 
                    document.getElementById('id_khoa_ngay_nhap_du_lieu').style.display= 'none'; 
                }
        
    
        }
    /*đăng ký*/
    
    $(document).ready(function(){
        $("#id_td_0").click(function(){
       		
            ReactDOM.render(<Dang_ky/>, id_nhan_index);
            
            
        
        });
    });
    
        
    
    /*đăng nhập*/
    
    $(document).ready(function(){
        $("#id_td_1").click(function(){
          
      		
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            
            ReactDOM.render(<Login/>, id_nhan_index);
        
        }
        else
        {
            ReactDOM.render(<Logout/>, id_nhan_index); 
            
        }
            
            
        
        });
    });
    
    /*phối*/

    $(document).ready(function(){
        $("#id_td_2").click(function(){
    
              ReactDOM.unmountComponentAtNode(id_nhan_index); 
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
        
         _alert("Bạn phải đăng nhập trước đã")
        }
        else
        {
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return   _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
    
           
            
        
    
        ReactDOM.render(React.createElement(Phoi, null), id_nhan_index);
        gobal_tim_kiem_sua_xoa = "phoi"  ;  
        
        
        }
        
        
        });
    });
    
    /* đẻ*/

    $(document).ready(function(){
        $("#id_td_13").click(function(){
            
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
    
        }
        else
        {
            
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
         
             ReactDOM.render(React.createElement(De, null), id_nhan_index);
             gobal_tim_kiem_sua_xoa = "de"  ;   
        }
        
        
        });
    });
    
    /* cai sữa*/

    $(document).ready(function(){
        $("#id_td_3").click(function(){
            
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
           
            ReactDOM.render(React.createElement(Cai_sua, null), id_nhan_index);
            gobal_tim_kiem_sua_xoa = "cai_sua"  ; 
        
        }
        
        
        });
    });
    
    
    /* heo vấn đề*/
    
    $(document).ready(function(){
        $("#id_td_4").click(function(){
            
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
           
            ReactDOM.render(React.createElement(Heo_van_de, null), id_nhan_index);
            gobal_tim_kiem_sua_xoa = "van_de"  ; 

        }


        
        
        });
    });
    
    /* heo nái chết loại*/
    
    $(document).ready(function(){
        $("#id_td_5").click(function(){
            
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
           
            ReactDOM.render(React.createElement(Nai_chet, null), id_nhan_index);
    
            gobal_tim_kiem_sua_xoa = "nai_chet_loai"  ; 
        }
        
        
        });
    });
    
    /* heo con chết loại*/
    
    $(document).ready(function(){
        $("#id_td_6").click(function(){
            
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
            
            ReactDOM.render(React.createElement(Heo_con_chet, null), id_nhan_index);
            gobal_tim_kiem_sua_xoa = "con_chet_loai"  ; 
        }
        
        
        });
    });
    
    
    /* hậu bị*/
    
    $(document).ready(function(){
        $("#id_td_7").click(function(){
            
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return    _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
    
              ReactDOM.unmountComponentAtNode(id_nhan_index);  
            ReactDOM.render(React.createElement(Hau_bi, null), id_nhan_index);
            gobal_tim_kiem_sua_xoa = "hau_bi"  ; 
        }
        
        
        });
    });
    
    
    /* đực */
    
    $(document).ready(function(){
        $("#id_td_8").click(function(){
            
            
        if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            
            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
    
            ReactDOM.unmountComponentAtNode(id_nhan_index);  
            ReactDOM.render(React.createElement(Duc, null), id_nhan_index);
            gobal_tim_kiem_sua_xoa = "duc"  ; 
    
        }
        
        
        });
    });
    
    
    
    
    /*báo cáo tháng*/
    
    $(document).ready(function(){
        $("#id_td_10").click(function(){
        
            
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            try { Table_hieu_2.remove_EventListener(); } catch (error) { }
            ReactDOM.unmountComponentAtNode(id_nhan_index);  	
    gobal_post_month = "fuction_thang__from_bao_cao_thang.php" ;	 
    gobal_post = "fuction_tuan__from_bao_cao_thang.php" ;
    ReactDOM.render(React.createElement(from_bao_cao_thang, null), id_nhan_index);
        }
            
            
        
        });
    });
    
    /*báo cáo tháng phối*/
    
    $(document).ready(function(){
        $("#id_td_12").click(function(){
        
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            try { Table_hieu_2.remove_EventListener(); } catch (error) { }
            ReactDOM.unmountComponentAtNode(id_nhan_index);  	
            gobal_post_month = "fuction_thang__from_bao_cao_tinh_theo_phoi.php" ;	
            gobal_post = "fuction_tuan__from_bao_cao_tinh_theo_phoi.php" ;
    ReactDOM.render(React.createElement(from_bao_cao_thang, null), id_nhan_index);
                
        }
            
            
        
        });
    });
    
    
    
    
    
    
    
    /*theo dõi tỷ lệ phối*/
    
    $(document).ready(function(){
        $("#id_td_9").click(function(){
        
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            try { Table_hieu_2.remove_EventListener(); } catch (error) { }
            ReactDOM.unmountComponentAtNode(id_nhan_index);  	
            gobal_post_month = "fuction_thang--from_theo_doi_ty_le_phoi.php" ;	
            gobal_post = "fuction_tuan--from_theo_doi_ty_le_phoi.php" ;
    ReactDOM.render(React.createElement(from_bao_cao_thang, null), id_nhan_index);
        }
            
            
        
        });
    });
    
    /*tra lý lịch*/
    
    $(document).ready(function(){
        $("#id_td_14").click(function(){

            
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {

            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
     
            ReactDOM.unmountComponentAtNode(id_nhan_index);  
            ReactDOM.render(React.createElement(Tra_ly_lich, null), id_nhan_index);
                
                
        }
            
            
        
        });
    });
    
    /*chọn đực phối*/
    
    $(document).ready(function(){
        $("#id_td_15").click(function(){
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {

            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }


            ReactDOM.unmountComponentAtNode(id_nhan_index);  
            ReactDOM.render(React.createElement(Ghep_phoi, null), id_nhan_index);


        }
            
            
        
        });
    });
    
    
    /*Xem danh sách đàn nái, đực*/
    
    $(document).ready(function(){
        $("#id_td_16").click(function(){
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {

            var dem_string = $("#id_8").val();	
            var count_dem_string = dem_string.length;
        
            if (
            count_dem_string > 50 ||
            $("#id_8").val() == null || $("#id_8").val() == ""
                ) 
            {
            return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
            }
         
        ReactDOM.render(React.createElement(Danh_sach_heo, null), id_nhan_index);

                
        }
            
            
        
        });
    });
    
    // Báo cáo đóng chuồng heo thịt

    $(document).ready(function(){
        $("#id_td_17").click(function(){
    
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {

                var dem_string = $("#id_8").val();	
                var count_dem_string = dem_string.length;
            
                if (
                count_dem_string > 50 ||
                $("#id_8").val() == null || $("#id_8").val() == ""
                    ) 
                {
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }


                ReactDOM.unmountComponentAtNode(id_nhan_index);  
                ReactDOM.render(React.createElement(from_bao_cao_thang_thit, null), id_nhan_index);
    
    
            }
                
                
            
        
        });
    });
    
    // Báo cáo diễn biến chuồng heo thịt

    $(document).ready(function(){
        $("#id_td_18").click(function(){
    
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {

                var dem_string = $("#id_8").val();	
                var count_dem_string = dem_string.length;
            
                if (
                count_dem_string > 50 ||
                $("#id_8").val() == null || $("#id_8").val() == ""
                    ) 
                {
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }


                ReactDOM.unmountComponentAtNode(id_nhan_index);  
                ReactDOM.render(React.createElement(from_dien_bien_thit, null), id_nhan_index);
    
    
            }
                
        
        });
    });

    // Cấu hình danh mục chuồng

    $(document).ready(function(){
        $("#id_td_19").click(function(){
    
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
            {
                _alert('Bạn phải đăng nhập trước đã')
            }
            else
            {

                var dem_string = $("#id_8").val();	
                var count_dem_string = dem_string.length;
            
                if (
                count_dem_string > 50 ||
                $("#id_8").val() == null || $("#id_8").val() == ""
                    ) 
                {
                return     _alert('Bạn phải chọn công ty để nhập dữ liệu hoặc lỗi chọn công ty có chứa *') 
                }


                ReactDOM.unmountComponentAtNode(id_nhan_index); 

              ReactDOM.render(<Setup_chuong value={{data :  false  ,   }} /> ,id_nhan_index);
    
            }
                
        
        });
    });
    
    /*Thêm user*/
    
    $(document).ready(function(){
        $("#id_them_user").click(function(){
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
           
	
            ReactDOM.unmountComponentAtNode(id_nhan_index); 

            ReactDOM.render(<Add_user  /> ,id_nhan_index);


        }
            
            
        
        });
    });
    
    /*Khóa ngày sửa dữ liệu*/
    
    $(document).ready(function(){
        $("#id_khoa_ngay_nhap_du_lieu").click(function(){
            
            if(document.getElementById('id_td_1').innerHTML=="Đăng nhập")
        {
            _alert('Bạn phải đăng nhập trước đã')
        }
        else
        {
            var dem_string = $("#id_8").val();	
        var count_dem_string = dem_string.length;
        if (
            count_dem_string > 50 
            ) 
            {
             return _alert('Để khóa ngày sửa dữ liệu phải chọn từng công ty riêng. Không được chọn công ty có chứa * ')  ;
            } 
            
         

        $.post("from_khoa_ngay_nhap_du_lieu.php", {post8:$("#id_8").val() }, function(data){
                $("#id_nhan_index").html(data);	});	
        }
            
            
        
        });
    });
    
    
    /*show_hide thanh menu web*/
    var show_hide = 1 ;
    $(document).ready(function(){
        $("#id_hide").click(function(){
            
        if(show_hide==1)
        {
        
             document.getElementById('id_menu').style.display= 'none';
             show_hide = 0;
        }
        else
        {
          
             document.getElementById('id_menu').style.display= 'inline';
             show_hide = 1;
        }
        
             
        });
    });
          
        
       }, []);
    
	
    return ( <div  className={` text-base  flex  h-screen flex-col `} >  
<div className={`  flex bg-green-400 justify-between p-1`} > 
                <div className={` flex  `} >  
                <img id="id_hide" src="logo2.jpg" alt=""  className={` h-6 `} />
                <div  > Tập Đoàn DABACO Việt Nam  </div>
                </div>
                
                <select  id="id_8" className={` focus:outline-0  bg-green-400  `} > 
            
                </select>
                <input id="id_them_user" type="button" value="Thêm người dùng"/>
                <input id="id_khoa_ngay_nhap_du_lieu" type="button" value="Khóa ngày sủa dữ liệu"/>	

</div>
<div  className={` flex flex-row  grow bg-orange-200  _shadow `} >


            <div id="id_menu"  className={`  flex-shrink-0 w-[180px] h-full `}  >
                <div id="id_td_0" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `}  onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Đăng ký</div>

                <div id="id_td_1"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Đăng nhập</div>

                <div id="id_td_2" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Phối</div>

                <div id="id_td_13" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Đẻ</div>

                <div id="id_td_3"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Cai sữa</div>
                <div id="id_td_4"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Heo vấn đề</div>


                <div id="id_td_5" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo nái chết loại</div>

                <div id="id_td_6" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo con chết loại</div>

                <div id="id_td_7" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo Hậu bị</div>

                <div id="id_td_8" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Heo Đực</div>

                <div id="id_td_9" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Báo cáo tỷ lệ phối</div>

                <div id="id_td_10" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Báo cáo tháng</div>

                <div id="id_td_12"  className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Báo cáo 41 chỉ tiêu</div>

                <div  id="id_td_14" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Tra lý lịch</div>

                <div  id="id_td_15" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Chọn đực phối</div>

                <div  id="id_td_16" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }} >Xem danh sách đàn heo</div>

                <div  id="id_td_17" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Báo cáo đóng chuồng</div>
                <div  id="id_td_18" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>Báo cáo diễn biến đàn heo</div>
                <div  id="id_td_19" className={` pl-1 hover:bg-gray-200 hover:bg-opacity-50 `} onClick={(event)=>{ remove_color_click('id_menu'); event.target.style.color =  "blue"; }}>cấu hình chuồng</div>
                       
            </div>
            <div className={` flex h-full grow  bg-gray-100 text-sm `}  id="id_nhan_index"  >-------------------</div>	

</div>	

    </div>
     
     

    );


   } ;