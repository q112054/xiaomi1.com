let loupe = function() {
    let movebox = $('.mask'),
        bigpicture = $('.loupepicture'),
        small = $('.product_images'),
        big = $('.loupe'),
        
        select = $('.s1');

   
    small.on('mouseover', function () {
        movebox.addClass('show');
        big.addClass('show');
        

        movebox.css({
            width: (small.width() * big.width() / bigpicture.width()) + 'px',
            height: (small.height() * big.height() / bigpicture.height()) + 'px'
        })

        small.on('mousemove', function (ev) {


            let top = ev.pageY - small.offset().top - movebox.height() / 2;
            let left = ev.pageX - small.offset().left - movebox.width() / 2;

            let ratio =$(bigpicture[0]).width() / small.width();

            if (top <= 0) {
                top = 0;
            } else if (top >= small.height() - movebox.height() - 140) {
                top = small.height() - movebox.height()-140 - 2;
            }

            if (left <= 0) {
                left = 0;
            } else if (left >= small.width() - movebox.width() ) {
                left = small.width() - movebox.width() - 2;
            }
            movebox.css({
                'top': top + 'px',
                'left': left + 'px'
            })
            bigpicture.css({
                top: ratio * -top + 'px',
                left: ratio * -left + 'px'
            });

        });
        small.on('mouseout', function () {
            movebox.removeClass('show');
            big.removeClass('show');
        });
    })
}

export {loupe};