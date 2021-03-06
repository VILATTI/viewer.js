/**
 * @fileoverview layout-vertical-single-column component definition
 * @author clakenen
 */

/**
 * The vertical-single-column layout
 */
Crocodoc.addComponent('layout-' + Crocodoc.LAYOUT_VERTICAL_SINGLE_COLUMN, ['layout-' + Crocodoc.LAYOUT_VERTICAL], function (scope, vertical) {

    'use strict';

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    // there is nothing different about this layout aside from the name (and CSS class name)
    // so we can just return the vertical layout
    return vertical;
});
