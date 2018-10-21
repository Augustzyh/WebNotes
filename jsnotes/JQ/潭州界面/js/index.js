$(function () {
    //header
    (function () {
        let $bg = $("#h-bg").find("p"),
            $tab = $("#h-tab").find(".btn"),
            length = $bg.length,
            index = 0,
            timer = null
        ;
        $tab.click(function () {
            if($(this).index() === index){return;}
            /*$bg.eq(index).fadeOut();
            $tab.eq(index).removeClass("active");
            index = $(this).index();
            $bg.eq(index).fadeIn();
            $tab.eq(index).addClass("active");*/

            clearInterval(timer);
            auto();

            //以下为简写 ,但元素多时性能低
            change(function () {
                index = $(this).index();
            }.bind(this))

        });

        auto();
        function auto() {
            timer = setInterval(function () {
                change(function () {
                    index++;
                    index %= length;
                }.bind(this))
            }, 3000)
        }

        function change(fn) {
            fn();
            $bg.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
            $tab.eq(index).addClass("active").siblings().removeClass("active");
        }
    })();

    //speaker
    (function () {
        let $list = $("#speaker .s-c-img ul")
        let len = data.length;
        function init() {
            let html = ""
            for(let i = 0;i < len;i++){
                let dataDetail = data[i];
                html = `<li style="background-image: url('${dataDetail.src}');">
								<div class="txt">
									<h5>${dataDetail.name}</h5>
									<p class='pos'>${dataDetail.title}</p>
									<p class="summary">${dataDetail.dec}</p>
								</div>
							</li>
                `;
                $list.append(html);
            }
        }
        init();

        let $btn = $("#speaker .s-c-arrow p"),
            $li = $list.find("li"),
            lastDate = new Date()
        ;
        let eachWidth = $li.outerWidth(true);
        let index = 0;
        let maxIndex = len - 4;
        let {min,max} = Math;

        function btnIndex(index) {
            let arr = [];
            if( index === 0 ){
                arr = ["hide" , "show"];
            }else if(index === maxIndex){
                arr = ["show" , "hide"];
            }else{
                arr = ["show" , "show"];
            }
            $btn.eq(0)[arr[0]]();
            $btn.eq(1)[arr[1]]();
        }
        btnIndex(index);
        $btn.click(function () {
            if(new Date() - lastDate <= 600) {return;}
            index += ($(this).index()?2:-2);
            index = min(index,maxIndex);
            index = max(0,index);
            /*$list.animate({
                marginLeft: -index * eachWidth
            }, 100);*/
            $list.css("margin-left",-index * eachWidth + "px");
            btnIndex(index);
            lastDate = new Date();
        });
    })();

    //tab
    (function () {
        let $tab = $("#works .w-m-c-tab ul li"),
            $work = $("#works .w-m-c-works ul"),
            index = 0
        ;
        $tab.click(function () {
            /*$tab.eq(index).removeClass("on");
            $work.eq(index).stop().fadeOut(1000);
            index = $(this).index();
            $tab.eq(index).addClass("on");
            $work.eq(index).stop().fadeIn(1000);*/
            $tab.eq($(this).index()).addClass("on").siblings().stop().removeClass("on");
            $work.eq($(this).index()).stop().fadeIn(500).siblings().stop().fadeOut(500);
        });
    })();
});

