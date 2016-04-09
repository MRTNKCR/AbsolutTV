/*
Copyright (C) 2016 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A catalog template allows you to display groupings of related items, such as genres of movies or TV shows. View the list of groupings on the left and focus on one to see its items on the right.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
      .whiteText {
        color: rgb(255, 255, 255);
      }
      </style>
    </head>
    <catalogTemplate>
      <banner>
        <title>Collection</title>
      </banner>
      <list>
        <section>
          <header>
            <title>Menu</title>
          </header>
          <listItemLockup>
            <title>Sweet</title>
            <decorationLabel>4</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}images/sex.jpg" width="308" height="308" />
                    <title class="whiteText">Sex on the beach</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">Sleepy Head</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="308" height="308" />
                    <title class="whiteText">Snowball</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/music/music_4.lcr" width="308" height="308" />
                    <title class="whiteText">White Plush</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Sour</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/music/music_1.lcr" width="308" height="308" />
                    <title class="whiteText">Sex on the beach</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/music/music_2.lcr" width="308" height="308" />
                    <title class="whiteText">GinTonic</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/music/music_3.lcr" width="308" height="308" />
                    <title class="whiteText">Cuba libre</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
        </section>
      </list>
    </catalogTemplate>
  </document>`
}
