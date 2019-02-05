/*
Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.plugins.setLang( 'a11yimage', 'en', {

	// Type of Image
	// typeOfImage: 'Type of Image',

	// typeInformative: 'Informative',
	// typeInformativeHelp: 'Image adds information to the document',

	// typeDecorative: 'Decorative',
	// typeDecorativeHelp: 'Image does not add information to the document',

	// typeSummary: 'How to choose the image type?',
	// typeDetails: 'If the image adds any information to the document, it is \
	// important for accessibility to select ‘Informative’ and then provide the \
	// appropriate accessible descriptions.',

	// Accessible Descriptions
	// imageDesc: 'Accessible Descriptions',

	// Alternative text

	altTextLabel: 'Alternative text (spoken by screen reader)',
	// Note: The max. length in the following message should match the
	// value of the alternativeTextMaxLength property defined below.
	altTextTitle: 'A short description of the content and function of the image, \
no longer than 100 characters',
	altTextNotRequiredLabel: 'Image does not require alternative text',

	// Long Description

	longDescLabel: 'Is there an adjacent detailed description of the image in the document?',
	longDescTitle: 'Many people benefit from a more detailed description of a \
complex image, including, but not limited to, people with visual impairments',

	longDescOptionNo: 'No',
	longDescOptionYesBefore: 'Yes, before the image',
	longDescOptionYesAfter: 'Yes, after the image',
	longDescOptionYesBoth: 'Yes, before and after the image',

	longDescBefore: 'Long description is located just before the image',
	longDescAfter: 'Long description is located just after the image',
	longDescBoth: 'Long description is located before and after the image',

	// hasDescription: 'A long description is included in the document',
	// hasDescription: 'Long description required within the document',
	// hasDescriptionTooltip: 'Enables a screen reader to indicate the existence \
	// and location of a long description within the document',
	// hasDescriptionTooltip: 'Required for a complex image that cannot be adequately described by the short description',

	// longDescSummary: 'When is a long description required?',
	// longDescDetails: 'If the image is complex, that is, it contains more \
	// information than can be adequately described in the short description, it \
	// is important to add a long description in the body of the document in order \
	// to make that information accessible by people with visual or cognitive \
	// impairments.',

	// descriptionLocation: 'Location of long description',

	// locationBefore: 'Before image',
	// locationBeforeHelp: 'Screen reader: \'A long description is located in the document just before the image\'',
	// locationBeforeTitle: 'Long description is located just before the image',

	// locationAfter:  'After image',
	// locationAfterHelp:  'Screen reader: \'A long description is located in the document just after the image\'',
	// locationAfterTitle: 'Long description is located just after the image',

	// locationBoth:   'Before &amp; after',
	// locationBothHelp:   'Screen reader: \'A long description is located in the document before and after the image\'',
	// locationBothTitle: 'Long description is located before and after the image',

	// descriptionHelp: 'More information on text alternatives for images',
	// descriptionHelp: 'More information on short and long descriptions',
	// descriptionHelp: 'When is a long description required?',
	// descriptionHelp: 'More information on accessible descriptions',
	// descriptionHelp: 'More information on describing images for the blind',
	descriptionHelp: 'Describing images for people with visual impairments',

	// Image Caption
	// captionFieldsetLabel: 'Caption',
	// captioned: 'Insert an editable caption text box below the image',
	captionLabel: 'Insert a caption text box below the image',
	captionTitle: 'The caption text is editable within the document',
	captionPlaceholder: 'Caption',

	// Miscellaneous
	btnUpload: 'Send it to the Server',
	infoTab: 'Image Info',
	lockRatio: 'Lock Ratio',
	menu: 'Image Properties',
	pathName: 'image',
	pathNameCaption: 'caption',
	resetSize: 'Reset Size',
	resizer: 'Click and drag to resize',
	title: 'Image Properties',
	uploadTab: 'Upload',
	urlLabel: 'Image URL',
	urlMissing: 'Please provide the URL for the image',
	urlTitle: 'URL of the image source file',

	// Additional properties used in a11yimage
	alignNone: 'None',
	alignLeft: 'Left',
	alignCenter: 'Center',
	alignRight: 'Right',

	// Validation constraints and messaging
	alternativeTextMaxLength: 100,
	altContainsFilename: ['.tif', '.tiff','.gif','.jpeg', '.jpg', '.jif', '.jfif', '.jp2',
	'.jpx', '.j2k', '.j2c', '.fpx', '.pcd', '.png', '.pdf'],
	altIsInvalid: ['photo', 'spacer', 'separator', 'nbsp', 'image'],
	altStartsWithInvalid: ['image of', 'graphic of'],
	altEndsWithInvalid: ['bytes'],
	msgAltTextNotRequired: 'An image typically requires alternative text (i.e. a short description) for people with visual impairments using screen readers.\n\nAre you sure you want to continue?',
	msgAltEmpty: 'Please provide alternative text (i.e. a short description of the image) for \
people with visual impairments using screen readers.',
	msgAltTooLong: 'The alternative text is %s1 characters, which is longer than the recommended \
maximum length of %s2 characters.\n\nAre you sure you want to continue?',
	msgAltPrefix: 'The alternative text should succinctly describe the content of the image.',
	msgAltContainsFilename: 'Please remove the filename with the extension "%s" from the alternative text.',
	msgAltIsInvalid: 'Please remove "%s" from the alternative text.',
	msgAltStartsWithInvalid: 'Please remove "%s" from the alternative text.',
	msgAltEndsWithInvalid: 'Please do not include the size of the image in the alternative text.',
	msgChooseLocation: 'Please select the location of the long description within the document relative to the image.'
} );