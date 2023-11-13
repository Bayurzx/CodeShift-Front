import React from 'react';

const Guidelines = () => {
    return (
        <div className="max-w-2xl mx-auto my-8 p-4 bg-black rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">Welcome to AutoDocs AI!</h1>
            <p className="mb-4">
                Thank you for trying AutoDocs AI. Follow the steps below to get started:
            </p>

            <ol className="list-decimal pl-6">
                <li className="mb-2">
                    Click the <code>Grant Access</code> button in the left sidebar to allow AutoDocs AI to access your GitHub repositories.
                </li>
                <li className="mb-2">
                    Wait for some time for the AI to process and generate documentation automatically.
                </li>
                <li className="mb-2">
                    Check back on the home page and click on the dropdown <code>( Select Keyname )</code> to select any of your repositories.
                </li>
            </ol>

            <div className="my-4">
                <p className="font-bold">Rules to Follow:</p>
                <ul className="list-disc pl-6">
                    <li className="mb-2">
                        We are currently in the testing phase, please select 1 repository at a maximum of <code>4 repositories</code>.
                    </li>
                    <li className="mb-2">
                        <code>GitHub Events</code> trigger the documentation generation. When you add or remove a repository through the <code>Grant Access</code> button or when a <code>push event</code> occurs after a commit.
                    </li>
                    <li className="mb-2">
                        Only repositories with the following languages are processed.
                        <ul className="list-disc pl-6">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>Go</li>
                            <li>C#</li>
                            <li>C++</li>
                            <li>Go (Golang)</li>
                            <li>PHP</li>
                            <li>Ruby</li>
                        </ul>
                    </li>
                    <li className="mb-2">
                        Please be mindful of API calls. The owner of AutoDocs AI is currently poor and on a tight budget! 😅
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Guidelines;
