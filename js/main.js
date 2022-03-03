$(function (){
            var rotateTimeOut = function (){
                $('#rotate').rotate({
                    angle:0,
                    animateTo:2160,
                    duration:8000,
                    callback:function (){
                        alert('网络超时，请检查您的网络设置！');
                    }
                });
            };
            var bRotate = false;
            var rotateFn = function (awards, angles, txt){
                bRotate = !bRotate;
                $('#rotate').stopRotate();
                $('#rotate').rotate({
                    angle:0,
                    animateTo:angles+1800,
                    duration:8000,
                    callback:function (){
                        // alert(txt);
                        bRotate = !bRotate;
                    }
                })
            };
            $('.pointer').click(function (){
                if(bRotate)return;
                var item = rnd(0,8);
                switch (item) {
                    case 0:
                        //var angle = [26, 88, 137, 185, 235, 287, 337];
                        var Z=getRandom(320, 360);
                        // Z = Z.toFixed(2);
                        rotateFn(0,Z, '5000');
                        document.getElementById("point").innerText="5000";
                        break;
                    case 1:
                        var Z=getRandom(1,40);
                        // Z = Z.toFixed(2);
                        //var angle = [88, 137, 185, 235, 287];
                        rotateFn(1,Z, '5');
                        document.getElementById("point").innerText="5";
                        break;
                    case 2:
                        var Z=getRandom(40, 80);
                        // Z = Z.toFixed(2);
                        //var angle = [137, 185, 235, 287];
                        rotateFn(2, Z, '500');
                        document.getElementById("point").innerText="500";
                        break;
                    case 3:
                        var Z=getRandom(80, 120); 
                        // Z = Z.toFixed(2);
                        //var angle = [137, 185, 235, 287];
                        rotateFn(3, Z, '50');
                        document.getElementById("point").innerText="50";
                        break;
                    case 4:
                        var Z=getRandom(120,160);
                        // Z = Z.toFixed(2);
                        //var angle = [185, 235, 287];
                        rotateFn(4,Z, '5');
                        document.getElementById("point").innerText="5";
                        break;
                    case 5:
                        var Z=getRandom(160,200);
                        // Z = Z.toFixed(2);
                        //var angle = [185, 235, 287];
                        rotateFn(5, Z, '50000');
                        document.getElementById("point").innerText="50000";
                        break;
                    case 6:
                        var Z=getRandom(200,240);
                        // Z = Z.toFixed(2);
                        //var angle = [235, 287];
                        rotateFn(6, Z, '500');
                        document.getElementById("point").innerText="500";
                        break;
                    case 7:
                        var Z=getRandom(240,280);
                        // Z = Z.toFixed(2);
                        //var angle = [287];
                        rotateFn(7, Z, '50');
                        document.getElementById("point").innerText="50";
                        break;
                    case 8:
                        var Z=getRandom(280,320);
                        // Z = Z.toFixed(2);
                        //var angle = [287];
                        rotateFn(8, Z, '5');
                        document.getElementById("point").innerText="5";
                        break;
                }
                setTimeout(function(){ $("div[id=" + $(".pointer").attr("data-pop") + "]").fadeIn(200);}, 8000);
                console.log(item);
            });
        });
        function rnd(n, m){
            return Math.floor(Math.random()*(m-n+1)+n)
        }
        function getRandom(min, max){
            return Math.floor(Math.random()*(max - min+1)) + min;
        }
        //pop//
$(".popclose").click(function() {
    $('.popup').fadeOut(200);
  });
  $(".blacklayer").click(function() {
    $('.popup').fadeOut(200);
  });
  $(".part_btn").click(function() {
  $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
  });