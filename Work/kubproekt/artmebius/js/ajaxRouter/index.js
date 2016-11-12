var searchTips = function(val){
  var functo = {
    getTipsto: function(e, self) {
      this.clearto();
      this.timeoutID = setTimeout(function(){
        getTips(e, self);
      }, 300);
    },
    clearto: function() {
      clearTimeout(this.timeoutID);
      delete this.timeoutID;
    }
  };

  $('#search').keyup(function(e){
    functo.getTipsto(e, this);
  });

  $('#search').focus(function(e){
    if ($('#sfTips').length){
      $('#sfTips').fadeIn('fast');
    }else{
      getTips(e, this);
    }
  });

  $('#search').blur(function(e){
    functo.clearto();
  });

  $('body').on('click','#search',false);
  $('body').on('click',function(){
    $('#sfTips').hide();
  });

  function getTips(e, self){
    $.ajax({
      method : 'POST',
      url : '/ajax.html',
      data : {
        method : 'searchTips',
        search : $(e.target).val()
      },
      success : function(data){
        if(data != 'none'){
          if (!$('#sfTips').length){
            $('.search_form form').append(data);
            $('#sfTips').fadeIn('fast');
          }else{
            $('#sfTips').remove();
            $('.search_form form').append(data).find('#sfTips').show();
          }
          if ($('#sfTips .sf_tips_item').length >= 10) $('#sfTips .moreSearchResults').show();
        }else{
          $('#sfTips').fadeOut('fast', function(){
            $(this).remove();
          });
        }
      },
      error : function(err){
        console.log(err, ' ajaxRouter: request error');
      }
    });
    val = $(e.target).val();
  }
};
searchTips(null);