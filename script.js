

    var current     = window.location.href;
    var g_confirm   = current.includes('c=1');
    var go_ads      = 'https://google.com';

    $(document).ready(function()
    {
        if(!g_confirm && !go_ads.includes('#YOUR'))
        {
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    $('#popbox').removeClass('hide');
                }
                console.log('scroll..');                    
            });
        }

        $(document).on('click','.g_url',function(e)
        {
            e.preventDefault();

            var g_target=current.includes("?")?current+"&c=1":current+"?c=1";

            window.open(go_ads,"_blank");
            window.location.href=g_target;
        });

        $("[id*='google-cache']").remove();

        $(document).on('click','.ads-img',function(e)
        {
            e.preventDefault();
            window.open(go_ads, '_blank');
        });
    });
