window.onload = function() {
	(function() {
		if(!document.getElementsByClassName) {
			return;
		}else {
			// 分类栏点击高亮功能
			var class_name = document.getElementsByClassName('class-name');
			var num = 0;
			for(var i = 0; i < class_name.length; i++) {
				class_name[i].index = i;
				console.log(class_name[i].index);
				class_name[i].addEventListener('click', function() {
					class_name[num].classList.remove('active');
					this.classList.add('active');
					num = this.index;
				});
			}
		}
	}());
	var data = [
		{
			title: 'one-more',
			view_count: 10000
		},
		{
			title: 'two-more',
			view_count: 666
		},
		{
			title: 'three-more',
			view_count: 485
		},
		{
			title: 'again',
			view_count: 627
		},
		{
			title: 'again-and-again',
			view_count: 896
		},
		{
			title: '这是一个测试！超长标题测试！测试！测试！测试！',
			view_count: 896
		},
		{
			title: 'html5',
			view_count: 66
		},
		{
			title: '阿斯顿飞asdfasdf手动阀水电费',
			view_count: 8
		}
	];
	// 滚动到底部加载更多，以及显示返回顶部按钮
	window.onscroll = function() {
		var top = document.getElementById('to-top');
		if(document.documentElement.scrollHeight <= (window.innerHeight + document.body.scrollTop)) {
			var test = document.getElementById('box');
			var template = document.getElementById('template').innerHTML;
			var rendered = Mustache.render(template, {data: data});
			document.getElementById('box').insertAdjacentHTML("beforeEnd", rendered);
		}else if(document.body.scrollTop > 200) {
			top.style.visibility = 'visible';
			top.style.transition = 'opacity 3s';
			top.style.opacity = '1';
		}else {
			top.style.visibility = 'hidden';
			top.style.opacity = '0';
		}
	};
	// 分享当前分类url
	// console.log(document.location.hash)
	// url = window.location.href
	// console.log(url.split('#'))
	// key = url.split('#')[1]
	// if(document.getElementById(key)) {
	// 	document.getElementById(key).click()
	// }
	// 下拉刷新
	/*
	设置move_event对象，包含属性start，move
	touchstart生成move_event.start，记录起始y坐标
	touchmove生成move_event.move，记录移动y坐标
	* 判断doucment.body.scrollTop的距离,标示页面没滚动，可以触发位移的判断
	* move_event.start - move_event.move，判断移动距离，随移动距离增加gif的margin-top距离
	* gif的margin-top距离超过90px就固定在90px
	touchend判断gif移动距离，如果小于90触犯回弹效果并消失，否则触发刷新效果
	*/
	if(document.body.scrollTop === 0) {
		console.log('触发滚动');
		move_event = {};
		document.getElementById('box').addEventListener('touchstart', function(event) {
			move_event.start = event.touches[0].pageY;
		});
		document.getElementById('box').addEventListener('touchmove', function(event) {
			move_event.move = event.touches[0].pageY;
			if(document.body.scrollTop === 0) {
				console.log('可触发上拉刷新');
				if((move_event.move - move_event.start) > 10) {
					var refresh = document.getElementById('refresh');
					refresh.style.display = 'block';
					refresh.style.marginTop = (move_event.move - move_event.start) + 'px';
					if(refresh.style.marginTop.match(/\d+/g)[0] > 90) {
						refresh.style.marginTop = '90px';
					}
				}
			}
		});
		document.getElementById('box').addEventListener('touchend', function(event) {
			var refresh = document.getElementById('refresh');
			if(document.body.scrollTop > 0) {
				if(refresh.style.marginTop) {
					console.log('has');
				}else {
					console.log('has not');
				}
			}else {
				console.log('触发这个');
				if(refresh.style.marginTop.match(/\d+/g)[0] < 90) {
					var time = setInterval(function() {
						refresh.style.marginTop = refresh.style.marginTop.match(/\d+/g)[0] - 2 + 'px';
						if(refresh.style.marginTop.match(/\d+/g)[0] <= 0) {
							clearInterval(time);
						}
						if(refresh.style.marginTop < '0px') {
							refresh.style.display = 'none';
						}
					}, 10);
				}else {
					console.log('触发1.8秒刷新');
					setTimeout(function() {
						window.location.reload(false);
					}, 1800);
				}
			}
		});
	}
};
