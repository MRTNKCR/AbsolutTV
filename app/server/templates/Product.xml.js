/*
Copyright (C) 2016 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A product template promotes movies, TV shows, or other products. It typically includes a product image, background, and descriptive information. A shelf below the product content displays related products and the user can scroll down to bring up more information, like cast and crew listings, ratings, or reviews.

Consider image and text colors carefully when customizing the background. By default, the background displays a blurred copy of your product image, producing a nice, complementary visual effect. If you decide to customize the background, make sure it doesn’t clash with your other content.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .showTextOnHighlight {
      tv-text-highlight-style: show-on-highlight;
    }
    .whiteBadge {
      tv-tint-color: rgb(255, 255, 255);
    }
    .shelfLayout {
      padding: 20 90 50;
    }
    </style>
  </head>
  <productTemplate theme="light">
    <banner>
      <heroImg src="${this.BASEURL}images/sex.jpg" />
      <infoList>
        <info>
          <header>
            <title>Header</title>
          </header>
          <text>Text 1</text>
          <text>Text 2</text>
          <text>Text 3</text>
        </info>
      </infoList>
      <stack>
        <title>Sex on the beach</title>
        <row>
          <text>Tequila</text>
          <text>Limetka</text>
          <text>Sul</text>
        </row>
        <description allowsZooming="true" template="${this.BASEURL}templates/AlertWithDescription.xml.js" presentation="modalDialogPresenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</description>
        <row>
          <buttonLockup videoURL="${this.BASEURL}images/Surge_iOS.mp4">
            <badge src="resource://button-preview" class="whiteBadge" />
            <title>Video</title>
          </buttonLockup>
        </row>
      </stack>
    </banner>
  </productTemplate>
</document>`
}
