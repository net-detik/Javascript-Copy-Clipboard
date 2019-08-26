function copyToClipboard(element) {
	  var $temp = $("<input>");
	  $("body").append($temp);
	  $temp.val($(element).text()).select();
	  document.execCommand("copy");
	  $temp.remove();
	  $('.copied').html(''); $('.copied').html('<i class="fa fa-check text-success"> copied');
	}
