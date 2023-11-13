import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
    FunctionData,
    DocumentationData,
    GenericDocOpResult,
    DocIndexCreationResult,
    FileData,
} from '@/lib/types';

import { buildDirectoryTree, AiDocIndexFx200, getRandomResponse } from '@/lib/utils'


export default function DocView({ aiDocData }) {

    const getRandomIcon = () => {
        const icons = ["🎇", "✨", "🎡", "🎨", "🚀", "🌟", "🎈", "🎊", "🌈", "🎆", "🤖", "👓", "💎", "🏉", "🎵", "🧦", "🧵", "🎭", "🎁", "👑", "⚽", "⛳", "🎖", "🪀", "🎷", "🧬" ];
        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    }


    const styleH2 = (text: String) => (
        <h2
            style={{
                fontSize: '24px',
                fontWeight: 'bold',
                padding: '10px',
                // backgroundColor: "#232121",
                margin: '10px 0',
            }}
            >{text}
        </h2>
    )

    const styleH3 = (text: String) => (
        <h2
            style={{
                fontSize: '20px',
                fontWeight: 'bold',
                padding: '10px',
                // backgroundColor: "#232121",
                margin: '10px 0',
            }}
            >{text}
        </h2>
    )

    const stylePBody = (text: String) => (
        <h2
            style={{
                fontSize: '16px',
                fontWeight: 'normal',
                padding: '10px',
                backgroundColor: "#232121",
                margin: '10px 0',
            }}
            >{text}
        </h2>
    )

    const documentTitle = (value: string) => {
        return (
            <h2
                style={{
                    fontSize: '24px',
                    fontWeight: 'bolder',
                    padding: '10px',
                    margin: '10px 0',
                }}

                >{value}</h2>
        )
    }


    const briefIntroduction = (value: string) => {
        return (
            <>
                {/* <h3>Introduction</h3> */}
                {styleH2("Introduction") }
                {stylePBody(value)}
                <br />
            </>
        )
    }

    const installAtionUsage = (value: string) => {
        // Replace any number followed by a dot with "@#$%"
        const splitArray = value.split(/\d+\./g);

        if (Array.isArray(splitArray)) {
            return (
                <div style={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    padding: '10px',
                    backgroundColor: "#232121",
                    margin: '10px 0',

                }}>
                    {/* <h3>Installation and Usage</h3> */}
                    {styleH2("Installation and Usage")}
                    <p style={{ fontSize: '16px', padding: '10px', }}>{splitArray[0]}</p>
                    <ul>
                        {splitArray.slice(1).map((text, index) => (
                            <li style={{ padding: '10px' }} key={index}>{getRandomIcon()} {text}</li>
                        ))}
                    </ul>
                </div>
            )
        }

        return (
            <>
                <h3>Installation and Usage</h3>
                <p style={{ textIndent: "25px" }}>{value}</p>
                <br />
            </>
        )
    }


    const fileStructure = (files: any) => {
        const directoryTree = buildDirectoryTree(files)

        return (
            <>
                <br />
                {styleH2("File Structure")}
                <br />
                {/* <CodeBlock language="plaintext" showLineNumbers={false} text={directoryTree} /> */}
                <SyntaxHighlighter language="plaintext" style={dark} showLineNumbers={true}>
                    {directoryTree}
                </SyntaxHighlighter>

                <br />
            </>
        )
    }

    const explainCore = (funcName: string, funcDesc: string, extensionLang: any, funcExample: string) => {
        return (
            <>
                {styleH3(funcName)}
                {stylePBody(funcDesc)}
                <br />
                {/* <CodeBlock language={extensionLang} text={funcExample} /> */}
                <SyntaxHighlighter language={extensionLang} style={dark}>
                    {funcExample}
                </SyntaxHighlighter>

                <br />
                <hr />
                <br />
            </>
        )

    }

    const explainCoreFunc = (functions: FunctionData[], fileStructure: FileData[]) => {
        let lang = fileStructure[0].name.split(".")
        let language = lang[lang.length - 1];

        return (
            <>
                {/* <h3>Explanation of core Functions/Methods with usage examples</h3> */}
                {styleH2("Explanation of core Functions/Methods with usage examples")}
                <br />
                {functions.map((func, i) => (
                    <div key={i}>
                        {explainCore(func.name, func.description, language, func.example)}
                    </div>
                ))}
            </>
        )

        // return functions.map((func, i) => (
        //   <div key={i}>
        //     {explainCore(func.name, func.description, language, func.example)}
        //   </div>
        // ))
    }

    const conclusion = (value: string) => {
        return (
            <>
                {styleH2("Conclusion")}
                {stylePBody(value)}
            </>
        )

    }


    const finalRender = () => {

        return (
            <>
                {/* {tableOfContent()} */}
                {aiDocData["Documentation Title"] && documentTitle(aiDocData["Documentation Title"])}
                {aiDocData["Brief Introduction"] && briefIntroduction(aiDocData["Brief Introduction"])}
                {aiDocData["Installation and/or Usage"] && installAtionUsage(aiDocData["Installation and/or Usage"])}

                {aiDocData["File Structure"]?.length && fileStructure(aiDocData["File Structure"])}

                {aiDocData["Explanation of core Functions/Methods with usage examples"]?.length && explainCoreFunc(aiDocData["Explanation of core Functions/Methods with usage examples"], aiDocData["File Structure"])}
                <br />
                {aiDocData["Conclusion"] && conclusion(aiDocData["Conclusion"])}
            </>
        )

    }

    const renderDocData = () => {
        if (!aiDocData) {
            return
        }

        if (aiDocData.Conclusion) {

            return (
                <>
                    {finalRender()}
                </>
            )
        } else {
            return (
                <div style={{ marginTop: '20px' }}>
                    <p  /* title="Error" appearance="error"*/>
                        {getRandomResponse() ? getRandomResponse() : `No data was returned.`}
                    </p>
                </div>
            )
        }
    }

















    return (
        <div>
            {/* {renderToolbar()}
            {tableOfContent()} */}
            {aiDocData && renderDocData()}

            {/* {ActivityIndicator(activityMessage)} */}
        </div>
    );

}