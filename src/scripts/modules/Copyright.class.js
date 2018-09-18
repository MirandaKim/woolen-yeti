import $ from 'jquery';

/****************************************************/
/*                                                 */
/*   Copyright                                    */
/*                                               */
/************************************************/
/*

  - Ensure the copyright is up to date.

  *************
  * Contents: *
  *************

  # Constructor
    > Date
  # Public
    > Set Year
  # Export

*/

class Copyright {

  /**************************************/
  /*   # Constructor                   */
  /************************************/

  constructor (copyrightSelector = ".copyright"){
    this.copyrightSelector = copyrightSelector;
    /**************
     *   > Date   *
     *************/
    let date = new Date();
    this.year = date.getFullYear();
  }

  /**************************************/
  /*   # Public                        */
  /************************************/


  /******************
   *   > Set Year   *
   *****************/
  setYear(childSelector = ".copyright__year"){
    $(childSelector).text(this.year);
  }

}

/**************************************/
/*   # Export                        */
/************************************/

export default Copyright;
