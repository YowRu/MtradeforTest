$(document).ready(function() {
	var viewport_width = $(window).width();
    var $height= $(window).height();
	if( viewport_width <= 767 ){ 
        $('.navbar-default').height($height);
		$('.navbar a').on('click', function(){
			$('.navbar-toggle').click();
		});
	}
	$(".top").hide();
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop()>1){
				$(".top").fadeIn();
			}else{
				$(".top").fadeOut();
			}
		});
	});
	$(".top").click(function(){
		$("html,body").animate({scrollTop:0},900);
		return false;
	});
});


//列出資料
function printData(item,type){
    $(".content h3").append(item.name);
    $(".inside_content").append(item.content);
    $(".time_address").append(item.time_address);

    if(type){
        $(".internet").append("<a href='"+item.internet+"'>"+item.internet+"</a>");
    }else{
        $(".internet").append(item.internet);
    }
    
    $(".organizer").append(item.organizer);
    $(".sign_up_time").append(item.sign_up_time);
    $(".sign_up_way").append(item.sign_up_way);
    $(".contact_name").append(item.contact_name);
    $(".contact_tel").append(item.contact_tel);
}
//清空資料
function clearData(){
    $(".content h3").html("");
    $(".inside_content").html("");
    $(".time_address").html("");
    $(".internet").html("");
    $(".organizer").html("");
    $(".sign_up_time").html("");
    $(".sign_up_way").html("");
    $(".contact_name").html("");
    $(".contact_tel").html("");
}

//判斷 其餘:0,勞工權益宣導活動:1
// var catecory = 0;

// $(function(){
//     let catecoryText = $("#category").text();
//     if(catecoryText == "勞工權益宣導活動"){
//         catecory = 1;
        
//     }
// 	//---連動下拉選單-----/
//     var select1=$('.type1').val();
//     for(let i=0;i<data.length;i++){
//         if(data[i].type == select1){
//             $(".type2").append("<option value='"+ data[i].name +"'>"+data[i].name+"</option>");
//         }
//     }
//     var select2=$('.type2').val();
//     for(let i=0;i<data.length;i++){
//         if(data[i].type == select1 && data[i].name == select2){
//             printData(data[i],true);
//         }
// 	}
// 	//---連動下拉選單-----/


// 	//---單一下拉選單-----/
//     var select3=$('.type3').val();
//     for(let u=0;u<data.length;u++){
//         if(data[u].type == select3){
//             printData(data[u],(catecory == 1) ? false : true);
//         }
//     }
//     //---單一下拉選單-----/
// });

//---連動下拉選單-----/
// $(".type1").change(function(){
//     $(".type2").html("");
//     var select1=$('.type1').val();
//     for(let i=0;i<data.length;i++){
//         if(data[i].type == select1){
//             $(".type2").append("<option value='"+ data[i].name +"'>"+data[i].name+"</option>");		
//         }
//     }
//     clearData();
//     var select1=$('.type1').val();
//     var select2=$('.type2').val();
//     for(let i=0;i<data.length;i++){
//         if(data[i].type == select1 && data[i].name == select2){
//             printData(data[i],true);
//         }
//     }
// });

// $(".type2").change(function(){
//     clearData()
//     var select1=$('.type1').val();
//     var select2=$('.type2').val();
//     for(let i=0;i<data.length;i++){
//         if(data[i].type == select1 && data[i].name == select2){
//             printData(data[i],true);
//         }
//     }
//     });
//---連動下拉選單-----/

//---單一下拉選單-----/
// $(".type3").change(function(){
//     clearData();
//     var select3=$('.type3').val();
//     for(let u=0;u<data.length;u++){
//         if(data[u].type == select3){
//             printData(data[u],(catecory == 1) ? false : true);
//         }
//     }
// });
//---單一下拉選單-----/