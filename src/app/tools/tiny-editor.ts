import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import 'tinymce/plugins/lists';

declare var tinymce: any;

@Component({
  selector: 'tiny-editor',
  template: `<textarea id="{{elementId}}">{{content}}</textarea>`
})

export class TinyEditor implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() content: String;
  @Output() onEditorContentChange = new EventEmitter<any>();

  editor;
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      width: 720,
      height: 300,
      toolbar: 'alignleft aligncenter alignright alignjustify styleselect formatselect fontselect fontsizeselect | cut copy paste bullist numlist outdent indent blockquote undo redo removeformat | bold italic underline strikethrough subscript superscript',
      plugins: ['link', 'paste', 'lists', 'table', 'media'],
      skin_url: '../assets/skins/lightgray',
      mediaembed_service_url: 'SERVICE_URL',
      media_live_embeds: true,
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
