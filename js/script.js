// 여기부터 모달창----


$('.portfolio-item').click(function () {
    let modalID = $(this).data('modal')
    scrollPositon = $(window).scrollTop()

    $('html').css({ 'scroll-behavior': 'auto' })
    $('body').css({
        position: 'fiexd',
        width: '100%',
        top: -scrollPositon + 'px',
        overflow: 'hidden',
    })


    $('#' + modalID).fadeIn().css({ display: 'flex' })
})
$('.close, .modal').click(function (event) {

    if ($(this).hasClass('close') || $(event.target).hasClass('modal')) {
        $('.modal').fadeOut();
        $('body').css({
            position: '',
            width: '',
            top: '',
            overflow: '',
        })
        $(window).scrollTop(scrollPositon)
        $('html').css({ 'scroll-behavior': 'smooth' })

    }


})
// 여기까지 모달창--------

// 여기부터 스크롤
$(document).ready(function () {
  function debounce(func, wait) {
    let timeout;
    return function () {
      const context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  function scrollTrigger(targetClass) {
    $(targetClass).each(function () {
      const $el = $(this);
      const elementTop = $el.offset().top;
      const elementBottom = elementTop + $el.outerHeight();
      const scrollTop = $(window).scrollTop();
      const windowHeight = window.innerHeight;  // 변경

      if (elementTop < scrollTop + windowHeight && elementBottom > scrollTop) {
        $el.addClass('on');
      } else {
        $el.removeClass('on');
      }
    });
  }

  const optimizedScroll = debounce(() => {
    scrollTrigger('.work');
    scrollTrigger('.illust-item');
  }, 100);

  // 초기 실행 약간 딜레이 줘서 UI 안정화 후 실행
  setTimeout(() => {
    optimizedScroll();
  }, 100);

  $(window).on('scroll resize', optimizedScroll);
})

//   여기까지 스크롤

// 여기서 햄버튼

$(document).ready(function () {
  $('.ham-btn').click(function () {
    $(this).toggleClass('on');
    $('.mobile-menu').slideToggle(200);
    $('.menu').toggleClass('active');
  });

  $('.menu .toggle-sub').click(function (e) {
    e.preventDefault();
    $(this).next('.sub').slideToggle(200);
  });
});
let hamBtn = document.querySelector('.ham-btn');
let mobileMenu = document.querySelector('.mobile-menu');
let pcMenu = document.querySelector('.menu');

hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('on');

  
  if (mobileMenu) {
    mobileMenu.classList.toggle('open'); 
  }

  
});
$(document).ready(function () {
  $('.ham-btn').click(function () {
    $(this).toggleClass('on');

    // 화면 너비 체크 (예: 768px 이하에서만 모바일 메뉴 토글)
    // if ($(window).width() <= 767) {
    //   $('.mobile-menu').slideToggle(200);
    // }

    // PC 메뉴에 active 클래스는 모바일 메뉴 토글 시 제거
    // if ($(window).width() > 767) {
    //   $('.menu').removeClass('active');
    // }
  });

  // 서브 메뉴 토글 (필요 시)
  // $('.menu .toggle-sub').click(function (e) {
  //   e.preventDefault();
  //   $(this).next('.sub').slideToggle(200);
  // });
});



// 여기까지 햄버튼