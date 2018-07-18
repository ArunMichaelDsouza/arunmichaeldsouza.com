// Editor script

const config = require('./config')
const MediumEditor = require('medium-editor');
const $ = require('jquery');
require('medium-editor-insert-plugin')($);
require('medium-editor-custom-html');
const EmbedButtonExtension = require('medium-editor-embed-button/src/js/medium-editor-embed-button');
const defaultHtml = '<h1>First heading goes here</h1><h2><span style="font-weight: normal;">Second heading goes here</span></h2><p class=""><br></p><p class="">Content starts here..</p><div class="medium-insert-buttons" contenteditable="false" style="left: 30px; top: 121.781px; display: none;"> <button class="medium-insert-buttons-show" type="button"><span>+</span></button> <ul class="medium-insert-buttons-addons" style="display: none"> <li><button data-addon="images" data-action="add" class="medium-insert-action" type="button"><span class="fa fa-camera"></span></button></li><li><button data-addon="embeds" data-action="add" class="medium-insert-action" type="button"><span class="fa fa-youtube-play"></span></button></li></ul></div>';

// Initialise editor
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

// Setup insert menu for editor
$('.editor').mediumInsert({
    editor: editor
});
window.editor = editor;

// Set initial content for editor
(function () {
    var d = window.blogDate ? new Date(window.blogDate) : new Date(),
        date = d.getDate(),
        month = Number(d.getMonth()) + 1,
        year = d.getFullYear();

    if (blogTitle && blogContent) {
        window.editor.mode = 'edit';
    } else {
        window.editor.mode = 'create';
    }

    date = date < 10 ? '0' + date : date;
    month = month < 10 ? '0' + month : month;
    $('#title').val(blogTitle);
    $('#date').val(year + '-' + month + '-' + date);
    editor.setContent(blogContent ? atob(blogContent) : defaultHtml, 0);
})();

// Handle editor click events
$('.editor-btn').click(function (e) {
    e.preventDefault();
    const blogContent = editor.serialize()['element-0'].value,
        blogTitle = $('#title').val(),
        blogDate = $('#date').val(),
        published = $(this).attr('data-mode');

    if (!blogContent || !blogTitle) {
        alert('Blog details are empty!');
    } else {
        $.post('/cms/blogs', {
            mode: window.editor.mode,
            id: window.blogId,
            title: blogTitle,
            date: blogDate,
            content: blogContent,
            published: published === 'draft' ? false : true
        }, function (res) {
            if (res.success) {
                alert('Blog action successful');
            } else {
                alert('Some error occurred');
            }
        });
    }
});
