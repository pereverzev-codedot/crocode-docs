import RawTool from "@editorjs/raw";
import Underline from "@editorjs/underline";
import InlineCode from "@editorjs/inline-code";
import Marker from "@editorjs/marker";
import NestedList from "@editorjs/nested-list";
import EditorjsCodeflask from "@calumk/editorjs-codeflask";
import Table from "@editorjs/table";
import AttachesTool from "@editorjs/attaches";
import LinkTool from "@editorjs/link";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Delimiter from "@editorjs/delimiter";
import ToggleBlock from "editorjs-toggle-block";
import List from "@editorjs/list";
import Checklist from "@editorjs/checklist";
import ImageTool from "@editorjs/image";
import SimpleImage from "@editorjs/simple-image";
import Embed from "@editorjs/embed";
import { _BASE_URL } from "./variables";

const tools = {
  raw: RawTool,
  underline: Underline,
  inlineCode: {
    class: InlineCode,
  },
  marker: {
    class: Marker,
    shortcut: "CMD+SHIFT+M",
  },
  nestedList: {
    class: NestedList,
    inlineToolbar: true,
    toolbox: {
      title: "Nested list",
    },
  },
  code: EditorjsCodeflask,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  attaches: {
    class: AttachesTool,
    config: {
      endpoint: "http://26.116.182.249:5000/image/file", // Your backend endpoint for url data fetching,
    },
  },
  linkTool: {
    class: LinkTool,
    inlineToolbar: true,
    config: {
      endpoint: "http://26.116.182.249:5000/image/file", // Your backend endpoint for url data fetching,
    },
  },
  header: {
    class: Header,
    inlineToolbar: ["link"],
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Enter a quote",
      captionPlaceholder: "Quote's author",
    },
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  delimiter: Delimiter,
  toggle: {
    class: ToggleBlock,
    inlineToolbar: true,
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  checklist: {
    class: Checklist,
    inlineToolbar: true,
  },
  image: {
    class: ImageTool,
    inlineToolbar: true,
    config: {
      endpoints: {
        byFile: `${_BASE_URL}/image/file`, // Your backend file uploader endpoint
        byUrl: `${_BASE_URL}/image/url`, // Your endpoint that provides uploading by Url
        field: "file",
      },
    },
  },
  simpleImage: { class: SimpleImage, inlineToolbar: true },
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true,
        codepen: {
          regex: /(https?:\/\/codepen.io\/[^/?&]*)\/pen\/(\S*)/,
          embedUrl: "<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
          html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
          height: 300,
          width: 600,
          id: (groups) => groups.join("/embed/"),
        },
        figma: {
          regex: /(https?:\/\/www.figma.com\/file\/\S*)/,
          embedUrl: "https://www.figma.com/embed?embed_host=share&url=<%= remote_id %>",
          html: '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" allowfullscreen></iframe>',
          height: 300,
          width: 600,
        },
      },
    },
  },
};

export default tools;
