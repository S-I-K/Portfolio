$(function(){
    let email = $('#email');
    let pw = $('#pw');
    let btn = $('#btn');
    
    btn.on('click', function(){
        // console.log(email.next());
        if(email.val() == ''){
            email.next('label').addClass('warning');
            setTimeout(function(){
                $('label').removeClass('warning');
            },1500);
        }else if(pw.val() == ''){
            pw.next('label').addClass('warning');
            setTimeout(function(){
                $('label').removeClass('warning');
            },1500);
        }
    });
});