(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/change-category-modal-page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/change-category-modal-page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <button ion-button icon-onl (click)=\"closeModal()\">\r\n        <ion-icon name=\"md-close\"></ion-icon>\r\n      </button>\r\n    </ion-buttons>\r\n    <ion-title>Changer de catégorie</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding scroll=\"false\">\r\n  <div *ngFor=\"let category of categories\" class=\"change-category-block\" (click)=\"chooseCategory(category)\">\r\n    <img src=\"../../assets/img/categories/{{category.icon}}.png\" />\r\n    <span>{{category.label}}</span>\r\n  </div>\r\n  <div class=\"change-category-block\">\r\n    <img src=\"../../assets/img/categories/competition.png\" (click)=\"chooseCategory(null)\"/>\r\n    <span>Aléatoire</span>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"defaultBg\">\r\n  <ion-slides #cardSlides class=\"game-slides\" (ionSlideDidChange)=\"onSlideChange()\" [options]=\"slideOpts\">\r\n    <ion-slide *ngFor=\"let question of game.questions\" [class.hidden]=\"question.hide\">\r\n      <div class=\"flip-card\">\r\n        <div class=\"flip-card-inner\" [@cardRectoState]=\"question.state\">\r\n          <div class=\"flip-card-front\">\r\n            <div class=\"game-card\">\r\n              <div class=\"game-card-block\">\r\n                <div class=\"tu-preferes-block align-center-center\">\r\n                  Tu préfères\r\n                </div>\r\n                <div class=\"answer1-block\" [class.selected]=\"question.answer1.selected\" (click)=\"selectAnswer(question, question.answer1, 1)\">\r\n                  <div class=\"align-center-center question\">{{question.answer1.content}}</div>\r\n                </div>\r\n                <div class=\"answer2-block\" [class.selected]=\"question.answer2.selected\" (click)=\"selectAnswer(question, question.answer2, 2)\">\r\n                  <div class=\"align-center-center question\">{{question.answer2.content}} </div>\r\n                </div>\r\n                <div class=\"or-block\" (click)=\"showCategory(question.category)\">\r\n                  <div class=\"category\"><img src=\"../../assets/img/categories/{{question.category.icon}}.png\" /></div>\r\n                </div>\r\n                <div class=\"separator\"></div>\r\n                <div class=\"author-block\">\r\n                  <div ion-float-right>{{question.author | anonyme}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flip-card-back\">\r\n            <div class=\"game-card\">\r\n              <div class=\"game-card-block\">\r\n                <div class=\"answer1-block\" [class.good]=\"question.answer1.selected && question.answer1.id == question.goodAnswer.id\" [class.bad]=\"question.answer1.selected && question.answer1.id != question.goodAnswer.id\">\r\n                  <div class=\"align-center-center\">\r\n                    <div class=\"back-answer\">{{question.answer1.content}}</div>\r\n                    <div class=\"back-pourcent\">{{question.answer1.percent | intval}}%</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"answer2-block\" [class.good]=\"question.answer2.selected && question.answer2.id == question.goodAnswer.id\" [class.bad]=\"question.answer2.selected && question.answer2.id != question.goodAnswer.id\">\r\n                  <div class=\"align-center-center\">\r\n                    <div class=\"back-answer\">{{question.answer2.content}} </div>\r\n                    <div class=\"back-pourcent\">{{question.answer2.percent | intval}}%</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"separator align-center-center\">\r\n                  {{question.countAnswer | formatToLocale}} votes\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"info-question align-center-center\">\r\n        <div class=\"avis align-center-center\">\r\n          <div class=\"change-category-block\">\r\n            <div class=\"change-category-icon align-center-center\" (click)=\"changeCategory()\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='shuffle'></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"good-block\">\r\n            <div class=\"good-icon align-center-center\" (click)=\"vote(question, 1)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='ios-thumbs-up'></ion-icon>\r\n              </div>\r\n            </div>\r\n            <div class=\"nb-vote\">\r\n              {{question.nbLike}}\r\n            </div>\r\n          </div>\r\n          <div class=\"bad-block\">\r\n            <div class=\"bad-icon align-center-center\" (click)=\"vote(question, 0)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='ios-thumbs-down'></ion-icon>\r\n              </div>\r\n            </div>\r\n            <div class=\"nb-vote\">\r\n              {{question.nbDislike}}\r\n            </div>\r\n          </div>\r\n          <div class=\"share-block\">\r\n            <div class=\"share-icon align-center-center\" (click)=\"share(question)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='ios-share'></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"signal-block\">\r\n            <div class=\"signal-icon align-center-center\" (click)=\"signal(question)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name=\"megaphone\"></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"author\">{{question.author | anonyme}}</div>-->\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/change-category-modal-page.scss":
/*!******************************************************!*\
  !*** ./src/app/tab1/change-category-modal-page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvY2hhbmdlLWNhdGVnb3J5LW1vZGFsLXBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tab1/change-category.modal.ts":
/*!***********************************************!*\
  !*** ./src/app/tab1/change-category.modal.ts ***!
  \***********************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/providers */ "./src/providers/providers.ts");




let ModalPage = class ModalPage {
    constructor(game, modalCtlr, loadingCtrl) {
        this.game = game;
        this.modalCtlr = modalCtlr;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
    }
    closeModal() {
        this.modalCtlr.dismiss();
    }
    chooseCategory(category) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: '<div class="loading-category text-center">' +
                    '<div><img class="rotating" src="../../assets/img/categories/' + category.icon + '.png"/></div>' +
                    '<div class="bon-courage">Bon courage ...</div>' +
                    '</div>',
                cssClass: 'loading-category',
                duration: 5000,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    this.game.initQuestions(category);
                    this.game.loadQuestions(20, true);
                    console.log("chargés");
                    this.dismiss();
                    this.closeModal();
                });
            });
        });
    }
    dismiss() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _providers_providers__WEBPACK_IMPORTED_MODULE_3__["Game"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ModalPage.prototype, "categories", void 0);
ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'change-category-modal-page',
        template: __webpack_require__(/*! raw-loader!./change-category-modal-page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/change-category-modal-page.html"),
        styles: [__webpack_require__(/*! ./change-category-modal-page.scss */ "./src/app/tab1/change-category-modal-page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_providers__WEBPACK_IMPORTED_MODULE_3__["Game"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ModalPage);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _change_category_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-category.modal */ "./src/app/tab1/change-category.modal.ts");
/* harmony import */ var _pipes_intval_intval_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/intval/intval.pipe */ "./src/pipes/intval/intval.pipe.ts");
/* harmony import */ var _pipes_anonyme_anonyme_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/anonyme/anonyme.pipe */ "./src/pipes/anonyme/anonyme.pipe.ts");
/* harmony import */ var _pipes_format_to_locale_format_to_locale_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/format-to-locale/format-to-locale.pipe */ "./src/pipes/format-to-locale/format-to-locale.pipe.ts");











let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"], _pipes_intval_intval_pipe__WEBPACK_IMPORTED_MODULE_8__["IntvalPipe"], _pipes_anonyme_anonyme_pipe__WEBPACK_IMPORTED_MODULE_9__["AnonymePipe"], _pipes_format_to_locale_format_to_locale_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatToLocalePipe"], _change_category_modal__WEBPACK_IMPORTED_MODULE_7__["ModalPage"]],
        entryComponents: [_change_category_modal__WEBPACK_IMPORTED_MODULE_7__["ModalPage"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-slides {\n  height: 100%;\n  background-color: transparent;\n}\n\n.flip-card {\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  border: var(--border-card) solid transparent;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: calc(100% - var(--info-height) - var(--info-margin) * 2);\n  text-align: center;\n  -webkit-transition: -webkit-transform 0.8s;\n  transition: -webkit-transform 0.8s;\n  transition: transform 0.8s;\n  transition: transform 0.8s, -webkit-transform 0.8s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n/* Position the front and back side */\n\n.flip-card-back,\n.flip-card-front {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 5px;\n  box-shadow: 0 0 6px 0 #333;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n.flip-card-front {\n  background-color: white;\n  color: white;\n}\n\n/* Style the back side */\n\n.flip-card-back {\n  background-color: white;\n  color: white;\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n  -webkit-transition: -webkit-transform 0.8s;\n  transition: -webkit-transform 0.8s;\n  transition: transform 0.8s;\n  transition: transform 0.8s, -webkit-transform 0.8s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.answer1-block,\n.answer2-block {\n  height: calc(50% - var(--or-block-wh) / 2);\n  width: 100%;\n  position: relative;\n}\n\n.answer1-block.selected,\n.answer2-block.selected {\n  background-color: #AAA;\n}\n\n.answer1-block.good,\n.answer2-block.good {\n  background-color: #33ad33;\n}\n\n.answer1-block.bad,\n.answer2-block.bad {\n  background-color: #f04141;\n}\n\n.answer1-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  left: var(--inner-card-padding);\n  background-color: #333;\n}\n\n.answer2-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  left: var(--inner-card-padding);\n  background-color: #333;\n}\n\n.flip-card-front .answer1-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--front-separator) / 2) - var(--header-card-height));\n  top: calc(var(--inner-card-padding) + var(--header-card-height));\n}\n\n.flip-card-front .answer2-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--front-separator) / 2) - var(--footer-card-height));\n  bottom: calc(var(--inner-card-padding) + var(--footer-card-height));\n}\n\n.flip-card-back .answer1-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--back-separator) / 2));\n  top: var(--inner-card-padding);\n}\n\n.flip-card-back .answer2-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--back-separator) / 2));\n  bottom: var(--inner-card-padding);\n}\n\n.or-block {\n  position: absolute;\n  top: calc(50% - (var(--or-block-wh) / 2));\n  left: calc(50% - (var(--or-block-wh) / 2));\n  background-color: var(--color-jtp);\n  border-radius: 50%;\n  width: var(--or-block-wh);\n  height: var(--or-block-wh);\n  z-index: 2;\n}\n\n.or-block > div {\n  line-height: var(--or-block-wh);\n  text-align: center;\n  margin: auto;\n  color: white;\n}\n\n.flip-card-front .separator {\n  position: absolute;\n  top: calc(50% - (var(--front-separator) / 2));\n  width: calc(100% - var(--inner-card-padding) * 2);\n  height: var(--front-separator);\n  left: var(--inner-card-padding);\n  background-color: var(--color-jtp);\n  z-index: 1;\n}\n\n.flip-card-back .separator {\n  position: absolute;\n  top: calc(50% - (var(--back-separator) / 2));\n  width: calc(100% - var(--inner-card-padding) * 2);\n  height: var(--back-separator);\n  left: var(--inner-card-padding);\n  background-color: var(--color-jtp);\n  z-index: 1;\n}\n\n.info-question {\n  height: var(--info-height);\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n  margin: var(--info-margin) 0;\n  font-size: 0.8em;\n  color: white;\n}\n\n.info-question .category {\n  float: left;\n  width: calc(var(--info-height) + 20px);\n}\n\n.info-question .category > img {\n  width: 40px;\n  float: left;\n  margin-left: var(--border-card);\n}\n\n.info-question .avis > img {\n  height: calc(var(--info-height) - 30px);\n  margin: 0 10px;\n}\n\n.info-question .author {\n  float: right;\n  width: 100px;\n  margin-left: var(--border-card);\n}\n\n.back-answer {\n  font-size: 0.8em;\n  font-style: italic;\n  position: absolute;\n  width: 85%;\n  /* clear: both; */\n  top: 20px;\n}\n\n.back-pourcent {\n  font-size: 4em;\n  width: 85%;\n}\n\nion-slide.hidden {\n  display: none;\n}\n\n.question {\n  line-height: 30px;\n  font-size: 18px;\n}\n\n.bad-block,\n.good-block,\n.share-block,\n.signal-block,\n.change-category-block {\n  height: 100%;\n  position: relative;\n  width: 65px;\n}\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n.bad-block:not(.voted):hover > .bad-icon,\n.good-block:not(.voted):hover > .good-icon {\n  -webkit-animation-name: fadeOutUp;\n          animation-name: fadeOutUp;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.bad-block:not(.voted):hover > .nb-vote,\n.good-block:not(.voted):hover > .nb-vote {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.bad-icon,\n.good-icon,\n.share-icon,\n.change-category-icon,\n.signal-icon {\n  height: 100%;\n  width: 100%;\n  font-size: 1.8em;\n}\n\n.bad-icon,\n.good-icon {\n  position: absolute;\n}\n\n.good-block {\n  color: #cddc39;\n}\n\n.bad-block {\n  color: #f39c12;\n}\n\n.signal-block {\n  color: #8e44ad;\n}\n\n.share-block {\n  color: var(--color-jtp);\n}\n\n.change-category-block {\n  color: #e52e33;\n}\n\n.nb-vote {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\n.cercle {\n  padding: 5px;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 3px 6px 0 #AAA;\n}\n\n.cercle:hover {\n  box-shadow: 0 0 4px 0 #AAA;\n}\n\n.cercle > ion-icon {\n  margin-top: 7px;\n}\n\n.tu-preferes-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  top: var(--inner-card-padding);\n  left: var(--inner-card-padding);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background-color: #35a3bc;\n  color: white;\n  height: var(--header-card-height);\n  font-size: 0.9em;\n}\n\n.author-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  bottom: var(--inner-card-padding);\n  left: var(--inner-card-padding);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #35a3bc;\n  color: white;\n  height: var(--footer-card-height);\n  font-size: 0.7em;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: var(--footer-card-height);\n  font-style: italic;\n}\n\n.author-block > div {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcQXBwc1xcYmxhbmt0ZXN0L3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGdEQUFBO0FDQ0Y7O0FEQ0EsaUVBQUE7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUFBLDBCQUFBO0VBQUEsa0RBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDQ0Y7O0FEQ0EscUNBQUE7O0FBRUE7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FEQ0Esd0RBQUE7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQSx3QkFBQTs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNDRjs7QURFQTs7RUFFRSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBOztFQUVFLHNCQUFBO0FDQ0Y7O0FERUE7O0VBRUUseUJBQUE7QUNDRjs7QURFQTs7RUFFRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLHdHQUFBO0VBQ0EsZ0VBQUE7QUNDRjs7QURFQTtFQUNFLHdHQUFBO0VBQ0EsbUVBQUE7QUNDRjs7QURFQTtFQUNFLDJFQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDJFQUFBO0VBQ0EsaUNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaURBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaURBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0UsWUFBQTtFQUNGLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHNDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FETUE7RUFDRSx1Q0FBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTs7Ozs7RUFLRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSEY7O0FES0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDRkY7RURLQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDSEY7RURNQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDSkY7QUFDRjs7QURWQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLGdDQUFBO1lBQUEsd0JBQUE7RUNGRjtFREtBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNIRjtFRE1BO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNKRjtBQUNGOztBRE1BO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0pGO0VET0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0xGO0VEUUE7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ05GO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDSkY7RURPQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDTEY7RURRQTtJQUNFLFVBQUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0VDTkY7QUFDRjs7QURTQTs7RUFFRSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNQRjs7QURVQTs7RUFFRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNQRjs7QURVQTs7Ozs7RUFLRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDUEY7O0FEVUE7O0VBRUUsa0JBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7QUNQRjs7QURVQTtFQUNFLHVCQUFBO0FDUEY7O0FEVUE7RUFDRSxjQUFBO0FDUEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUNQRjs7QURVQTtFQUNFLDBCQUFBO0FDUEY7O0FEVUE7RUFDRSxlQUFBO0FDUEY7O0FEVUE7RUFDRSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZmxpcC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItY2FyZCkgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAvKiBSZW1vdmUgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXHJcbn1cclxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcblxyXG4uZmxpcC1jYXJkLWlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1pbmZvLWhlaWdodCkgLSB2YXIoLS1pbmZvLW1hcmdpbikgKiAyKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG5cclxuLmZsaXAtY2FyZC1iYWNrLFxyXG4uZmxpcC1jYXJkLWZyb250IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDZweCAwICMzMzM7XHJcbn1cclxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXHJcblxyXG4uZmxpcC1jYXJkLWZyb250IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xyXG5cclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5hbnN3ZXIxLWJsb2NrLFxyXG4uYW5zd2VyMi1ibG9jayB7XHJcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLW9yLWJsb2NrLXdoKSAvIDIpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFuc3dlcjEtYmxvY2suc2VsZWN0ZWQsXHJcbi5hbnN3ZXIyLWJsb2NrLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUFBO1xyXG59XHJcblxyXG4uYW5zd2VyMS1ibG9jay5nb29kLFxyXG4uYW5zd2VyMi1ibG9jay5nb29kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNhZDMzO1xyXG59XHJcblxyXG4uYW5zd2VyMS1ibG9jay5iYWQsXHJcbi5hbnN3ZXIyLWJsb2NrLmJhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNDE0MTtcclxufVxyXG5cclxuLmFuc3dlcjEtYmxvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5hbnN3ZXIyLWJsb2NrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250IC5hbnN3ZXIxLWJsb2NrIHtcclxuICBoZWlnaHQ6IGNhbGMoNTAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAtICh2YXIoLS1mcm9udC1zZXBhcmF0b3IpIC8gMikgLSB2YXIoLS1oZWFkZXItY2FyZC1oZWlnaHQpKTtcclxuICB0b3A6IGNhbGModmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSArIHZhcigtLWhlYWRlci1jYXJkLWhlaWdodCkpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250IC5hbnN3ZXIyLWJsb2NrIHtcclxuICBoZWlnaHQ6IGNhbGMoNTAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAtICh2YXIoLS1mcm9udC1zZXBhcmF0b3IpIC8gMikgLSB2YXIoLS1mb290ZXItY2FyZC1oZWlnaHQpKTtcclxuICBib3R0b206IGNhbGModmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSArIHZhcigtLWZvb3Rlci1jYXJkLWhlaWdodCkpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWJhY2sgLmFuc3dlcjEtYmxvY2sge1xyXG4gIGhlaWdodDogY2FsYyg1MCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpIC0gKHZhcigtLWJhY2stc2VwYXJhdG9yKSAvIDIpKTtcclxuICB0b3A6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtYmFjayAuYW5zd2VyMi1ibG9jayB7XHJcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgLSAodmFyKC0tYmFjay1zZXBhcmF0b3IpIC8gMikpO1xyXG4gIGJvdHRvbTogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcclxufVxyXG5cclxuLm9yLWJsb2NrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDUwJSAtICh2YXIoLS1vci1ibG9jay13aCkgLyAyKSk7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSAodmFyKC0tb3ItYmxvY2std2gpIC8gMikpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWp0cCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiB2YXIoLS1vci1ibG9jay13aCk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1vci1ibG9jay13aCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm9yLWJsb2NrID4gZGl2IHtcclxuICBsaW5lLWhlaWdodDogdmFyKC0tb3ItYmxvY2std2gpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250IC5zZXBhcmF0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLWZyb250LXNlcGFyYXRvcikgLyAyKSk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcclxuICBoZWlnaHQ6IHZhcigtLWZyb250LXNlcGFyYXRvcik7XHJcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtYmFjayAuc2VwYXJhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKDUwJSAtICh2YXIoLS1iYWNrLXNlcGFyYXRvcikgLyAyKSk7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcclxuICBoZWlnaHQ6IHZhcigtLWJhY2stc2VwYXJhdG9yKTtcclxuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWp0cCk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmluZm8tcXVlc3Rpb24ge1xyXG4gIGhlaWdodDogdmFyKC0taW5mby1oZWlnaHQpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IHZhcigtLWluZm8tbWFyZ2luKSAwO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5mby1xdWVzdGlvbiAuY2F0ZWdvcnkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiBjYWxjKHZhcigtLWluZm8taGVpZ2h0KSArIDIwcHgpO1xyXG59XHJcblxyXG4uaW5mby1xdWVzdGlvbiAuY2F0ZWdvcnkgPiBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1ib3JkZXItY2FyZCk7XHJcbn1cclxuXHJcbi5pbmZvLXF1ZXN0aW9uIC5hdmlzIHtcclxuICAvL3dpZHRoOiAzNCU7XHJcbn1cclxuXHJcbi5pbmZvLXF1ZXN0aW9uIC5hdmlzID4gaW1nIHtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0taW5mby1oZWlnaHQpIC0gMzBweCk7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5pbmZvLXF1ZXN0aW9uIC5hdXRob3Ige1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWJvcmRlci1jYXJkKTtcclxufVxyXG5cclxuLmJhY2stYW5zd2VyIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICAvKiBjbGVhcjogYm90aDsgKi9cclxuICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5iYWNrLXBvdXJjZW50IHtcclxuICBmb250LXNpemU6IDRlbTtcclxuICB3aWR0aDogODUlO1xyXG59XHJcblxyXG5pb24tc2xpZGUuaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucXVlc3Rpb24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJhZC1ibG9jayxcclxuLmdvb2QtYmxvY2ssXHJcbi5zaGFyZS1ibG9jayxcclxuLnNpZ25hbC1ibG9jayxcclxuLmNoYW5nZS1jYXRlZ29yeS1ibG9jayAge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlT3V0VXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFkLWJsb2NrOm5vdCgudm90ZWQpOmhvdmVyID4gLmJhZC1pY29uLFxyXG4uZ29vZC1ibG9jazpub3QoLnZvdGVkKTpob3ZlciA+IC5nb29kLWljb24ge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbi5iYWQtYmxvY2s6bm90KC52b3RlZCk6aG92ZXIgPiAubmItdm90ZSxcclxuLmdvb2QtYmxvY2s6bm90KC52b3RlZCk6aG92ZXIgPiAubmItdm90ZSB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbi5iYWQtaWNvbixcclxuLmdvb2QtaWNvbixcclxuLnNoYXJlLWljb24sXHJcbi5jaGFuZ2UtY2F0ZWdvcnktaWNvbixcclxuLnNpZ25hbC1pY29uIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjhlbTtcclxufVxyXG5cclxuLmJhZC1pY29uLFxyXG4uZ29vZC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5nb29kLWJsb2NrIHtcclxuICBjb2xvcjogI2NkZGMzOTtcclxufVxyXG5cclxuLmJhZC1ibG9jayB7XHJcbiAgY29sb3I6ICNmMzljMTI7XHJcbn1cclxuXHJcbi5zaWduYWwtYmxvY2sge1xyXG4gIGNvbG9yOiAjOGU0NGFkO1xyXG59XHJcblxyXG4uc2hhcmUtYmxvY2sge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xyXG59XHJcblxyXG4uY2hhbmdlLWNhdGVnb3J5LWJsb2NrIHtcclxuICBjb2xvcjogI2U1MmUzMztcclxufVxyXG5cclxuLm5iLXZvdGUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jZXJjbGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwICNBQUE7XHJcbn1cclxuXHJcbi5jZXJjbGU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMCAjQUFBO1xyXG59XHJcblxyXG4uY2VyY2xlID4gaW9uLWljb24ge1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxufVxyXG5cclxuLnR1LXByZWZlcmVzLWJsb2NrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgdG9wOiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xyXG4gIGxlZnQ6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YTNiYztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItY2FyZC1oZWlnaHQpO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5hdXRob3ItYmxvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBib3R0b206IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XHJcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhM2JjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1jYXJkLWhlaWdodCk7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb290ZXItY2FyZC1oZWlnaHQpO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmF1dGhvci1ibG9jayA+IGRpdiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiIsIi5nYW1lLXNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItY2FyZCkgc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIC8qIFJlbW92ZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cbn1cblxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1pbmZvLWhlaWdodCkgLSB2YXIoLS1pbmZvLW1hcmdpbikgKiAyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLyogUG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtYmFjayxcbi5mbGlwLWNhcmQtZnJvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwIDAgNnB4IDAgIzMzMztcbn1cblxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXG4uZmxpcC1jYXJkLWZyb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmFuc3dlcjEtYmxvY2ssXG4uYW5zd2VyMi1ibG9jayB7XG4gIGhlaWdodDogY2FsYyg1MCUgLSB2YXIoLS1vci1ibG9jay13aCkgLyAyKTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFuc3dlcjEtYmxvY2suc2VsZWN0ZWQsXG4uYW5zd2VyMi1ibG9jay5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQUE7XG59XG5cbi5hbnN3ZXIxLWJsb2NrLmdvb2QsXG4uYW5zd2VyMi1ibG9jay5nb29kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzYWQzMztcbn1cblxuLmFuc3dlcjEtYmxvY2suYmFkLFxuLmFuc3dlcjItYmxvY2suYmFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNDE0MTtcbn1cblxuLmFuc3dlcjEtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICogMik7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuLmFuc3dlcjItYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICogMik7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn1cblxuLmZsaXAtY2FyZC1mcm9udCAuYW5zd2VyMS1ibG9jayB7XG4gIGhlaWdodDogY2FsYyg1MCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpIC0gKHZhcigtLWZyb250LXNlcGFyYXRvcikgLyAyKSAtIHZhcigtLWhlYWRlci1jYXJkLWhlaWdodCkpO1xuICB0b3A6IGNhbGModmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSArIHZhcigtLWhlYWRlci1jYXJkLWhlaWdodCkpO1xufVxuXG4uZmxpcC1jYXJkLWZyb250IC5hbnN3ZXIyLWJsb2NrIHtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgLSAodmFyKC0tZnJvbnQtc2VwYXJhdG9yKSAvIDIpIC0gdmFyKC0tZm9vdGVyLWNhcmQtaGVpZ2h0KSk7XG4gIGJvdHRvbTogY2FsYyh2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICsgdmFyKC0tZm9vdGVyLWNhcmQtaGVpZ2h0KSk7XG59XG5cbi5mbGlwLWNhcmQtYmFjayAuYW5zd2VyMS1ibG9jayB7XG4gIGhlaWdodDogY2FsYyg1MCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpIC0gKHZhcigtLWJhY2stc2VwYXJhdG9yKSAvIDIpKTtcbiAgdG9wOiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xufVxuXG4uZmxpcC1jYXJkLWJhY2sgLmFuc3dlcjItYmxvY2sge1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAtICh2YXIoLS1iYWNrLXNlcGFyYXRvcikgLyAyKSk7XG4gIGJvdHRvbTogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcbn1cblxuLm9yLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLW9yLWJsb2NrLXdoKSAvIDIpKTtcbiAgbGVmdDogY2FsYyg1MCUgLSAodmFyKC0tb3ItYmxvY2std2gpIC8gMikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiB2YXIoLS1vci1ibG9jay13aCk7XG4gIGhlaWdodDogdmFyKC0tb3ItYmxvY2std2gpO1xuICB6LWluZGV4OiAyO1xufVxuXG4ub3ItYmxvY2sgPiBkaXYge1xuICBsaW5lLWhlaWdodDogdmFyKC0tb3ItYmxvY2std2gpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmxpcC1jYXJkLWZyb250IC5zZXBhcmF0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAodmFyKC0tZnJvbnQtc2VwYXJhdG9yKSAvIDIpKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcbiAgaGVpZ2h0OiB2YXIoLS1mcm9udC1zZXBhcmF0b3IpO1xuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZmxpcC1jYXJkLWJhY2sgLnNlcGFyYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICh2YXIoLS1iYWNrLXNlcGFyYXRvcikgLyAyKSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICogMik7XG4gIGhlaWdodDogdmFyKC0tYmFjay1zZXBhcmF0b3IpO1xuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5mby1xdWVzdGlvbiB7XG4gIGhlaWdodDogdmFyKC0taW5mby1oZWlnaHQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogdmFyKC0taW5mby1tYXJnaW4pIDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmluZm8tcXVlc3Rpb24gLmNhdGVnb3J5IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWluZm8taGVpZ2h0KSArIDIwcHgpO1xufVxuXG4uaW5mby1xdWVzdGlvbiAuY2F0ZWdvcnkgPiBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1ib3JkZXItY2FyZCk7XG59XG5cbi5pbmZvLXF1ZXN0aW9uIC5hdmlzID4gaW1nIHtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWluZm8taGVpZ2h0KSAtIDMwcHgpO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmluZm8tcXVlc3Rpb24gLmF1dGhvciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogdmFyKC0tYm9yZGVyLWNhcmQpO1xufVxuXG4uYmFjay1hbnN3ZXIge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgLyogY2xlYXI6IGJvdGg7ICovXG4gIHRvcDogMjBweDtcbn1cblxuLmJhY2stcG91cmNlbnQge1xuICBmb250LXNpemU6IDRlbTtcbiAgd2lkdGg6IDg1JTtcbn1cblxuaW9uLXNsaWRlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5xdWVzdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5iYWQtYmxvY2ssXG4uZ29vZC1ibG9jayxcbi5zaGFyZS1ibG9jayxcbi5zaWduYWwtYmxvY2ssXG4uY2hhbmdlLWNhdGVnb3J5LWJsb2NrIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuLmJhZC1ibG9jazpub3QoLnZvdGVkKTpob3ZlciA+IC5iYWQtaWNvbixcbi5nb29kLWJsb2NrOm5vdCgudm90ZWQpOmhvdmVyID4gLmdvb2QtaWNvbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmJhZC1ibG9jazpub3QoLnZvdGVkKTpob3ZlciA+IC5uYi12b3RlLFxuLmdvb2QtYmxvY2s6bm90KC52b3RlZCk6aG92ZXIgPiAubmItdm90ZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5iYWQtaWNvbixcbi5nb29kLWljb24sXG4uc2hhcmUtaWNvbixcbi5jaGFuZ2UtY2F0ZWdvcnktaWNvbixcbi5zaWduYWwtaWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbi5iYWQtaWNvbixcbi5nb29kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5nb29kLWJsb2NrIHtcbiAgY29sb3I6ICNjZGRjMzk7XG59XG5cbi5iYWQtYmxvY2sge1xuICBjb2xvcjogI2YzOWMxMjtcbn1cblxuLnNpZ25hbC1ibG9jayB7XG4gIGNvbG9yOiAjOGU0NGFkO1xufVxuXG4uc2hhcmUtYmxvY2sge1xuICBjb2xvcjogdmFyKC0tY29sb3ItanRwKTtcbn1cblxuLmNoYW5nZS1jYXRlZ29yeS1ibG9jayB7XG4gIGNvbG9yOiAjZTUyZTMzO1xufVxuXG4ubmItdm90ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlcmNsZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCAjQUFBO1xufVxuXG4uY2VyY2xlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwICNBQUE7XG59XG5cbi5jZXJjbGUgPiBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLnR1LXByZWZlcmVzLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRvcDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhM2JjO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWNhcmQtaGVpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmF1dGhvci1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3R0b206IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XG4gIGxlZnQ6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YTNiYztcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1jYXJkLWhlaWdodCk7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb290ZXItY2FyZC1oZWlnaHQpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5hdXRob3ItYmxvY2sgPiBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _providers_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/providers */ "./src/providers/providers.ts");
/* harmony import */ var _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/boEvents.enums */ "./src/enums/boEvents.enums.ts");
/* harmony import */ var _change_category_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-category.modal */ "./src/app/tab1/change-category.modal.ts");







let Tab1Page = class Tab1Page {
    // Appelé qu'une seule fois
    constructor(api, categories, game, database, alertCtrl, toastCtrl, modalCtlr) {
        this.api = api;
        this.categories = categories;
        this.game = game;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtlr = modalCtlr;
        this.maxSlideViewed = 5;
        this.database.loadDB().then(() => {
            this.database.initDB('fr').then(() => {
                this.game.initQuestions(null);
                this.game.loadQuestions(20);
                this.database.startAsynTasks();
            });
        });
        this.slideOpts = {
            'slidesPerView': 1
        };
    }
    ionViewWillLeave() {
        console.log('On quitte la page de jeu');
    }
    selectAnswer(question, answer, answerIndex) {
        if (question.state) {
            console.log('click');
            answer.selected = true;
            this.database.jtp.by('id', question.id).state = false;
            question.state = false;
            if (answerIndex == 1)
                this.callEvent(question, _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__["Event"].ANSWER1);
            else
                this.callEvent(question, _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__["Event"].ANSWER2);
        }
        else {
            console.log("déjà joué");
        }
    }
    vote(question, vote) {
        if (!question.voted) {
            if (vote) {
                question.nbLike += 1;
                this.callEvent(question, _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__["Event"].LIKE);
            }
            else {
                question.nbDislike += 1;
                this.callEvent(question, _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__["Event"].DISLIKE);
            }
            question.voted = true;
            console.log(question.id, vote);
        }
        else {
            console.log('Déjà voté');
        }
    }
    signal(question) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Signaler',
                inputs: [
                    {
                        name: 'signal',
                        type: 'radio',
                        label: 'Trop de fautes',
                        value: _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__["Event"].SIGNAL1,
                        checked: true
                    },
                    {
                        name: 'signal',
                        type: 'radio',
                        label: 'Contenu trop violent',
                        value: _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__["Event"].SIGNAL2,
                        checked: false
                    },
                    {
                        name: 'signal',
                        type: 'radio',
                        label: 'Mauvaise catégorie',
                        value: _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__["Event"].SIGNAL3,
                        checked: false
                    }
                ],
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel');
                        }
                    },
                    {
                        text: 'Signaler',
                        handler: (event) => {
                            this.callEvent(question, event);
                            this.toast();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    changeCategory() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtlr.create({
                showBackdrop: true,
                animated: true,
                component: _change_category_modal__WEBPACK_IMPORTED_MODULE_6__["ModalPage"],
                componentProps: {
                    'categories': this.categories.categories
                }
            });
            return yield modal.present();
        });
    }
    changeCateogryChosen() {
        console.log("coucou");
    }
    toast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Merci !',
                duration: 2500,
                position: 'bottom',
                animated: true
            });
            toast.present();
        });
    }
    share(question) {
        console.log(question.id);
    }
    callEvent(question, event) {
        console.log("--> callEvent " + event);
        let param = { id: 0, event: 0 };
        param.id = question.id;
        param.event = event;
        this.api.post('event', param)
            .subscribe((res) => {
            console.log("<-- callEvent");
        }, err => {
            //console.error('ERROR', err);
        });
    }
    showCategory(category) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Catégorie',
                message: '<div class="alert-category">' +
                    '<img src="../../assets/img/categories/' + category.icon + '.png"/>' +
                    '<div class="category-block"><div class="margin-auto">' + category.label + '</div></div>' +
                    '</div>',
                buttons: [
                    {
                        text: 'Je ne veux faire que ca !'
                    },
                    {
                        text: 'Choisir une autre catégorie'
                    },
                    {
                        text: 'Retour'
                    }
                ]
            });
            yield alert.present();
        });
    }
    onSlideChange() {
        this.slides.getActiveIndex().then(index => {
            if (index > this.maxSlideViewed) {
                while (index != this.maxSlideViewed) {
                    this.slides.el.swiper.removeSlide(0);
                    index--;
                }
            }
            if (this.slides.el.swiper.slides.length <= 15) {
                console.log("on ajoute des questions");
                this.game.loadQuestions(20);
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Api"] },
    { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Categories"] },
    { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Game"] },
    { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Database"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardSlides', { 'read': null, 'static': false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Tab1Page.prototype, "slides", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('cardRectoState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    transform: 'rotateY(-180deg)',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'rotateY(0deg)', offset: 0.5 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'rotateY(-180deg)', offset: 1 })
                ])))
            ])
        ],
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_providers__WEBPACK_IMPORTED_MODULE_4__["Api"], _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Categories"], _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Game"], _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Database"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], Tab1Page);



/***/ }),

/***/ "./src/enums/boEvents.enums.ts":
/*!*************************************!*\
  !*** ./src/enums/boEvents.enums.ts ***!
  \*************************************/
/*! exports provided: Event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
var Event;
(function (Event) {
    /** Ajouter 1 à la réponse 1 */
    Event[Event["ANSWER1"] = 1] = "ANSWER1";
    /** Ajouter 1 à la réponse 2 */
    Event[Event["ANSWER2"] = 2] = "ANSWER2";
    /** Ajouter 1 aux like */
    Event[Event["LIKE"] = 3] = "LIKE";
    /** Ajouter 1 aux dislike */
    Event[Event["DISLIKE"] = 4] = "DISLIKE";
    /** Signaler qu'il y a trop de fautes */
    Event[Event["SIGNAL1"] = 5] = "SIGNAL1";
    /** Signaler que c'est du contenu dégueu */
    Event[Event["SIGNAL2"] = 6] = "SIGNAL2";
    /** Signaler que ce n'est pas la bonne catégorie */
    Event[Event["SIGNAL3"] = 7] = "SIGNAL3";
})(Event || (Event = {}));


/***/ }),

/***/ "./src/pipes/anonyme/anonyme.pipe.ts":
/*!*******************************************!*\
  !*** ./src/pipes/anonyme/anonyme.pipe.ts ***!
  \*******************************************/
/*! exports provided: AnonymePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymePipe", function() { return AnonymePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnonymePipe = class AnonymePipe {
    transform(value, ...args) {
        if (value && value.length > 0)
            return value;
        return 'anonyme';
    }
};
AnonymePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'anonyme'
    })
], AnonymePipe);



/***/ }),

/***/ "./src/pipes/format-to-locale/format-to-locale.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/pipes/format-to-locale/format-to-locale.pipe.ts ***!
  \*************************************************************/
/*! exports provided: FormatToLocalePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatToLocalePipe", function() { return FormatToLocalePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormatToLocalePipe = class FormatToLocalePipe {
    transform(value, ...args) {
        return value.toLocaleString('fr-FR');
    }
};
FormatToLocalePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'formatToLocale'
    })
], FormatToLocalePipe);



/***/ }),

/***/ "./src/pipes/intval/intval.pipe.ts":
/*!*****************************************!*\
  !*** ./src/pipes/intval/intval.pipe.ts ***!
  \*****************************************/
/*! exports provided: IntvalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntvalPipe", function() { return IntvalPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IntvalPipe = class IntvalPipe {
    transform(value, ...args) {
        return value.toFixed();
    }
};
IntvalPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'intval'
    })
], IntvalPipe);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map