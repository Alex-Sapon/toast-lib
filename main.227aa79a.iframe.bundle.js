(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/toast.stories.jsx":"./src/stories/toast.stories.jsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"./src/assets/icons/error.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/error.ab809355.svg"},"./src/assets/icons/info.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/info.56f328c4.svg"},"./src/assets/icons/success.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/success.bed32833.svg"},"./src/assets/icons/warning.svg":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/warning.00ab24f1.svg"},"./src/stories/toast.stories.jsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToastExample",(function(){return ToastExample}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,animation_templateObject,animation_templateObject2,animation_templateObject3,animation_templateObject4,animation_templateObject5,animation_templateObject6,animation_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,styles_templateObject,react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),prop_types=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types_default=__webpack_require__.n(prop_types),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),react_dom_default=__webpack_require__.n(react_dom),helpers_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),taggedTemplateLiteralLoose=(__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js")),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Container=styled_components_browser_esm.b.div(_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n  display: grid;\n  grid-template-columns: 40px 1fr 25px;\n  gap: 10px;\n  border-radius: 8px;\n  padding: .5rem;\n  width: 370px;\n  height: 75px;\n  align-items: center;\n  color: ",";\n  background-color: ",";\n  box-shadow: 0 3px 9px 2px rgba(34, 60, 80, .1);\n  z-index: 900;\n  overflow: hidden;\n  cursor: pointer;\n  user-select: none;\n  animation: .6s ease 0s forwards normal ",",\n  .6s ease ","ms forwards alternate-reverse ",";\n}\n"])),(function(_ref){return _ref.styles.color}),(function(_ref2){return _ref2.styles.backgroundColor}),(function(_ref3){return _ref3.animation}),(function(_ref4){return _ref4.autoClose}),(function(_ref5){return _ref5.animation})),Icon=styled_components_browser_esm.b.div(_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(["\n  justify-self: center;\n  background: center / contain no-repeat url(",");\n  height: 30px;\n  width: 30px;\n"])),(function(_ref6){return _ref6.styles.icon})),TextWrapper=styled_components_browser_esm.b.div(_templateObject3||(_templateObject3=taggedTemplateLiteralLoose_default()([""]))),Title=styled_components_browser_esm.b.div(_templateObject4||(_templateObject4=taggedTemplateLiteralLoose_default()(["\n  font-size: 2rem;\n  margin-bottom: 4px;\n"]))),Description=styled_components_browser_esm.b.div(_templateObject5||(_templateObject5=taggedTemplateLiteralLoose_default()(["\n  font-size: 1.6rem\n"]))),Close=styled_components_browser_esm.b.button(_templateObject6||(_templateObject6=taggedTemplateLiteralLoose_default()(["\n  border: none;\n  outline: none;\n  padding: 0;\n  background: transparent;\n  width: 100%;\n  height: 20px;\n  align-self: flex-start;\n  position: relative;\n\n  &::before {\n    content: '✖';\n    position: absolute;\n    top: 0;\n    right: 5px;\n    font-size: 1.5rem;\n    cursor: pointer;\n    color: ",";\n  }\n"])),(function(props){return props.color})),ProgressBar=styled_components_browser_esm.b.div(_templateObject7||(_templateObject7=taggedTemplateLiteralLoose_default()(["\n  content: '';\n  position: absolute;\n  height: 5px;\n  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 2px;\n  animation: fill ","ms linear forwards;\n\n  @keyframes fill {\n    100% {\n      width: 0\n    }\n    0% {\n      width: 100%\n    }\n"])),(function(_ref7){return _ref7.autoClose})),fade={"top-left":Object(styled_components_browser_esm.c)(animation_templateObject||(animation_templateObject=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(-150%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  "]))),"top-right":Object(styled_components_browser_esm.c)(animation_templateObject2||(animation_templateObject2=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(150%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  "]))),"top-middle":Object(styled_components_browser_esm.c)(animation_templateObject3||(animation_templateObject3=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateY(-150%);\n      opacity: 0.5;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  "]))),"bottom-left":Object(styled_components_browser_esm.c)(animation_templateObject4||(animation_templateObject4=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(-150%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  "]))),"bottom-right":Object(styled_components_browser_esm.c)(animation_templateObject5||(animation_templateObject5=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(150%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateX(0);\n      opacity: 1;\n    }\n  "]))),"bottom-middle":Object(styled_components_browser_esm.c)(animation_templateObject6||(animation_templateObject6=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateY(150%);\n      opacity: 0;\n    }\n    100% {\n      transform: translateY(0);\n      opacity: 1;\n    }\n  "])))},wobble={"top-left":Object(styled_components_browser_esm.c)(animation_templateObject7||(animation_templateObject7=taggedTemplateLiteralLoose_default()(["\n    0% { transform: translateX(-150%) }\n    25% { transform: translateX(-15%) rotate(-3deg) }\n    50% { transform: translateX(10%) rotate(2deg) }\n    75% { transform: translateX(-5%) rotate(-1deg) }\n    100% { transform: translateX(0%) }\n  "]))),"top-right":Object(styled_components_browser_esm.c)(_templateObject8||(_templateObject8=taggedTemplateLiteralLoose_default()(["\n    0% { transform: translateX(150%) }\n    25% { transform: translateX(-15%) rotate(-3deg) }\n    50% { transform: translateX(10%) rotate(2deg) }\n    75% { transform: translateX(-5%) rotate(-1deg) }\n    100% { transform: translateX(0%) }\n  "]))),"top-middle":Object(styled_components_browser_esm.c)(_templateObject9||(_templateObject9=taggedTemplateLiteralLoose_default()(["\n    0% { transform: translateY(-150%) }\n    25% { transform: translateY(-15%) rotate(-3deg) }\n    50% { transform: translateY(10%) rotate(2deg) }\n    75% { transform: translateY(-5%) rotate(-1deg) }\n    100% { transform: translateY(0%) }\n  "]))),"bottom-left":Object(styled_components_browser_esm.c)(_templateObject10||(_templateObject10=taggedTemplateLiteralLoose_default()(["\n    0% { transform: translateX(-150%) }\n    25% { transform: translateX(-15%) rotate(-3deg) }\n    50% { transform: translateX(10%) rotate(2deg) }\n    75% { transform: translateX(-5%) rotate(-1deg) }\n    100% { transform: translateX(0%) }\n  "]))),"bottom-right":Object(styled_components_browser_esm.c)(_templateObject11||(_templateObject11=taggedTemplateLiteralLoose_default()(["\n    0% { transform: translateX(150%) }\n    25% { transform: translateX(-15%) rotate(-3deg) }\n    50% { transform: translateX(10%) rotate(2deg) }\n    75% { transform: translateX(-5%) rotate(-1deg) }\n    100% { transform: translateX(0%) }\n  "]))),"bottom-middle":Object(styled_components_browser_esm.c)(_templateObject12||(_templateObject12=taggedTemplateLiteralLoose_default()(["\n    0% { transform: translateY(150%) }\n    25% { transform: translateY(-15%) rotate(-3deg) }\n    50% { transform: translateY(10%) rotate(2deg) }\n    75% { transform: translateY(-5%) rotate(-1deg) }\n    100% { transform: translateY(0%) }\n  "])))},bounce={"top-left":Object(styled_components_browser_esm.c)(_templateObject13||(_templateObject13=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(-150%);\n      opacity: 0;\n    }\n    40% {\n      transform: translateX(30px);\n      opacity: 1;\n    }\n    60% { transform: translateX(-20px); }\n    80% { transform: translateX(10px); }\n    100% { transform: translateX(0); }\n  "]))),"top-right":Object(styled_components_browser_esm.c)(_templateObject14||(_templateObject14=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(150%);\n      opacity: 0;\n    }\n    40% {\n      transform: translateX(-30px);\n      opacity: 1;\n    }\n    60% { transform: translateX(20px); }\n    80% { transform: translateX(-10px); }\n    100% { transform: translateX(0); }\n  "]))),"top-middle":Object(styled_components_browser_esm.c)(_templateObject15||(_templateObject15=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateY(-150%);\n      opacity: 0;\n    }\n    40% {\n      transform: translateY(30px);\n      opacity: 1;\n    }\n    60% { transform: translateY(-20px); }\n    80% { transform: translateY(10px); }\n    100% { transform: translateY(0); }\n  "]))),"bottom-left":Object(styled_components_browser_esm.c)(_templateObject16||(_templateObject16=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(-150%);\n      opacity: 0;\n    }\n    40% {\n      transform: translateX(30px);\n      opacity: 1;\n    }\n    60% { transform: translateX(-20px); }\n    80% { transform: translateX(10px); }\n    100% { transform: translateX(0); }\n  "]))),"bottom-right":Object(styled_components_browser_esm.c)(_templateObject17||(_templateObject17=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateX(150%);\n      opacity: 0;\n    }\n    40% {\n      transform: translateX(-30px);\n      opacity: 1;\n    }\n    60% { transform: translateX(20px); }\n    80% { transform: translateX(-10px); }\n    100% { transform: translateX(0); }\n  "]))),"bottom-middle":Object(styled_components_browser_esm.c)(_templateObject18||(_templateObject18=taggedTemplateLiteralLoose_default()(["\n    0% {\n      transform: translateY(150%);\n      opacity: 0;\n    }\n    40% {\n      transform: translateY(-30px);\n      opacity: 1;\n    }\n    60% { transform: translateY(20px); }\n    80% { transform: translateY(-10px); }\n    100% { transform: translateY(0); }\n  "])))},bounceUp=Object(styled_components_browser_esm.c)(_templateObject19||(_templateObject19=taggedTemplateLiteralLoose_default()(["\n  0% {\n    transform: scale(.3);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.05);\n    opacity: 1;\n  }\n  70% { transform: scale(.9); }\n  100% { transform: scale(1); }\n"]))),flip=Object(styled_components_browser_esm.c)(_templateObject20||(_templateObject20=taggedTemplateLiteralLoose_default()(["\n  0% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n  100% {\n    transform: perspective(400px);\n  }\n"]))),getAnimation_getAnimation=function getAnimation(position,type){switch(type){case"wobble":return wobble[position];case"bounce":return bounce[position];case"fade":return fade[position];case"flip":return flip;default:return bounceUp}},_excluded=(__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),["id","title","message","autoClose","remove","position","animationName"]),Toast=Object(react.memo)((function(props){var id=props.id,title=props.title,message=props.message,autoClose=props.autoClose,remove=props.remove,position=props.position,animationName=props.animationName,restStyles=objectWithoutProperties_default()(props,_excluded),color=restStyles.color,_useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),finallyAnimation=_useState2[0],setFinallyAnimation=_useState2[1],element=Object(react.useRef)(),handleAnimationEnd=function handleAnimationEnd(){return setFinallyAnimation(!0)},handleClose=Object(react.useCallback)((function(){return remove(id)}),[remove,id]);return function useDraggable(element,remove){var startPageX=Object(react.useRef)(),_useState=Object(react.useState)({pageX:0,opacity:1}),_useState2=slicedToArray_default()(_useState,2),_useState2$=_useState2[0],pageX=_useState2$.pageX,opacity=_useState2$.opacity,setStyles=_useState2[1],_useState3=Object(react.useState)(!1),_useState4=slicedToArray_default()(_useState3,2),mouseUp=_useState4[0],setMouseUp=_useState4[1];Object(react.useEffect)((function(){var elem=element.current;function handleMouseDown(event){function handleMouseMove(e){var currentPageX=e.pageX-startPageX.current;setStyles({pageX:currentPageX,opacity:Number((1-Math.abs(currentPageX/200)).toFixed(2))})}startPageX.current=event.pageX,setMouseUp(!1),document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",(function(){setMouseUp(!0),document.removeEventListener("mousemove",handleMouseMove)}),{once:!0})}return elem.addEventListener("mousedown",handleMouseDown),function(){return elem.removeEventListener("mousedown",handleMouseDown)}}),[element]),Object(react.useEffect)((function(){mouseUp&&(opacity>=0&&opacity<=1?setStyles({pageX:0,opacity:1}):remove())}),[opacity,mouseUp,remove]),Object(react.useEffect)((function(){element.current.style.cssText="\n      transform: translateX("+pageX+"px)"+(0!==pageX&&"!important")+";\n      opacity: "+opacity+(1!==opacity&&"!important")+";\n    "}),[pageX,opacity,element])}(element,handleClose),Object(react.useEffect)((function(){if(autoClose){var timerId=setTimeout((function(){handleAnimationEnd(),remove(id)}),autoClose);return function(){return clearTimeout(timerId)}}}),[remove,id,autoClose,finallyAnimation]),react_default.a.createElement(Container,{ref:element,styles:restStyles,autoClose:autoClose,animation:getAnimation_getAnimation(position,animationName),onAnimationEnd:handleAnimationEnd},react_default.a.createElement(Icon,{styles:restStyles}),react_default.a.createElement(TextWrapper,null,react_default.a.createElement(Title,null,title),react_default.a.createElement(Description,null,message)),react_default.a.createElement(Close,{onClick:handleClose,color:color}),react_default.a.createElement(ProgressBar,{autoClose:autoClose}))}));Toast.propsType={id:prop_types_default.a.string.isRequired,title:prop_types_default.a.string.isRequired,message:prop_types_default.a.string.isRequired,autoClose:prop_types_default.a.number,remove:prop_types_default.a.func.isRequired,position:prop_types_default.a.string.isRequired,color:prop_types_default.a.string.isRequired,backgroundColor:prop_types_default.a.string.isRequired,icon:prop_types_default.a.string.isRequired};var errorBoundary_styles_templateObject,SlotContainer=styled_components_browser_esm.b.div(styles_templateObject||(styles_templateObject=taggedTemplateLiteralLoose_default()(["\n  position: fixed;\n  ",";\n  margin: 4rem;\n  display: grid;\n  row-gap: ","px;\n"])),(function(_ref){return _ref.coordinates}),(function(props){return props.distance})),coordinates={"top-left":"top: 0; left: 0;","top-right":"top: 0; right: 0;","top-middle":"top: 0; left: 50%; transform: translateX(-50%);","bottom-left":"bottom: 0; left: 0;","bottom-right":"bottom: 0; right: 0;","bottom-middle":"bottom: 0; left: 50%; transform: translateX(-50%);"},ToastSlot=Object(react.memo)((function(_ref){var toasts=_ref.toasts,distance=_ref.distance,animationName=_ref.animationName;return toasts.length?react_default.a.createElement(SlotContainer,{coordinates:coordinates[toasts[0].position],distance:distance},toasts.map((function(toast){return react_default.a.createElement(Toast,extends_default()({},toast,{key:toast.id,animationName:animationName}))}))):null})),classCallCheck=(__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),classCallCheck_default=__webpack_require__.n(classCallCheck),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"),createClass_default=__webpack_require__.n(createClass),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"),inherits_default=__webpack_require__.n(inherits),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"),possibleConstructorReturn_default=__webpack_require__.n(possibleConstructorReturn),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),getPrototypeOf_default=__webpack_require__.n(getPrototypeOf),ErrorText=styled_components_browser_esm.b.h2(errorBoundary_styles_templateObject||(errorBoundary_styles_templateObject=taggedTemplateLiteralLoose_default()(["\n  text-align: center;\n"])));function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=getPrototypeOf_default()(Derived);if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return possibleConstructorReturn_default()(this,result)}}var errorBoundary_ErrorBoundary=function(_React$Component){inherits_default()(ErrorBoundary,_React$Component);var _super=_createSuper(ErrorBoundary);function ErrorBoundary(props){var _this;return classCallCheck_default()(this,ErrorBoundary),(_this=_super.call(this,props)).state={hasError:!1},_this}return createClass_default()(ErrorBoundary,[{key:"render",value:function render(){var hasError=this.state.hasError,children=this.props.children;return hasError?react_default.a.createElement(ErrorText,null,"Something wrong..."):children}}],[{key:"getDerivedStateFromError",value:function getDerivedStateFromError(){return{hasError:!0}}}]),ErrorBoundary}(react_default.a.Component);errorBoundary_ErrorBoundary.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\errorBoundary\\index.jsx"]={name:"ErrorBoundary",docgenInfo:errorBoundary_ErrorBoundary.__docgenInfo,path:"src\\components\\errorBoundary\\index.jsx"});var global_templateObject,instance,POSITIONS=["top-left","top-middle","top-right","bottom-left","bottom-middle","bottom-right"],GlobalStyles=Object(styled_components_browser_esm.a)(global_templateObject||(global_templateObject=taggedTemplateLiteralLoose_default()(["\n  *, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n  }\n  \n  html {\n    font-size: 10px;\n  }\n  \n  body {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  }\n"]))),ToastFactory={getInstance:function getInstance(){return instance||(instance={toasts:[],add:function add(toast){this.toasts.push(toast),this.worker(this.toasts)},remove:function remove(id){this.toasts=this.toasts.filter((function(toast){return toast.id!==id})),this.worker(this.toasts)},worker:function worker(){},listener:function listener(externalListenerFunction){this.worker=externalListenerFunction}}),instance}},toastContainer_ToastContainer=function ToastContainer(_ref){var distance=_ref.distance,animationName=_ref.animationName,_useState=Object(react.useState)((function(){return ToastFactory.getInstance()})),instance=slicedToArray_default()(_useState,1)[0],_useState3=Object(react.useState)((function(){return instance.toasts})),_useState4=slicedToArray_default()(_useState3,2),toasts=_useState4[0],setToasts=_useState4[1],_usePortal=function usePortal(){var _useState=Object(react.useState)(!1),_useState2=slicedToArray_default()(_useState,2),loaded=_useState2[0],setLoaded=_useState2[1];return Object(react.useEffect)((function(){var portal=document.createElement("div");return portal.setAttribute("id","toast-portal"),document.body.appendChild(portal),setLoaded(!0),function(){return portal.remove()}}),[]),{loaded:loaded}}(),loaded=_usePortal.loaded,slots=POSITIONS.map((function(position){return toasts.filter((function(toast){return toast.position===position}))}));return Object(react.useEffect)((function(){instance.listener((function(newToasts){return setToasts(newToasts)}))}),[instance]),loaded?react_dom_default.a.createPortal(react_default.a.createElement(errorBoundary_ErrorBoundary,null,slots.map((function(slot,i){return react_default.a.createElement(ToastSlot,{key:POSITIONS[i],toasts:slot,distance:distance,animationName:animationName})})),react_default.a.createElement(GlobalStyles,null)),document.getElementById("toast-portal")):null};toastContainer_ToastContainer.defaultProps={distance:15,animationName:"bottom-left"},toastContainer_ToastContainer.propsType={distance:prop_types_default.a.number,animationName:prop_types_default.a.string};var index_browser=__webpack_require__("./node_modules/nanoid/index.browser.js"),info=__webpack_require__("./src/assets/icons/info.svg"),info_default=__webpack_require__.n(info),success=__webpack_require__("./src/assets/icons/success.svg"),success_default=__webpack_require__.n(success),error=__webpack_require__("./src/assets/icons/error.svg"),error_default=__webpack_require__.n(error),warning=__webpack_require__("./src/assets/icons/warning.svg"),warning_default=__webpack_require__.n(warning),createToast_createToast=function createToast(message,options,type){var title=options.title,color=options.color,backgroundColor=options.backgroundColor,autoClose=options.autoClose,position=options.position;switch(type){case"info":return{id:Object(index_browser.a)(),title:title||"Info",message:message,color:color||"#fff",backgroundColor:backgroundColor||"#9A40D3",icon:info_default.a,autoClose:autoClose,position:position};case"warning":return{id:Object(index_browser.a)(),title:title||"Warning",message:message,color:color||"#fff",backgroundColor:backgroundColor||"#E25837",icon:warning_default.a,autoClose:autoClose,position:position};case"error":return{id:Object(index_browser.a)(),title:title||"Error",message:message,color:color||"#2E2834",backgroundColor:backgroundColor||"#F4E048",icon:error_default.a,autoClose:autoClose,position:position};case"success":return{id:Object(index_browser.a)(),title:title||"Success",message:message,color:color||"#fff",backgroundColor:backgroundColor||"#37E29A",icon:success_default.a,autoClose:autoClose,position:position}}},styles={border:"none",outline:"none",padding:"1rem",borderRadius:"5px",position:"fixed",cursor:"pointer",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",display:"flex",justifyContent:"space-between"},toast_stories_Template=(__webpack_exports__.default={title:"Toast",component:toastContainer_ToastContainer,argTypes:{title:"Info",message:"Example info description",type:{control:{type:"radio"},options:["success","info","warning","error"]},position:{control:{type:"select"},options:["bottom-right","bottom-left","bottom-middle","top-right","top-left","top-middle"]},animationName:{control:{type:"select"},options:["bounceUp","wobble","bounce","fade","flip"]},color:{control:{type:"color"}},backgroundColor:{control:{type:"color"}},distance:{control:{type:"select"},options:[10,15,20,25,30]}}},function Template(args){var type=args.type,title=args.title,message=args.message,color=args.color,backgroundColor=args.backgroundColor,autoClose=args.autoClose,position=args.position,animationName=args.animationName,distance=args.distance,_useToast=function useToast(){var amountToasts=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,_useState=Object(react.useState)((function(){return ToastFactory.getInstance()})),instance=slicedToArray_default()(_useState,1)[0],removeToast=Object(react.useCallback)((function(id){return instance.remove(id)}),[instance]),addToast=function addToast(message,options,type){if(instance.toasts.length!==amountToasts){var toast=createToast_createToast(message,options,type);instance.add(Object.assign({},toast,{remove:removeToast})),removeToast(toast)}},toaster={success:function success(message,options){return addToast(message,options,"success")},info:function info(message,options){return addToast(message,options,"info")},warning:function warning(message,options){return addToast(message,options,"warning")},error:function error(message,options){return addToast(message,options,"error")}};return{toaster:toaster}}(),toaster=_useToast.toaster;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(toastContainer_ToastContainer,{distance:distance,animationName:animationName}),react_default.a.createElement("button",{onClick:function handleClick(){toaster[type](message,{title:title,autoClose:autoClose,position:position,color:color,backgroundColor:backgroundColor})},type:"button",style:styles},"Add toast"))});toast_stories_Template.displayName="Template";var ToastExample=toast_stories_Template.bind({});ToastExample.args={type:"success",title:"Success",message:"Example success description",color:"",backgroundColor:"",autoClose:3e3,position:"bottom-left",animationName:"bounce",distance:15},ToastExample.parameters=Object.assign({storySource:{source:'args => {\r\n  const {\r\n    type,\r\n    title,\r\n    message,\r\n    color,\r\n    backgroundColor,\r\n    autoClose,\r\n    position,\r\n    animationName,\r\n    distance,\r\n  } = args;\r\n\r\n  const { toaster } = useToast();\r\n\r\n  const handleClick = () => {\r\n    toaster[type](message, {\r\n      title,\r\n      autoClose,\r\n      position,\r\n      color,\r\n      backgroundColor,\r\n    });\r\n  };\r\n\r\n  return (\r\n    <React.Fragment>\r\n      <ToastContainer distance={distance} animationName={animationName} />\r\n      <button\r\n        onClick={handleClick}\r\n        type="button"\r\n        style={styles}\r\n      >\r\n        Add toast\r\n      </button>\r\n    </React.Fragment>\r\n  );\r\n}'}},ToastExample.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);