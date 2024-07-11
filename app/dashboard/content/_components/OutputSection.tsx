import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

type Props = {};

const OutputSection = (props: Props) => {
  const editorRef: any = React.useRef();

  return (
    <div className="shadow-md border rounded-lg bg-emerald-50">
      <div className="flex justify-between items-center mb-3 p-5">
        <h2 className="font-semibold text-primary text-3xl">Your Result</h2>
        <Button>
          <Copy />
          Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here."
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
