var Presenter = {
  // 1
  makeDocument: function(resource) {
    if (!Presenter.parser) {
      Presenter.parser = new DOMParser();
    }
    var doc = Presenter.parser.parseFromString(resource, "application/xml");
    return doc;
  },
  // 2
  modalDialogPresenter: function(xml) {
    navigationDocument.presentModal(xml);
  },

  // 3
  pushDocument: function(xml) {
    navigationDocument.pushDocument(xml);
  },

  menuBarItemPresenter: function(xml, ele) {
          /*
          To get the menu bar's 'MenuBarDocument' feature, we move up the DOM Node tree using
          the parentNode property. This allows us to access the the menuBar element from the
          current item element.
          */
          var feature = ele.parentNode.getFeature("MenuBarDocument");

          if (feature) {
              /*
              To retrieve the document associated with the menu bar element, if one has been
              set, you call the getDocument function the MenuBarDocument feature. The function
              takes one argument, the item element.
              */
              var currentDoc = feature.getDocument(ele);
              /*
              To present a document within the menu bar, you need to associate it with the
              menu bar item. This is accomplished by call the setDocument function on MenuBarDocument
              feature. The function takes two argument, the document to be presented and item it
              should be associated with.

              In this implementation we are only associating a document once per menu bar item. You can
              associate a document each time the item is selected, or you can associate documents with
              all the menu bar items before the menu bar is presented. You will need to experimet here
              to balance document presentation times with updating the document items.
              */
              if (!currentDoc) {
                  feature.setDocument(xml, ele);
              }
          }
      },

      /**
     * @description This function handles the select event and invokes the appropriate presentation method.
     * This is only one way to implent a system for presenting documents. You should determine
     * the best system for your application and data model.
     *
     * @param {Event} event - The select event
     */
    load: function(event) {
        console.log(event);

        var self = this,
            ele = event.target,
            templateURL = ele.getAttribute("template"),
            presentation = ele.getAttribute("presentation"),
            videoURL = ele.getAttribute("videoURL");

        /*
        Check if the selected element has a 'template' attribute. If it does then we begin
        the process to present the template to the user.
        */
        if (templateURL) {
            /*
            Whenever a user action is taken you need to visually indicate to the user that
            you are processing their action. When a users action indicates that a new document
            should be presented you should first present a loadingIndicator. This will provide
            the user feedback if the app is taking a long time loading the data or the next
            document.
            */
            self.showLoadingIndicator(presentation);

            /*
            Here we are retrieving the template listed in the templateURL property.
            */
            resourceLoader.loadResource(templateURL,
                function(resource) {
                    if (resource) {
                        /*
                        The XML template must be turned into a DOMDocument in order to be
                        presented to the user. See the implementation of makeDocument below.
                        */
                        var doc = self.makeDocument(resource);

                        /*
                        Event listeners are used to handle and process user actions or events. Listeners
                        can be added to the document or to each element. Events are bubbled up through the
                        DOM heirarchy and can be handled or cancelled at at any point.

                        Listeners can be added before or after the document has been presented.

                        For a complete list of available events, see the TVMLKit DOM Documentation.
                        */
                        doc.addEventListener("select", self.load.bind(self));
                        //doc.addEventListener("highlight", self.load.bind(self));


                        /*
                        This is a convenience implementation for choosing the appropriate method to
                        present the document.
                        */
                        if (self[presentation] instanceof Function) {
                            self[presentation].call(self, doc, ele);
                        } else {
                            self.defaultPresenter.call(self, doc);
                        }
                    }
                }
            );
        }
        else if (videoURL)
        {
          //2
          var player = new Player();
          var playlist = new Playlist();
          var mediaItem = new MediaItem("video", videoURL);

          player.playlist = playlist;
          player.playlist.push(mediaItem);
          player.present();
        }
    },



    /**
     * @description This function handles the display of loading indicators.
     *
     * @param {String} presentation - The presentation function name
     */
    showLoadingIndicator: function(presentation) {
        /*
        You can reuse documents that have previously been created. In this implementation
        we check to see if a loadingIndicator document has already been created. If it
        hasn't then we create one.
        */
        if (!this.loadingIndicator) {
            this.loadingIndicator = this.makeDocument(this.loadingTemplate);
        }

        /*
        Only show the indicator if one isn't already visible and we aren't presenting a modal.
        */
        if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter") {
            navigationDocument.pushDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = true;
        }
    },

    /**
     * @description This function handles the removal of loading indicators.
     * If a loading indicator is visible, it removes it from the stack and sets the loadingIndicatorVisible attribute to false.
     */
    removeLoadingIndicator: function() {
        if (this.loadingIndicatorVisible) {
            navigationDocument.removeDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        }
    },

    /**
     * @description Instead of a loading a template from the server, it can stored in a property
     * or variable for convenience. This is generally employed for templates that can be reused and
     * aren't going to change often, like a loadingIndicator.
     */
    loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>Loading...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`
}
