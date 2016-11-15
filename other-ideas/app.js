$(function() {
    $('.address-form').submit(function() {
        $('.officials').empty();
        $('.status-text').text('Officials are loading...');
        var addressInput = $('.address-input').val();
        $.get('http://cicero.azavea.com/v3.1/official?callback=?', {
                token: '593427aab3f84c73f7254f43549e33efa2a18265',
                user: 1244,
                search_loc: addressInput
            },
            function(data) {
                if (data.response.results.candidates == 0) {
                    $('.status-text').text('No results for ' + addressInput);
                    return false;
                }
                $.each(data.response.results.candidates, function(index, location) {
                    $('.status-text').text('Showing officials for ' + location.match_addr);
                    $.each(location.officials, function(index, official) {
                        $('.officials').append('<li>' + official.first_name + ' ' + official.last_name + '</li>');
                    });
                });
            });
        return false;
    });
});
