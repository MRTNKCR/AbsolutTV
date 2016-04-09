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
                    <img src="${this.BASEURL}resources/images/golden-gleam.jpg" width="308" height="423" />
                    <title class="whiteText">Golden Gleam</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/sleepy-head.jpg" width="308" height="423" />
                    <title class="whiteText">Sleepy Head</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/snowball.jpg" width="308" height="423" />
                    <title class="whiteText">Snowball</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/white-plush.jpg" width="308" height="423" />
                    <title class="whiteText">White Plush</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/golden-screw.jpg" width="308" height="423" />
                    <title class="whiteText">Golden Screw</title>
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
                    <img src="${this.BASEURL}resources/images/perini.jpg" width="308" height="423" />
                    <title class="whiteText">Perini</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/goldy-rose.jpg" width="308" height="423" />
                    <title class="whiteText">Goldy Rose</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/dawn-crusta.jpg" width="308" height="423" />
                    <title class="whiteText">Dawn Crusta</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Bitter</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/dianas-bitter.jpg" width="308" height="423" />
                    <title class="whiteText">Dianas Bitter</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/absolut-appearance.jpg" width="308" height="423" />
                    <title class="whiteText">Absolut Appearance</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/yo-ho.jpg" width="308" height="423" />
                    <title class="whiteText">Yo Ho</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/alabazam.jpg" width="308" height="423" />
                    <title class="whiteText">Alabazam</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/alleluja.jpg" width="308" height="423" />
                    <title class="whiteText">Alleluja</title>
                  </lockup>
                </section>
              </grid>
            </relatedContent>
          </listItemLockup>
          <listItemLockup>
            <title>Fresh</title>
            <decorationLabel>3</decorationLabel>
            <relatedContent>
              <grid>
                <section>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/skylab.jpg" width="308" height="423" />
                    <title class="whiteText">Skylab</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/absolut-sunbeam.jpg" width="308" height="423" />
                    <title class="whiteText">Absolut Sunbeam</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/pepparmint-frape.jpg" width="308" height="423" />
                    <title class="whiteText">Pepparmint Frappé</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/lychee-cooler.jpg" width="308" height="423" />
                    <title class="whiteText">Lichee Cooler</title>
                  </lockup>
                  <lockup template="${this.BASEURL}templates/Product.xml.js" presentation="modalDialogPresenter" accessibilityText="Accessible alert template">
                    <img src="${this.BASEURL}resources/images/peven.jpg" width="308" height="423" />
                    <title class="whiteText">Peven</title>
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
