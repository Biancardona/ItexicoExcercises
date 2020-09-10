 $(document).ready(function(){
    // Show hide popover
    $(".dropdown-one").click(function(){
        $(this).hide(".dropdown-one").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-one").slideUp("fast");
    }            
});
