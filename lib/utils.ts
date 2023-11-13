import { DocumentationData, DocIndexCreationResult } from "@/lib/types";


export const AiDocIndexFx400 = (): DocIndexCreationResult => {
    return {
        status: 404,
        message: getRandomResponse(),
    }
}

export const AiDocIndexFx200 = (documentationData: DocumentationData, status: number, message: string): DocIndexCreationResult => {
    return {
        index: {
            creationTime: new Date().getTime(),
            documentationData: documentationData,
        },
        status: status,
        message: message
    }
}


export function isJSONParsable(value: string) {
    try {
        JSON.parse(value);
        return true;
    } catch (e) {
        return false;
    }
}



export function buildDirectoryTree(files: any[]): string {
    const tree: any = {};

    // Build the directory tree structure
    files.forEach((file: any) => {
        const pathParts = file.path.split('/');
        let currentNode = tree;

        pathParts.forEach((part: string, index: number) => {
            if (!currentNode[part]) {
                if (index === pathParts.length - 1) {
                    currentNode[part] = { isFile: true };
                } else {
                    currentNode[part] = {};
                }
            }
            currentNode = currentNode[part];
        });
    });

    // Helper function to recursively build the tree string
    function buildTreeString(node: any, indent: string = ''): string {
        const keys = Object.keys(node);
        let treeString = '';

        keys.forEach((key, index) => {
            const isLast = index === keys.length - 1;
            const prefix = isLast ? '└── ' : '├── ';
            treeString += `${indent}${prefix}${key}\n`;

            if (!node[key].isFile) {
                treeString += buildTreeString(node[key], `${indent}${isLast ? '    ' : '│   '}`);
            }
        });

        return treeString;
    }

    // Generate and return the directory tree string
    const directoryTree = buildTreeString(tree);

    return `Directory Tree:\n${directoryTree}`;
}

// TODO: Delete Example usage:
const files = [
    {
        name: 'App.js',
        path: 'src/App.js',
    },
    {
        name: 'search.js',
        path: 'src/components/search/search.js',
    },
    {
        name: 'tools.js',
        path: 'src/helpers/tools.js',
    },
    {
        name: 'index.js',
        path: 'src/index.js',
    },
    {
        name: 'serviceWorker.js',
        path: 'src/serviceWorker.js',
    },
    {
        name: 'apiService.js',
        path: 'src/services/apiService.js',
    },
];

// const directoryTree = buildDirectoryTree(files);
// console.log(directoryTree);

export function getRandomResponse(): string {
    const responses = [
        "Looks like we've experienced an empirical error. Perhaps reality itself is having a moment.",
        "I think you broke it, therefore you did. Cogito, oops!",
        "We're searching for the ideal answer in the realm of ideas, but it seems we've lost our way in the cave.",
        "The only true wisdom is knowing you know nothing. Our error might be the wisest thing to happen.",
        "Alrighty then! Something went wrong, but don't worry; I'll find the error, or maybe the error will find me.",
        "Error 404: Can't find the humor, or the data, or the network. We're having an identity crisis!",
        "We're in a serious pickle, but don't worry. It's like a small funny guy stuck in a big serious world.",
        "Error 420: Apparently, our code just wanted to take a break and contemplate the complexities of life.",
        "We wanted to connect to the network, but it seems the network's having a 'You Laugh, You Lose' challenge.",
        "Error 1742: Our attempt to establish causation has led to an unintended correlation between errors.",
        "I code, therefore I am...often confronted with cryptic error messages.",
        "We're navigating the allegorical cave of code, and our lantern just went out.",
        "The unexamined code is not worth executing. Unfortunately, our code is overexamined, and it's not worth much right now.",
        "Error: Something's missing, and it's not just the data. It's like trying to make 'The Truman Show' without Jim.",
        "If our code was a stand-up gig, it just got booed off the stage. Tough crowd!",
        "We tried to network, but it's like we got stuck in traffic in a tiny car. Not much room for data, I tell ya!",
        "Error 404: Code not found. Did it go to the 'Chappelle's Show'? Never came back.",
        "Our code errors are like those late-night texts you regret in the morning. We apologize on behalf of code everywhere.",
        "The code says no, but we're not sure what it's saying no to. Maybe an existential crisis?",
        "I code, therefore I debug. It's our version of 'I think, therefore I am.' We definitely are...in trouble.",
        "Error 23: Our code decided to 'Liar Liar' about something. We're working on its honesty issues.",
        "Our code just experienced a 'technical tap dance.' Don't worry, we're tuning up its moves.",
        "We tried to 'Ride Along' with the data, but it left us stranded on 'Kevin's little code road.'",
        "Error 0110: It's like trying to find the 'Chappelle's Show' in a world of 'lost in translation.'",
        "Our code got an error accent. Now it thinks it's speaking code with a British or Australian accent.",
        "Error 42: We may have just stumbled upon the meaning of life, but we're still trying to figure out this error.",
        "Our code is pondering its existence. It thinks, therefore it bugs.",
        "We've entered the cave of code and met a philosophical '404: Enlightenment not found.'",
        "Error 3: The only thing we know is that we don't know much about this error.",
        "We tried to debug our code, but it decided to pull a 'Bruce Almighty' and take over. Mayhem ensued.",
        "Our code is on 'Total Recall.' It forgot its lines and is stuck in a never-ending loop.",
        "Error 500: It's like our code went to 'Get Hard' training and came back softer than marshmallows.",
        "Our code is practicing 'The Art of Silence.' No output, just like a stand-up show with no punchlines.",
        "Our code went on vacation but forgot to send a postcard. Now it's stuck in an 'error island.'",
        "Error 111: Our code is exploring a new 'bundle of errors' theory. Stay tuned for the next episode!",
        "We code, therefore we error. That's our version of 'I think, therefore I am.'",
        "We've reached the realm of code and found an 'Eternal Error'—a glitch with no end in sight.",
        "Error 404: The 'unexamined code' is causing us some 'Socratic confusion.'",
        "Our code is caught in 'The Truman Show,' but it's not sure who's watching.",
        "Error 2001: Our code is on an odyssey, but it seems to have forgotten the way back.",
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
