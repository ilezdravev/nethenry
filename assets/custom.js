$(document).on('click','.mobile-menu-open',function(){
    $('.mobile-menu').toggleClass('open');
    $('header-drawer').toggleClass('active');
})
$('.mob').on('click',function(){
    $(this).parents('.nav').addClass('nav-slide-left');
})
$('.mob.back').on('click',function(e){
    $(this).parents('.nav').removeClass('nav-slide-left');
})
// collection page load more
$('.js-load-more').on('click', function(){
  var $this =$(this),totalPages = parseInt($('[data-total-pages]').val()),currentPage = parseInt($('[data-current-page]').val());
  $this.attr('disabled', true);
  $this.find('[loader]').removeClass('hide');
  currentPage = currentPage+1;
  var nextUrl = $('[data-next-url]').val().replace(/page=[0-9]+/,'page='+currentPage);
  $('[data-current-page]').val(currentPage);
  $.ajax({
    url: nextUrl,
    type: 'GET',
    dataType: 'html',
    success: function(responseHTML){
      $('.products').append($(responseHTML).find('.products').html());
    },
    complete: function() {
      if(currentPage <= totalPages) {
         $this.attr('disabled', false); $this.find('[load-more-text]').removeClass('hide'); $this.find('[loader]').addClass('hide');
      } 
    }
  })
});

// disigners page load more

$('#disigners-load-more-button').on('click', function(){
  if(this.closest('#component-gdzuls')){
    var container = this.closest('#component-gdzuls');
    var iCount      = container.dataset.itemCount || 0; 
    var currentPage = container.dataset.currentPage || 0;
    var perPage     = container.dataset.perPage || 4;
    if(perPage * currentPage <= iCount){
      for(let i = 0; i <= perPage * (currentPage + 1) ; i ++){
        $(container).find('.disigner-card').eq(i).removeClass('hide')
      }
      container.dataset.currentPage ++;
    }
  }
});