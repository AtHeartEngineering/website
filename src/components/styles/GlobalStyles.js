import { css } from '@emotion/react';

export const baseStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

  :root {
    --gray: rgba(24, 24, 24, 1);
    --gray-light: rgba(242, 242, 242, 0.6);
    --white: rgb(242, 242, 242);
    --green: #88d848;
    --green-light: #bdff88;
    --blue: #5a9ded;
    --blue-light: #53d3e0;
    --blue-very-light: #a7f6ff;
    --violet: #9198e5;
    --violet-light: #b4bbff;
    --mauve: #cc71c2;
    --pink: #e66465;
    --pink-light: #ff9c92;
    --sunset: #ff7575;
    --sunset-light: #ffb585;
    --yellow: #ffe94d;
    --yellow-light: #fff397;
    --divider: #ff7575cc;

    --color-primary: var(--sunset-light);
    --color-secondary: var(--sunset-light);
    --color-text: var(--white);a
    --color-text-secondary: var(--light-gray);
    --color-link: var(--sunset-light);
    --color-link-bg: var(--gray);
    --color-bg-text: var(--gray);
    --color-bg-code: rgba(0, 0, 0, 0.5);
    --color-bg-panel: var(--gray);
    --color-bg: var(--color-bg-text);
    --color-border: var(--color-primary);

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
  }
  ::placeholder {
    color: var(--color-text);
  }
  html,
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    scroll-behavior: smooth;
  }

  a {
    transition: color 0.15s;
    color: var(--color-link);
  }

  .visibleMobile {
    display: none;
  }
  .visibleMobileView {
    display: none !important;
  }
  .video-responsive {
    position: relative;
    padding-bottom: 56.2%;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  .displayInline {
    display: inline-block;
  }
  .navBarToggle {
    border: 0px solid var(--color-text);
    border-radius: 4px;
    width: 36px;
    height: 33px;
    position: absolute;
    right: 20px;
    padding: 8px 5px;
    display: none;
  }
  .navBarToggle .iconBar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    margin: 0 auto;
    margin-top: 4px;
    background-color: var(--color-bg-panel);
  }
  .navBarToggle .iconBar:first-child {
    margin-top: 0px;
  }
  .video-responsive iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .diffNewLine {
    color: #22863a;
    background-color: #f0fff4;
  }

  .diffRemoveLine {
    color: red;
    background-color: #ffcccc;
  }
  .navBarParent {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
  }
  .divider {
    height: 30px;
    margin: 0 15px;
    border-right: 1px solid rgba(255, 255, 255, .11);
  }
  .navbar-default .navbar-toggle .icon-bar {
    background-color: var(--color-text) !important;
  }

  .navbar-default .navbar-toggle:focus,
  .navbar-default .navbar-toggle:hover {
    background-color: var(--color-bg-panel);
  }

  .headerWrapper {
    border-bottom: 1px solid var(--color-border);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    display: flex;
    align-items: center;
  }
  .headerTitle {
    height: auto;
    font-size: 1.75rem;
    font-weight: 400;
    color: var(--color-text) !important;
    letter-spacing: 0.1rem;
    text-shadow: 0 0 3px var(--color-text);
    padding: 0rem 1rem;
    align-self: center;
  }
  .headerTitle a {
    color: var(--color-text);
  }

  .headerTitle a:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  .logoWrapper {
    padding: 21px 0;
    padding-left: 20px;
  }

  .logoContent {
    margin-left: 1rem;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 500;
    padding-right: 10px;
  }

  /* Header section starts here */
  .removePadd {
    padding: 0 !important;
  }
  .navBarDefault {
    background-color: var(--color-bg-panel);
    display: flex;
    align-items: center;
    box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);
    padding: 0 2rem;
    position: relative;
    height: 80px;
  }
  .navBarHeader {
    display: flex;
    align-items: center;
    height: fit-content;
  }
  .navBarBrand {
    padding: 0.35rem 0rem;
    display: flex;
    align-items: center;
  }

  .navBarBrand img {
    max-height: min(80px, 3rem);
    max-width: min(80px, 3rem);
    display: inline-block;
  }
  .navBarUL li {
    list-style-type: none;
    display: flex;
  }
  .navBarUL {
    -webkit-overflow-scrolling: touch;
  }
  .navBarUL li a {
    color: var(--color-text) !important;
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    opacity: 1;
    padding: 0rem 1rem;
  }
  .navBarNav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height:100%;
    width:100%;
  }
  .navBarUL li a img,
  .navBarUL li a .shareIcon {
    width: 20px;
  }
  .navBarUL li a:hover {
    opacity: 0.7;
  }
  pre {
    border: 0 !important;
    background-color: var(--color-bg-code) !important;
  }

  pre pre {
    background-color: var(--color-bg-code) !important;
  }

  blockquote {
    color: var(--color-text-secondary);
    margin: 0px 0px 1.5rem;
    padding: 0px 0px 0px 12px;
    border-left: 4px solid var(--color-text);
    border-color: var(--color-text)
  }


  /* Header section ends here */
  .sidebarTitle {
    padding: 1.25rem 0 1rem;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    color: var(--color-text);
  }

  .sideBarShow {
    display: none;
  }

  .sidebarTitle a {
  }

  .headerNav {
    padding: 0px 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1em;
  }

  .headerNav a {
    text-decoration: none;
  }

  .headerNav a:hover {
    text-decoration: none;
  }

  .sideBarUL {
    margin-top: 1.5rem;
  }

  .sideBarUL li {
    list-style-type: none;
    width: auto;
  }

  .sideBarUL li a {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.5;
    padding: 7px 1.5rem 7px 1rem;
    padding-left: 10px;
    padding-right: 25px;
    border-style: none;
  }

  .hideFrontLine .collapser {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    z-index: 1;
    cursor: pointer;
  }

  .hideFrontLine .active > a {
    background-color: var(--color-link);
    color: var(--color-link-bg) !important;
  }
  .firstLevel ul li .collapser svg path {
    fill: var(--color-text) !important;
  }
  .active .collapser > svg > path {
    fill: var(--color-bg-panel) !important;
  }

  .firstLevel ul .item ul .item {
    border-left: 1px solid var(--color-text);
  }

  .sideBarUL .item {
    list-style: none;
    padding: 0;
  }

  .sideBarUL .item > a {
    color: var(--color-text);
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-right: 35px;
    padding-left: 15px;
  }

  .sideBarUL li a {
    color: var(--color-text);
  }

  .sideBarUL .item > a:hover {
    background-color: var(--color-link-bg);
    color: var(--color-link) !important;
  }

  .showFrontLine .item > a:hover {
    background-color: var(--color-bg-panel);
  }

  .showFrontLine .active > a {
    /* color: var(--color-text); */
    background-color: var(--color-bg-panel);
  }

  .sideBarUL .item .item {
    margin-left: 1rem;
  }

  .firstLevel > ul > .item {
    margin-left: 0 !important;
  }

  .showFrontLine .item .item {
    border-left: 1px solid var(--color-text);
    border-left-color: var(--color-text);
    padding: 0;
    width: calc(100% - 1rem) !important;
  }

  .showFrontLine .item .active > a {
    border-color: var(--color-text) !important;
    border-style: solid none solid solid;
    border-width: 1px 0px 1px 1px;
    background-color: var(--color-primary) !important;
    color: var(--color-text);
  }

  .titleWrapper {
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--color-border);
    margin-bottom: 32px;
  }

  .gitBtn {
    height: 30px;
    min-height: 30px;
    display: flex;
    align-items: center;
  }

  .gitBtn img {
    width: 15px;
    display: inline-block;
    margin-right: 5px;
  }

  .addPaddTopBottom {
    padding: 50px 0;
  }

  .preRightWrapper {
    display: block;
    margin: 0px;
    flex: 1 1 0%;
    padding: 1rem;
    text-align: right;
  }

  .smallContent {
    display: block;
    margin: 0px;
    padding: 0px;
    color: var(--color-text-secondary);
  }

  .smallContent span {
    font-size: 12px;
    line-height: 1.625;
    font-weight: 400;
  }

  /* **************************** */

  .nextRightWrapper {
    display: block;
    margin: 0px;
    padding: 1rem;
    flex: 1 1 0%;
  }

  /* tables.css */
  table {
    padding: 0;
  }

  table tr {
    border-top: 1px solid var(--color-text);
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: var(--color-text);
  }

  table tr th {
    font-weight: bold;
    border: 1px solid var(--color-text);
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid var(--color-text);
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }
  /* end - tables.css */

  /* Image styling */
  img {
    max-width: 100%;
  }
  /* end image */
  .githubBtn {
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 10px 0px;
    padding-left: 15px;
    max-height: 40px;
  }
  .githubBtn span span {
    display: flex;
    align-items: center;
  }

  .communitySection {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .authorSection {
    padding: 20px 0;
  }
  .authorSection,
  .authorName {
    display: flex;
    align-items: center;
  }
  .authorImg img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    min-width: 75px;
    max-width: 75px;
    min-height: 75px;
    max-height: 75px;
  }
  .authorDetails {
    padding-left: 10px;
  }
  .authorDesc {
    padding-top: 5px;
    font-size: 14px;
  }
  .authorName img {
    margin-left: 10px;
    display: inline-block;
    width: 20px;
  }
  .authorName img:hover {
    opacity: 0.7;
  }

  .heading1 {
    font-size: 26px;
    font-weight: 800;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 32px;
  }

  .heading2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 32px;
  }

  .heading3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 32px;
  }

  .heading4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 32px;
  }

  .heading5 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 32px;
  }

  .heading6 {
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 32px;
  }

  .paragraph {
    margin: 1rem 0px 32px;
    line-height: 1.625;
  }

  .pre {
    font-size: 14px;
    margin: 0px;
    padding: 1rem;
    overflow: auto;
  }

  .poweredBy {
    font-size: 0.6em;
    text-align: end;
    padding: 0;
  }
  .topnav {
    -webkit-transition: top 0.5s, bottom 0.5s;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 767px) {
    .formElement svg path {
      fill: var(--color-bg-panel);
    }
    .visibleMobileView {
      display: block !important;
    }
    .searchInput {
      color: var(--color-bg-panel);
    }
    .socialWrapper {
      position: absolute;
      right: 10px;
      top: 29px;
    }
    .responsive {
      margin-top: 15px;
      position: relative;
      padding-bottom: 20px;
      border-top: 1px solid var(--color-text);
    }
    .navBarBrand {
      min-height: 40px;
    }
    .navBarBrand img {
      margin-right: 8px;
    }
    .topnav.responsive .visibleMobile {
      display: block;
    }
    .topnav .navBarUL {
      display: none;
    }
    .topnav.responsive .navBarUL {
      display: block;
      text-align: left;
    }
    .hiddenMobile {
      display: none !important;
    }
    hr {
      margin-top: 0;
      margin-bottom: 0;
    }
    .navBarParent {
      display: block;
    }
    .separator {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .navBarULRight {
      position: static;
    }
    .navBarUL {
      display: flex;
      align-items: center;
      margin: 7.5px 0px;
    }
    .navBarUL li {
      height: 37px;
    }
    .navBarUL li a {
      font-size: 14px;
      padding: 10px 15px;
    }

    .navBarDefault {
      display: block;
      height: auto;
    }

    .navBarToggle {
      margin-right: 0;
      display: block;
      position: absolute;
      left: 11px;
      top: 15px;
      background: var(--color-text);
    }

    .navBarHeader {
      display: flex;
      min-width: auto;
      padding-right: 0;
      align-items: center;
    }

    .navBarBrand {
      font-size: 20px;
      padding: 0 0;
      padding-left: 0;
      flex: initial;
      padding-right: 15px;
    }

    .titleWrapper {
      padding: 0 15px;
      display: block;
    }

    .gitBtn {
      display: inline-block;
    }

    .mobileView {
      text-align: left !important;
      padding-left: 0 !important;
    }

    .searchWrapper {
      padding: 0px 0;
      padding-top: 0px;
      position: absolute;
      bottom: 0px;
      width: calc(100% - 70px);
      position: absolute;
      left: 40px;
      top: 8px;
    }
    .hitWrapper {
      width: 100%;
      right: 0;
      top: 35px;
      max-height: fit-content;
      position: static;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .navBarDefault {
      padding: 10px;
    }
    .navBarBrand {
      font-size: 22px;
    }
    .navBarHeader {
      min-width: 240px;
      flex: initial;
    }
    .githubBtn {
      padding: 10px 10px;
    }
    .divider {
      margin: 0 5px;
      height: 20px;
    }
    .hitWrapper {
      max-width: 500px;
    }
    .navBarUL li a {
      padding: 10px 5px;
    }
    .searchWrapper {
      padding-left: 0px;
    }
  }
`;
