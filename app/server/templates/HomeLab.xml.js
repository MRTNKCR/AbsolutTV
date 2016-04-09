/*
Copyright (C) 2016 Apple Inc. All Rights Reserved.
See LICENSE.txt for this sample’s licensing information

Abstract:
A form template displays a keyboard and one or more text fields where the user can enter information, such as a name and email address.

For specific guidance on providing a great user experience when asking for text input, see Text and Keyboards in Interactive Elements.
*/
var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
  <head>
    <style>
    .longDescriptionLayout {
      max-width: 1280;
    }
    </style>
  </head>
  <formTemplate>
    <banner>
      <title>Home Lab</title>
      <description class="longDescriptionLayout">Insert your favorite ingredients and compose a drink according to your taste.</description>
    </banner>
    <textField></textField>
  </formTemplate>
</document>`
}
