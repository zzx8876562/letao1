
NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function () {
	$(this).next().slideToggle();
});

// 检测用户登录
$.ajax({
	url: '/api/employee/checkRootLogin',
	type: 'get',
	success: function (info) {
		if(info.error) location.href = '/admin/login.html';
	}
});

// 退出登录
$('.fa-sign-out').parent().on('click', function () {
	// 发送请求
	$.ajax({
		url: '/api/employee/employeeLogout',
		type: 'get',
		success: function (info) {
			if(info.success) {
				location.href = '/admin/login.html?url=' + location.href;
			}
		}
	});
})