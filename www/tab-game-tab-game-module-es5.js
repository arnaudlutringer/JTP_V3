(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-game-tab-game-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab-game/change-category-modal-page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab-game/change-category-modal-page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <button ion-button icon-onl (click)=\"closeModal()\">\r\n        <ion-icon name=\"md-close\"></ion-icon>\r\n      </button>\r\n    </ion-buttons>\r\n    <ion-title>Changer de catégorie</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding scroll=\"false\">\r\n  <div *ngFor=\"let category of categories\" class=\"change-category-block\" (click)=\"chooseCategory(category)\">\r\n    <img src=\"../../assets/img/categories/{{category.icon}}.png\" />\r\n    <span>{{category.label}}</span>\r\n  </div>\r\n  <div class=\"change-category-block\">\r\n    <img src=\"../../assets/img/categories/competition.png\" (click)=\"chooseCategory(null)\"/>\r\n    <span>Aléatoire</span>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tab-game/tab-game.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab-game/tab-game.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"defaultBg\">\r\n  <ion-slides #cardSlides class=\"game-slides\" (ionSlideDidChange)=\"onSlideChange()\" [options]=\"slideOpts\">\r\n    <ion-slide *ngFor=\"let question of game.questions\" [class.hidden]=\"question.hide\">\r\n      <div class=\"flip-card\">\r\n        <div class=\"flip-card-inner\" [@cardRectoState]=\"question.state\">\r\n          <div class=\"flip-card-front\">\r\n            <div class=\"game-card\">\r\n              <div class=\"game-card-block\">\r\n                <div class=\"tu-preferes-block align-center-center\">\r\n                  Tu préfères\r\n                </div>\r\n                <div class=\"answer1-block\" [class.selected]=\"question.answer1.selected\" (click)=\"selectAnswer(question, question.answer1, 1)\">\r\n                  <div class=\"align-center-center question\">{{question.answer1.content}}</div>\r\n                </div>\r\n                <div class=\"answer2-block\" [class.selected]=\"question.answer2.selected\" (click)=\"selectAnswer(question, question.answer2, 2)\">\r\n                  <div class=\"align-center-center question\">{{question.answer2.content}} </div>\r\n                </div>\r\n                <div class=\"or-block\" (click)=\"showCategory(question.category)\">\r\n                  <div class=\"category\"><img src=\"../../assets/img/categories/{{question.category.icon}}.png\" /></div>\r\n                </div>\r\n                <div class=\"separator\"></div>\r\n                <div class=\"author-block\">\r\n                  <div ion-float-right>{{question.author | anonyme}}</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"flip-card-back\">\r\n            <div class=\"game-card\">\r\n              <div class=\"game-card-block\">\r\n                <div class=\"answer1-block\" [class.good]=\"question.answer1.selected && question.answer1.id == question.goodAnswer.id\" [class.bad]=\"question.answer1.selected && question.answer1.id != question.goodAnswer.id\">\r\n                  <div class=\"align-center-center\">\r\n                    <div class=\"back-answer\">{{question.answer1.content}}</div>\r\n                    <div class=\"back-pourcent\">{{question.answer1.percent | intval}}%</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"answer2-block\" [class.good]=\"question.answer2.selected && question.answer2.id == question.goodAnswer.id\" [class.bad]=\"question.answer2.selected && question.answer2.id != question.goodAnswer.id\">\r\n                  <div class=\"align-center-center\">\r\n                    <div class=\"back-answer\">{{question.answer2.content}} </div>\r\n                    <div class=\"back-pourcent\">{{question.answer2.percent | intval}}%</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"separator align-center-center\">\r\n                  {{question.countAnswer | formatToLocale}} votes\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"info-question align-center-center\">\r\n        <div class=\"avis align-center-center\">\r\n          <div class=\"change-category-block\">\r\n            <div class=\"change-category-icon align-center-center\" (click)=\"changeCategory()\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='apps'></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"good-block\">\r\n            <div class=\"good-icon align-center-center\" (click)=\"vote(question, 1)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='ios-thumbs-up'></ion-icon>\r\n              </div>\r\n            </div>\r\n            <div class=\"nb-vote\">\r\n              {{question.nbLike}}\r\n            </div>\r\n          </div>\r\n          <div class=\"bad-block\">\r\n            <div class=\"bad-icon align-center-center\" (click)=\"vote(question, 0)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='ios-thumbs-down'></ion-icon>\r\n              </div>\r\n            </div>\r\n            <div class=\"nb-vote\">\r\n              {{question.nbDislike}}\r\n            </div>\r\n          </div>\r\n          <div class=\"share-block\">\r\n            <div class=\"share-icon align-center-center\" (click)=\"share(question)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name='ios-share'></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"signal-block\">\r\n            <div class=\"signal-icon align-center-center\" (click)=\"signal(question)\">\r\n              <div class=\"cercle\">\r\n                <ion-icon name=\"megaphone\"></ion-icon>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--<div class=\"author\">{{question.author | anonyme}}</div>-->\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab-game/change-category-modal-page.scss":
/*!**********************************************************!*\
  !*** ./src/app/tab-game/change-category-modal-page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi1nYW1lL2NoYW5nZS1jYXRlZ29yeS1tb2RhbC1wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab-game/change-category.modal.ts":
/*!***************************************************!*\
  !*** ./src/app/tab-game/change-category.modal.ts ***!
  \***************************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/providers */ "./src/providers/providers.ts");




var ModalPage = /** @class */ (function () {
    function ModalPage(game, modalCtlr, loadingCtrl) {
        this.game = game;
        this.modalCtlr = modalCtlr;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
    }
    ModalPage.prototype.closeModal = function () {
        this.modalCtlr.dismiss();
    };
    ModalPage.prototype.chooseCategory = function (category) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: '<div class="loading-category text-center">' +
                                    '<div><img class="rotating" src="../../assets/img/categories/' + category.icon + '.png"/></div>' +
                                    '<div class="bon-courage">Bon courage ...</div>' +
                                    '</div>',
                                cssClass: 'loading-category',
                                duration: 5000,
                            }).then(function (a) {
                                a.present().then(function () {
                                    console.log('presented');
                                    _this.game.initQuestions(category);
                                    _this.game.loadQuestions(20, true);
                                    console.log("chargés");
                                    _this.dismiss();
                                    _this.closeModal();
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ModalPage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingCtrl.dismiss().then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ModalPage.ctorParameters = function () { return [
        { type: _providers_providers__WEBPACK_IMPORTED_MODULE_3__["Game"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ModalPage.prototype, "categories", void 0);
    ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'change-category-modal-page',
            template: __webpack_require__(/*! raw-loader!./change-category-modal-page.html */ "./node_modules/raw-loader/index.js!./src/app/tab-game/change-category-modal-page.html"),
            styles: [__webpack_require__(/*! ./change-category-modal-page.scss */ "./src/app/tab-game/change-category-modal-page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_providers__WEBPACK_IMPORTED_MODULE_3__["Game"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ModalPage);
    return ModalPage;
}());



/***/ }),

/***/ "./src/app/tab-game/tab-game.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tab-game/tab-game.module.ts ***!
  \*********************************************/
/*! exports provided: TabGamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabGamePageModule", function() { return TabGamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-game.page */ "./src/app/tab-game/tab-game.page.ts");
/* harmony import */ var _change_category_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-category.modal */ "./src/app/tab-game/change-category.modal.ts");
/* harmony import */ var _pipes_intval_intval_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/intval/intval.pipe */ "./src/pipes/intval/intval.pipe.ts");
/* harmony import */ var _pipes_anonyme_anonyme_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/anonyme/anonyme.pipe */ "./src/pipes/anonyme/anonyme.pipe.ts");
/* harmony import */ var _pipes_format_to_locale_format_to_locale_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/format-to-locale/format-to-locale.pipe */ "./src/pipes/format-to-locale/format-to-locale.pipe.ts");











var TabGamePageModule = /** @class */ (function () {
    function TabGamePageModule() {
    }
    TabGamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab_game_page__WEBPACK_IMPORTED_MODULE_6__["TabGamePage"] }])
            ],
            declarations: [_tab_game_page__WEBPACK_IMPORTED_MODULE_6__["TabGamePage"], _pipes_intval_intval_pipe__WEBPACK_IMPORTED_MODULE_8__["IntvalPipe"], _pipes_anonyme_anonyme_pipe__WEBPACK_IMPORTED_MODULE_9__["AnonymePipe"], _pipes_format_to_locale_format_to_locale_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatToLocalePipe"], _change_category_modal__WEBPACK_IMPORTED_MODULE_7__["ModalPage"]],
            entryComponents: [_change_category_modal__WEBPACK_IMPORTED_MODULE_7__["ModalPage"]]
        })
    ], TabGamePageModule);
    return TabGamePageModule;
}());



/***/ }),

/***/ "./src/app/tab-game/tab-game.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tab-game/tab-game.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-slides {\n  height: 100%;\n  background-color: transparent;\n}\n\n.flip-card {\n  background-color: transparent;\n  width: 100%;\n  height: 100%;\n  border: var(--border-card) solid transparent;\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: calc(100% - var(--info-height) - var(--info-margin) * 2);\n  text-align: center;\n  -webkit-transition: -webkit-transform 0.8s;\n  transition: -webkit-transform 0.8s;\n  transition: transform 0.8s;\n  transition: transform 0.8s, -webkit-transform 0.8s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n/* Position the front and back side */\n\n.flip-card-back,\n.flip-card-front {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-radius: 5px;\n  box-shadow: 0 0 6px 0 #333;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n.flip-card-front {\n  background-color: white;\n  color: white;\n}\n\n/* Style the back side */\n\n.flip-card-back {\n  background-color: white;\n  color: white;\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n  -webkit-transition: -webkit-transform 0.8s;\n  transition: -webkit-transform 0.8s;\n  transition: transform 0.8s;\n  transition: transform 0.8s, -webkit-transform 0.8s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.answer1-block,\n.answer2-block {\n  height: calc(50% - var(--or-block-wh) / 2);\n  width: 100%;\n  position: relative;\n}\n\n.answer1-block.selected,\n.answer2-block.selected {\n  background-color: #AAA;\n}\n\n.answer1-block.good,\n.answer2-block.good {\n  background-color: #33ad33;\n}\n\n.answer1-block.bad,\n.answer2-block.bad {\n  background-color: #f04141;\n}\n\n.answer1-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  left: var(--inner-card-padding);\n  background-color: #333;\n}\n\n.answer2-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  left: var(--inner-card-padding);\n  background-color: #333;\n}\n\n.flip-card-front .answer1-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--front-separator) / 2) - var(--header-card-height));\n  top: calc(var(--inner-card-padding) + var(--header-card-height));\n}\n\n.flip-card-front .answer2-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--front-separator) / 2) - var(--footer-card-height));\n  bottom: calc(var(--inner-card-padding) + var(--footer-card-height));\n}\n\n.flip-card-back .answer1-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--back-separator) / 2));\n  top: var(--inner-card-padding);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.flip-card-back .answer2-block {\n  height: calc(50% - var(--inner-card-padding) - (var(--back-separator) / 2));\n  bottom: var(--inner-card-padding);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.or-block {\n  position: absolute;\n  top: calc(50% - (var(--or-block-wh) / 2));\n  left: calc(50% - (var(--or-block-wh) / 2));\n  background-color: var(--color-jtp);\n  border-radius: 50%;\n  width: var(--or-block-wh);\n  height: var(--or-block-wh);\n  z-index: 2;\n}\n\n.or-block > div {\n  line-height: var(--or-block-wh);\n  text-align: center;\n  margin: auto;\n  color: white;\n}\n\n.flip-card-front .separator {\n  position: absolute;\n  top: calc(50% - (var(--front-separator) / 2));\n  width: calc(100% - var(--inner-card-padding) * 2);\n  height: var(--front-separator);\n  left: var(--inner-card-padding);\n  background-color: var(--color-jtp);\n  z-index: 1;\n}\n\n.flip-card-back .separator {\n  position: absolute;\n  top: calc(50% - (var(--back-separator) / 2));\n  width: calc(100% - var(--inner-card-padding) * 2);\n  height: var(--back-separator);\n  left: var(--inner-card-padding);\n  background-color: var(--color-jtp);\n  z-index: 1;\n}\n\n.info-question {\n  height: var(--info-height);\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n  margin: var(--info-margin) 0;\n  font-size: 0.8em;\n  color: white;\n}\n\n.info-question .category {\n  float: left;\n  width: calc(var(--info-height) + 20px);\n}\n\n.info-question .category > img {\n  width: 40px;\n  float: left;\n  margin-left: var(--border-card);\n}\n\n.info-question .avis > img {\n  height: calc(var(--info-height) - 30px);\n  margin: 0 10px;\n}\n\n.info-question .author {\n  float: right;\n  width: 100px;\n  margin-left: var(--border-card);\n}\n\n.back-answer {\n  font-size: 0.8em;\n  font-style: italic;\n  position: absolute;\n  width: 85%;\n  /* clear: both; */\n  top: 20px;\n}\n\n.back-pourcent {\n  font-size: 4em;\n  width: 85%;\n}\n\nion-slide.hidden {\n  display: none;\n}\n\n.question {\n  line-height: 30px;\n  font-size: 18px;\n}\n\n.bad-block,\n.change-category-block,\n.good-block,\n.share-block,\n.signal-block {\n  height: 100%;\n  position: relative;\n  width: 65px;\n}\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  50% {\n    opacity: 0;\n    -webkit-transform: translateY(-50px);\n            transform: translateY(-50px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n  }\n}\n\n.bad-block:not(.voted):hover > .bad-icon,\n.good-block:not(.voted):hover > .good-icon {\n  -webkit-animation-name: fadeOutUp;\n          animation-name: fadeOutUp;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.bad-block:not(.voted):hover > .nb-vote,\n.good-block:not(.voted):hover > .nb-vote {\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n  -webkit-animation-duration: 0.5s;\n          animation-duration: 0.5s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.bad-icon,\n.change-category-icon,\n.good-icon,\n.share-icon,\n.signal-icon {\n  height: 100%;\n  width: 100%;\n  font-size: 1.8em;\n}\n\n.bad-icon,\n.good-icon {\n  position: absolute;\n}\n\n.good-block {\n  color: #cddc39;\n}\n\n.bad-block {\n  color: #f39c12;\n}\n\n.signal-block {\n  color: #8e44ad;\n}\n\n.share-block {\n  color: var(--color-jtp);\n}\n\n.change-category-block {\n  color: #e52e33;\n}\n\n.nb-vote {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\n.cercle {\n  padding: 5px;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  box-shadow: 0 3px 6px 0 #AAA;\n}\n\n.cercle:hover {\n  box-shadow: 0 0 4px 0 #AAA;\n}\n\n.cercle > ion-icon {\n  margin-top: 7px;\n}\n\n.tu-preferes-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  top: var(--inner-card-padding);\n  left: var(--inner-card-padding);\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background-color: #35a3bc;\n  color: white;\n  height: var(--header-card-height);\n  font-size: 0.9em;\n}\n\n.author-block {\n  position: absolute;\n  width: calc(100% - var(--inner-card-padding) * 2);\n  padding: 0 10px;\n  bottom: var(--inner-card-padding);\n  left: var(--inner-card-padding);\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #35a3bc;\n  color: white;\n  height: var(--footer-card-height);\n  font-size: 0.7em;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: var(--footer-card-height);\n  font-style: italic;\n}\n\n.author-block > div {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiLWdhbWUvQzpcXEFwcHNcXGJsYW5rdGVzdC9zcmNcXGFwcFxcdGFiLWdhbWVcXHRhYi1nYW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiLWdhbWUvdGFiLWdhbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0RBQUE7QUNDRjs7QURDQSxpRUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdFQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUFBLGtDQUFBO0VBQUEsMEJBQUE7RUFBQSxrREFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7QUNFRjs7QURBQSxxQ0FBQTs7QUFDQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUNHRjs7QUREQSx3REFBQTs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREZBLHdCQUFBOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFBQSwwQkFBQTtFQUFBLGtEQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtBQ0tGOztBREZBOztFQUVFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDS0Y7O0FERkE7O0VBRUUsc0JBQUE7QUNLRjs7QURGQTs7RUFFRSx5QkFBQTtBQ0tGOztBREZBOztFQUVFLHlCQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUNLRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQ0tGOztBREZBO0VBQ0Usd0dBQUE7RUFDQSxnRUFBQTtBQ0tGOztBREZBO0VBQ0Usd0dBQUE7RUFDQSxtRUFBQTtBQ0tGOztBREZBO0VBQ0UsMkVBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNLRjs7QURGQTtFQUNFLDJFQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsMENBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUNLRjs7QURGQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGlEQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ0tGOztBREZBO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxzQ0FBQTtBQ0tGOztBREZBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQ0tGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7Ozs7O0VBS0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ0VGO0VEQ0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0NGO0VERUE7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0FGO0FBQ0Y7O0FEZEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtZQUFBLHdCQUFBO0VDRUY7RURDQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDQ0Y7RURFQTtJQUNFLFVBQUE7SUFDQSxvQ0FBQTtZQUFBLDRCQUFBO0VDQUY7QUFDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNBRjtFREdBO0lBQ0UsVUFBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7RUNERjtFRElBO0lBQ0UsVUFBQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7RUNGRjtBQUNGOztBRFpBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0FGO0VER0E7SUFDRSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0RGO0VESUE7SUFDRSxVQUFBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtFQ0ZGO0FBQ0Y7O0FES0E7O0VBRUUsaUNBQUE7VUFBQSx5QkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDSEY7O0FETUE7O0VBRUUsa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDSEY7O0FETUE7Ozs7O0VBS0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BOztFQUVFLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSx1QkFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQUEsb0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDSEY7O0FETUE7RUFDRSwwQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3RhYi1nYW1lL3RhYi1nYW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYW1lLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uZmxpcC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItY2FyZCkgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAvKiBSZW1vdmUgdGhpcyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXHJcbn1cclxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcbi5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWluZm8taGVpZ2h0KSAtIHZhcigtLWluZm8tbWFyZ2luKSAqIDIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcbi5mbGlwLWNhcmQtYmFjayxcclxuLmZsaXAtY2FyZC1mcm9udCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggMCAjMzMzO1xyXG59XHJcbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xyXG4uZmxpcC1jYXJkLWZyb250IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmFuc3dlcjEtYmxvY2ssXHJcbi5hbnN3ZXIyLWJsb2NrIHtcclxuICBoZWlnaHQ6IGNhbGMoNTAlIC0gdmFyKC0tb3ItYmxvY2std2gpIC8gMik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYW5zd2VyMS1ibG9jay5zZWxlY3RlZCxcclxuLmFuc3dlcjItYmxvY2suc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQUE7XHJcbn1cclxuXHJcbi5hbnN3ZXIxLWJsb2NrLmdvb2QsXHJcbi5hbnN3ZXIyLWJsb2NrLmdvb2Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzM2FkMzM7XHJcbn1cclxuXHJcbi5hbnN3ZXIxLWJsb2NrLmJhZCxcclxuLmFuc3dlcjItYmxvY2suYmFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA0MTQxO1xyXG59XHJcblxyXG4uYW5zd2VyMS1ibG9jayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICogMik7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGxlZnQ6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLmFuc3dlcjItYmxvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQgLmFuc3dlcjEtYmxvY2sge1xyXG4gIGhlaWdodDogY2FsYyg1MCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpIC0gKHZhcigtLWZyb250LXNlcGFyYXRvcikgLyAyKSAtIHZhcigtLWhlYWRlci1jYXJkLWhlaWdodCkpO1xyXG4gIHRvcDogY2FsYyh2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICsgdmFyKC0taGVhZGVyLWNhcmQtaGVpZ2h0KSk7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQgLmFuc3dlcjItYmxvY2sge1xyXG4gIGhlaWdodDogY2FsYyg1MCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpIC0gKHZhcigtLWZyb250LXNlcGFyYXRvcikgLyAyKSAtIHZhcigtLWZvb3Rlci1jYXJkLWhlaWdodCkpO1xyXG4gIGJvdHRvbTogY2FsYyh2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICsgdmFyKC0tZm9vdGVyLWNhcmQtaGVpZ2h0KSk7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtYmFjayAuYW5zd2VyMS1ibG9jayB7XHJcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgLSAodmFyKC0tYmFjay1zZXBhcmF0b3IpIC8gMikpO1xyXG4gIHRvcDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIC5hbnN3ZXIyLWJsb2NrIHtcclxuICBoZWlnaHQ6IGNhbGMoNTAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAtICh2YXIoLS1iYWNrLXNlcGFyYXRvcikgLyAyKSk7XHJcbiAgYm90dG9tOiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ub3ItYmxvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLW9yLWJsb2NrLXdoKSAvIDIpKTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtICh2YXIoLS1vci1ibG9jay13aCkgLyAyKSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItanRwKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IHZhcigtLW9yLWJsb2NrLXdoKTtcclxuICBoZWlnaHQ6IHZhcigtLW9yLWJsb2NrLXdoKTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ub3ItYmxvY2sgPiBkaXYge1xyXG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1vci1ibG9jay13aCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQgLnNlcGFyYXRvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAodmFyKC0tZnJvbnQtc2VwYXJhdG9yKSAvIDIpKTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xyXG4gIGhlaWdodDogdmFyKC0tZnJvbnQtc2VwYXJhdG9yKTtcclxuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWp0cCk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIC5zZXBhcmF0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLWJhY2stc2VwYXJhdG9yKSAvIDIpKTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xyXG4gIGhlaWdodDogdmFyKC0tYmFjay1zZXBhcmF0b3IpO1xyXG4gIGxlZnQ6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItanRwKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaW5mby1xdWVzdGlvbiB7XHJcbiAgaGVpZ2h0OiB2YXIoLS1pbmZvLWhlaWdodCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IHZhcigtLWluZm8tbWFyZ2luKSAwO1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW5mby1xdWVzdGlvbiAuY2F0ZWdvcnkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiBjYWxjKHZhcigtLWluZm8taGVpZ2h0KSArIDIwcHgpO1xyXG59XHJcblxyXG4uaW5mby1xdWVzdGlvbiAuY2F0ZWdvcnkgPiBpbWcge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1ib3JkZXItY2FyZCk7XHJcbn1cclxuXHJcbi5pbmZvLXF1ZXN0aW9uIC5hdmlzIHtcclxuICAvL3dpZHRoOiAzNCU7XHJcbn1cclxuXHJcbi5pbmZvLXF1ZXN0aW9uIC5hdmlzID4gaW1nIHtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0taW5mby1oZWlnaHQpIC0gMzBweCk7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5pbmZvLXF1ZXN0aW9uIC5hdXRob3Ige1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWJvcmRlci1jYXJkKTtcclxufVxyXG5cclxuLmJhY2stYW5zd2VyIHtcclxuICBmb250LXNpemU6IDAuOGVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDg1JTtcclxuICAvKiBjbGVhcjogYm90aDsgKi9cclxuICB0b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5iYWNrLXBvdXJjZW50IHtcclxuICBmb250LXNpemU6IDRlbTtcclxuICB3aWR0aDogODUlO1xyXG59XHJcblxyXG5pb24tc2xpZGUuaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucXVlc3Rpb24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJhZC1ibG9jayxcclxuLmNoYW5nZS1jYXRlZ29yeS1ibG9jayxcclxuLmdvb2QtYmxvY2ssXHJcbi5zaGFyZS1ibG9jayxcclxuLnNpZ25hbC1ibG9jayB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjVweDtcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5iYWQtYmxvY2s6bm90KC52b3RlZCk6aG92ZXIgPiAuYmFkLWljb24sXHJcbi5nb29kLWJsb2NrOm5vdCgudm90ZWQpOmhvdmVyID4gLmdvb2QtaWNvbiB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmJhZC1ibG9jazpub3QoLnZvdGVkKTpob3ZlciA+IC5uYi12b3RlLFxyXG4uZ29vZC1ibG9jazpub3QoLnZvdGVkKTpob3ZlciA+IC5uYi12b3RlIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuLmJhZC1pY29uLFxyXG4uY2hhbmdlLWNhdGVnb3J5LWljb24sXHJcbi5nb29kLWljb24sXHJcbi5zaGFyZS1pY29uLFxyXG4uc2lnbmFsLWljb24ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG59XHJcblxyXG4uYmFkLWljb24sXHJcbi5nb29kLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmdvb2QtYmxvY2sge1xyXG4gIGNvbG9yOiAjY2RkYzM5O1xyXG59XHJcblxyXG4uYmFkLWJsb2NrIHtcclxuICBjb2xvcjogI2YzOWMxMjtcclxufVxyXG5cclxuLnNpZ25hbC1ibG9jayB7XHJcbiAgY29sb3I6ICM4ZTQ0YWQ7XHJcbn1cclxuXHJcbi5zaGFyZS1ibG9jayB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWp0cCk7XHJcbn1cclxuXHJcbi5jaGFuZ2UtY2F0ZWdvcnktYmxvY2sge1xyXG4gIGNvbG9yOiAjZTUyZTMzO1xyXG59XHJcblxyXG4ubmItdm90ZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNlcmNsZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgI0FBQTtcclxufVxyXG5cclxuLmNlcmNsZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwICNBQUE7XHJcbn1cclxuXHJcbi5jZXJjbGUgPiBpb24taWNvbiB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4udHUtcHJlZmVyZXMtYmxvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICB0b3A6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XHJcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhM2JjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1jYXJkLWhlaWdodCk7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmF1dGhvci1ibG9jayB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICogMik7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIGJvdHRvbTogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcclxuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNWEzYmM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWNhcmQtaGVpZ2h0KTtcclxuICBmb250LXNpemU6IDAuN2VtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvb3Rlci1jYXJkLWhlaWdodCk7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uYXV0aG9yLWJsb2NrID4gZGl2IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIiwiLmdhbWUtc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZsaXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IHZhcigtLWJvcmRlci1jYXJkKSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgLyogUmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xufVxuXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWluZm8taGVpZ2h0KSAtIHZhcigtLWluZm8tbWFyZ2luKSAqIDIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1iYWNrLFxuLmZsaXAtY2FyZC1mcm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggMCAjMzMzO1xufVxuXG4vKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cbi5mbGlwLWNhcmQtZnJvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uYW5zd2VyMS1ibG9jayxcbi5hbnN3ZXIyLWJsb2NrIHtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLW9yLWJsb2NrLXdoKSAvIDIpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYW5zd2VyMS1ibG9jay5zZWxlY3RlZCxcbi5hbnN3ZXIyLWJsb2NrLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBQTtcbn1cblxuLmFuc3dlcjEtYmxvY2suZ29vZCxcbi5hbnN3ZXIyLWJsb2NrLmdvb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNhZDMzO1xufVxuXG4uYW5zd2VyMS1ibG9jay5iYWQsXG4uYW5zd2VyMi1ibG9jay5iYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA0MTQxO1xufVxuXG4uYW5zd2VyMS1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4uYW5zd2VyMi1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4uZmxpcC1jYXJkLWZyb250IC5hbnN3ZXIxLWJsb2NrIHtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgLSAodmFyKC0tZnJvbnQtc2VwYXJhdG9yKSAvIDIpIC0gdmFyKC0taGVhZGVyLWNhcmQtaGVpZ2h0KSk7XG4gIHRvcDogY2FsYyh2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICsgdmFyKC0taGVhZGVyLWNhcmQtaGVpZ2h0KSk7XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQgLmFuc3dlcjItYmxvY2sge1xuICBoZWlnaHQ6IGNhbGMoNTAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAtICh2YXIoLS1mcm9udC1zZXBhcmF0b3IpIC8gMikgLSB2YXIoLS1mb290ZXItY2FyZC1oZWlnaHQpKTtcbiAgYm90dG9tOiBjYWxjKHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKyB2YXIoLS1mb290ZXItY2FyZC1oZWlnaHQpKTtcbn1cblxuLmZsaXAtY2FyZC1iYWNrIC5hbnN3ZXIxLWJsb2NrIHtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgLSAodmFyKC0tYmFjay1zZXBhcmF0b3IpIC8gMikpO1xuICB0b3A6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLmZsaXAtY2FyZC1iYWNrIC5hbnN3ZXIyLWJsb2NrIHtcbiAgaGVpZ2h0OiBjYWxjKDUwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgLSAodmFyKC0tYmFjay1zZXBhcmF0b3IpIC8gMikpO1xuICBib3R0b206IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cblxuLm9yLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gKHZhcigtLW9yLWJsb2NrLXdoKSAvIDIpKTtcbiAgbGVmdDogY2FsYyg1MCUgLSAodmFyKC0tb3ItYmxvY2std2gpIC8gMikpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiB2YXIoLS1vci1ibG9jay13aCk7XG4gIGhlaWdodDogdmFyKC0tb3ItYmxvY2std2gpO1xuICB6LWluZGV4OiAyO1xufVxuXG4ub3ItYmxvY2sgPiBkaXYge1xuICBsaW5lLWhlaWdodDogdmFyKC0tb3ItYmxvY2std2gpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmxpcC1jYXJkLWZyb250IC5zZXBhcmF0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyg1MCUgLSAodmFyKC0tZnJvbnQtc2VwYXJhdG9yKSAvIDIpKTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcbiAgaGVpZ2h0OiB2YXIoLS1mcm9udC1zZXBhcmF0b3IpO1xuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZmxpcC1jYXJkLWJhY2sgLnNlcGFyYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtICh2YXIoLS1iYWNrLXNlcGFyYXRvcikgLyAyKSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpICogMik7XG4gIGhlaWdodDogdmFyKC0tYmFjay1zZXBhcmF0b3IpO1xuICBsZWZ0OiB2YXIoLS1pbm5lci1jYXJkLXBhZGRpbmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1qdHApO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaW5mby1xdWVzdGlvbiB7XG4gIGhlaWdodDogdmFyKC0taW5mby1oZWlnaHQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogdmFyKC0taW5mby1tYXJnaW4pIDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmluZm8tcXVlc3Rpb24gLmNhdGVnb3J5IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBjYWxjKHZhcigtLWluZm8taGVpZ2h0KSArIDIwcHgpO1xufVxuXG4uaW5mby1xdWVzdGlvbiAuY2F0ZWdvcnkgPiBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1ib3JkZXItY2FyZCk7XG59XG5cbi5pbmZvLXF1ZXN0aW9uIC5hdmlzID4gaW1nIHtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWluZm8taGVpZ2h0KSAtIDMwcHgpO1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmluZm8tcXVlc3Rpb24gLmF1dGhvciB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogdmFyKC0tYm9yZGVyLWNhcmQpO1xufVxuXG4uYmFjay1hbnN3ZXIge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDg1JTtcbiAgLyogY2xlYXI6IGJvdGg7ICovXG4gIHRvcDogMjBweDtcbn1cblxuLmJhY2stcG91cmNlbnQge1xuICBmb250LXNpemU6IDRlbTtcbiAgd2lkdGg6IDg1JTtcbn1cblxuaW9uLXNsaWRlLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5xdWVzdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5iYWQtYmxvY2ssXG4uY2hhbmdlLWNhdGVnb3J5LWJsb2NrLFxuLmdvb2QtYmxvY2ssXG4uc2hhcmUtYmxvY2ssXG4uc2lnbmFsLWJsb2NrIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NXB4O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgfVxufVxuLmJhZC1ibG9jazpub3QoLnZvdGVkKTpob3ZlciA+IC5iYWQtaWNvbixcbi5nb29kLWJsb2NrOm5vdCgudm90ZWQpOmhvdmVyID4gLmdvb2QtaWNvbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0VXA7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmJhZC1ibG9jazpub3QoLnZvdGVkKTpob3ZlciA+IC5uYi12b3RlLFxuLmdvb2QtYmxvY2s6bm90KC52b3RlZCk6aG92ZXIgPiAubmItdm90ZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5iYWQtaWNvbixcbi5jaGFuZ2UtY2F0ZWdvcnktaWNvbixcbi5nb29kLWljb24sXG4uc2hhcmUtaWNvbixcbi5zaWduYWwtaWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG5cbi5iYWQtaWNvbixcbi5nb29kLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5nb29kLWJsb2NrIHtcbiAgY29sb3I6ICNjZGRjMzk7XG59XG5cbi5iYWQtYmxvY2sge1xuICBjb2xvcjogI2YzOWMxMjtcbn1cblxuLnNpZ25hbC1ibG9jayB7XG4gIGNvbG9yOiAjOGU0NGFkO1xufVxuXG4uc2hhcmUtYmxvY2sge1xuICBjb2xvcjogdmFyKC0tY29sb3ItanRwKTtcbn1cblxuLmNoYW5nZS1jYXRlZ29yeS1ibG9jayB7XG4gIGNvbG9yOiAjZTUyZTMzO1xufVxuXG4ubmItdm90ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNlcmNsZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCAjQUFBO1xufVxuXG4uY2VyY2xlOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAwICNBQUE7XG59XG5cbi5jZXJjbGUgPiBpb24taWNvbiB7XG4gIG1hcmdpbi10b3A6IDdweDtcbn1cblxuLnR1LXByZWZlcmVzLWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKSAqIDIpO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRvcDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcbiAgbGVmdDogdmFyKC0taW5uZXItY2FyZC1wYWRkaW5nKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzVhM2JjO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWNhcmQtaGVpZ2h0KTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmF1dGhvci1ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLWlubmVyLWNhcmQtcGFkZGluZykgKiAyKTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBib3R0b206IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XG4gIGxlZnQ6IHZhcigtLWlubmVyLWNhcmQtcGFkZGluZyk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1YTNiYztcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1jYXJkLWhlaWdodCk7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb290ZXItY2FyZC1oZWlnaHQpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5hdXRob3ItYmxvY2sgPiBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab-game/tab-game.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tab-game/tab-game.page.ts ***!
  \*******************************************/
/*! exports provided: TabGamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabGamePage", function() { return TabGamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _providers_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/providers */ "./src/providers/providers.ts");
/* harmony import */ var _enums_boEvents_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enums/boEvents.enums */ "./src/enums/boEvents.enums.ts");
/* harmony import */ var _change_category_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-category.modal */ "./src/app/tab-game/change-category.modal.ts");







var TabGamePage = /** @class */ (function () {
    // Appelé qu'une seule fois
    function TabGamePage(api, categories, game, database, alertCtrl, toastCtrl, modalCtlr, loadingCtrl) {
        var _this = this;
        this.api = api;
        this.categories = categories;
        this.game = game;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtlr = modalCtlr;
        this.loadingCtrl = loadingCtrl;
        this.maxSlideViewed = 5;
        this.isLoading = false;
        alert("5");
        this.database.loadDB().then(function () {
            alert("6");
            _this.database.initDB('fr').then(function () {
                alert("7");
                _this.game.initQuestions(null);
                alert("8");
                _this.game.loadQuestions(20);
                alert("9");
                _this.database.startAsynTasks();
                alert("10");
            });
        });
        this.slideOpts = {
            'slidesPerView': 1
        };
    }
    TabGamePage.prototype.ionViewWillLeave = function () {
        console.log('On quitte la page de jeu');
    };
    TabGamePage.prototype.selectAnswer = function (question, answer, answerIndex) {
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
    };
    TabGamePage.prototype.vote = function (question, vote) {
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
    };
    TabGamePage.prototype.signal = function (question) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
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
                                    handler: function () {
                                        console.log('Cancel');
                                    }
                                },
                                {
                                    text: 'Signaler',
                                    handler: function (event) {
                                        _this.callEvent(question, event);
                                        _this.toast();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabGamePage.prototype.changeCategory = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtlr.create({
                            showBackdrop: true,
                            animated: true,
                            component: _change_category_modal__WEBPACK_IMPORTED_MODULE_6__["ModalPage"],
                            componentProps: {
                                'categories': this.categories.categories
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TabGamePage.prototype.toast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Merci !',
                            duration: 2500,
                            position: 'bottom',
                            animated: true
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabGamePage.prototype.share = function (question) {
        console.log(question.id);
    };
    TabGamePage.prototype.callEvent = function (question, event) {
        console.log("--> callEvent " + event);
        var param = { id: 0, event: 0 };
        param.id = question.id;
        param.event = event;
        this.api.post('event', param)
            .subscribe(function (res) {
            console.log(res);
            console.log("<-- callEvent");
        }, function (err) {
            console.log(err);
            //console.error('ERROR', err);
        });
    };
    TabGamePage.prototype.showCategory = function (category) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Catégorie',
                            message: '<div class="alert-category">' +
                                '<img src="../../assets/img/categories/' + category.icon + '.png"/>' +
                                '<div class="category-block"><div class="margin-auto">' + category.label + '</div></div>' +
                                '</div>',
                            buttons: [
                                {
                                    text: 'Je ne veux faire que ca !',
                                    handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var a;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.loadingCtrl.create({
                                                        message: '<div class="loading-category text-center">' +
                                                            '<div><img class="rotating" src="../../assets/img/categories/' + category.icon + '.png"/></div>' +
                                                            '<div class="bon-courage">Bon courage ...</div>' +
                                                            '</div>',
                                                        cssClass: 'loading-category',
                                                        duration: 5000,
                                                    })];
                                                case 1:
                                                    a = _a.sent();
                                                    a.present().then(function () {
                                                        console.log('presented');
                                                        _this.game.initQuestions(category);
                                                        _this.game.loadQuestions(20, true);
                                                        console.log("chargés");
                                                        _this.dismiss();
                                                    });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                },
                                {
                                    text: 'Choisir une autre catégorie',
                                    handler: function () {
                                        _this.changeCategory();
                                    }
                                },
                                {
                                    text: 'Retour'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabGamePage.prototype.onSlideChange = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            if (index > _this.maxSlideViewed) {
                while (index != _this.maxSlideViewed) {
                    _this.slides.el.swiper.removeSlide(0);
                    index--;
                }
            }
            if (_this.slides.el.swiper.slides.length <= 15) {
                console.log("on ajoute des questions");
                _this.game.loadQuestions(20);
            }
        });
    };
    TabGamePage.prototype.dismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingCtrl.dismiss().then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TabGamePage.ctorParameters = function () { return [
        { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Api"] },
        { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Categories"] },
        { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Game"] },
        { type: _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Database"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardSlides', { 'read': null, 'static': false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TabGamePage.prototype, "slides", void 0);
    TabGamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'game',
            template: __webpack_require__(/*! raw-loader!./tab-game.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab-game/tab-game.page.html"),
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
            styles: [__webpack_require__(/*! ./tab-game.page.scss */ "./src/app/tab-game/tab-game.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_providers__WEBPACK_IMPORTED_MODULE_4__["Api"],
            _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Categories"],
            _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Game"],
            _providers_providers__WEBPACK_IMPORTED_MODULE_4__["Database"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], TabGamePage);
    return TabGamePage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnonymePipe = /** @class */ (function () {
    function AnonymePipe() {
    }
    AnonymePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (value && value.length > 0)
            return value;
        return 'anonyme';
    };
    AnonymePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'anonyme'
        })
    ], AnonymePipe);
    return AnonymePipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatToLocalePipe = /** @class */ (function () {
    function FormatToLocalePipe() {
    }
    FormatToLocalePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toLocaleString('fr-FR');
    };
    FormatToLocalePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatToLocale'
        })
    ], FormatToLocalePipe);
    return FormatToLocalePipe;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntvalPipe = /** @class */ (function () {
    function IntvalPipe() {
    }
    IntvalPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value.toFixed();
    };
    IntvalPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'intval'
        })
    ], IntvalPipe);
    return IntvalPipe;
}());



/***/ })

}]);
//# sourceMappingURL=tab-game-tab-game-module-es5.js.map