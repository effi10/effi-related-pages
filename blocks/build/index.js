/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/networking.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/networking.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const networking = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 2.8c-2.9 0-5.5.9-7.7 2.4l1.3 1.5c1.8-1.2 3.9-1.9 6.4-1.9s4.6.7 6.4 1.9l1.3-1.5C17.5 3.7 14.9 2.8 12 2.8zm0 3c-1.8 0-3.5.5-5 1.4l1.3 1.5c1.2-.7 2.6-1.1 4.2-1.1s3 .4 4.2 1.1l1.3-1.5c-1.5-.9-3.2-1.4-5-1.4zm0 3c-1 0-1.9.2-2.8.6l1.3 1.5c.5-.2.9-.3 1.5-.3s1 .1 1.5.3l1.3-1.5c-.9-.4-1.8-.6-2.8-.6zm0 4c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 1.5c1.9 0 3.5 1.6 3.5 3.5S13.9 20 12 20s-3.5-1.6-3.5-3.5 1.6-3.5 3.5-3.5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (networking);
//# sourceMappingURL=networking.js.map

/***/ }),

/***/ "./blocks/related-pages/block.json":
/*!*****************************************!*\
  !*** ./blocks/related-pages/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"effi-related-pages/related-pages","version":"1.0.0","title":"Pages Associées","category":"widgets","icon":"networking","description":"Affiche une liste ou une grille de pages enfants ou sœurs.","keywords":["pages","enfants","soeurs","maillage","interne"],"supports":{"html":false,"spacing":{"margin":true,"padding":true}},"attributes":{"relationType":{"type":"string","default":"children"},"postCount":{"type":"number","default":6},"displayAs":{"type":"string","default":"grid"},"gridColumns":{"type":"number","default":3},"showImage":{"type":"boolean","default":true},"imageSize":{"type":"string","default":"medium"},"imageRatio":{"type":"string","default":"16:9"},"imageCrop":{"type":"boolean","default":true},"titleTag":{"type":"string","default":"h3"},"showExcerpt":{"type":"boolean","default":true},"excerptLength":{"type":"number","default":20}},"textdomain":"effi-related-pages","editorScript":"file:../build/index.js","editorStyle":"file:../build/index.css","style":"file:../build/style-index.css","render":"file:../../includes/render-block.php"}');

/***/ }),

/***/ "./blocks/related-pages/editor.scss":
/*!******************************************!*\
  !*** ./blocks/related-pages/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/related-pages/style.scss":
/*!*****************************************!*\
  !*** ./blocks/related-pages/style.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./blocks/related-pages/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.json */ "./blocks/related-pages/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./blocks/related-pages/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./blocks/related-pages/style.scss");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/networking.js");









// Fallback pour les anciennes versions de WP
const EffiNumberControl = _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl || _wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl;
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_6__.name, {
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
  edit: ({
    attributes,
    setAttributes
  }) => {
    const {
      relationType,
      postCount,
      displayAs,
      gridColumns,
      showImage,
      imageSize,
      imageRatio,
      imageCrop,
      titleTag,
      showExcerpt,
      excerptLength
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Requête', 'effi-related-pages')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type de relation', 'effi-related-pages'),
      value: relationType,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pages enfants', 'effi-related-pages'),
        value: 'children'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Pages sœurs', 'effi-related-pages'),
        value: 'sisters'
      }],
      onChange: value => setAttributes({
        relationType: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EffiNumberControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Nombre d’éléments à afficher', 'effi-related-pages'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('0 pour afficher tous les éléments.', 'effi-related-pages'),
      value: postCount,
      onChange: value => setAttributes({
        postCount: parseInt(value, 10)
      }),
      min: 0
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Affichage', 'effi-related-pages'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Format d\'affichage', 'effi-related-pages'),
      selected: displayAs,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Liste', 'effi-related-pages'),
        value: 'list'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Grille', 'effi-related-pages'),
        value: 'grid'
      }],
      onChange: value => setAttributes({
        displayAs: value
      })
    }), displayAs === 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Nombre de colonnes', 'effi-related-pages'),
      value: gridColumns,
      onChange: value => setAttributes({
        gridColumns: value
      }),
      min: 1,
      max: 4
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image à la une', 'effi-related-pages'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Afficher l’image à la une', 'effi-related-pages'),
      checked: showImage,
      onChange: isChecked => setAttributes({
        showImage: isChecked
      })
    }), showImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Taille de l’image', 'effi-related-pages'),
      value: imageSize,
      options: [{
        label: 'Thumbnail',
        value: 'thumbnail'
      }, {
        label: 'Medium',
        value: 'medium'
      }, {
        label: 'Large',
        value: 'large'
      }, {
        label: 'Full',
        value: 'full'
      }],
      onChange: value => setAttributes({
        imageSize: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ratio de l’image', 'effi-related-pages'),
      value: imageRatio,
      options: [{
        label: '1:1',
        value: '1:1'
      }, {
        label: '16:9',
        value: '16:9'
      }, {
        label: '4:3',
        value: '4:3'
      }],
      onChange: value => setAttributes({
        imageRatio: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Recadrer l\'image', 'effi-related-pages'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Assure que l\'image remplit le conteneur en la coupant si besoin.', 'effi-related-pages'),
      checked: imageCrop,
      onChange: isChecked => setAttributes({
        imageCrop: isChecked
      })
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contenu', 'effi-related-pages'),
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Balise HTML du titre', 'effi-related-pages'),
      value: titleTag,
      options: [{
        label: 'SPAN',
        value: 'span'
      }, {
        label: 'H2',
        value: 'h2'
      }, {
        label: 'H3',
        value: 'h3'
      }, {
        label: 'H4',
        value: 'h4'
      }, {
        label: 'H5',
        value: 'h5'
      }, {
        label: 'H6',
        value: 'h6'
      }],
      onChange: value => setAttributes({
        titleTag: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Afficher l’extrait', 'effi-related-pages'),
      checked: showExcerpt,
      onChange: isChecked => setAttributes({
        showExcerpt: isChecked
      })
    }), showExcerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EffiNumberControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Nombre de mots max pour l’extrait', 'effi-related-pages'),
      value: excerptLength,
      onChange: value => setAttributes({
        excerptLength: parseInt(value, 10)
      }),
      min: 5,
      max: 100
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
      block: _block_json__WEBPACK_IMPORTED_MODULE_6__.name,
      attributes: attributes
    })));
  },
  // Le save est géré par PHP, donc on retourne null
  save: () => null
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map