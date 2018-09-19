import $ from 'jquery';

/****************************************************/
/*                                                 */
/*   Utilities                                    */
/*                                               */
/************************************************/
/*

  - Library of static utility functions

  *************
  * Contents: *
  *************

  # Class Modifiers

*/

class Utils {

  /**************************************/
  /*   # Class Modifiers               */
  /************************************/

  static addClassToOtherOnHover(hoverSelector, modifySelector, classStr, removeOnMouseLeave = true){
    let trigger = $(hoverSelector);
    let effected = $(modifySelector);
    trigger.on('mouseover', () => {
      effected.addClass(classStr);
    });
    if(removeOnMouseLeave){
      trigger.on('mouseleave', () => {
        effected.removeClass(classStr);
      });
    }
  }

}

export default Utils;
