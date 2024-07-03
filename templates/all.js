
/* 導航區 開始 */
$(window).scroll(function () {
	if ($(this).scrollTop() > 400 ) {
		$('.nav_box').addClass("show");
	} else {
		$('.nav_box').removeClass("show");
	}
});

function nav_btn() {
	$(".nav_box").toggleClass("open");
}
/* 導航區 結束 */

/* active效果導航區 -- 開始 */
//觀察員A
var observer_A = new IntersectionObserver(function (entries, observer) {
	//處理工作
	// var current_txt = null;
	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			//目標元素進入viewport時
			//$(entry.target).addClass("come");
			// current_txt = $(entry.target).find("h5").text();
			// console.log(current_txt);
			//
			$(".nav_box a").removeClass("active");
			var current_txt = $(entry.target).find("h5").text();
			$(".nav_box a").each(function () {
				if (current_txt == $(this).text()) {
					$(this).addClass("active");
				}
			});
		} else {
			//目標元素離開viewport時
			//$(entry.target).removeClass("come");
		}
	})
	//
}, {
	//相關設定
	threshold: 0, //1值:viewport內、0.5值:viewport中間、0值:viewport外。
	rootMargin: "8% 0px -95% 0px",
});

var timeline_trs = document.querySelectorAll('.box');
timeline_trs.forEach(
	function (t) {
		observer_A.observe(t);
	}
);

/* active效果導航區 -- 結束 */

/* 跳至頁端 開始 */
$(window).scroll(function () {
	if ($(this).scrollTop() > 0) {
		$('.jump_top').addClass("show");
	} else {
		$('.jump_top').removeClass("show");
	}
});

function jump_top() {
	$('html, body').animate({
		scrollTop: 0
	}, 300);
}
/* 跳至頁端 結束 */

