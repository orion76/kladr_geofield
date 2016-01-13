(function($) {

  /**
   * Add autocomplete behavior to address form.
   */
  Drupal.behaviors.kladrField = {
    attach: function (context, settings) {

      var token = settings.kladr_field.token;
      var key = settings.kladr_field.key;

      $('.kladr-field-widget-item').each(function(index, value) {

        var container = $(value);

        var region = container.find('.kladr-region-subfield');
        var city = container.find('.kladr-city-subfield');
        var district = container.find('.kladr-district-subfield');
        var street = container.find('.kladr-street-subfield');
        var building = container.find('.kladr-building-subfield');

        if (region) {
          region.kladr({
            token: token,
            key: key,
            type: $.kladr.type.region,
            select: function( obj ) {
              region.parent().find('label').text(obj.type);
              if (city) {
                city.kladr('parentId', obj.id);
                city.kladr('parentType', $.kladr.type.region);
              }
              if (district) {
                district.kladr('parentId', obj.id);
                district.kladr('parentType', $.kladr.type.region);
              }
            }
          });
        }

        if (district) {
          district.kladr({
            token: token,
            key: key,
            type: $.kladr.type.district,
            select: function( obj ) {
              district.parent().find('label').text(obj.type);
              if (city) {
                city.kladr('parentId', obj.id);
                city.kladr('parentType', $.kladr.type.district);
              }

            }
          });
        }

        if (city) {
          city.kladr({
            token: token,
            key: key,
            type: 'city',
            select: function( obj ) {
              city.parent().find('label').text(obj.type);
              if (street) {
                street.kladr( 'parentType', $.kladr.type.city );
                street.kladr( 'parentId', obj.id );
              }
            }
          });
        }

        if (street) {
          street.kladr({
            token: token,
            key: key,
            type: $.kladr.type.street,
            parentType: $.kladr.type.city,
            select: function( obj ) {
              street.parent().find('label').text(obj.type);
              if (building) {
                building.kladr( 'parentType', $.kladr.type.street );
                building.kladr( 'parentId', obj.id );
              }
            }
          });
        }

        if (building) {
          building.kladr({
            token: token,
            key: key,
            type: $.kladr.type.building,
            parentType: $.kladr.type.street,
            select: function( obj ) {
              building.parent().find('label').text(obj.type);
            }
          });
        }

      })

    }
  }

})(jQuery);
