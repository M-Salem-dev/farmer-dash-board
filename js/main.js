// window.alert("Hello")    //Test
$(".item-icon-comment").click(function () {
	$(".box-slideToggle-comment").fadeToggle(500);
	$(".box-slideToggle-regular").fadeOut(500);
});
$(".item-icon-regular").click(function () {
	$(".box-slideToggle-regular").fadeToggle(500);
	$(".box-slideToggle-comment").fadeOut(500);
});

$(".section-header-aside").click(function () {
	$(".box-slideToggle-comment").fadeOut(500);
	$(".box-slideToggle-regular").fadeOut(500);
});
// --------------------------
let maunn = document.querySelector('.maunn');
maunn.addEventListener('click', function () {
	this.classList.toggle('is-active');
})

let colorBoxWidth = $(".box-sidebar").outerWidth();
$(".box-sideBarToggle").click(function () {
	if ($('.col-auto').css("right") == "0px") {
		$(".col-auto").animate({ right: `-${colorBoxWidth}` }, 2000);
	}
	else {
		$('.col-auto').animate({ right: `0px` }, 2000);
	}
})


// =========================================================================================================================
// my-farm

// -----------------------------------------------------------------
$(".box-water").click(function () {
	$(".box-water-items").slideToggle(1000);
});

$(".box-water").click(function () {
	$(".Arrow-down-water").slideToggle(500);
	$(".Arrow-up-water").slideToggle(500);
});

// -----------------------------------------------------------------
$(".box-the-soil").click(function () {
	$(".box-the-soil-items").slideToggle(1000);
});

$(".box-the-soil").click(function () {
	$(".Arrow-down-the-soil").slideToggle(500);
	$(".Arrow-up-the-soil").slideToggle(500);
});
// -----------------------------------------------------------------

// -----------------------------------------------------------------
$(".box-Stop").click(function () {
	$(".box-the-soil-items-Stop").slideToggle(1000);
});

$(".box-Stop").click(function () {
	$(".Arrow-down-Stop").slideToggle(500);
	$(".Arrow-up-Stop").slideToggle(500);
});
// -----------------------------------------------------------------

// -----------------------------------------------------------------
$(".box-diabetes").click(function () {
	$(".box-the-soil-items-diabetes").slideToggle(1000);
});
$(".box-diabetes").click(function () {
	$(".Arrow-down-diabetes").slideToggle(500);
	$(".Arrow-up-diabetes").slideToggle(500);
});
// -----------------------------------------------------------------

// -----------------------------------------------------------------
$(".box-Ajwa").click(function () {
	$(".box-the-soil-items-Ajwa").slideToggle(1000);
});
$(".box-Ajwa").click(function () {
	$(".Arrow-down-Ajwa").slideToggle(500);
	$(".Arrow-up-Ajwa").slideToggle(500);
});
// -----------------------------------------------------------------
