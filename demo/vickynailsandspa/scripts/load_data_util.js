function loadData(pageName) {

	$("#header").load('components/header.html');
	$("#footer").load('components/footer.html', function () {
		$.getJSON('config_data.json', function (cgf) {


			// use for footer
			$("[name=storeName]").each(function () {
				jQuery(this).html(cgf.info.salon.store);
			});
			$("[name=storePhone]").each(function () {
				jQuery(this).html(cgf.info.salon.phone);
			});
			$("[name=storeFullAddress]").each(function () {
				jQuery(this).html(cgf.info.salon.address);
			});
			$("[name=storeFullAddress]").each(function () {
				jQuery(this).html(cgf.info.salon.address);
			});
			$("[name=storeDistrict]").each(function () {
				jQuery(this).html(cgf.info.salon.district);
			});
			$("[name=storeState]").each(function () {
				jQuery(this).html(cgf.info.salon.state);
			});
			$("[name=storeEmail]").each(function () {
				jQuery(this).html(cgf.info.salon.email);
			});
			$("[name=storeTime_1]").each(function () {
				jQuery(this).html(cgf.info.salon.time_1);
			});
			$("[name=storeTime_2]").each(function () {
				jQuery(this).html(cgf.info.salon.time_2);
			});
			$("[name=storeTime_3]").each(function () {
				jQuery(this).html(cgf.info.salon.time_3);
			});
			$("[name=storeTime_4]").each(function () {
				jQuery(this).html(cgf.info.salon.time_4);
			});

			$("[data-booking]").attr('href', cgf.info.social.booking);
			$("[data-facebook]").attr('href', cgf.info.social.facebook);
			$("[data-instagram]").attr('href', cgf.info.social.instagram);
			$("[data-google]").attr('href', cgf.info.social.google);
			$("[data-maps]").attr('src', cgf.info.social.maps);
			$("[data-phone]").attr('href', "tel:" + cgf.info.salon.phone);
			$("[data-email]").attr('href', "mailto:" + cgf.info.salon.email);



			if (pageName == "INDEX") {

				loadDataForIndex(cgf);
			} else if (pageName == "SERVICES") {
				loadDataForServices(cgf);
			} else if (pageName == "GALLERY") {
				loadDataForGallery(cgf);
			}else if (pageName == "SPECIALTIES") {
				loadDataForSpecialties(cgf);
			}



		})
			.fail(function () { $('body').empty().append("Error 403: Can't Load Data Website"); })
	});

}






function loadDataForIndex(cgf) {

	// user for Top choice
	var strTopChoiceElement = '<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">' +
		'                    <div class="team-item">' +
		'                        <div class="team-img">' +
		'                            <img src="IMAGE_SRC" alt="#">' +
		'                            <div class="team-social">' +
		'                                <a href="https://www.facebook.com/GlossNPoshNailLounge" data-facebook target="_blank"><i class="fab fa-facebook-f"></i></a>' +
		'                                <a href="https://www.instagram.com/glossnposhnaillounge" data-instagram target="_blank"><i class="fab fa-instagram"></i></a>' +
		'                                <a href="https://goo.gl/maps/eYg8RuDrfvrEpQ9J7" data-google target="_blank" class="no-border"><i' +
		'                                        class="fab fa-google"></i></a>' +
		'                            </div>' +
		'                        </div>' +
		'                    </div>' +
		'                </div>';

	var strTopChoice = "";
	$.each(cgf.gallery, function (count, gal) {
		if (gal.home == true) {
			var strSrc = "./img/" + gal.url;
			strTopChoice = strTopChoice + strTopChoiceElement.replace('IMAGE_SRC', strSrc);
		}
	});
	$("#topChoice").html(strTopChoice);


	// -------------------------------------------------------------------------------------------------
	// user for Top SERVICES
	var strTopServiceElement = '<div class="col-md-6 col-lg-4">' +
		'                    <div class="wow fadeInUp p-3">' +
		'                        <img class="radius-3 w-100" src="IMAGE_SRC">' +
		'                        <div class="text-center mt-3">' +
		'                            <h4>CAT_NAME</h4>' +
		'                        </div>' +
		'                    </div>' +
		'                </div>';



	var strTopService = "";
	$.each(cgf.categories, function (count, cat) {
		if (cat.home == true) {
			var strSrc = "./img/" + cat.src;
			var strName = cat.name;
			strTopService = strTopService + strTopServiceElement.replace('IMAGE_SRC', strSrc).replace('CAT_NAME', strName);
		}
	});
	$("#topServices").html(strTopService);

}

function loadDataForServices(cgf) {
	// use for SERVICES
	var srtCols = "";
	
	$.each(cgf.categories, function (count, cat) {
		var strColElement = '<div class="mb-5">' +
			'                                            <div class="row">' +
			'                                                <div class="col-lg-3 col-md-4">' +
			'                                                    <img class="w-100 rounded" src="CAT_SRC">' +
			'                                                </div>' +
			'                                                <div class="col-lg-9 col-md-8 menu_content">' +
			'                                                    <h4 class="font-weight-bold">CAT_NAME</h4>' +
			'                                                    <div class="row">' +
			'                                                        <div class="service_item col-lg-6 col-sm-6 col-12 title-small border-right">SRV_LEFT</div>' +
			'                                                        <div class="service_item col-lg-6 col-sm-6 col-12 title-small">SRV_RIGHT</div>' +
			'                                                    </div>' +
			'                                                </div>' +
			'                                            </div>' +
			'                                        </div>';





		srtCols = srtCols + strColElement.replace('CAT_SRC', "./img/" + cat.src).replace('CAT_NAME', cat.name);

		var strServices = "";
		var strServiceRight = "";
		var countCat = 0;
		$.each(cgf.services, function (count1, srv) {
			var strServiceElement = '<div class="title-small row">' +
				'                                <div class="col-9">SERVICE_NAME</div>' +
				'                                <div class="col-3 color-price pr-0">SERVICE_PRICE</div>' +
				'                            </div>';



			if (srv.category == cat.name) {
				countCat ++;
				if (countCat % 2 == 1) {
					strServices = strServices + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " +" : ""));
				} else {
					strServiceRight = strServiceRight + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " +" : ""));
				}
			}
		});
		srtCols = srtCols.replace('SRV_LEFT', strServices);
		srtCols = srtCols.replace('SRV_RIGHT', strServiceRight);
	});
	$("#servicesOfCate").html(srtCols);

}

function loadDataForGallery(cgf) {

	// user for Top choice
	var strGalleryElement = '<div class="col-md-4 p-3 gallery">' +
		'                            <a title="Rubi Nails And Spa" href="IMAGE_HREF">' +
		'                                <img src="IMAGE_SRC" alt="#" class="w-100" />' +
		'                            </a>' +
		'                        </div>';
	var strGallery = "";
	$.each(cgf.gallery, function (count, gal) {
		var strSrc = "./img/" + gal.url;
		strGallery = strGallery + strGalleryElement.replace('IMAGE_SRC', strSrc).replace('IMAGE_HREF', strSrc);

	});
	$("#loadGallery").html(strGallery);
	$('.gallery a').simpleLightbox(); /* sau khi chay xong thi moi gan hieu ung lightbox vao cho tung the a */
}

function loadDataForSpecialties(cgf) {

	var strSpecialtiesElement = '<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">'+
	'                        <div class="team-item">'+
	'                            <div class="team-img">'+
	'                                <img src="IMAGE_SRC" alt="">'+
	'                                <div class="team-social">'+
	'                    '+
	'                                    <a href="https://www.facebook.com/GlossNPoshNailLounge" data-facebook target="_blank"><i class="fab fa-facebook-f"></i></a>'+
	'                                    <a href="https://www.instagram.com/glossnposhnaillounge" data-instagram target="_blank"><i class="fab fa-instagram"></i></a>'+
	'                                    <a href="https://goo.gl/maps/eYg8RuDrfvrEpQ9J7" data-google target="_blank" class="no-border"><i class="fab fa-google"></i></a>'+
	'                                </div>'+
	'                            </div>'+
	'                        </div>'+
	'                    </div>';
		
	

	var strSpecialties = "";
	$.each(cgf.specialties, function (count, spe) {
		var strSrc = "./img/" + spe.url;
		strSpecialties = strSpecialties + strSpecialtiesElement.replace('IMAGE_SRC', strSrc);

	});
	$("#loadSpecialties").html(strSpecialties);


}

