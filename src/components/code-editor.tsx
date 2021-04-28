import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
    return (
        <MonacoEditor
            theme="vs-dark"
            language="javascript"
            height="400px"
            options={{
                wordWrap: 'on',
                minimap: { enabled: false },
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize: 16
            }}
        />
    );
};

export default CodeEditor;
