import $ from 'jquery';

class UserMessage {

  constructor(prependSelector = ".user-message__wrapper"){
    this._prependSelector = prependSelector;
    this._messageBoxClass = 'user-message';
    this._messageBoxTitleSuffix = '__title';
    this._messageBoxMsgSuffix = '__message';
    this._messageBoxCloseSuffix = '__close';
    this._messageIndex = 0;
  }

  get prependSelector(){ return this._prependSelector; }
  set prependSelector(selectorStr){ this._prependSelector = selectorStr; }

  get messageBoxClass(){ return this._messageBoxSelector; }
  set messageBoxClass(selectorStr){ this._messageBoxClass = selectorStr; }

  postMessage(titleStr, msgStr, classStr = ''){
    let messageId = `um-${this._messageIndex}`;
    let html = this._constructHtml(titleStr, msgStr, classStr, messageId);
    let wrapper = $(this.prependSelector);
    wrapper.prepend(html);
    this._setCloseEvent(messageId);
    this._messageIndex++;
  }

  _constructHtml(titleStr, msgStr, classStr, messageId){
    return `
    <div class="${this._messageBoxClass} ${classStr}" id="${messageId}">
      <div class="${this._messageBoxClass}__${this._messageBoxCloseSuffix}">X</div>
      <h2 class="${this._messageBoxClass}__${this._messageBoxTitleSuffix}">${titleStr}</h2>
      <p class="${this._messageBoxClass}__${this._messageBoxMsgSuffix}">${msgStr}</p>
    </div>
    `;
  }

  _setCloseEvent(messageId){
    let message = $(`#${messageId}`);
    message.find(`.${this._messageBoxClass}__${this._messageBoxCloseSuffix}`).on('click', () => {
      message.remove();
    })
  }

}

/**************************************/
/*   # Export                        */
/************************************/

export default UserMessage;
