function boxTop(idBox) {
	var boxOffset = $(idBox).offset();
	return boxOffset.top;
}

$(document).scroll(function() {
	var documentTop = $(this).scrollTop();
	if (documentTop > boxTop('#introduction') - 120) {
		$('#introduction').addClass('animar');
	} else {
		$('#introduction').removeClass('animar');
	}
});
$('#introduction').html('<p>' + boxTop('#introduction') + 'px </p>');
