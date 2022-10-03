$(document).on('submit', '#save-form', function (e) { 
    e.preventDefault();
    var $this = $(this);
        if($this.attr('action') != '')
        {
            $.ajax({
                url:$this.attr('action'),
                method:"POST",
                data: $this.serialize(),
                dataType:'json',
                success:function(response) {
                   if(response.status=='error')
                    {
                        demo.showNotification('bottom','right','danger', response.msg); 
                    }else{
                        //$('#save-form')[0].reset();
                        //$('.selectpicker').selectpicker('refresh');
                        demo.showNotification('bottom','right','success', response.msg); 
                        setTimeout(function(){ location.reload(); }, 1000);
                    }       
                },
                error:function(response){
                    console.log('error');
                },
                complete: function () {
                    //console.log('complete');
                }
            });
        }
});

$(document).on('change', '#city_id', function (e) { 
    e.preventDefault();
    var city_id = $(this).val();
        if(city_id != '')
        {
            $.ajax({
                url:base_url+'/get-centers/'+city_id,
                method:"GET",
                //dataType:'json',
                success:function(response) {
                   $('#center_id').html(response);
                   $('#center_id').selectpicker('refresh');      
                },
                error:function(response){
                    console.log('error');
                },
                complete: function () {
                    //console.log('complete');
                }
            });
        }
});


 $(document).on('click', '.statusupdate', function (e) { 
    e.preventDefault();
    var $this = $(this);
        if($this.attr('href') != '')
        { 
            var id = $($this).attr('data-id');
            $.ajax({
                url:$this.attr('href'),
                method:"GET",
                success:function(response) {
                    console.log(response);
                    if(response.status=='error')
                    {
                        demo.showNotification('bottom','right','danger', response.msg); 
                    }else{
                      
                        demo.showNotification('bottom','right','success', response.msg); 

                       setTimeout(function(){ location.reload(); }, 1000);
                    } 
                                
                },
                error:function(response){
                    console.log('error');
                },
                complete: function () {
                    //console.log('complete');
                }
            });
        }
});


