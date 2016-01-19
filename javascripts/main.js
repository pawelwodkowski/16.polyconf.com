/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

/**
 *   Unslider
 *   version 2.0
 *   by @idiot and friends
 */
 
(function($) {
	//  Don't throw any errors when jQuery
	if(!$) {
		return console.warn('Unslider needs jQuery');
	}

	$.Unslider = function(context, options) {
		var self = this;

		//  Create an Unslider reference we can use everywhere
		self._ = 'unslider';

		//  Store our default options in here
		//  Everything will be overwritten by the jQuery plugin though
		self.defaults = {
			//  Should the slider move on its own or only when
			//  you interact with the nav/arrows?
			//  Only accepts boolean true/false.
			autoplay: false,

			//  3 second delay between slides moving, pass
			//  as a number in milliseconds.
			delay: 3000,

			//  Animation speed in millseconds
			speed: 750,

			//  An easing string to use. If you're using Velocity, use a
			//  Velocity string otherwise you can use jQuery/jQ UI options.
			easing: 'swing', // [.42, 0, .58, 1],
			
			//  Does it support keyboard arrows?
			//  Can pass either true or false -
			//  or an object with the keycodes, like so:
			//  {
			//	 prev: 37,
			//	 next: 39
			// }
			//  You can call any internal method name
			//  before the keycode and it'll be called.
			keys: {
				prev: 37,
				next: 39
			},
			
			//  Do you want to generate clickable navigation
			//  to skip to each slide? Accepts boolean true/false or
			//  a callback function per item to generate.
			nav: true,

			//  Should there be left/right arrows to go back/forth?
			//   -> This isn't keyboard support.
			//  Either set true/false, or an object with the HTML
			//  elements for each arrow like below:
			arrows: {
				prev: '<a class="' + self._ + '-arrow prev">Prev</a>',
				next: '<a class="' + self._ + '-arrow next">Next</a>'
			},

			//  How should Unslider animate?
			//  It can do one of the following types:
			//  "fade": each slide fades in to each other
			//  "horizontal": each slide moves from left to right
			//  "vertical": each slide moves from top to bottom
			animation: 'horizontal',

			//  If you don't want to use a list to display your slides,
			//  you can change it here. Not recommended and you'll need
			//  to adjust the CSS accordingly.
			selectors: {
				container: 'ul:first',
				slides: 'li'
			},

			//  Do you want to animate the heights of each slide as
			//  it moves
			animateHeight: false,

			//  Active class for the nav
			activeClass: self._ + '-active',

			//  Have swipe support?
			//  You can set this here with a boolean and always use
			//  initSwipe/destroySwipe later on.
			swipe: true
		};

		//  Set defaults
		self.$context = context;
		self.options = {};

		//  Leave our elements blank for now
		//  Since they get changed by the options, we'll need to
		//  set them in the init method.
		self.$parent = null;
		self.$container = null;
		self.$slides = null;
		self.$nav = null;
		self.$arrows = [];
		
		//  Set our indexes and totals
		self.total = 0;
		self.current = 0;

		//  Generate a specific random ID so we don't dupe events
		self.prefix = self._ + '-';
		self.eventSuffix = '.' + self.prefix + ~~(Math.random() * 2e3);

		//  In case we're going to use the autoplay
		self.interval = null;

		//  Get everything set up innit
		self.init = function(options) {
			//  Set up our options inside here so we can re-init at
			//  any time
			self.options = $.extend({}, self.defaults, options);

			//  Our elements
			self.$container = self.$context.find(self.options.selectors.container).addClass(self.prefix + 'wrap');
			self.$slides = self.$container.children(self.options.selectors.slides);

			//  We'll manually init the container
			self.setup();

			//  We want to keep this script as small as possible
			//  so we'll optimise some checks
			$.each(['nav', 'arrows', 'keys', 'infinite'], function(index, module) {
				self.options[module] && self['init' + $._ucfirst(module)]();
			});

			//  Add swipe support
			if(jQuery.event.special.swipe && self.options.swipe) {
				self.initSwipe();
			}

			//  If autoplay is set to true, call self.start()
			//  to start calling our timeouts
			self.options.autoplay && self.start();

			//  We should be able to recalculate slides at will
			self.calculateSlides();

			//  Listen to a ready event
			self.$context.trigger(self._ + '.ready');

			//  Everyday I'm chainin'
			return self.animate(self.options.index || self.current, 'init');
		};

		self.setup = function() {
			//  Add a CSS hook to the main element
			self.$context.addClass(self.prefix + self.options.animation).wrap('<div class="' + self._ + '" />');
			self.$parent = self.$context.parent('.' + self._);

			//  We need to manually check if the container is absolutely
			//  or relatively positioned
			var position = self.$context.css('position');

			//  If we don't already have a position set, we'll
			//  automatically set it ourselves
			if(position === 'static') {
				self.$context.css('position', 'relative');
			}

			self.$context.css('overflow', 'hidden');
		};

		//  Set up the slide widths to animate with
		//  so the box doesn't float over
		self.calculateSlides = function() {
			self.total = self.$slides.length;

			//  Set the total width
			if(self.options.animation !== 'fade') {
				var prop = 'width';

				if(self.options.animation === 'vertical') {
					prop = 'height';
				}

				self.$container.css(prop, (self.total * 100) + '%').addClass(self.prefix + 'carousel');
				self.$slides.css(prop, (100 / self.total) + '%');
			}
		};


		//  Start our autoplay
		self.start = function() {
			self.interval = setTimeout(function() {
				//  Move on to the next slide
				self.next();

				//  If we've got autoplay set up
				//  we don't need to keep starting
				//  the slider from within our timeout
				//  as .animate() calls it for us
			}, self.options.delay);

			return self;
		};

		//  And pause our timeouts
		//  and force stop the slider if needed
		self.stop = function() {
			clearTimeout(self.interval);

			return self;
		};


		//  Set up our navigation
		self.initNav = function() {
			var $nav = $('<nav class="' + self.prefix + 'nav"><ol /></nav>');

			//  Build our click navigation item-by-item
			self.$slides.each(function(key) {
				//  If we've already set a label, let's use that
				//  instead of generating one
				var label = this.getAttribute('data-nav') || key + 1;

				//  Listen to any callback functions
				if($.isFunction(self.options.nav)) {
					label = self.options.nav.call(self.$slides.eq(key), key, label);
				}

				//  And add it to our navigation item
				$nav.children('ol').append('<li data-slide="' + key + '">' + label + '</li>');
			});
			
			//  Keep a copy of the nav everywhere so we can use it
			self.$nav = $nav.insertAfter(self.$context);

			//  Now our nav is built, let's add it to the slider and bind
			//  for any click events on the generated links
			self.$nav.find('li').on('click' + self.eventSuffix, function() {
				//  Cache our link and set it to be active
				var $me = $(this).addClass(self.options.activeClass);

				//  Set the right active class, remove any other ones
				$me.siblings().removeClass(self.options.activeClass);

				//  Move the slide
				self.animate($me.attr('data-slide'));
			});
		};


		//  Set up our left-right arrow navigation
		//  (Not keyboard arrows, prev/next buttons)
		self.initArrows = function() {
			if(self.options.arrows === true) {
				self.options.arrows = self.defaults.arrows;
			}

			//  Loop our options object and bind our events
			$.each(self.options.arrows, function(key, val) {
				//  Add our arrow HTML and bind it
				self.$arrows.push(
					$(val).insertAfter(self.$context).on('click' + self.eventSuffix, self[key])
				);
			});
		};


		//  Set up our keyboad navigation
		//  Allow binding to multiple keycodes
		self.initKeys = function() {
			if(self.options.keys === true) {
				self.options.keys = self.defaults.keys;
			}

			$(document).on('keyup' + self.eventSuffix, function(e) {
				$.each(self.options.keys, function(key, val) {
					if(e.which === val) {
						$.isFunction(self[key]) && self[key].call(self);
					}
				});
			});
		};

		//  Requires jQuery.event.swipe
		//  -> stephband.info/jquery.event.swipe
		self.initSwipe = function() {
			var width = self.$slides.width();

			//  We don't want to have a tactile swipe in the slider
			//  in the fade animation, as it can cause some problems
			//  with layout, so we'll just disable it.
			if(self.options.animation !== 'fade') {

				self.$container.on({

					movestart: function(e) {
						//  If the movestart heads off in a upwards or downwards
						//  direction, prevent it so that the browser scrolls normally.
						if((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
							return !!e.preventDefault();
						}

						self.$container.css('position', 'relative');
					},

					move: function(e) {
						self.$container.css('left', -(100 * self.current) + (100 * e.distX / width) + '%');
					},

					moveend: function(e) {
						
						if((Math.abs(e.distX) / width) < $.event.special.swipe.settings.threshold) {

							self[ e.distX < 0 ? 'next' : 'prev' ]();
						}
					}
				});
			}
		};

		//  Infinite scrolling is a massive pain in the arse
		//  so we need to create a whole bloody function to set
		//  it up. Argh.
		self.initInfinite = function() {
			var pos = ['first', 'last'];

			$.each(pos, function(index, item) {
				self.$slides.push.apply(
					self.$slides,
					
					//  Exclude all cloned slides and call .first() or .last()
					//  depending on what `item` is.
					self.$slides.filter(':not(".' + self._ + '-clone")')[item]()

					//  Make a copy of it and identify it as a clone
					.clone().addClass(self._ + '-clone')

					//  Either insert before or after depending on whether we're
					//  the first or last clone
					['insert' + (index === 0 ? 'After' : 'Before')](
						//  Return the other element in the position array
						//  if item = first, return "last"
						self.$slides[pos[~~!index]]()
					)
				);
			});
		};

		//  Remove any trace of arrows
		//  Loop our array of arrows and use jQuery to remove
		//  It'll unbind any event handlers for us
		self.destroyArrows = function() {
			$.each(self.$arrows, function(i, $arrow) {
				$arrow.remove();
			});
		};

		//  Remove any swipe events and reset the position
		self.destroySwipe = function() {
			//  We bind to 4 events, so we'll unbind those
			self.$container.off('movestart move moveend');
		};

		//  Unset the keyboard navigation
		//  Remove the handler 
		self.destroyKeys = function() {
			//  Remove the event handler
			$(document).off('keyup' + self.eventSuffix);
		};

		self.setIndex = function(to) {
			if(to < 0) {
				to = self.total - 1;
			}

			self.current = Math.min(Math.max(0, to), self.total - 1);

			if(self.options.nav) {
				self.$nav.find('[data-slide="' + self.current + '"]')._active(self.options.activeClass);
			}

			self.$slides.eq(self.current)._active(self.options.activeClass);

			return self;
		};
		
		//  Despite the name, this doesn't do any animation - since there's
		//  now three different types of animation, we let this method delegate
		//  to the right type, keeping the name for backwards compat.
		self.animate = function(to, dir) {
			//  Animation shortcuts
			//  Instead of passing a number index, we can now
			//  use .data('unslider').animate('last');
			//  or .unslider('animate:last')
			//  to go to the very last slide
			if(to === 'first') to = 0;
			if(to === 'last') to = self.total;

			//  Don't animate if it's not a valid index
			if(isNaN(to)) {
				return self;
			}

			if(self.options.autoplay) {
				self.stop().start();
			}

			self.setIndex(to);

			//  Add a callback method to do stuff with
			self.$context.trigger(self._ + '.change', [to, self.$slides.eq(to)]);

			//  Delegate the right method - everything's named consistently
			//  so we can assume it'll be called "animate" + 
			var fn = 'animate' + $._ucfirst(self.options.animation);

			//  Make sure it's a valid animation method, otherwise we'll get
			//  a load of bug reports that'll be really hard to report
			if($.isFunction(self[fn])) {
				self[fn](self.current, dir);
			}

			return self;
		};


		//  Shortcuts for animating if we don't know what the current
		//  index is (i.e back/forward)
		//  For moving forward we need to make sure we don't overshoot.
		self.next = function() {
			var target = self.current + 1;

			//  If we're at the end, we need to move back to the start
			if(target >= self.total) {
				target = 0;
			}

			return self.animate(target, 'next');
		};

		//  Previous is a bit simpler, we can just decrease the index
		//  by one and check if it's over 0.
		self.prev = function() {
			return self.animate(self.current - 1, 'prev');
		};
		

		//  Our default animation method, the old-school left-to-right
		//  horizontal animation
		self.animateHorizontal = function(to) {
			var prop = 'left';

			//  Add RTL support, slide the slider
			//  the other way if the site is right-to-left
			if(self.$context.attr('dir') === 'rtl') {
				prop = 'right';
			}

			if(self.options.infinite) {
				//  So then we need to hide the first slide
				self.$container.css('margin-' + prop, '-100%');
			}

			return self.slide(prop, to);
		};

		//  The same animation methods, but vertical support
		//  RTL doesn't affect the vertical direction so we
		//  can just call as is
		self.animateVertical = function(to) {
			self.options.animateHeight = true;

			//  Normal infinite CSS fix doesn't work for
			//  vertical animation so we need to manually set it
			//  with pixels. Ah well.
			if(self.options.infinite) {
				self.$container.css('margin-top', -self.$slides.outerHeight());
			}

			return self.slide('top', to);
		};

		//  Actually move the slide now
		//  We have to pass a property to animate as there's
		//  a few different directions it can now move, but it's
		//  otherwise unchanged from before.
		self.slide = function(prop, to) {
			//  If we want to change the height of the slider
			//  to match the current slide, you can set
			//  {animateHeight: true}
			if(self.options.animateHeight) {
				self._move(self.$context, {height: self.$slides.eq(to).outerHeight()}, false);
			}

			//  For infinite sliding we add a dummy slide at the end and start
			//  of each slider to give the appearance of being infinite
			if(self.options.infinite) {
				var dummy;

				//  Going backwards to last slide
				if(to === self.total - 1) {
					//  We're setting a dummy position and an actual one
					//  the dummy is what the index looks like
					//  (and what we'll silently update to afterwards),
					//  and the actual is what makes it not go backwards
					dummy = self.total - 3;
					to = -1;
				}

				//  Going forwards to first slide
				if(to === self.total - 2) {
					dummy = 0;
					to = self.total - 2;
				}

				//  If it's a number we can safely set it
				if(typeof dummy === 'number') {
					self.setIndex(dummy);

					//  Listen for when the slide's finished transitioning so
					//  we can silently move it into the right place and clear
					//  this whole mess up.
					self.$context.on(self._ + '.moved', function() {
						if(self.current === dummy) {
							self.$container.css(prop, -(100 * dummy) + '%').off(self._ + '.moved');
						}
					});
				}
			}

			//  We need to create an object to store our property in
			//  since we don't know what it'll be.
			var obj = {};

			//  Manually create it here
			obj[prop] = -(100 * to) + '%';

			//  And animate using our newly-created object
			return self._move(self.$container, obj);
		};


		//  Fade between slides rather than, uh, sliding it
		self.animateFade = function(to) {
			var $active = self.$slides.eq(to).addClass(self.options.activeClass);

			//  Toggle our classes
			self._move($active.siblings().removeClass(self.options.activeClass), {opacity: 0});
			self._move($active, {opacity: 1}, false);
		};

		self._move = function($el, obj, callback, speed) {
			if(callback !== false) {
				callback = function() {
					self.$context.trigger(self._ + '.moved');
				};
			}

			return $el._move(obj, speed || self.options.speed, self.options.easing, callback);
		};

		//  Allow daisy-chaining of methods
		return self.init(options);
	};

	//  Internal (but global) jQuery methods
	//  They're both just helpful types of shorthand for
	//  anything that might take too long to write out or
	//  something that might be used more than once.
	$.fn._active = function(className) {
		return this.addClass(className).siblings().removeClass(className);
	};

	//  The equivalent to PHP's ucfirst(). Take the first
	//  character of a string and make it uppercase.
	//  Simples.
	$._ucfirst = function(str) {
		//  Take our variable, run a regex on the first letter
		return (str + '').toLowerCase().replace(/^./, function(match) {
			//  And uppercase it. Simples.
			return match.toUpperCase();
		});
	};

	$.fn._move = function() {
		this.stop(true, true);
		return $.fn[$.fn.velocity ? 'velocity' : 'animate'].apply(this, arguments);
	};

	//  And set up our jQuery plugin
	$.fn.unslider = function(opts) {
		return this.each(function() {
			var $this = $(this);

			//  Allow usage of .unslider('function_name')
			//  as well as using .data('unslider') to access the
			//  main Unslider object
			if(typeof opts === 'string' && $this.data('unslider')) {
				opts = opts.split(':');

				var call = $this.data('unslider')[opts[0]];

				//  Do we have arguments to pass to the string-function?
				if($.isFunction(call)) {
					return call.apply($this, opts[1] ? opts[1].split(',') : null);
				}
			}

			return $this.data('unslider', new $.Unslider($this, opts));
		});
	};
	
})(window.jQuery);

$(function(){

  $(".speaker").click(function(event) {
    event.preventDefault();

    $("#full-modal").fadeIn(500,function(){
      $("body").css("overflow","hidden");
      $(document).on("keyup.modalClose",function(e) {
           if (e.keyCode == 27 || e.keyCode == 67) {
            $("#full-modal").fadeOut(500,function(){
              $("body").css("overflow","scroll");
            })
          }
      });
    })

  })

  $("#full-modal").click(function(event) {
    event.preventDefault();

    $("#full-modal").fadeOut(500,function(){
      $("body").css("overflow","scroll");
    })

  })


  $(".agenda .talk .button").click(function(event) {
    event.preventDefault();
    $("body").removeClass("more-menu-is-open");    
    $("body").toggleClass("modal-is-open");    
  })

  $("#more-text-link").click(function(event) {
    event.preventDefault();
    $("body").removeClass("modal-is-open");    
    $("body").toggleClass("more-menu-is-open");    
  })

  $("#half-modal").click(function(event) {
    event.preventDefault();
    $("body").removeClass("modal-is-open");    
  })

  $("#days-header").stick_in_parent();

  $("#three-days .day-header").each(function(i,e){
    
    $(this).find(".button").click(function(event){
      
      event.preventDefault();    

      $("#three-days .open").removeClass("open").addClass("closed");

      $("#three-days .day-header").eq(i).addClass("open").removeClass("closed");
      $("#three-days .day").eq(i).addClass("open").removeClass("closed");
      
    })
    
  })

  $('#slider').unslider({
    animation: 'vertical', 
    autoplay: true, 
    infinite: true,
    delay: 3000,
    nav: false,
    arrows: false
  }); 


})

