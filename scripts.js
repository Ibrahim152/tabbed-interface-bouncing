(function () {
    $('#tabs ul li a').click(function(event){
        event.preventDefault()
        $('#tabs ul li a').css({'color':'black','background-color':'#A2A2A2'});
        $(this).css({'color':'black','background-color':'#EAEAEA'});
        const thisTab=$(this).attr('href');
        $('#tabs div:visible').slideToggle(1000,'easeOutBounce',function(){
            $(`${thisTab}`).slideDown(1000,'easeOutBounce');
        });
        
    })
}())