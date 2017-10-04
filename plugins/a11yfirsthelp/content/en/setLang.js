/**
* Copyright (c) 2017 University of Illinois - Jon Gunderson and Nicholas Hoyt. All rights reserved.
* For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.plugins.setLang( 'a11yfirsthelp', 'en', {
  label:        'A11yFirst Help',
  panelTitle:   'learn about A11yFirst features',
  keyboardShortcutsLabel:    'Keyboard Shortcuts',

  a11yFirstHelpLabel:   'A11yFirst Help: Content Accessibility',
  a11yFirstHelpTitle:   'Information to help authors understand how the A11yFirst features help them make content more accessible to people with disabilites',

  gettingStarted: {
    'menu': 'Getting Started',
    'label': 'Getting Started',
    'title': 'Getting Started with accessibility using the A11yFirst Toolbar',

    'no_org': '\
## Getting Started\n\
\n\
### Importance of Accessibility\n\
This organization has made a committment to accessibility, not only to comply with the \
Americans with Disabilities Act (ADA) and Section 504 requirements, but also because making \
making sure everyone has equal access to the information in this website is the right thing \
to do.\n\n\
**You play an important part** in making sure this organization creates and maintains online \
content that is accessible. The changes to the editor toolbar are designed to help you create \
and maintain accessible content and learn more about accessibility.\n',

    'has_org':'\
## Getting Started\n\
\
### Importance of Accessibility\n\
The %org has made a committment to accessibility, not only to comply with the Americans with \
Disabilities Act (ADA) and Section 504 requirements, but also because making sure everyone has \
equal access to the information in this website is the right thing to do.\n\n\
**You play an important part** in making sure the %org creates and maintains online \
content that is accessible. The changes to the editor toolbar are designed to help you create \
and maintain accessible content and learn more about accessibility.\n',

    'policy_link':  '\n[%policy_label](%policy_url)\n',

    'content': '\
GETTINGSTARTED\
',
},

  headingHelp: {
    'menu': 'Heading',
    'label': 'Heading',
    'title': 'Headings identify the section and sub-section of the document, and provide a consistent styling of the structure of a document to help users understand the organization of the documents.',
    'content': '\
HEADINGHELP\
',
},

  blockFormatHelp: {
    'menu': 'Block Format',
    'label': 'Block Format',
    'title': 'Block format applies styles to an entire block of text, for example a paragraph or a list item.',
    'content': '\
BLOCKFORMATHELP\
',
},

  inlineStyleHelp: {
    'menu': 'Inline Style',
    'label': 'Inline Style',
    'title': 'Inline style applies styles to an selected block of text, for example applying emphasis to a few words in a sentence',
    'content': '\
INLINESTYLEHELP\
',
},

  linkHelp: {
    'menu': 'Link',
    'label': 'Link',
    'title': 'Inline style applies styles to an selected block of text, for example applying emphasis to a few words in a sentence',
    'content' : '\
LINKHELP\
',
},
} );