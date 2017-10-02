/**
* Copyright (c) 2017 University of Illinois - Jon Gunderson and Nicholas Hoyt. All rights reserved.
* For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.add( 'a11yfirsthelp', {
  requires: 'a11yfirst,richcombo',

  // jscs:disable maximumLineLength
  lang: 'en,en-au,en-ca,en-gb', // %REMOVE_LINE_CORE%
  // jscs:enable maximumLineLength

  init: function( editor ) {
    if ( editor.blockless )
      return;

    var allowedContent = [],
        config = editor.config,
        lang = editor.lang.a11yfirsthelp,

        a11yFirstHelpDialogCmd = 'a11yFirstHelpDialog',
        keyboardShortcutsValue = 'keyboardShortcuts',
        keyboardShortcutsCmd   = 'a11yHelp',
        helpTopics = config.a11yFirstHelpTopics,
        helpTopicsKeys = Object.keys( helpTopics ),
        menuStyle = new CKEDITOR.style( { element: 'p' } );

    // Initialize A11yFirst Help dialog and command
    CKEDITOR.dialog.add( a11yFirstHelpDialogCmd, this.path + 'dialogs/a11yfirst-help.js' );
    editor.addCommand( a11yFirstHelpDialogCmd, new CKEDITOR.dialogCommand( a11yFirstHelpDialogCmd ) );

    // Register a11yfirsthelp command
    editor.addCommand( 'allyfirsthelp', {
      allowedContent: allowedContent,
      contextSensitive: false
    } );

    // Create namespaced object for help option
    if (!editor.a11yfirst) {
      editor.a11yfirst = {};
    }

    // Add richcombo button and menu items
    editor.ui.addRichCombo( 'A11yFirstHelp', {
      label: lang.label,
      title: lang.panelTitle,
      toolbar: 'a11yfirsthelp',
      command: 'allyfirsthelp',
      allowedContent: allowedContent,

      panel: {
        css: [ CKEDITOR.skin.getPath( 'editor' ) ].concat( config.contentsCss ),
        multiSelect: false,
        attributes: { 'aria-label': lang.panelTitle }
      },

      init: function() {
        for ( var i = 0; i < helpTopicsKeys.length; i++ ) {
          var key = helpTopicsKeys[ i ];
          var label = lang[ key ].menu;
          // Add the entry to the panel list
          this.add( key, menuStyle.buildPreview( label ), label );
        }
        // Add separator between list of help options and keyboard shortcuts
        this.addSeparator();

        this.add( keyboardShortcutsValue, menuStyle.buildPreview( lang.keyboardShortcutsLabel ), 
          lang.keyboardShortcutsLabel );
      },

      onClick: function( value ) {
        if ( value === keyboardShortcutsValue ) {
          editor.execCommand( keyboardShortcutsCmd );
          return;
        }
        // editor.fire( 'saveSnapshot' );
        if (helpTopicsKeys.indexOf( value ) !== -1) {
          editor.a11yfirst.helpOption = helpTopics[ value ].option;
          editor.execCommand( a11yFirstHelpDialogCmd );
        }
      }

    } ); // end addRichCombo

  } // end init

} ); // end plugins.add

CKEDITOR.config.a11yFirstHelpTopics = {
  'gettingStarted': {
    option:  'GettingStarted'
  },
  'headingHelp': {
    option:  'HeadingHelp'
  },
  'blockFormatHelp': {
    option:  'BlockFormatHelp'
  },
  'inlineStyleHelp': {
    option:  'InlineStyleHelp'
  },
  'linkHelp': {
    option:  'LinkHelp'
  }
};
