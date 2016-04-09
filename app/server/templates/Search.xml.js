/*
Copyright (C) 2016 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A search template lets users search your content and view found results. It includes a search field, a keyboard, and a list of results.
*/
var Template = function() {
  return `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <head>
      <style>
        .suggestionListLayout {
          margin: -150 0;
        }
      </style>
    </head>
    <searchTemplate>
      <searchField>Search</searchField>
      <collectionList>
        <shelf>
          <header>
            <title>Results</title>
          </header>
          <section>
            <lockup>
              <img src="${this.BASEURL}images/sex.jpg" width="350" height="520" />
              <title>Sex on the beach</title>
            </lockup>
            <lockup>
              <img src="${this.BASEURL}images/gin-and-tonic.jpg" width="350" height="520" />
              <title>GinTonic</title>
            </lockup>
          </section>
        </shelf>
      </collectionList>
    </searchTemplate>
  </document>`
}
