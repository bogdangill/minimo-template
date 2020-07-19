// ajax запрос постов через кнопку load more. работает только если проект на сервере или использует хостинг

$(function() {
    $('.load-more').on('click', function() {
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            // эмулирую получение реальных постов, забитых в data.html
            url: 'https://bogdangill.github.io/minimo-template/data.html',
            type: 'GET', // POST выбрасывает ошибку 405
            beforeSend: function() {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(response) {
                //ставлю таймер потому что запрос выполнится слишком быстро в теории - т.е. для демонстрации
                setTimeout(function(){
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    $('.after-posts').before(response); //туда вставляются посты из data.html
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