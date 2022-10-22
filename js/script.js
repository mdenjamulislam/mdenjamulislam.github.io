$(document).ready (function(){
    $("nav ul li:nth-child(1)").click(function(){
        $(this).addClass('active');
        $("ul li:nth-child(2),ul li:nth-child(3),ul li:nth-child(4),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("nav ul li:nth-child(1)").removeClass('active');
        });
    });
    $("nav ul li:nth-child(2)").click(function(){
        $("#resume").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(3),ul li:nth-child(4),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#resume").removeClass("show-section");
            $("nav ul li:nth-child(2)").removeClass('active');
        });
    });

    $("nav ul li:nth-child(3)").click(function(){
        $("#skill").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(2),ul li:nth-child(4),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#skill").removeClass("show-section");
            $("nav ul li:nth-child(3)").removeClass('active');
        });
    });

    $("nav ul li:nth-child(4)").click(function(){
        $("#portfolio").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(2),ul li:nth-child(3),ul li:nth-child(5),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#portfolio").removeClass("show-section");
            $("nav ul li:nth-child(4)").removeClass('active');
        });
    });

    $("nav ul li:nth-child(5)").click(function(){
        $("#contact").addClass('show-section');
        $(this).addClass('active');
        $("ul li:nth-child(1),ul li:nth-child(2),ul li:nth-child(3),ul li:nth-child(4),ul li:nth-child(6),ul li:nth-child(7),ul li:nth-child(8)").click(function(){
            $("#contact").removeClass("show-section");
            $("nav ul li:nth-child(5)").removeClass('active');
        });
    });
});

/*
|--------------------------------------------------------------------------
	AboutMe - Personal Portfolio Resume Template Main JS
|--------------------------------------------------------------------------
*/
document.addEventListener("touchstart", function() {},false);
(function ($) {

	/*
	|--------------------------------------------------------------------------
		Typewrite
	|--------------------------------------------------------------------------
	*/	
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
})(jQuery);
	
/*
|--------------------------------------------------------------------------
	End
|--------------------------------------------------------------------------
*/