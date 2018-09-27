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
  # URL

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

  static toggleClassForOtherOnClick(toggleSelector, modifySelector, classStr, onInitially = false) {
    let trigger = $(toggleSelector);
    let effected = $(modifySelector);
    let onClass = 'on';
    if(onInitially){
      trigger.addClass(onClass);
    }
    trigger.on('click', () => {
      effected.toggleClass(classStr);
      trigger.toggleClass(onClass);
    });
  }

  /**************************************/
  /*   # Class Modifiers               */
  /************************************/

  static getUrlParameters(){
    let url = decodeURIComponent(window.location.search.substring(1));
    let  urlParams = url.split('&');
    return urlParams;
  }

}

export default Utils;
