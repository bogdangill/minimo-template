// ajax запрос постов через кнопку load more. работает только если проект на сервере или использует хостинг

$(function() {
    $('.load-more').on('click', function() {
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            // эмулирую получение реальных постов, забитых в data.html
            url: '/data.html',
            type: 'GET', // либо POST
            beforeSend: function() {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(response) {
                //ставлю таймер потому что запрос выполнится слишком быстро в теории - т.е. для демонстрации
                setTimeout(function(){
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    console.log(response);
                }, 1000);
            },
            error: function() {
                alert('Error нахуй');
                loader.removeClass('d-inline-block');
                btn.attr('disabled', false);
            }
        });
    });
});