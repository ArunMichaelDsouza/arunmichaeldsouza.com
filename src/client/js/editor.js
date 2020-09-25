// Editor script

const config = require('./config')
const MediumEditor = require('medium-editor');
const $ = require('jquery');
require('medium-editor-insert-plugin')($);
require('medium-editor-custom-html');
const EmbedButtonExtension = require('medium-editor-embed-button/src/js/medium-editor-embed-button');

const editor = {
    formatDate: function (date) {
        const dateObj = {
            date: date.getDate(),
            month: Number(date.getMonth()) + 1,
            year: date.getFullYear()
        };

        dateObj.date = dateObj.date < 10 ? '0' + dateObj.date : dateObj.date;
        dateObj.month = dateObj.month < 10 ? '0' + dateObj.month : dateObj.month;

        return dateObj.year + '-' + dateObj.month + '-' + dateObj.date;
    },
    setEditorContent: function () {
        const date = window.blogDate ? new Date(window.blogDate) : new Date(),
            defaultContent = '<h1>First heading goes here</h1><h2><span style="font-weight: normal;">Second heading goes here</span></h2><p class=""><br></p><p class="">Content starts here..</p><div class="medium-insert-buttons" contenteditable="false" style="left: 30px; top: 121.781px; display: none;"> <button class="medium-insert-buttons-show" type="button"><span>+</span></button> <ul class="medium-insert-buttons-addons" style="display: none"> <li><button data-addon="images" data-action="add" class="medium-insert-action" type="button"><span class="fa fa-camera"></span></button></li><li><button data-addon="embeds" data-action="add" class="medium-insert-action" type="button"><span class="fa fa-youtube-play"></span></button></li></ul></div>';

        if (window.blogTitle && window.blogContent) {
            window.editor.mode = 'edit';
            $('#title').attr('disabled', true);
        } else {
            window.editor.mode = 'create';
        }

        $('#title').val(blogTitle);
        $('#date').val(this.formatDate(date));
        $('#metaDescription').val(metaDescription);
        $('#metaKeywords').val(metaKeywords);
        $('#metaImage').val(metaImage);
        $('#html-editor').val(blogContent ? atob(blogContent) : defaultContent);
        window.editor.setContent(blogContent ? atob(blogContent) : defaultContent, 0);
    },
    showHTMLEditor: function (e) {
        e.preventDefault();

        window.htmlEditorOpen = true;
        $('.html-editor').show();
    },
    handleEditorClick: function (e) {
        e.preventDefault();

        const blogContent = window.editor.serialize()['element-0'].value,
            blogTitle = $('#title').val(),
            blogDate = $('#date').val(),
            published = $(this).attr('data-mode'),
            metaDescription = $('#metaDescription').val(),
            metaKeywords = $('#metaKeywords').val(),
            metaImage = $('#metaImage').val()

        if (!blogContent || !blogTitle) {
            alert('Blog details are empty!');
        } else {
            const tagsAddedEl = document.getElementById('tags-added');
            const tagsAdded = [];
            if (tagsAddedEl) {
                const tagsElements = Array.prototype.slice.call(tagsAddedEl.children);
                tagsAdded = tagsElements.map(tag => tag.innerText);
            }

            $.post('/cms/blogs', {
                mode: window.editor.mode,
                id: window.blogId,
                title: blogTitle,
                date: blogDate,
                content: window.htmlEditorOpen ? $('#html-editor').val() : blogContent,
                published: published === 'draft' ? false : true,
                metaDescription: metaDescription,
                metaKeywords: metaKeywords,
                metaImage: metaImage,
                tags: tagsAdded
            }, function (res) {
                if (res.success) {
                    alert('Blog action successful');
                } else {
                    alert('Some error occurred');
                }
            });
        }
    },
    tagAdded: '',
    addTagToList: function(tagName) {
        const tagList = document.getElementById('tag-list');
        const listItem = document.createElement('li');
        listItem.classList.add('tag', 'cm-badge', 'primary');
        listItem.innerText = tagName;
        listItem.setAttribute('data-id', tagName);
        tagList.appendChild(listItem);
        this.setAddTagHandlers();
    },
    setRemoveTagHandlers: function() {
        this.tagAdded = '';
        const that = this;
        const tagAddedElements = Array.prototype.slice.call(document.getElementsByClassName('tag-added'));
        tagAddedElements.forEach(function(element) {
            element.onclick = function(e) {
                const element = e.target;
                const tagName = element.innerText;
                that.addTagToList(tagName);
                element.remove();
            };
        });
    },
    renderAddedTags: function() {
        const tagsAdded = document.getElementById('tags-added');
        const listItem = document.createElement('li');
        listItem.classList.add('tag-added', 'cm-badge', 'primary');
        listItem.innerText = this.tagAdded;
        tagsAdded.appendChild(listItem);
        this.setRemoveTagHandlers();
    },
    removeAndAddTag: function(e) {
        const element = e.target;
        const tagName = element.getAttribute('data-id');
        this.tagAdded = tagName;
        element.remove();
        this.renderAddedTags();
    },
    setAddTagHandlers: function() {
        const that = this;
        const tagElements = Array.prototype.slice.call(document.getElementsByClassName('tag'));
        tagElements.forEach(function(element) {
            element.onclick = function(e) {
                that.removeAndAddTag(e);
            };
        });
    },
    init: function () {
        this.setAddTagHandlers();
        this.setRemoveTagHandlers();
        window.editor = new MediumEditor('.editor', {
            buttonLabels: 'fontawesome',
            targetBlank: true,
            extensions: {
                embedButton: new EmbedButtonExtension({
                    embedOpts: {
                        oembedProxy: 'https://iframe.ly/api/oembed?api_key=' + config.OEMBED_API_KEY + '&url='
                    }
                }),
                customHtml: new CustomHtml({
                    buttonText: 'hr',
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
            editor: window.editor
        });

        this.setEditorContent();
        $('#btn-html-editor').click(this.showHTMLEditor);
        $('.editor-btn').click(this.handleEditorClick);
    }
}.init();
