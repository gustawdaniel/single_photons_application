var expanded = [false,false];
var toHide = $('.article>span:nth-child(2)');

$('.toggle-article').on('click', function (e) {
    var id = $(e.target).data('id');
    expanded[id-1] = !expanded[id-1];
    $(e.target).html(expanded[id-1]?"Collapse":"Expand");
    toHide.eq(id-1).toggleClass('hidden');
});


$(document).ready(function() {

    $('.slick_demo_2').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    $('.slick_demo_3').slick({
        infinite: true,
        speed: 100,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 10000
    });



    //DATA MAP
    var arc_map = new Datamap({
        element: document.getElementById("arc_map"),
        responsive: true,
        fills: {
            defaultFill: "#F2F2F0",
            active: "#DBDAD6",
            pl: "#269479"
        },
        geographyConfig: {
            highlightFillColor: '#1C977A',
            highlightBorderWidth: 0,
            highlightOnHover: false,
            popupOnHover: false
        },
        data: {
            POL: {fillKey: "pl"},
            CAN: {fillKey: "active"},
            IND: {fillKey: "active"},
            ITA: {fillKey: "active"},
            CZE: {fillKey: "active"},
	         MYS: {fillKey: "active"},
	    		BRA: {fillKey: "active"}
        }
    });

    arc_map.arc(
        [
            { origin: 'POL', destination: 'CAN'},
            { origin: 'POL', destination: 'IND'},
            { origin: 'POL', destination: 'ITA'},
            { origin: 'POL', destination: 'CZE'},
 	    { origin: 'POL', destination: 'MYS'},
 	      { origin: 'POL', destination: 'BRA'}
        ],
        { strokeColor: '#2BA587', strokeWidth: 1}
    );

});
