<template>
  <div>
    <blockquote class="b-thick primary">
      <p>
        <strong>SKT 에서 사용했던 SKTD.css 파일 소스</strong>
      </p>
    </blockquote>
    <div class="row">
      <div class="col-md-12">
        <section class="panel">
          <header class="panel-heading">
            <h2 class="panel-title"><strong>SKTD.css</strong></h2>
          </header>
          <div class="panel-body">
            <div class="well well-sm">
              <p>SKTD.css</p>
            </div>
            <ul>
              <li>
                <pre class="prettyprint linenums">
/* SKTD component css */
@import "calendar.css";
@import "popup.css";
@import "slider.css";
@import "validate.css";


html {
	width: 100%;
	height: 100%;
}
html, body {
	padding: 0;
    margin: 0;
	height: 100%;
}


/* Clearfix hack by Nicolas Gallagher: http://nicolasgallagher.com/micro-clearfix-hack/ */
.clearfix:before,
.clearfix:after { content: " "; /* 1 */ display: table; /* 2 */ }
.clearfix:after { clear: both; }
.clearfix { *zoom: 1; }
::-moz-selection { background: #b3d4fc;  text-shadow: none; } 
::selection { background: #b3d4fc; text-shadow: none; }





/* ==========================================================================
   Common styles
   ========================================================================== */

/* ---- content layout (START)------------------------ */
.SKTD-pageLayout-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
	/*height: 100%;
	overflow: hidden;*/
}
.SKTD-pageLayout-footer-wrapper {
	position: fixed;
	bottom:0;
	width: 100%;
	/*overflow: hidden;*/
	
}
.SKTD-pageLayout-header-wrapper {
	/*
	position: relative;
	width: 100%;
	z-index: 9999;
	overflow: hidden;
	background: #333;
	*/
	position: fixed;
    left: 0;
	height: 60px;
	width:100%;
    z-index: 10;
}
/*
.SKTD-pageLayout-header {
	width: 100%;
	line-height: 48px;
	
}
*/
.SKTD-pageLayout-content-wrapper {
	position: absolute;
	top: 0;
	bottom: 48px;
	width: 100%;
	height: auto;
}
.SKTD-pageLayout-content {
	position: relative;
	width: 100%;
	height: 100%;
}
.SKTD-pageLayout-content-left {
	/*
	float: left;
	position: absolute;
	width:50px;
	height: 100%;
	z-index:2;
	background-color: #773200;
	*/
	position: fixed;
    z-index: 11;
    height: 100%;
    background-color: #231f18;
}
.SKTD-pageLayout-content-center {
	
	position: absolute;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	
}
.SKTD-pageLayout-content-center-wrapper {
	/*
	position: relative;
	width: auto;
	height: 100%;
	overflow-y: auto;
	padding-left: 50px;
	*/
	width: auto;
}
.SKTD-pageLayout-content-right {
	float: left;
	position: fixed;
	right: 0;
	width:0;
	z-index:10;
	height: 1000px;
	
	/*
	background-color: #e8e8e8;
	border-left: 1px solid #ffffff;
	border-bottom: 1px solid #ffffff;
	color: #444444;
	-webkit-box-shadow: -1px 1px 1px #aaa;
	-moz-box-shadow: -1px 1px 1px #aaa;
	box-shadow: -1px 1px 1px #aaa;
	*/
}
.SKTD-pageLayout-footer-wrapper {
	width: 100%;
	z-index: 9999;
}
.SKTD-pageLayout-footer {
	position: relative;
	width: 100%;
}
/* ---- content layout (END)------------------------ */




/* ==========================================================================
   Page Transition styles
   ========================================================================== */
.SKTD-et-wrapper {
	position: relative;
	-webkit-perspective: 1200px;
	-moz-perspective: 1200px;
	perspective: 1200px;
	display: block;
	overflow: hidden;
}
.SKTD-et-page {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	visibility: hidden;
	overflow: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);
	-moz-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0);
	-webkit-transform-style: preserve-3d;
	-moz-transform-style: preserve-3d;
	transform-style: preserve-3d;
}
.SKTD-et-page-current {
	visibility: visible;
	z-index: 1;
}
.SKTD-et-page-ontop {
	z-index: 999;
}
/* Triggers (menu and button) */
.SKTD-et-page-transitions {
  cursor: pointer;
}
/* animation sets */

.SKTDPT-page-none {
	
}


/* move from / to  */
.SKTDPT-page-moveToLeft {
	-webkit-animation: ___SKTD-moveToLeft .6s ease both;
	-moz-animation: ___SKTD-moveToLeft .6s ease both;
	animation: ___SKTD-moveToLeft .6s ease both;
}
.SKTDPT-page-moveFromLeft {
	-webkit-animation: ___SKTD-moveFromLeft .6s ease both;
	-moz-animation: ___SKTD-moveFromLeft .6s ease both;
	animation: ___SKTD-moveFromLeft .6s ease both;
}
.SKTDPT-page-moveToRight {
	-webkit-animation: ___SKTD-moveToRight .6s ease both;
	-moz-animation: ___SKTD-moveToRight .6s ease both;
	animation: ___SKTD-moveToRight .6s ease both;
}
.SKTDPT-page-moveFromRight {
	-webkit-animation: ___SKTD-moveFromRight .6s ease both;
	-moz-animation: ___SKTD-moveFromRight .6s ease both;
	animation: ___SKTD-moveFromRight .6s ease both;
}
.SKTDPT-page-moveToTop {
	-webkit-animation: ___SKTD-moveToTop .6s ease both;
	-moz-animation: ___SKTD-moveToTop .6s ease both;
	animation: ___SKTD-moveToTop .6s ease both;
}
.SKTDPT-page-moveFromTop {
	-webkit-animation: ___SKTD-moveFromTop .6s ease both;
	-moz-animation: ___SKTD-moveFromTop .6s ease both;
	animation: ___SKTD-moveFromTop .6s ease both;
}
.SKTDPT-page-moveToBottom {
	-webkit-animation: ___SKTD-moveToBottom .6s ease both;
	-moz-animation: ___SKTD-moveToBottom .6s ease both;
	animation: ___SKTD-moveToBottom .6s ease both;
}
.SKTDPT-page-moveFromBottom {
	-webkit-animation: ___SKTD-moveFromBottom .6s ease both;
	-moz-animation: ___SKTD-moveFromBottom .6s ease both;
	animation: ___SKTD-moveFromBottom .6s ease both;
}

/* fade */
.SKTDPT-page-fade {
	-webkit-animation: ___SKTD-fade .7s ease both;
	-moz-animation: ___SKTD-fade .7s ease both;
	animation: ___SKTD-fade .7s ease both;
}

/* move from / to and fade */
.SKTDPT-page-moveToLeftFade {
	-webkit-animation: ___SKTD-moveToLeftFade .7s ease both;
	-moz-animation: ___SKTD-moveToLeftFade .7s ease both;
	animation: ___SKTD-moveToLeftFade .7s ease both;
}
.SKTDPT-page-moveFromLeftFade {
	-webkit-animation: ___SKTD-moveFromLeftFade .7s ease both;
	-moz-animation: ___SKTD-moveFromLeftFade .7s ease both;
	animation: ___SKTD-moveFromLeftFade .7s ease both;
}
.SKTDPT-page-moveToRightFade {
	-webkit-animation: ___SKTD-moveToRightFade .7s ease both;
	-moz-animation: ___SKTD-moveToRightFade .7s ease both;
	animation: ___SKTD-moveToRightFade .7s ease both;
}
.SKTDPT-page-moveFromRightFade {
	-webkit-animation: ___SKTD-moveFromRightFade .7s ease both;
	-moz-animation: ___SKTD-moveFromRightFade .7s ease both;
	animation: ___SKTD-moveFromRightFade .7s ease both;
}
.SKTDPT-page-moveToTopFade {
	-webkit-animation: ___SKTD-moveToTopFade .7s ease both;
	-moz-animation: ___SKTD-moveToTopFade .7s ease both;
	animation: ___SKTD-moveToTopFade .7s ease both;
}
.SKTDPT-page-moveFromTopFade {
	-webkit-animation: ___SKTD-moveFromTopFade .7s ease both;
	-moz-animation: ___SKTD-moveFromTopFade .7s ease both;
	animation: ___SKTD-moveFromTopFade .7s ease both;
}
.SKTDPT-page-moveToBottomFade {
	-webkit-animation: ___SKTD-moveToBottomFade .7s ease both;
	-moz-animation: ___SKTD-moveToBottomFade .7s ease both;
	animation: ___SKTD-moveToBottomFade .7s ease both;
}
.SKTDPT-page-moveFromBottomFade {
	-webkit-animation: ___SKTD-moveFromBottomFade .7s ease both;
	-moz-animation: ___SKTD-moveFromBottomFade .7s ease both;
	animation: ___SKTD-moveFromBottomFade .7s ease both;
}

/* move to with different easing */
.SKTDPT-page-moveToLeftEasing {
	-webkit-animation: ___SKTD-moveToLeft .7s ease-in-out both;
	-moz-animation: ___SKTD-moveToLeft .7s ease-in-out both;
	animation: ___SKTD-moveToLeft .7s ease-in-out both;
}
.SKTDPT-page-moveToRightEasing {
	-webkit-animation: ___SKTD-moveToRight .7s ease-in-out both;
	-moz-animation: ___SKTD-moveToRight .7s ease-in-out both;
	animation: ___SKTD-moveToRight .7s ease-in-out both;
}
.SKTDPT-page-moveToTopEasing {
	-webkit-animation: ___SKTD-moveToTop .7s ease-in-out both;
	-moz-animation: ___SKTD-moveToTop .7s ease-in-out both;
	animation: ___SKTD-moveToTop .7s ease-in-out both;
}
.SKTDPT-page-moveToBottomEasing {
	-webkit-animation: ___SKTD-moveToBottom .7s ease-in-out both;
	-moz-animation: ___SKTD-moveToBottom .7s ease-in-out both;
	animation: ___SKTD-moveToBottom .7s ease-in-out both;
}

/********************************* keyframes **************************************/

/* move from / to  */

@-webkit-keyframes ___SKTD-moveToLeft {
	to { -webkit-transform: translateX(-100%); }
}
@-moz-keyframes ___SKTD-moveToLeft {
	to { -moz-transform: translateX(-100%); }
}
@keyframes ___SKTD-moveToLeft {
	to { transform: translateX(-100%); }
}

@-webkit-keyframes ___SKTD-moveFromLeft {
	from { -webkit-transform: translateX(-99%); }
}
@-moz-keyframes ___SKTD-moveFromLeft {
	from { -moz-transform: translateX(-99%); }
}
@keyframes ___SKTD-moveFromLeft {
	from { transform: translateX(-99%); }
}

@-webkit-keyframes ___SKTD-moveToRight { 
	to { -webkit-transform: translateX(100%); }
}
@-moz-keyframes ___SKTD-moveToRight { 
	to { -moz-transform: translateX(100%); }
}
@keyframes ___SKTD-moveToRight { 
	to { transform: translateX(100%); }
}

@-webkit-keyframes ___SKTD-moveFromRight {
	from { -webkit-transform: translateX(99%); }
}
@-moz-keyframes ___SKTD-moveFromRight {
	from { -moz-transform: translateX(99%); }
}
@keyframes ___SKTD-moveFromRight {
	from { transform: translateX(99%); }
}

@-webkit-keyframes ___SKTD-moveToTop {
	to { -webkit-transform: translateY(-100%); }
}
@-moz-keyframes ___SKTD-moveToTop {
	to { -moz-transform: translateY(-100%); }
}
@keyframes ___SKTD-moveToTop {
	to { transform: translateY(-100%); }
}

@-webkit-keyframes ___SKTD-moveFromTop {
	from { -webkit-transform: translateY(-99%); }
}
@-moz-keyframes ___SKTD-moveFromTop {
	from { -moz-transform: translateY(-99%); }
}
@keyframes ___SKTD-moveFromTop {
	from { transform: translateY(-99%); }
}

@-webkit-keyframes ___SKTD-moveToBottom {
	to { -webkit-transform: translateY(100%); }
}
@-moz-keyframes ___SKTD-moveToBottom {
	to { -moz-transform: translateY(100%); }
}
@keyframes ___SKTD-moveToBottom {
	to { transform: translateY(100%); }
}

@-webkit-keyframes ___SKTD-moveFromBottom {
	from { -webkit-transform: translateY(99%); }
}
@-moz-keyframes ___SKTD-moveFromBottom {
	from { -moz-transform: translateY(99%); }
}
@keyframes ___SKTD-moveFromBottom {
	from { transform: translateY(99%); }
}

/* fade */

@-webkit-keyframes ___SKTD-fade {
	to { opacity: 0.3; }
}
@-moz-keyframes ___SKTD-fade {
	to { opacity: 0.3; }
}
@keyframes ___SKTD-fade {
	to { opacity: 0.3; }
}

/* move from / to and fade */

@-webkit-keyframes ___SKTD-moveToLeftFade {
	to { opacity: 0.3; -webkit-transform: translateX(-100%); }
}
@-moz-keyframes ___SKTD-moveToLeftFade {
	to { opacity: 0.3; -moz-transform: translateX(-100%); }
}
@keyframes ___SKTD-moveToLeftFade {
	to { opacity: 0.3; transform: translateX(-100%); }
}

@-webkit-keyframes ___SKTD-moveFromLeftFade {
	from { opacity: 0.3; -webkit-transform: translateX(-100%); }
}
@-moz-keyframes ___SKTD-moveFromLeftFade {
	from { opacity: 0.3; -moz-transform: translateX(-100%); }
}
@keyframes ___SKTD-moveFromLeftFade {
	from { opacity: 0.3; transform: translateX(-100%); }
}

@-webkit-keyframes ___SKTD-moveToRightFade {
	to { opacity: 0.3; -webkit-transform: translateX(100%); }
}
@-moz-keyframes ___SKTD-moveToRightFade {
	to { opacity: 0.3; -moz-transform: translateX(100%); }
}
@keyframes ___SKTD-moveToRightFade {
	to { opacity: 0.3; transform: translateX(100%); }
}

@-webkit-keyframes ___SKTD-moveFromRightFade {
	from { opacity: 0.3; -webkit-transform: translateX(100%); }
}
@-moz-keyframes ___SKTD-moveFromRightFade {
	from { opacity: 0.3; -moz-transform: translateX(100%); }
}
@keyframes ___SKTD-moveFromRightFade {
	from { opacity: 0.3; transform: translateX(100%); }
}

@-webkit-keyframes ___SKTD-moveToTopFade {
	to { opacity: 0.3; -webkit-transform: translateY(-100%); }
}
@-moz-keyframes ___SKTD-moveToTopFade {
	to { opacity: 0.3; -moz-transform: translateY(-100%); }
}
@keyframes ___SKTD-moveToTopFade {
	to { opacity: 0.3; transform: translateY(-100%); }
}

@-webkit-keyframes ___SKTD-moveFromTopFade {
	from { opacity: 0.3; -webkit-transform: translateY(-100%); }
}
@-moz-keyframes ___SKTD-moveFromTopFade {
	from { opacity: 0.3; -moz-transform: translateY(-100%); }
}
@keyframes ___SKTD-moveFromTopFade {
	from { opacity: 0.3; transform: translateY(-100%); }
}

@-webkit-keyframes ___SKTD-moveToBottomFade {
	to { opacity: 0.3; -webkit-transform: translateY(100%); }
}
@-moz-keyframes ___SKTD-moveToBottomFade {
	to { opacity: 0.3; -moz-transform: translateY(100%); }
}
@keyframes ___SKTD-moveToBottomFade {
	to { opacity: 0.3; transform: translateY(100%); }
}

@-webkit-keyframes ___SKTD-moveFromBottomFade {
	from { opacity: 0.3; -webkit-transform: translateY(100%); }
}
@-moz-keyframes ___SKTD-moveFromBottomFade {
	from { opacity: 0.3; -moz-transform: translateY(100%); }
}
@keyframes ___SKTD-moveFromBottomFade {
	from { opacity: 0.3; transform: translateY(100%); }
}

/* scale and fade */

.SKTDPT-page-scaleDown {
	-webkit-animation: ___SKTD-scaleDown .7s ease both;
	-moz-animation: ___SKTD-scaleDown .7s ease both;
	animation: ___SKTD-scaleDown .7s ease both;
}

.SKTDPT-page-scaleUp {
	-webkit-animation: ___SKTD-scaleUp .7s ease both;
	-moz-animation: ___SKTD-scaleUp .7s ease both;
	animation: ___SKTD-scaleUp .7s ease both;
}

.SKTDPT-page-scaleUpDown {
	-webkit-animation: ___SKTD-scaleUpDown .5s ease both;
	-moz-animation: ___SKTD-scaleUpDown .5s ease both;
	animation: ___SKTD-scaleUpDown .5s ease both;
}

.SKTDPT-page-scaleDownUp {
	-webkit-animation: ___SKTD-scaleDownUp .5s ease both;
	-moz-animation: ___SKTD-scaleDownUp .5s ease both;
	animation: ___SKTD-scaleDownUp .5s ease both;
}

.SKTDPT-page-scaleDownCenter {
	-webkit-animation: ___SKTD-scaleDownCenter .4s ease-in both;
	-moz-animation: ___SKTD-scaleDownCenter .4s ease-in both;
	animation: ___SKTD-scaleDownCenter .4s ease-in both;
}

.SKTDPT-page-scaleUpCenter {
	-webkit-animation: ___SKTD-scaleUpCenter .4s ease-out both;
	-moz-animation: ___SKTD-scaleUpCenter .4s ease-out both;
	animation: ___SKTD-scaleUpCenter .4s ease-out both;
}

/********************************* keyframes **************************************/

/* scale and fade */

@-webkit-keyframes ___SKTD-scaleDown {
	to { opacity: 0; -webkit-transform: scale(.8); }
}
@-moz-keyframes ___SKTD-scaleDown {
	to { opacity: 0; -moz-transform: scale(.8); }
}
@keyframes ___SKTD-scaleDown {
	to { opacity: 0; transform: scale(.8); }
}

@-webkit-keyframes ___SKTD-scaleUp {
	from { opacity: 0; -webkit-transform: scale(.8); }
}
@-moz-keyframes ___SKTD-scaleUp {
	from { opacity: 0; -moz-transform: scale(.8); }
}
@keyframes ___SKTD-scaleUp {
	from { opacity: 0; transform: scale(.8); }
}

@-webkit-keyframes ___SKTD-scaleUpDown {
	from { opacity: 0; -webkit-transform: scale(1.2); }
}
@-moz-keyframes ___SKTD-scaleUpDown {
	from { opacity: 0; -moz-transform: scale(1.2); }
}
@keyframes ___SKTD-scaleUpDown {
	from { opacity: 0; transform: scale(1.2); }
}

@-webkit-keyframes ___SKTD-scaleDownUp {
	to { opacity: 0; -webkit-transform: scale(1.2); }
}
@-moz-keyframes ___SKTD-scaleDownUp {
	to { opacity: 0; -moz-transform: scale(1.2); }
}
@keyframes ___SKTD-scaleDownUp {
	to { opacity: 0; transform: scale(1.2); }
}

@-webkit-keyframes ___SKTD-scaleDownCenter {
	to { opacity: 0; -webkit-transform: scale(.7); }
}
@-moz-keyframes ___SKTD-scaleDownCenter {
	to { opacity: 0; -moz-transform: scale(.7); }
}
@keyframes ___SKTD-scaleDownCenter {
	to { opacity: 0; transform: scale(.7); }
}

@-webkit-keyframes ___SKTD-scaleUpCenter {
	from { opacity: 0; -webkit-transform: scale(.7); }
}
@-moz-keyframes ___SKTD-scaleUpCenter {
	from { opacity: 0; -moz-transform: scale(.7); }
}
@keyframes ___SKTD-scaleUpCenter {
	from { opacity: 0; transform: scale(.7); }
}

/* rotate sides first and scale */

.SKTDPT-page-rotateRightSideFirst {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateRightSideFirst .8s both ease-in;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateRightSideFirst .8s both ease-in;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateRightSideFirst .8s both ease-in;
}
.SKTDPT-page-rotateLeftSideFirst {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateLeftSideFirst .8s both ease-in;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateLeftSideFirst .8s both ease-in;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateLeftSideFirst .8s both ease-in;
}
.SKTDPT-page-rotateTopSideFirst {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateTopSideFirst .8s both ease-in;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateTopSideFirst .8s both ease-in;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateTopSideFirst .8s both ease-in;
}
.SKTDPT-page-rotateBottomSideFirst {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateBottomSideFirst .8s both ease-in;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateBottomSideFirst .8s both ease-in;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateBottomSideFirst .8s both ease-in;
}

/* flip */

.SKTDPT-page-flipOutRight {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipOutRight .5s both ease-in;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipOutRight .5s both ease-in;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipOutRight .5s both ease-in;
}
.SKTDPT-page-flipInLeft {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipInLeft .5s both ease-out;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipInLeft .5s both ease-out;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipInLeft .5s both ease-out;
}
.SKTDPT-page-flipOutLeft {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipOutLeft .5s both ease-in;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipOutLeft .5s both ease-in;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipOutLeft .5s both ease-in;
}
.SKTDPT-page-flipInRight {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipInRight .5s both ease-out;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipInRight .5s both ease-out;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipInRight .5s both ease-out;
}
.SKTDPT-page-flipOutTop {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipOutTop .5s both ease-in;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipOutTop .5s both ease-in;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipOutTop .5s both ease-in;
}
.SKTDPT-page-flipInBottom {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipInBottom .5s both ease-out;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipInBottom .5s both ease-out;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipInBottom .5s both ease-out;
}
.SKTDPT-page-flipOutBottom {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipOutBottom .5s both ease-in;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipOutBottom .5s both ease-in;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipOutBottom .5s both ease-in;
}
.SKTDPT-page-flipInTop {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-flipInTop .5s both ease-out;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-flipInTop .5s both ease-out;
	transform-origin: 50% 50%;
	animation: ___SKTD-flipInTop .5s both ease-out;
}

/* rotate fall */

.SKTDPT-page-rotateFall {
	z-index : 2;
	-webkit-transform-origin: 0% 0%;
	-webkit-animation: ___SKTD-rotateFall 1s both ease-in;
	-moz-transform-origin: 0% 0%;
	-moz-animation: ___SKTD-rotateFall 1s both ease-in;
	transform-origin: 0% 0%;
	animation: ___SKTD-rotateFall 1s both ease-in;
}

/* rotate newspaper */
.SKTDPT-page-rotateOutNewspaper {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-rotateOutNewspaper .5s both ease-in;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-rotateOutNewspaper .5s both ease-in;
	transform-origin: 50% 50%;
	animation: ___SKTD-rotateOutNewspaper .5s both ease-in;
}
.SKTDPT-page-rotateInNewspaper {
	-webkit-transform-origin: 50% 50%;
	-webkit-animation: ___SKTD-rotateInNewspaper .5s both ease-out;
	-moz-transform-origin: 50% 50%;
	-moz-animation: ___SKTD-rotateInNewspaper .5s both ease-out;
	transform-origin: 50% 50%;
	animation: ___SKTD-rotateInNewspaper .5s both ease-out;
}

/* push */
.SKTDPT-page-rotatePushLeft {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotatePushLeft .8s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotatePushLeft .8s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotatePushLeft .8s both ease;
}
.SKTDPT-page-rotatePushRight {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotatePushRight .8s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotatePushRight .8s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotatePushRight .8s both ease;
}
.SKTDPT-page-rotatePushTop {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotatePushTop .8s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotatePushTop .8s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotatePushTop .8s both ease;
}
.SKTDPT-page-rotatePushBottom {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotatePushBottom .8s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotatePushBottom .8s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotatePushBottom .8s both ease;
}

/* pull */
.SKTDPT-page-rotatePullRight {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotatePullRight .8s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotatePullRight .8s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotatePullRight .8s both ease;
}
.SKTDPT-page-rotatePullLeft {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotatePullLeft .5s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotatePullLeft .5s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotatePullLeft .5s both ease;
}
.SKTDPT-page-rotatePullTop {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotatePullTop .5s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotatePullTop .5s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotatePullTop .5s both ease;
}
.SKTDPT-page-rotatePullBottom {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotatePullBottom .5s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotatePullBottom .5s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotatePullBottom .5s both ease;
}

/* fold */
.SKTDPT-page-rotateFoldRight {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateFoldRight .7s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateFoldRight .7s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateFoldRight .7s both ease;
}
.SKTDPT-page-rotateFoldLeft {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateFoldLeft .7s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateFoldLeft .7s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateFoldLeft .7s both ease;
}
.SKTDPT-page-rotateFoldTop {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateFoldTop .7s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateFoldTop .7s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateFoldTop .7s both ease;
}
.SKTDPT-page-rotateFoldBottom {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateFoldBottom .7s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateFoldBottom .7s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateFoldBottom .7s both ease;
}

/* unfold */
.SKTDPT-page-rotateUnfoldLeft {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateUnfoldLeft .7s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateUnfoldLeft .7s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateUnfoldLeft .7s both ease;
}
.SKTDPT-page-rotateUnfoldRight {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateUnfoldRight .7s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateUnfoldRight .7s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateUnfoldRight .7s both ease;
}
.SKTDPT-page-rotateUnfoldTop {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateUnfoldTop .7s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateUnfoldTop .7s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateUnfoldTop .7s both ease;
}
.SKTDPT-page-rotateUnfoldBottom {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateUnfoldBottom .7s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateUnfoldBottom .7s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateUnfoldBottom .7s both ease;
}

/* room walls */
.SKTDPT-page-rotateRoomLeftOut {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateRoomLeftOut .8s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateRoomLeftOut .8s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateRoomLeftOut .8s both ease;
}
.SKTDPT-page-rotateRoomLeftIn {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateRoomLeftIn .8s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateRoomLeftIn .8s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateRoomLeftIn .8s both ease;
}
.SKTDPT-page-rotateRoomRightOut {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateRoomRightOut .8s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateRoomRightOut .8s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateRoomRightOut .8s both ease;
}
.SKTDPT-page-rotateRoomRightIn {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateRoomRightIn .8s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateRoomRightIn .8s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateRoomRightIn .8s both ease;
}
.SKTDPT-page-rotateRoomTopOut {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateRoomTopOut .8s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateRoomTopOut .8s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateRoomTopOut .8s both ease;
}
.SKTDPT-page-rotateRoomTopIn {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateRoomTopIn .8s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateRoomTopIn .8s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateRoomTopIn .8s both ease;
}
.SKTDPT-page-rotateRoomBottomOut {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateRoomBottomOut .8s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateRoomBottomOut .8s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateRoomBottomOut .8s both ease;
}
.SKTDPT-page-rotateRoomBottomIn {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateRoomBottomIn .8s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateRoomBottomIn .8s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateRoomBottomIn .8s both ease;
}

/* cube */
.SKTDPT-page-rotateCubeLeftOut {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateCubeLeftOut .6s both ease-in;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateCubeLeftOut .6s both ease-in;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateCubeLeftOut .6s both ease-in;
}
.SKTDPT-page-rotateCubeLeftIn {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateCubeLeftIn .6s both ease-in;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateCubeLeftIn .6s both ease-in;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateCubeLeftIn .6s both ease-in;
}
.SKTDPT-page-rotateCubeRightOut {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateCubeRightOut .6s both ease-in;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateCubeRightOut .6s both ease-in;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateCubeRightOut .6s both ease-in;
}
.SKTDPT-page-rotateCubeRightIn {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateCubeRightIn .6s both ease-in;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateCubeRightIn .6s both ease-in;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateCubeRightIn .6s both ease-in;
}
.SKTDPT-page-rotateCubeTopOut {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateCubeTopOut .6s both ease-in;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateCubeTopOut .6s both ease-in;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateCubeTopOut .6s both ease-in;
}
.SKTDPT-page-rotateCubeTopIn {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateCubeTopIn .6s both ease-in;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateCubeTopIn .6s both ease-in;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateCubeTopIn .6s both ease-in;
}
.SKTDPT-page-rotateCubeBottomOut {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateCubeBottomOut .6s both ease-in;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateCubeBottomOut .6s both ease-in;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateCubeBottomOut .6s both ease-in;
}
.SKTDPT-page-rotateCubeBottomIn {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateCubeBottomIn .6s both ease-in;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateCubeBottomIn .6s both ease-in;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateCubeBottomIn .6s both ease-in;
}

/* carousel */
.SKTDPT-page-rotateCarouselLeftOut {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateCarouselLeftOut .8s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateCarouselLeftOut .8s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateCarouselLeftOut .8s both ease;
}
.SKTDPT-page-rotateCarouselLeftIn {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateCarouselLeftIn .8s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateCarouselLeftIn .8s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateCarouselLeftIn .8s both ease;
}
.SKTDPT-page-rotateCarouselRightOut {
	-webkit-transform-origin: 0% 50%;
	-webkit-animation: ___SKTD-rotateCarouselRightOut .8s both ease;
	-moz-transform-origin: 0% 50%;
	-moz-animation: ___SKTD-rotateCarouselRightOut .8s both ease;
	transform-origin: 0% 50%;
	animation: ___SKTD-rotateCarouselRightOut .8s both ease;
}
.SKTDPT-page-rotateCarouselRightIn {
	-webkit-transform-origin: 100% 50%;
	-webkit-animation: ___SKTD-rotateCarouselRightIn .8s both ease;
	-moz-transform-origin: 100% 50%;
	-moz-animation: ___SKTD-rotateCarouselRightIn .8s both ease;
	transform-origin: 100% 50%;
	animation: ___SKTD-rotateCarouselRightIn .8s both ease;
}
.SKTDPT-page-rotateCarouselTopOut {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateCarouselTopOut .8s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateCarouselTopOut .8s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateCarouselTopOut .8s both ease;
}
.SKTDPT-page-rotateCarouselTopIn {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateCarouselTopIn .8s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateCarouselTopIn .8s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateCarouselTopIn .8s both ease;
}
.SKTDPT-page-rotateCarouselBottomOut {
	-webkit-transform-origin: 50% 0%;
	-webkit-animation: ___SKTD-rotateCarouselBottomOut .8s both ease;
	-moz-transform-origin: 50% 0%;
	-moz-animation: ___SKTD-rotateCarouselBottomOut .8s both ease;
	transform-origin: 50% 0%;
	animation: ___SKTD-rotateCarouselBottomOut .8s both ease;
}
.SKTDPT-page-rotateCarouselBottomIn {
	-webkit-transform-origin: 50% 100%;
	-webkit-animation: ___SKTD-rotateCarouselBottomIn .8s both ease;
	-moz-transform-origin: 50% 100%;
	-moz-animation: ___SKTD-rotateCarouselBottomIn .8s both ease;
	transform-origin: 50% 100%;
	animation: ___SKTD-rotateCarouselBottomIn .8s both ease;
}

/* sides */
.SKTDPT-page-rotateSidesOut {
	-webkit-transform-origin: -50% 50%;
	-webkit-animation: ___SKTD-rotateSidesOut .5s both ease-in;
	-moz-transform-origin: -50% 50%;
	-moz-animation: ___SKTD-rotateSidesOut .5s both ease-in;
	transform-origin: -50% 50%;
	animation: ___SKTD-rotateSidesOut .5s both ease-in;
}
.SKTDPT-page-rotateSidesIn {
	-webkit-transform-origin: 150% 50%;
	-webkit-animation: ___SKTD-rotateSidesIn .5s both ease-out;
	-moz-transform-origin: 150% 50%;
	-moz-animation: ___SKTD-rotateSidesIn .5s both ease-out;
	transform-origin: 150% 50%;
	animation: ___SKTD-rotateSidesIn .5s both ease-out;
}

/* slide */
.SKTDPT-page-rotateSlideOut {
	-webkit-animation: ___SKTD-rotateSlideOut 1s both ease;
	-moz-animation: ___SKTD-rotateSlideOut 1s both ease;
	animation: ___SKTD-rotateSlideOut 1s both ease;
}
.SKTDPT-page-rotateSlideIn {
	-webkit-animation: ___SKTD-rotateSlideIn 1s both ease;
	-moz-animation: ___SKTD-rotateSlideIn 1s both ease;
	animation: ___SKTD-rotateSlideIn 1s both ease;
}

/********************************* keyframes **************************************/

/* rotate sides first and scale */

@-webkit-keyframes ___SKTD-rotateRightSideFirst {
	40% { -webkit-transform: rotateY(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@-moz-keyframes ___SKTD-rotateRightSideFirst {
	40% { -moz-transform: rotateY(15deg); opacity: .8; -moz-animation-timing-function: ease-out; }
	100% { -moz-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes ___SKTD-rotateRightSideFirst {
	40% { transform: rotateY(15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}

@-webkit-keyframes ___SKTD-rotateLeftSideFirst {
	40% { -webkit-transform: rotateY(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@-moz-keyframes ___SKTD-rotateLeftSideFirst {
	40% { -moz-transform: rotateY(-15deg); opacity: .8; -moz-animation-timing-function: ease-out; }
	100% { -moz-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes ___SKTD-rotateLeftSideFirst {
	40% { transform: rotateY(-15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}

@-webkit-keyframes ___SKTD-rotateTopSideFirst {
	40% { -webkit-transform: rotateX(15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@-moz-keyframes ___SKTD-rotateTopSideFirst {
	40% { -moz-transform: rotateX(15deg); opacity: .8; -moz-animation-timing-function: ease-out; }
	100% { -moz-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes ___SKTD-rotateTopSideFirst {
	40% { transform: rotateX(15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}

@-webkit-keyframes ___SKTD-rotateBottomSideFirst {
	40% { -webkit-transform: rotateX(-15deg); opacity: .8; -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@-moz-keyframes ___SKTD-rotateBottomSideFirst {
	40% { -moz-transform: rotateX(-15deg); opacity: .8; -moz-animation-timing-function: ease-out; }
	100% { -moz-transform: scale(0.8) translateZ(-200px); opacity:0; }
}
@keyframes ___SKTD-rotateBottomSideFirst {
	40% { transform: rotateX(-15deg); opacity: .8; animation-timing-function: ease-out; }
	100% { transform: scale(0.8) translateZ(-200px); opacity:0; }
}

/* flip */

@-webkit-keyframes ___SKTD-flipOutRight {
	to { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipOutRight {
	to { -moz-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipOutRight {
	to { transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}

@-webkit-keyframes ___SKTD-flipInLeft {
	from { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipInLeft {
	from { -moz-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipInLeft {
	from { transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}

@-webkit-keyframes ___SKTD-flipOutLeft {
	to { -webkit-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipOutLeft {
	to { -moz-transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipOutLeft {
	to { transform: translateZ(-1000px) rotateY(-90deg); opacity: 0.2; }
}

@-webkit-keyframes ___SKTD-flipInRight {
	from { -webkit-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipInRight {
	from { -moz-transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipInRight {
	from { transform: translateZ(-1000px) rotateY(90deg); opacity: 0.2; }
}

@-webkit-keyframes ___SKTD-flipOutTop {
	to { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipOutTop {
	to { -moz-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipOutTop {
	to { transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}

@-webkit-keyframes ___SKTD-flipInBottom {
	from { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipInBottom {
	from { -moz-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipInBottom {
	from { transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}

@-webkit-keyframes ___SKTD-flipOutBottom {
	to { -webkit-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipOutBottom {
	to { -moz-transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipOutBottom {
	to { transform: translateZ(-1000px) rotateX(-90deg); opacity: 0.2; }
}

@-webkit-keyframes ___SKTD-flipInTop {
	from { -webkit-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
@-moz-keyframes ___SKTD-flipInTop {
	from { -moz-transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}
@keyframes ___SKTD-flipInTop {
	from { transform: translateZ(-1000px) rotateX(90deg); opacity: 0.2; }
}

/* fall */

@-webkit-keyframes ___SKTD-rotateFall {
	0% { -webkit-transform: rotateZ(0deg); }
	20% { -webkit-transform: rotateZ(10deg); -webkit-animation-timing-function: ease-out; }
	40% { -webkit-transform: rotateZ(17deg); }
	60% { -webkit-transform: rotateZ(16deg); }
	100% { -webkit-transform: translateY(100%) rotateZ(17deg); }
}
@-moz-keyframes ___SKTD-rotateFall {
	0% { -moz-transform: rotateZ(0deg); }
	20% { -moz-transform: rotateZ(10deg); -moz-animation-timing-function: ease-out; }
	40% { -moz-transform: rotateZ(17deg); }
	60% { -moz-transform: rotateZ(16deg); }
	100% { -moz-transform: translateY(100%) rotateZ(17deg); }
}
@keyframes ___SKTD-rotateFall {
	0% { transform: rotateZ(0deg); }
	20% { transform: rotateZ(10deg); animation-timing-function: ease-out; }
	40% { transform: rotateZ(17deg); }
	60% { transform: rotateZ(16deg); }
	100% { transform: translateY(100%) rotateZ(17deg); }
}

/* newspaper */

@-webkit-keyframes ___SKTD-rotateOutNewspaper {
	to { -webkit-transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
}
@-moz-keyframes ___SKTD-rotateOutNewspaper {
	to { -moz-transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
}
@keyframes ___SKTD-rotateOutNewspaper {
	to { transform: translateZ(-3000px) rotateZ(360deg); opacity: 0; }
}

@-webkit-keyframes ___SKTD-rotateInNewspaper {
	from { -webkit-transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
}
@-moz-keyframes ___SKTD-rotateInNewspaper {
	from { -moz-transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
}
@keyframes ___SKTD-rotateInNewspaper {
	from { transform: translateZ(-3000px) rotateZ(-360deg); opacity: 0; }
}

/* push */

@-webkit-keyframes ___SKTD-rotatePushLeft {
	to { opacity: 0; -webkit-transform: rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotatePushLeft {
	to { opacity: 0; -moz-transform: rotateY(90deg); }
}
@keyframes ___SKTD-rotatePushLeft {
	to { opacity: 0; transform: rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotatePushRight {
	to { opacity: 0; -webkit-transform: rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotatePushRight {
	to { opacity: 0; -moz-transform: rotateY(-90deg); }
}
@keyframes ___SKTD-rotatePushRight {
	to { opacity: 0; transform: rotateY(-90deg); }
}

@-webkit-keyframes ___SKTD-rotatePushTop {
	to { opacity: 0; -webkit-transform: rotateX(-90deg); }
}
@-moz-keyframes ___SKTD-rotatePushTop {
	to { opacity: 0; -moz-transform: rotateX(-90deg); }
}
@keyframes ___SKTD-rotatePushTop {
	to { opacity: 0; transform: rotateX(-90deg); }
}

@-webkit-keyframes ___SKTD-rotatePushBottom {
	to { opacity: 0; -webkit-transform: rotateX(90deg); }
}
@-moz-keyframes ___SKTD-rotatePushBottom {
	to { opacity: 0; -moz-transform: rotateX(90deg); }
}
@keyframes ___SKTD-rotatePushBottom {
	to { opacity: 0; transform: rotateX(90deg); }
}

/* pull */

@-webkit-keyframes ___SKTD-rotatePullRight {
	from { opacity: 0; -webkit-transform: rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotatePullRight {
	from { opacity: 0; -moz-transform: rotateY(-90deg); }
}
@keyframes ___SKTD-rotatePullRight {
	from { opacity: 0; transform: rotateY(-90deg); }
}

@-webkit-keyframes ___SKTD-rotatePullLeft {
	from { opacity: 0; -webkit-transform: rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotatePullLeft {
	from { opacity: 0; -moz-transform: rotateY(90deg); }
}
@keyframes ___SKTD-rotatePullLeft {
	from { opacity: 0; transform: rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotatePullTop {
	from { opacity: 0; -webkit-transform: rotateX(-90deg); }
}
@-moz-keyframes ___SKTD-rotatePullTop {
	from { opacity: 0; -moz-transform: rotateX(-90deg); }
}
@keyframes ___SKTD-rotatePullTop {
	from { opacity: 0; transform: rotateX(-90deg); }
}

@-webkit-keyframes ___SKTD-rotatePullBottom {
	from { opacity: 0; -webkit-transform: rotateX(90deg); }
}
@-moz-keyframes ___SKTD-rotatePullBottom {
	from { opacity: 0; -moz-transform: rotateX(90deg); }
}
@keyframes ___SKTD-rotatePullBottom {
	from { opacity: 0; transform: rotateX(90deg); }
}

/* fold */

@-webkit-keyframes ___SKTD-rotateFoldRight {
	to { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotateFoldRight {
	to { opacity: 0; -moz-transform: translateX(100%) rotateY(90deg); }
}
@keyframes ___SKTD-rotateFoldRight {
	to { opacity: 0; transform: translateX(100%) rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotateFoldLeft {
	to { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotateFoldLeft {
	to { opacity: 0; -moz-transform: translateX(-100%) rotateY(-90deg); }
}
@keyframes ___SKTD-rotateFoldLeft {
	to { opacity: 0; transform: translateX(-100%) rotateY(-90deg); }
}

@-webkit-keyframes ___SKTD-rotateFoldTop {
	to { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }
}
@-moz-keyframes ___SKTD-rotateFoldTop {
	to { opacity: 0; -moz-transform: translateY(-100%) rotateX(90deg); }
}
@keyframes ___SKTD-rotateFoldTop {
	to { opacity: 0; transform: translateY(-100%) rotateX(90deg); }
}

@-webkit-keyframes ___SKTD-rotateFoldBottom {
	to { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }
}
@-moz-keyframes ___SKTD-rotateFoldBottom {
	to { opacity: 0; -moz-transform: translateY(100%) rotateX(-90deg); }
}
@keyframes ___SKTD-rotateFoldBottom {
	to { opacity: 0; transform: translateY(100%) rotateX(-90deg); }
}

/* unfold */

@-webkit-keyframes ___SKTD-rotateUnfoldLeft {
	from { opacity: 0; -webkit-transform: translateX(-100%) rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotateUnfoldLeft {
	from { opacity: 0; -moz-transform: translateX(-100%) rotateY(-90deg); }
}
@keyframes ___SKTD-rotateUnfoldLeft {
	from { opacity: 0; transform: translateX(-100%) rotateY(-90deg); }
}

@-webkit-keyframes ___SKTD-rotateUnfoldRight {
	from { opacity: 0; -webkit-transform: translateX(100%) rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotateUnfoldRight {
	from { opacity: 0; -moz-transform: translateX(100%) rotateY(90deg); }
}
@keyframes ___SKTD-rotateUnfoldRight {
	from { opacity: 0; transform: translateX(100%) rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotateUnfoldTop {
	from { opacity: 0; -webkit-transform: translateY(-100%) rotateX(90deg); }
}
@-moz-keyframes ___SKTD-rotateUnfoldTop {
	from { opacity: 0; -moz-transform: translateY(-100%) rotateX(90deg); }
}
@keyframes ___SKTD-rotateUnfoldTop {
	from { opacity: 0; transform: translateY(-100%) rotateX(90deg); }
}

@-webkit-keyframes ___SKTD-rotateUnfoldBottom {
	from { opacity: 0; -webkit-transform: translateY(100%) rotateX(-90deg); }
}
@-moz-keyframes ___SKTD-rotateUnfoldBottom {
	from { opacity: 0; -moz-transform: translateY(100%) rotateX(-90deg); }
}
@keyframes ___SKTD-rotateUnfoldBottom {
	from { opacity: 0; transform: translateY(100%) rotateX(-90deg); }
}

/* room walls */

@-webkit-keyframes ___SKTD-rotateRoomLeftOut {
	to { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomLeftOut {
	to { opacity: .3; -moz-transform: translateX(-100%) rotateY(90deg); }
}
@keyframes ___SKTD-rotateRoomLeftOut {
	to { opacity: .3; transform: translateX(-100%) rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotateRoomLeftIn {
	from { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomLeftIn {
	from { opacity: .3; -moz-transform: translateX(100%) rotateY(-90deg); }
}
@keyframes ___SKTD-rotateRoomLeftIn {
	from { opacity: .3; transform: translateX(100%) rotateY(-90deg); }
}

@-webkit-keyframes ___SKTD-rotateRoomRightOut {
	to { opacity: .3; -webkit-transform: translateX(100%) rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomRightOut {
	to { opacity: .3; -moz-transform: translateX(100%) rotateY(-90deg); }
}
@keyframes ___SKTD-rotateRoomRightOut {
	to { opacity: .3; transform: translateX(100%) rotateY(-90deg); }
}

@-webkit-keyframes ___SKTD-rotateRoomRightIn {
	from { opacity: .3; -webkit-transform: translateX(-100%) rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomRightIn {
	from { opacity: .3; -moz-transform: translateX(-100%) rotateY(90deg); }
}
@keyframes ___SKTD-rotateRoomRightIn {
	from { opacity: .3; transform: translateX(-100%) rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotateRoomTopOut {
	to { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomTopOut {
	to { opacity: .3; -moz-transform: translateY(-100%) rotateX(-90deg); }
}
@keyframes ___SKTD-rotateRoomTopOut {
	to { opacity: .3; transform: translateY(-100%) rotateX(-90deg); }
}

@-webkit-keyframes ___SKTD-rotateRoomTopIn {
	from { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomTopIn {
	from { opacity: .3; -moz-transform: translateY(100%) rotateX(90deg); }
}
@keyframes ___SKTD-rotateRoomTopIn {
	from { opacity: .3; transform: translateY(100%) rotateX(90deg); }
}

@-webkit-keyframes ___SKTD-rotateRoomBottomOut {
	to { opacity: .3; -webkit-transform: translateY(100%) rotateX(90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomBottomOut {
	to { opacity: .3; -moz-transform: translateY(100%) rotateX(90deg); }
}
@keyframes ___SKTD-rotateRoomBottomOut {
	to { opacity: .3; transform: translateY(100%) rotateX(90deg); }
}

@-webkit-keyframes ___SKTD-rotateRoomBottomIn {
	from { opacity: .3; -webkit-transform: translateY(-100%) rotateX(-90deg); }
}
@-moz-keyframes ___SKTD-rotateRoomBottomIn {
	from { opacity: .3; -moz-transform: translateY(-100%) rotateX(-90deg); }
}
@keyframes ___SKTD-rotateRoomBottomIn {
	from { opacity: .3; transform: translateY(-100%) rotateX(-90deg); }
}

/* cube */

@-webkit-keyframes ___SKTD-rotateCubeLeftOut {
	50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
	100% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotateCubeLeftOut {
	50% { -moz-animation-timing-function: ease-out;  -moz-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
	100% { opacity: .3; -moz-transform: translateX(-100%) rotateY(-90deg); }
}
@keyframes ___SKTD-rotateCubeLeftOut {
	50% { animation-timing-function: ease-out;  transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
	100% { opacity: .3; transform: translateX(-100%) rotateY(-90deg); }
}

@-webkit-keyframes ___SKTD-rotateCubeLeftIn {
	0% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }
	50% { -webkit-animation-timing-function: ease-out;  -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
}
@-moz-keyframes ___SKTD-rotateCubeLeftIn {
	0% { opacity: .3; -moz-transform: translateX(100%) rotateY(90deg); }
	50% { -moz-animation-timing-function: ease-out;  -moz-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
}
@keyframes ___SKTD-rotateCubeLeftIn {
	0% { opacity: .3; transform: translateX(100%) rotateY(90deg); }
	50% { animation-timing-function: ease-out;  transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
}

@-webkit-keyframes ___SKTD-rotateCubeRightOut {
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
	100% { opacity: .3; -webkit-transform: translateX(100%) rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotateCubeRightOut {
	50% { -moz-animation-timing-function: ease-out; -moz-transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
	100% { opacity: .3; -moz-transform: translateX(100%) rotateY(90deg); }
}
@keyframes ___SKTD-rotateCubeRightOut {
	50% { animation-timing-function: ease-out; transform: translateX(50%) translateZ(-200px) rotateY(45deg); }
	100% { opacity: .3; transform: translateX(100%) rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotateCubeRightIn {
	0% { opacity: .3; -webkit-transform: translateX(-100%) rotateY(-90deg); }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
}
@-moz-keyframes ___SKTD-rotateCubeRightIn {
	0% { opacity: .3; -moz-transform: translateX(-100%) rotateY(-90deg); }
	50% { -moz-animation-timing-function: ease-out; -moz-transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
}
@keyframes ___SKTD-rotateCubeRightIn {
	0% { opacity: .3; transform: translateX(-100%) rotateY(-90deg); }
	50% { animation-timing-function: ease-out; transform: translateX(-50%) translateZ(-200px) rotateY(-45deg); }
}

@-webkit-keyframes ___SKTD-rotateCubeTopOut {
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
	100% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }
}
@-moz-keyframes ___SKTD-rotateCubeTopOut {
	50% { -moz-animation-timing-function: ease-out; -moz-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
	100% { opacity: .3; -moz-transform: translateY(-100%) rotateX(90deg); }
}
@keyframes ___SKTD-rotateCubeTopOut {
	50% { animation-timing-function: ease-out; transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
	100% { opacity: .3; transform: translateY(-100%) rotateX(90deg); }
}

@-webkit-keyframes ___SKTD-rotateCubeTopIn {
	0% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
}
@-moz-keyframes ___SKTD-rotateCubeTopIn {
	0% { opacity: .3; -moz-transform: translateY(100%) rotateX(-90deg); }
	50% { -moz-animation-timing-function: ease-out; -moz-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
}
@keyframes ___SKTD-rotateCubeTopIn {
	0% { opacity: .3; transform: translateY(100%) rotateX(-90deg); }
	50% { animation-timing-function: ease-out; transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
}

@-webkit-keyframes ___SKTD-rotateCubeBottomOut {
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
	100% { opacity: .3; -webkit-transform: translateY(100%) rotateX(-90deg); }
}
@-moz-keyframes ___SKTD-rotateCubeBottomOut {
	50% { -moz-animation-timing-function: ease-out; -moz-transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
	100% { opacity: .3; -moz-transform: translateY(100%) rotateX(-90deg); }
}
@keyframes ___SKTD-rotateCubeBottomOut {
	50% { animation-timing-function: ease-out; transform: translateY(50%) translateZ(-200px) rotateX(-45deg); }
	100% { opacity: .3; transform: translateY(100%) rotateX(-90deg); }
}

@-webkit-keyframes ___SKTD-rotateCubeBottomIn {
	0% { opacity: .3; -webkit-transform: translateY(-100%) rotateX(90deg); }
	50% { -webkit-animation-timing-function: ease-out; -webkit-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
}
@-moz-keyframes ___SKTD-rotateCubeBottomIn {
	0% { opacity: .3; -moz-transform: translateY(-100%) rotateX(90deg); }
	50% { -moz-animation-timing-function: ease-out; -moz-transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
}
@keyframes ___SKTD-rotateCubeBottomIn {
	0% { opacity: .3; transform: translateY(-100%) rotateX(90deg); }
	50% { animation-timing-function: ease-out; transform: translateY(-50%) translateZ(-200px) rotateX(45deg); }
}

/* carousel */

@-webkit-keyframes ___SKTD-rotateCarouselLeftOut {
	to { opacity: .3; -webkit-transform: translateX(-150%) scale(.4) rotateY(-65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselLeftOut {
	to { opacity: .3; -moz-transform: translateX(-150%) scale(.4) rotateY(-65deg); }
}
@keyframes ___SKTD-rotateCarouselLeftOut {
	to { opacity: .3; transform: translateX(-150%) scale(.4) rotateY(-65deg); }
}

@-webkit-keyframes ___SKTD-rotateCarouselLeftIn {
	from { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselLeftIn {
	from { opacity: .3; -moz-transform: translateX(200%) scale(.4) rotateY(65deg); }
}
@keyframes ___SKTD-rotateCarouselLeftIn {
	from { opacity: .3; transform: translateX(200%) scale(.4) rotateY(65deg); }
}

@-webkit-keyframes ___SKTD-rotateCarouselRightOut {
	to { opacity: .3; -webkit-transform: translateX(200%) scale(.4) rotateY(65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselRightOut {
	to { opacity: .3; -moz-transform: translateX(200%) scale(.4) rotateY(65deg); }
}
@keyframes ___SKTD-rotateCarouselRightOut {
	to { opacity: .3; transform: translateX(200%) scale(.4) rotateY(65deg); }
}

@-webkit-keyframes ___SKTD-rotateCarouselRightIn {
	from { opacity: .3; -webkit-transform: translateX(-200%) scale(.4) rotateY(-65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselRightIn {
	from { opacity: .3; -moz-transform: translateX(-200%) scale(.4) rotateY(-65deg); }
}
@keyframes ___SKTD-rotateCarouselRightIn {
	from { opacity: .3; transform: translateX(-200%) scale(.4) rotateY(-65deg); }
}

@-webkit-keyframes ___SKTD-rotateCarouselTopOut {
	to { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselTopOut {
	to { opacity: .3; -moz-transform: translateY(-200%) scale(.4) rotateX(65deg); }
}
@keyframes ___SKTD-rotateCarouselTopOut {
	to { opacity: .3; transform: translateY(-200%) scale(.4) rotateX(65deg); }
}

@-webkit-keyframes ___SKTD-rotateCarouselTopIn {
	from { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselTopIn {
	from { opacity: .3; -moz-transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
@keyframes ___SKTD-rotateCarouselTopIn {
	from { opacity: .3; transform: translateY(200%) scale(.4) rotateX(-65deg); }
}

@-webkit-keyframes ___SKTD-rotateCarouselBottomOut {
	to { opacity: .3; -webkit-transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselBottomOut {
	to { opacity: .3; -moz-transform: translateY(200%) scale(.4) rotateX(-65deg); }
}
@keyframes ___SKTD-rotateCarouselBottomOut {
	to { opacity: .3; transform: translateY(200%) scale(.4) rotateX(-65deg); }
}

@-webkit-keyframes ___SKTD-rotateCarouselBottomIn {
	from { opacity: .3; -webkit-transform: translateY(-200%) scale(.4) rotateX(65deg); }
}
@-moz-keyframes ___SKTD-rotateCarouselBottomIn {
	from { opacity: .3; -moz-transform: translateY(-200%) scale(.4) rotateX(65deg); }
}
@keyframes ___SKTD-rotateCarouselBottomIn {
	from { opacity: .3; transform: translateY(-200%) scale(.4) rotateX(65deg); }
}

/* sides */

@-webkit-keyframes ___SKTD-rotateSidesOut {
	to { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(90deg); }
}
@-moz-keyframes ___SKTD-rotateSidesOut {
	to { opacity: 0; -moz-transform: translateZ(-500px) rotateY(90deg); }
}
@keyframes ___SKTD-rotateSidesOut {
	to { opacity: 0; transform: translateZ(-500px) rotateY(90deg); }
}

@-webkit-keyframes ___SKTD-rotateSidesIn {
	from { opacity: 0; -webkit-transform: translateZ(-500px) rotateY(-90deg); }
}
@-moz-keyframes ___SKTD-rotateSidesIn {
	from { opacity: 0; -moz-transform: translateZ(-500px) rotateY(-90deg); }
}
@keyframes ___SKTD-rotateSidesIn {
	from { opacity: 0; transform: translateZ(-500px) rotateY(-90deg); }
}

/* slide */

@-webkit-keyframes ___SKTD-rotateSlideOut {
	25% { opacity: .5; -webkit-transform: translateZ(-500px); }
	75% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }
	100% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(-200%); }
}
@-moz-keyframes ___SKTD-rotateSlideOut {
	25% { opacity: .5; -moz-transform: translateZ(-500px); }
	75% { opacity: .5; -moz-transform: translateZ(-500px) translateX(-200%); }
	100% { opacity: .5; -moz-transform: translateZ(-500px) translateX(-200%); }
}
@keyframes ___SKTD-rotateSlideOut {
	25% { opacity: .5; transform: translateZ(-500px); }
	75% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }
	100% { opacity: .5; transform: translateZ(-500px) translateX(-200%); }
}

@-webkit-keyframes ___SKTD-rotateSlideIn {
	0%, 25% { opacity: .5; -webkit-transform: translateZ(-500px) translateX(200%); }
	75% { opacity: .5; -webkit-transform: translateZ(-500px); }
	100% { opacity: 1; -webkit-transform: translateZ(0) translateX(0); }
}
@-moz-keyframes ___SKTD-rotateSlideIn {
	0%, 25% { opacity: .5; -moz-transform: translateZ(-500px) translateX(200%); }
	75% { opacity: .5; -moz-transform: translateZ(-500px); }
	100% { opacity: 1; -moz-transform: translateZ(0) translateX(0); }
}
@keyframes ___SKTD-rotateSlideIn {
	0%, 25% { opacity: .5; transform: translateZ(-500px) translateX(200%); }
	75% { opacity: .5; transform: translateZ(-500px); }
	100% { opacity: 1; transform: translateZ(0) translateX(0); }
}

/* animation delay classes */

.SKTDPT-page-delay100 {
	-webkit-animation-delay: .1s;
	-moz-animation-delay: .1s;
	animation-delay: .1s;
}
.SKTDPT-page-delay180 {
	-webkit-animation-delay: .180s;
	-moz-animation-delay: .180s;
	animation-delay: .180s;
}
.SKTDPT-page-delay200 {
	-webkit-animation-delay: .2s;
	-moz-animation-delay: .2s;
	animation-delay: .2s;
}
.SKTDPT-page-delay300 {
	-webkit-animation-delay: .3s;
	-moz-animation-delay: .3s;
	animation-delay: .3s;
}
.SKTDPT-page-delay400 {
	-webkit-animation-delay: .4s;
	-moz-animation-delay: .4s;
	animation-delay: .4s;
}
.SKTDPT-page-delay500 {
	-webkit-animation-delay: .5s;
	-moz-animation-delay: .5s;
	animation-delay: .5s;
}
.SKTDPT-page-delay700 {
	-webkit-animation-delay: .7s;
	-moz-animation-delay: .7s;
	animation-delay: .7s;
}
.SKTDPT-page-delay1000 {
	-webkit-animation-delay: 1s;
	-moz-animation-delay: 1s;
	animation-delay: 1s;
}


/* ==========================================================================
   SKTD Loading styles
   ========================================================================== */
/*
 Dom Sammut 2014
 -------------------------
 www.domsammut.com
 www.twitter.com/domsammut
*/

@-moz-keyframes SKTD-rotate-loading {
    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-o-keyframes SKTD-rotate-loading {
    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-webkit-keyframes SKTD-rotate-loading {
    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@keyframes SKTD-rotate-loading {
    0%  {transform: rotate(0deg);-ms-transform: rotate(0deg); -webkit-transform: rotate(0deg); -o-transform: rotate(0deg); -moz-transform: rotate(0deg);}
    100% {transform: rotate(360deg);-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); -o-transform: rotate(360deg); -moz-transform: rotate(360deg);}
}

@-moz-keyframes SKTD-loading-text-opacity {
    0%  {opacity: 0}
    20% {opacity: 0}
    50% {opacity: 1}
    100%{opacity: 0}
}


@-o-keyframes SKTD-loading-text-opacity {
    0%  {opacity: 0}
    20% {opacity: 0}
    50% {opacity: 1}
    100%{opacity: 0}
}

@-webkit-keyframes SKTD-loading-text-opacity {
    0%  {opacity: 0}
    20% {opacity: 0}
    50% {opacity: 1}
    100%{opacity: 0}
}

@keyframes SKTD-loading-text-opacity {
    0%  {opacity: 0}
    20% {opacity: 0}
    50% {opacity: 1}
    100%{opacity: 0}
}

.SKTD-loading-wrapper {
	display:none;
	position:fixed;
	top:0;
	width:100%;
	height:100%;
	z-index:9999;
	background-color:#000;
	opacity: 0.4;
	filter: alpha(opacity=40);
}

.SKTD-loading-container,
.SKTD-loading {
    height: 100px;
    position: relative;
    width: 100px;
    border-radius: 100%;
}

.SKTD-loading-container { margin: 40px auto; top:50%; }

.SKTD-loading {
    border: 2px solid transparent;
    border-color: transparent #fff transparent #FFF;
    -moz-animation: SKTD-rotate-loading 1.5s linear 0s infinite normal;
    -moz-transform-origin: 50% 50%;
    -o-animation: SKTD-rotate-loading 1.5s linear 0s infinite normal;
    -o-transform-origin: 50% 50%;
    -webkit-animation: SKTD-rotate-loading 1.5s linear 0s infinite normal;
    -webkit-transform-origin: 50% 50%;
    animation: SKTD-rotate-loading 1.5s linear 0s infinite normal;
    transform-origin: 50% 50%;
}

.SKTD-loading-container:hover .SKTD-loading {
    border-color: transparent #E45635 transparent #E45635;
}
.SKTD-loading-container:hover .SKTD-loading,
.SKTD-loading-container .SKTD-loading {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}

.SKTD-loading-text {
    -moz-animation: SKTD-loading-text-opacity 2s linear 0s infinite normal;
    -o-animation: SKTD-loading-text-opacity 2s linear 0s infinite normal;
    -webkit-animation: SKTD-loading-text-opacity 2s linear 0s infinite normal;
    animation: SKTD-loading-text-opacity 2s linear 0s infinite normal;
    color: #ffffff;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 10px;
    font-weight: bold;
    margin-top: 42px;
    opacity: 0;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 0;
    width: 100px;
} 










</pre
                >
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'SktdCss',
})
export default class SktdCss extends Vue {
  private mounted() {
    window.prettyPrint();
  }
}
</script>
