/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
  Code,
  Subscript,
  Superscript,
} from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Font } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { HtmlEmbed } from '@ckeditor/ckeditor5-html-embed';
import {
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  PictureEditing,
} from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link, LinkImage, AutoLink } from '@ckeditor/ckeditor5-link';
import { List, TodoList, ListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { Style } from '@ckeditor/ckeditor5-style';
import {
  Table,
  TableToolbar,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
} from '@ckeditor/ckeditor5-table';
import { TextPartLanguage } from '@ckeditor/ckeditor5-language';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
// Tạo class Editor với các plugin đã yêu cầu
class Editor extends ClassicEditor {
  public static override builtinPlugins = [
    Alignment,
    Autoformat,
    BlockQuote,
    Bold,
    CKBox,
    CloudServices,
    Code,
    CodeBlock,
    Essentials,
    FindAndReplace,
    Font,
    GeneralHtmlSupport,
    Heading,
    HorizontalLine,
    HtmlEmbed,
    Image,
    ImageCaption,
    ImageInsert,
    ImageResize,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    AutoLink,
    List,
    TodoList,
    ListProperties,
    MediaEmbed,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    RemoveFormat,
    ShowBlocks,
    SourceEditing,
    Strikethrough,
    Style,
    Subscript,
    Superscript,
    Table,
    TableToolbar,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TextPartLanguage,
    TextTransformation,
    Underline,
  ];

  public static override defaultConfig = {
    toolbar: {
      items: [
        'sourceEditing',
        '|',
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'link',
        'bulletedList',
        'numberedList',
        'todoList',
        '|',
        'outdent',
        'indent',
        'alignment',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo',
        'htmlEmbed',
        'codeBlock',
        'removeFormat',
        'pageBreak',
      ],
    },
    language: 'en',
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        'linkImage',
      ],
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties',
      ],
    },
  };
}

export default Editor;
