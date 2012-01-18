/*
  Matches input fields to slug fields
  Author: Cobey Potter
  License: Public Domain
*/

jQuery.fn.slug = function() {
    var $collection = jQuery(this), //a collection of the inputs
        $dep = {}, //this is the mapped dependency, or where the user types
        makeSlug = function(e, $mapSlug) { 
            //function to make slug
            // takes the event and gets its target ($dep)
            // takes value of $dep and maps it into the corresponding input
            var $this = jQuery(e.target),
            slugcontent = $this.val(),
            slugcontent_hyphens = slugcontent.replace(/\s/g,'-'),
            finishedslug = slugcontent_hyphens.replace(/[^a-zA-Z0-9\-]/g,'');
            $mapSlug.val(finishedslug.toLowerCase());
            $mapSlug.text(finishedslug.toLowerCase());

    };

   //the initial function takes a collection of elements
   //iterate through each, find its mapped field, apply eventlistener to mapped field
   $collection.each(function(){
        var $this = jQuery(this),
            $dID = $this.attr("data-slug-source");
        if($dID){
            $dep = jQuery("#id_"+ $dID);
            $dep.keyup(function(data){ makeSlug(data, $this); });
        }
    });

    //return collection for chaining, per accepted JQuery plugin structure
    return $collection;
};

$(document).ready(function() {
  $("input").slug();
});

