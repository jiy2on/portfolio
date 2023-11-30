$(document).ready(function(){
    

    // menu
    $(document).on('click','.menu a',function(){
        $("html,body").animate({
            scrollTop : $(this.hash).offset().top
        },1000)
    });


    // first
    $(window).scroll(function(){
        sct = $(window).scrollTop() 
        
        let scrollBoxTop = $(".scrollbox").offset().top
        let distance = sct -  scrollBoxTop
        let scrollboxHeight = $(".scrollbox").height() //스크롤박스 높이를 계산
        let elvHeight = $(".elv").height() // 걸리는 화면 높이 계산
        let aniEnd = scrollboxHeight - elvHeight // 스크롤박스 안에서 지나온 높이 
        let per  = distance / aniEnd // 0~1
        let perdot5 = per*0.5
        let per360 = per*360

         if(distance<0){
            console.log("도달하지 못함")
            $(".elv").removeClass("fixed")
            $(".elv").removeClass("bottom")
            }
        if(distance>=0 && distance<aniEnd){
            console.log("중간지점 안에 있는 상태")
            $(".elv").removeClass("bottom")
            $(".elv").addClass("fixed")
            // console.log(distance,per)
            $(".jiyeonZ").css("transform",`translateZ(${distance}px)`)
            $(".second").css("filter",`brightness(${0.5+perdot5})hue-rotate(${per360}deg)`)

            if(per>0.6){
                $(".second").addClass("on")
            }else{
                $(".second").removeClass("on")
            }
            

        }
        if(distance>=aniEnd){
                console.log("벗어난 상태")
                $(".elv").removeClass("fixed")
                $(".elv").addClass("bottom")
            }
     })


    //  second

    function secondRotate(){
     $(".second path").each(function(){
        let idx =$(this).index()
        let delay = idx*0.096
        let thispath = $(this)
        let pathL = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathL)
        $(this).css("stroke-dashoffset",pathL)

        setTimeout(function(){
            thispath.css("transition",`stroke-dashoffset 0.7s linear ${delay}s,fill 0.1s linear ${0.1+delay}s`)
        },50)
     })
    
   
    }
    secondRotate()
    

    // third
    let scrTop = 0
    let devHeight = $(window).height()
    $(window).scroll(function(){

        scrTop = $(window).scrollTop()

        $(".titlebox").each(function(){
            if(scrTop+(devHeight*0.6)>=$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

        $(".txtbox").each(function(){
            if(scrTop+(devHeight)>=$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })



    // third - cloud
   
    function randomText(){
        var text = ("METICULOUS POSITIVE BRIGHT TRUSTWORTHY EXTROVERTED PASSIONATE ATTRACTIVE SINCERE GENIAL NICE JOVIAL COOPERATIVE SINCERE PIONEERING ADAPTABLE THOUGHTFUL CREATIVE POLITE HUMBLE BRAVE EMPATHETIC");
        let textArray = text.split(" ")
        let word = textArray[Math.floor(Math.random() * textArray.length)]
        // letter = text[Math.floor(Math.random() * text.length)];
        return word;
    }
    let deviceWidth = window.innerWidth
    $(window).resize(function(){
        deviceWidth = window.innerWidth
    })
    

    function rain(){
        let cloud = document.querySelector(`.cloud`);
        let e = document.createElement(`div`);
        let left = Math.floor(Math.random() * deviceWidth/2) - 400;
        let size = Math.random() * 3.2;
        let duration = Math.random() * 3;
        let random_co1 = Math.random() * 155 + 100;
        let random_co2 = Math.random() * 155 + 100;
        let random_co3 = Math.random() * 155 + 100;


        e.classList.add(`text`);
        cloud.appendChild(e);
        e.innerText = randomText()
        e.style.left = left + `px`;
        e.style.fontSize = 0.3+size+`em`;
        e.style.animationDuration = 1+duration+`s`;
        e.style.textShadow = `0 0 15px rgb(${random_co1},${random_co2},${random_co3}),`+`0 0 10px rgb(${random_co1},${random_co2},${random_co3}),`+`0 0 5px rgb(${random_co1},${random_co2},${random_co3}),`+`0 0 20px rgb(${random_co1},${random_co2},${random_co3})`
        setTimeout(function(){
            cloud.removeChild(e)
        },3000)
    }

    setInterval(function(){
        rain()
    },100);


    //  four


    $(window).scroll(function(){
        sct = $(window).scrollTop() 
        
        let scrollBoxTop = $(".fourOne").offset().top
        let distance = sct -  scrollBoxTop
        let scrollboxHeight = $(".fourOne").height() //스크롤박스 높이를 계산
        let elvHeight = $(".four_elv").height() // 걸리는 화면 높이 계산
        let aniEnd = scrollboxHeight - elvHeight // 스크롤박스 안에서 지나온 높이 
        let per  = distance / aniEnd // 0~1
        let per100 = per*140
        let per360 = per*360

         if(distance<0){
            console.log("도달하지 못함")
            $(".four_elv").removeClass("fixed")
            $(".four_elv").removeClass("bottom")
            }
        if(distance>=0 && distance<aniEnd){
            console.log("중간지점 안에 있는 상태")
            $(".four_elv").removeClass("bottom")
            $(".four_elv").addClass("fixed")
            $(".bgbox_four").css("width",`${per100}vw`).css("height",`${per100}vw`).css("transform",`translate(-50%,-50%)rotate(${per360}deg)`)
        }
        if(distance>=aniEnd){
                console.log("벗어난 상태")
                $(".four_elv").removeClass("fixed")
                $(".four_elv").addClass("bottom")
        }
     })

    // let stateSkill = false
    
    // function skillRotate(){

    // $(".skill_list>li").each(function(){
    //     let per = Number($(this).find(".skillper").text())
    //     let count = 0
    //     let thisList = $(this)
    //     let pathLength = thisList.find("circle").get(0).getTotalLength()
    //     thisList.find("circle").css("stroke-dasharray",pathLength)
    //     thisList.find("circle").css("stroke-dashoffset",pathLength)

    //     let timer = setInterval(function(){
    //         count++
    //         thisList.find(".skillper").html(count)
    //         thisList.find("circle").css("stroke-dashoffset",pathLength-(pathLength*count/100))
    //         if(count>=per){
    //             clearInterval(timer)
    //             }
    //         },10)
    //     })
    //     return true
    // }

    // $(window).scroll(function(){
    //     let sct = $(window).scrollTop()
    //     let devHeight = $(window).height()
    //     let skillTop = $(".skill_list").offset().top
        
    //     if(sct+devHeight*0.5>skillTop){
    //         if(stateSkill == false){
    //             stateSkill = skillRotate()          
    //         }
    //     }
    // })
    function showGraph(){
        $(".skill_list>li").each(function(){
            let count = 0
            let per = $(this).find(".skillPer").text()
            let _this = $(this)
    
            let timer = setInterval(function(){
                
                count++
                _this.find(".skillPer").html(count)
                _this.find(".skill_move").css("width",count+"%")
    
                if(count>=per){clearInterval(timer)}
            },30)
            console.log(per)
        })
        return true
    }
    

    let graphState = false
    $(window).scroll(function(){

        scrTop = $(window).scrollTop()
        let fourTop = $(".four").offset().top
        if(scrTop+devHeight*0.5 >= fourTop && graphState==false){
            graphState = showGraph()
        }

    })

    // five
    $(window).scroll(function(){

        scrTop = $(window).scrollTop()

        $(".fiveOne>p").each(function(){
            if(scrTop+(devHeight*0.6)>=$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

        $(".fiveOne>p").each(function(){
            if(scrTop+(devHeight)>=$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })


    // seven

    // banner
    $(window).scroll(function(){

        scrTop = $(window).scrollTop()

        $(".bannerLeft,.bannerRight").each(function(){
            if(scrTop+(devHeight*0.6)>=$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })

        $(".bannerLeft,.bannerRight").each(function(){
            if(scrTop+(devHeight)>=$(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })
    })




    // popup
    $(window).scroll(function(){
        sct = $(window).scrollTop() 
        
        let popscrollBoxTop = $(".popscrollbox").offset().top
        let popdistance = sct -  popscrollBoxTop
        let popscrollboxHeight = $(".popscrollbox").height() 
        let popelvHeight = $(".popelv").height() 
        let popaniEnd = popscrollboxHeight - popelvHeight 
        let per = popdistance/popaniEnd /* 0~1 */
        let popperTrain = per*(100 - 100/6) /* 0~100 */
        let per45 = per*45 /* 0~45 */
        let per25 = per*25 /* 0~25 */
        let perTrainCount = per*100/(100/6) // 0,1,2,3,4,5
        let perTrainIndex = Math.floor(perTrainCount)
        let perTrainIndexProc = perTrainCount-perTrainIndex
        let perTrainIndexProc25 = perTrainIndexProc*25
        let perTrainIndexProc45 = perTrainIndexProc*45
        let perTrainIndexProc100 = perTrainIndexProc*100
        // filter: grayscale(100%)
        // console.log(popperTrain)

    

        if(popdistance<0){
            $(".popelv").removeClass("fixed")
            $(".popelv").removeClass("bottom")
        }
        if(popdistance>=0 && popdistance<popaniEnd){
            $(".popelv").removeClass("bottom")
            $(".popelv").addClass("fixed")
            $(".poptrain").css("transform",`translateX(-${popperTrain}%)`)
            $(".poptrain>li").eq(perTrainIndex).children(".sevenImage").css("transform",`rotateX(${45-perTrainIndexProc45}deg) rotateZ(-${25-perTrainIndexProc25}deg)`)
            $(".poptrain>li").eq(perTrainIndex).children(".shadow").css("transform",`rotateX(${45-perTrainIndexProc45}deg) rotateZ(-${25-perTrainIndexProc25}deg)`)
            $(".poptrain>li").eq(perTrainIndex).find("img").css("filter",`grayscale(${100-perTrainIndexProc100}%)`)

        }
        if(popdistance>=popaniEnd){
            $(".popelv").removeClass("fixed")
            $(".popelv").addClass("bottom")
        }
    })
})






