// Editor script

const MediumEditor = require('medium-editor'),
    $ = require('jquery');
require('medium-editor-insert-plugin')($);

const editor = new MediumEditor('.editor', {
    buttonLabels: 'fontawesome',
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
            'removeFormat'
        ]
    }
});

$('.editor').mediumInsert({
    editor: editor
});