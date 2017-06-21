$(document).ready(function() {

	
if ($('.index_focus').length){	
window.onresize  = function(){
	
	var huoqu1 = (document.body.offsetWidth-1100)/6;
	var index_focus_height = (document.body.offsetWidth)/16*5.59;
	$(".index_focus .prev .arrow").css("right",huoqu1);
	$(".index_focus .next .arrow").css("left",huoqu1);
	$(".index_focus").css("height",index_focus_height);
	
	
	
}	
}

$('.page-number').find('select').first().on('change',function(event) {
	location.href = $(this).children('option:selected').attr('data');
});


window.onload = function(){
	
	/*var t = document.documentElement.scrollTop || document.body.scrollTop; 
  
    if( t > 600 ) {
		
		$('.hide_nav_bg').stop().animate({top:'0',opacity:'1'},100);
		$('.hide_nav').stop().animate({top:'0'},100);
		 
    } 
	
	if( t <= 600 ) {
	
		$('.hide_nav_bg').stop().animate({top:'-68px',opacity:'0.5'},100);
		$('.hide_nav').stop().animate({top:'-68px'},100);
	   
    } 
*/
	
	var huoqu2 = (document.body.offsetWidth-1100)/6;
	var huoqu3 = (document.body.offsetWidth-1100)/4;
	var index_focus_height = (document.body.offsetWidth)/16*5.59;
	
	$(".index_focus .prev .arrow").css("right",huoqu2);
	$(".index_focus .next .arrow").css("left",huoqu2);
	$(".propaganda_wrap .zz_left .arrow").css("right",huoqu3);
	$(".propaganda_wrap .zz_right .arrow").css("left",huoqu3);
	$(".index_focus").css("height",index_focus_height);
	
	
	
	
	setTimeout(clearWord,10000);
	function clearWord(){
		$(".waiter .zx").show();
		//$(".waiter .dh").hide();
		//$(".waiter .qh .zx_btn").addClass("zx_current");
		//$(".waiter .qh .dh_btn").removeClass("dh_current");
		$(".waiter").css("width","142px");
		$(".waiter .close_btn").css("display","block");
		$(".waiter .qh .zx_btn").hide();
	}
	
	
	
	$(".team .photo_wall img").each(function(){
		$(this).attr("src",$(this).attr("lazy_img"));
	});
	
	
	
	
}
	

	
 var scrollFunc = function (e) {  
   var t = document.documentElement.scrollTop || document.body.scrollTop; 
        e = e || window.event;  
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            
			if (e.wheelDelta > 0) { //当滑轮向上滚动时  
                //alert("滑轮向上滚动");  
				if(t<600){
					
					$('.hide_nav_bg').stop().animate({top:'-68px',opacity:'0.5'},300);
					$('.hide_nav').stop().animate({top:'-68px'},300);
					
				}
				
				
				if(t>600){
					//alert(0);
					$('.hide_nav_bg').stop().animate({top:'0',opacity:'1'},300);
					$('.hide_nav').stop().animate({top:'0'},300);
					
					
					
				}
				
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                //alert("滑轮向下滚动"); 
				if(t>300){
				
				$('.hide_nav_bg').stop().animate({top:'0',opacity:'0.5'},300);
				$('.hide_nav').stop().animate({top:'0'},300);	
									
					}

				
            }  
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向下滚动时  
                	//alert("滑轮向下滚动");  
					if(t>300){
					$('.hide_nav_bg').stop().animate({top:'0',opacity:'0.7'},300);
					$('.hide_nav').stop().animate({top:'0'},300);
					}
            }  
            if (e.detail< 0) { //当滑轮向上滚动时  
                //alert("滑轮向上滚动");  
				
				if(t<600){
					
					$('.hide_nav_bg').stop().animate({top:'-68px',opacity:'0.5'},300);
					$('.hide_nav').stop().animate({top:'-68px'},300);
					
				}
				
				
				if(t>600){
					//alert(0);
					$('.hide_nav_bg').stop().animate({top:'0',opacity:'1'},300);
					$('.hide_nav').stop().animate({top:'0'},300);
					
					
					
				}
				
            }  
        }  
    }  
    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc; 
	
/*	
window.onscroll = function(){
	
    var t = document.documentElement.scrollTop || document.body.scrollTop; 

    if( t > 600 ) {
		//alert(1);
		$('.hide_nav_bg').stop().animate({top:'0',opacity:'1'},300);
		$('.hide_nav').stop().animate({top:'0'},300);
		
		
	   
    } 
	
	if( t <= 600 ) {
		
		$('.hide_nav_bg').stop().animate({top:'-68px',opacity:'0.5'},300);
		$('.hide_nav').stop().animate({top:'-68px'},300);
		
    } 

} 	*/	
	
	

$('#topCorp').find('a').each(function(){
	var aObj = $(this);
	var aUrl = $('#topCorp').find('input').eq(0).val();
	var goUrl = $('#topCorp').find('input').eq(1).val();
	aObj.click(function(event) {
		event.preventDefault();//alert('dd');
		var corp_id = aObj.attr('data');
		var data = {'id_corp':corp_id};

		$.ajax({
			url: aUrl,
			data: data,
			type: "post",
			dataType: "json",
			success: function(d){
				location.href=goUrl;
				//successfn(d);
			},
			error: function(e){
				alert('异常错误');
			}
		});

	});
});	

$('#centerCorp').find('a').each(function(){
	var aObj = $(this);
	var aUrl = $('#centerCorp').find('input').eq(0).val();
	var goUrl = $('#centerCorp').find('input').eq(1).val();
	aObj.click(function(event) {
		event.preventDefault();//alert('dd');
		var corp_id = aObj.attr('data');
		var data = {'id_corp':corp_id};

		$.ajax({
			url: aUrl,
			data: data,
			type: "post",
			dataType: "json",
			success: function(d){
				location.href=goUrl;
				//successfn(d);
			},
			error: function(e){
				alert('寮傚父閿欒');
			}
		});

	});
});

	$('#tanchufengongsi').click(function(event) {
		event.preventDefault();//alert('dd');
		var aUrl = $('#topCorp').find('input').eq(0).val();
		var goUrl = $('#topCorp').find('input').eq(1).val();
		var corp_id = $(this).attr('data');
		var data = {'id_corp':corp_id};

		$.ajax({
			url: aUrl,
			data: data,
			type: "post",
			dataType: "json",
			success: function(d){
				location.href=goUrl;
				//successfn(d);
			},
			error: function(e){
				alert('异常错误');
			}
		});

	});
	
	
if ($('.fgs_btn').length){
	
	$('.fgs_btn').mouseover(function(){
		$(".fgs_con").show();
		
	});
	$('.fgs_con').mouseover(function(){
		$(".fgs_con").show();
		
	});
	$('.fgs_btn').mouseout(function(){
		$(".fgs_con").hide();
	});
	$('.fgs_con').mouseout(function(){
		$(".fgs_con").hide();
	});
		
}	


if ($('.service').length){
	$('.service .service_list dl').mouseenter(function(){
		$(this).find(".service_col").fadeOut(200);
		$(this).find(".service_col_hover").fadeIn(200);
	});
	$('.service .service_list dl').mouseleave(function(){
		$(this).find(".service_col").fadeIn(200);
		$(this).find(".service_col_hover").fadeOut(200);
	});
}	
if ($('.baozhang').length){	
	$('.baozhang .baozhang_list dl').mouseenter(function(){
		$(this).find(".baozhang_col").fadeOut(200);
		$(this).find(".baozhang_col_hover").fadeIn(200);
	});
	$('.baozhang .baozhang_list dl').mouseleave(function(){
		$(this).find(".baozhang_col").fadeIn(200);
		$(this).find(".baozhang_col_hover").fadeOut(200);
	});
}




	
if ($('.zz_vs').length){		
$('.zz_vs .left').mouseenter(function(){
		$(".zz_vs .left .con .c").stop().animate({ right:'550px' },"linear");
		
		
	});	
$('.zz_vs .left').mouseleave(function(){
		$(".zz_vs .left .con .c").stop().animate({ right:'0' },"linear");
	
		
		
	});	
$('.zz_vs .right').mouseenter(function(){
		$(".zz_vs .right .con .c").stop().animate({ left:'550px' },"linear");
		
		
	});	
$('.zz_vs .right').mouseleave(function(){
		$(".zz_vs .right .con .c").stop().animate({ left:'0' },"linear");
		
		
	});	
}

	
	

if ($('.weixin_btn').length){		
	$('.weixin_btn').mouseover(function(){
		$(".top_weixin").show();
		
	});
	$('.top_weixin').mouseover(function(){
		$(".top_weixin").show();
		
	});
	$('.weixin_btn').mouseout(function(){
		$(".top_weixin").hide();
	});
	$('.top_weixin').mouseout(function(){
		$(".top_weixin").hide();
	});
}
	

if ($('.weibo_btn').length){		
	$('.weibo_btn').mouseover(function(){
		$(".top_weibo").show();
		
	});
	$('.top_weibo').mouseover(function(){
		$(".top_weibo").show();
		
	});
	$('.weibo_btn').mouseout(function(){
		$(".top_weibo").hide();
	});
	$('.top_weibo').mouseout(function(){
		$(".top_weibo").hide();
	});
}
	
	
if ($('.index_focus').length){	
	$(".index_focus").slide({mainCell:".bd ul",effect:"leftLoop",autoPlay:true,trigger:"click",interTime:7000,delayTime:300});

	
	$('.index_focus .bd ul li').css('width',$(window).width()+'px');
	$('.index_focus .bd ul').css('width',$(window).width()*5+'px');
	$('.index_focus .bd').css('width',$(window).width()+'px');
	$('.index_focus').css('width',$(window).width()+'px');
	$(window).resize(function(){
		
			$('.index_focus .bd ul li').css('width',$(window).width()+'px');
			$('.index_focus .bd ul').css('width',$(window).width()*5+'px');
			$('.index_focus .tempWrap').css('width',$(window).width()+'px');
			$('.index_focus .bd').css('width',$(window).width()+'px');
			$('.index_focus').css('width',$(window).width()+'px');
	});
	
	

}	
	
	
	


	
if ($('#demo').length){		
	var speed=50
	demo2.innerHTML=demo1.innerHTML
	function Marquee(){
	if(demo2.offsetTop-demo.scrollTop<=0)
	demo.scrollTop-=demo1.offsetHeight
	else{
	demo.scrollTop++
	}
	}
	var MyMar=setInterval(Marquee,speed)
	demo.onmouseover=function() {clearInterval(MyMar)}
	demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
	

	demo2_2.innerHTML=demo1_2.innerHTML
	function Marquee_2(){
	if(demo2_2.offsetTop-demo_2.scrollTop<=0)
	demo_2.scrollTop-=demo1_2.offsetHeight
	else{
	demo_2.scrollTop++
	}
	}
	var MyMar_2=setInterval(Marquee_2,speed)
	demo_2.onmouseover=function() {clearInterval(MyMar_2)}
	demo_2.onmouseout=function() {MyMar_2=setInterval(Marquee_2,speed)}
	
	
	
	
	
	
var cjdt_num1 = $(".dynamic .top .zhou1 p").text();
var cjdt_num2 = $(".dynamic .top .yue1 p").text();
var cjdt_num3 = $(".dynamic .top .zhou2 p").text();
var cjdt_num4 = $(".dynamic .top .yue2 p").text();

var aaa1 = cjdt_num1.split("");
var aaa2 = cjdt_num2.split("");
var aaa3 = cjdt_num3.split("");
var aaa4 = cjdt_num4.split("");

var time1 = "";
var time2 = "";
var time3 = "";
var time4 = "";

for(i=0;i<3;i++){
time1 = time1 + "<span>" + aaa1[i] + "</span>";
}
for(i=0;i<3;i++){
time2 = time2 + "<span>" + aaa2[i] + "</span>";
}
for(i=0;i<3;i++){
time3 = time3 + "<span>" + aaa3[i] + "</span>";
}
for(i=0;i<3;i++){
time4 = time4 + "<span>" + aaa4[i] + "</span>";
}
$(".dynamic .top .zhou1 p").html(time1);
$(".dynamic .top .yue1 p").html(time2);
$(".dynamic .top .zhou2 p").html(time3);
$(".dynamic .top .yue2 p").html(time4);

	
	
}	


if ($('.picScroll-top').length){		
	$(".picScroll-top").slide({titCell:".hd2 ul",mainCell:".bd2 ul",autoPage:true,effect:"top",autoPlay:true,vis:3,trigger:"click",interTime:7000,delayTime:300,prevCell:".t_prev",nextCell:".t_next",pnLoop:false,
	startFun:function(i,c){
        $('.picScroll-top .bd2 .picList li').removeClass("current");
		$('.picScroll-top .bd2 .picList li').eq(i+1).addClass("current");
    },
    endFun:function(i,c){
		
		//$('.picScroll-top .bd2 .picList li').removeClass("current");
		//$('.picScroll-top .bd2 .picList li').eq(i+1).addClass("current");
		
	}	
	});
}	
	

if ($('#horizontal').length){
	
	//生成一个0-75数字的数组
		var ArrList=new Array();
			for(var i=0;i<76;i++){
				
				ArrList[i]=i;
				
				}
	
		//随机不重复分配照片
		function allot(arr, num) {
		
		$("#horizontal>ul").html("");
		var temp_array = new Array();
	
		for (var index in arr) {
			temp_array.push(arr[index]);
		}
		//取出的数值项,保存在此数组
		var return_array = new Array();
		
		for (var i = 0; i<num; i++) {
			//判断如果数组还有可以取出的元素,以防下标越界
			if (temp_array.length>0) {
				//在数组中产生一个随机索引
				var arrIndex = Math.floor(Math.random()*temp_array.length);
		 							
				return_array[i] = temp_array[arrIndex];
				
				//随机抽取图片显示
				$("#horizontal>ul").append("<li><a href='javascript:void(0);' class='horizontal_img'><img src='/tpls/zzh/images/photo"+return_array[i]+".jpg' alt=''/></a><a href='javascript:void(0);' class='horizontal_null'></a></li>");
				
				//alert(return_array[i]);
			  //删除被取出的数组值，避免再次取数重复
			  temp_array.splice(arrIndex, 1);
			  
		  } else {
  
			  break;
		  }
	  }
	  
	  return temp_array;
	  
	  }
				
		//加载24张随机照片，返回抽取后剩余的数，组成新数组	
		var turn_array=allot(ArrList,24);
		
		
		//让每张图片间隔hide,show
		$("#horizontal>ul>li").slice(0,8).filter(":even").addClass("show").removeClass("hide");
		$("#horizontal>ul>li").slice(0,8).filter(":odd").addClass("hide").removeClass("show");
		
		$("#horizontal>ul>li").slice(8,16).filter(":odd").addClass("show").removeClass("hide");
		$("#horizontal>ul>li").slice(8,16).filter(":even").addClass("hide").removeClass("show");
		
		$("#horizontal>ul>li").slice(16,24).filter(":even").addClass("show").removeClass("hide");
		$("#horizontal>ul>li").slice(16,24).filter(":odd").addClass("hide").removeClass("show");
		
		
		
		var $h_list_li=$("#horizontal_list>li");
		
		//翻牌方法
		function auto_turn(){
			
			var li_index=Math.floor(Math.random()*24);
			var $h_list_index=$h_list_li.eq(li_index);
			
			if($h_list_index.hasClass("hide")){
				
				var img_num=Math.floor(Math.random()*turn_array.length);
				var imgIndex=turn_array[img_num];
				
				var this_index=$h_list_index.find("img").attr("src");
				
				this_index=this_index.replace(/[^0-9]/ig,"");
				
				//照片被随机序号替换后，原照片的序号重新放回turn_array
				turn_array.push(this_index);
				
				$h_list_index.find("img").attr("src","/tpls/zzh/images/photo"+imgIndex+".jpg");
				
					$h_list_index.children(".horizontal_null").animate({height:0,top:68},200,function(){
					
					$h_list_index.children(".horizontal_img").animate({height:"136px",top:0},200,function(){
						
						$h_list_index.removeClass("hide").addClass("show");		
						
						});
							
					});	
				
				//被翻开的照片序号从数组中删除
				turn_array.splice(img_num, 1);		
				
				}else{
				
				//照片反面
				
				$h_list_index.children(".horizontal_img").animate({height:0,top:68},200,function(){
					
					$h_list_index.children(".horizontal_null").animate({height:"136px",top:0},200,function(){
						
						$h_list_index.removeClass("show").addClass("hide");		
						
						});
							
					});	
				
				}
			
			}
		
		
		
		//定时翻牌	
		var turn_auto=setInterval(auto_turn,1500);
		
		var time_delay;
		
		$h_list_li.hover(function(){
			
			clearInterval(turn_auto);
			clearTimeout(time_delay);
			
			var over_index=$(this).index();
			
			if($h_list_li.eq(over_index).hasClass("hide")){
				
				time_delay=setTimeout(function(){
					
				var img_num=Math.floor(Math.random()*turn_array.length);
				var imgIndex=turn_array[img_num];
								
				var this_index=$h_list_li.eq(over_index).children(".horizontal_img").children("img").attr("src");
				
				this_index=this_index.replace(/[^0-9]/ig,"");
				
				//照片被随机序号替换后，原照片的序号重新放回turn_array
				turn_array.push(this_index);
				
				$h_list_li.eq(over_index).children(".horizontal_img").children("img").attr("src","/tpls/zzh/images/photo"+imgIndex+".jpg");
					
					$h_list_li.eq(over_index).children(".horizontal_null").animate({height:0,top:68},200,function(){
					
					$h_list_li.eq(over_index).children(".horizontal_img").animate({height:"136px",top:0},200);
					
					});
					
				//被翻开的照片序号从数组中删除
				turn_array.splice(img_num, 1);
				
					},200);
				
				}
			
			},function(){

			turn_auto=setInterval(auto_turn,1500);
		
			var out_index=$(this).index();
			
			if($h_list_li.eq(out_index).hasClass("hide")){
				
				$h_list_li.eq(out_index).children(".horizontal_img").stop().animate({height:0,top:68},200,function(){
					
					$h_list_li.eq(out_index).children(".horizontal_null").stop().animate({height:"136px",top:0},200);
					
					});
					
				}

			});







}
	
	






   





	
		
		
		
if ($('.propaganda').length){	

$("#fengongsi").timelinr({containerDiv:'#fengongsi',datesDiv:'#fengongsi_dates',issuesDiv:'#fengongsi_issues',prevButton:'#zz_prev',nextButton:'#zz_next',startAt: 5,issuesTransparency:1000,autoPlayPause:7000});
$("#fengongsi_dates li a").click(function(){
    
    $(".tanchufengongsi").attr("data",$(this).attr("data"));
  });
	
}	
	
	
	
	
	
	
	
	
	
if ($('.index_news_slideBox').length){	
	$("#index_news_slideBox1").slide({mainCell:".index_news_bd ul",effect:"left",autoPlay:false,trigger:"click",interTime:5000,delayTime:1000});
	$("#index_news_slideBox2").slide({mainCell:".index_news_bd ul",effect:"left",autoPlay:false,trigger:"click",interTime:5000,delayTime:1000});
	$("#index_news_slideBox3").slide({mainCell:".index_news_bd ul",effect:"left",autoPlay:false,trigger:"click",interTime:5000,delayTime:1000});
	

	

}		
	
	



if ($('.query-picScroll-left').length){	
$(".query-picScroll-left").slide({titCell:".queryhd ul",mainCell:".querybd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:7,prevCell:'.queryprev',nextCell:'.querynext'});


}	

	
	
	
	
if ($('.waiter').length){	
	
		
		
	
		$(".waiter .qh .zx_btn").click(function(){
			
			
			$(".waiter .zx").show();
			$(".waiter .qh .zx_btn").hide();
			//$(".waiter .dh").hide();
			//$(".waiter .qh .zx_btn").addClass("zx_current");
			//$(".waiter .qh .dh_btn").removeClass("dh_current");
			$(".waiter").css("width","142px");
			$(".waiter .close_btn").css("display","block");
			});
		/*$(".waiter .qh .dh_btn").click(function(){
			
			
			$(".waiter .zx").hide();
			$(".waiter .dh").show();
			$(".waiter .qh .dh_btn").addClass("dh_current");
			$(".waiter .qh .zx_btn").removeClass("zx_current");
			$(".waiter").css("width","142px");
			$(".waiter .close_btn").css("display","block");
			});*/
	
		$(".waiter .qh .close_btn").click(function(){
			
			
			$(".waiter .zx").hide();
			//$(".waiter .dh").hide();
			$(".waiter").css("width","38px");
			$(".waiter .close_btn").hide();
			$(".waiter .qh .zx_btn").css({"display":"block"});
			});	
}	
	
	
	
	
if ($('.dh').length){	
	
	$(".dh .hide").click(function(){
		$(".dh .show").show();
		$(".dh .hide").hide();
		$('.dh').css({"height":"208px"});
	});	
	
	$(".dh .show").click(function(){
		$(".dh .show").hide();
		$(".dh .hide").show();
		$('.dh').css({"height":"138px"});
	});

}	
	
	
	
	
	
	
	
if ($('.fengongsi-box').length){		
$(".main .fengongsi-box .huabei .a-box a:first").addClass("dangqian-a");
	$(".main .fengongsi-box .huadong .a-box a:first").addClass("dangqian-a");
	$(".main .fengongsi-box .huanan .a-box a:first").addClass("dangqian-a");
	$(".main .fengongsi-box .huazhong .a-box a:first").addClass("dangqian-a");
	$(".main .fengongsi-box .xibei .a-box a:first").addClass("dangqian-a");
	$(".main .fengongsi-box .xinan .a-box a:first").addClass("dangqian-a");
	$(".main .fengongsi-box .dongbei .a-box a:first").addClass("dangqian-a");
	$(".main .fengongsi-box .beijing .a-box a:first").addClass("dangqian-a");

	$(".main .fengongsi-box .daqu .chengshi").hide();

	$(".main .fengongsi-box .huabei .chengshi:first").show();
	$(".main .fengongsi-box .huadong .chengshi:first").show();
	$(".main .fengongsi-box .huanan .chengshi:first").show();
	$(".main .fengongsi-box .huazhong .chengshi:first").show();
	$(".main .fengongsi-box .xibei .chengshi:first").show();
	$(".main .fengongsi-box .xinan .chengshi:first").show();
	$(".main .fengongsi-box .dongbei .chengshi:first").show();
	$(".main .fengongsi-box .beijing .chengshi:first").show();

	$(".main .fengongsi-box .daqu .a-box").children("a").click(function(){
		$(this).siblings("a").removeClass("dangqian-a");
		$(this).addClass("dangqian-a");
		
		var idname="."+$(this).attr('id')+"-div";
		// alert(idname);
		$(idname).siblings(".chengshi").hide();
		$(idname).fadeIn();
	})	
}




// if ($('.liuyan').length){

// 	$(".liuyan .list-2 li input").focus(function(){
// 		$(this).next().text("");
// 	});
// 	$(".liuyan .list-2 li textarea").focus(function(){
// 		$(this).next().text("");
// 	});
// 	$(".liuyan .list-2 li input[name='name']").blur(function(){
// 		if($(this).val()==""){
// 			$(".liuyan .list-2 li .namei").text("请输入姓名");
// 			return false;
// 		}
// 	});
// 	$(".liuyan .list-2 li input[name='mobile']").blur(function(){
// 		if($(this).val()==""){
// 			$(".liuyan .list-2 li .mobilei").text("请输入电话");
// 			return false;
// 		}
// 	});
// 	$(".liuyan .list-2 li input[name='address']").blur(function(){
// 		if($(this).val()==""){
// 			$(".liuyan .list-2 li .addressi").text("请输入地址");
// 		}
// 	});
// 	$(".liuyan .list-2 li input[name='company']").blur(function(){
// 		if($(this).val()==""){
// 			$(".liuyan .list-2 li .companyi").text("请输入QQ");
// 		}
// 	});
// 	$(".liuyan .list-2 li textarea").blur(function(){
// 		if($(this).val()==""){
// 			$(".liuyan .list-2 li .contenti").text("请输入内容");
// 		}
// 	});

// }

$("#feedback").submit(function(){ 
 

		var name = $("#name").val();
		var mobile = $("#mobile").val();
		 
		if(name < 1){
			alert("姓名不能为空");
			
			$(".liuyan .list-2 li .namei").text("请输入姓名");
			return false;
		}

		if(mobile<7){
			alert("请输入正确电话");
			$(".liuyan .list-2 li .mobilei").text("请输入电话");
			return false;
		} 
	});


















	

});

