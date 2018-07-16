// Editor script

const config = require('./config')
const MediumEditor = require('medium-editor');
const $ = require('jquery');
require('medium-editor-insert-plugin')($);
require('medium-editor-custom-html');
const EmbedButtonExtension = require('medium-editor-embed-button/src/js/medium-editor-embed-button');

const editor = new MediumEditor('.editor', {
    buttonLabels: 'fontawesome',
    extensions: {
        embedButton: new EmbedButtonExtension({
            embedOpts: {
                oembedProxy: 'https://iframe.ly/api/oembed?api_key=' + config.OEMBED_API_KEY + '&url='
            }
        }),
        customHtml: new CustomHtml({
            buttonText: '<hr/>',
            htmlToInsert: '<hr/>'
        })
    },
    toolbar: {
        buttons: [
            'bold',
            'italic',
            'underline',
            'anchor',
            'h1',
            'h2',
            'h3',
            'quote',
            'orderedlist',
            'unorderedlist',
            'indent',
            'outdent',
            'justifyLeft',
            'justifyCenter',
            'justifyRight',
            'justifyFull',
            'removeFormat',
            'embedButton',
            'customHtml'
        ]
    }
});

$('.editor').mediumInsert({
    editor: editor
});