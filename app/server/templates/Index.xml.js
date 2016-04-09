/*
Copyright (C) 2016 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A list template shows a list of items on the right, such as movies or TV shows. Focus on one to see its related content on the left, such as its artwork or description.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
   <menuBarTemplate>
      <menuBar>
         <menuItem template="${this.BASEURL}templates/Catalog.xml.js" presentation="menuBarItemPresenter">
            <title>Collection</title>
         </menuItem>
         <menuItem template="${this.BASEURL}templates/HomeLab.xml.js" presentation="menuBarItemPresenter">
            <title>Home Lab</title>
         </menuItem>
         <menuItem template="${this.BASEURL}templates/Search.xml.js" presentation="menuBarItemPresenter">
            <title>Search</title>
         </menuItem>
      </menuBar>
   </menuBarTemplate>
</document>
`
}
