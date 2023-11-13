import { DocumentationData } from './types'

export const myDocumentation: any = [{
    "test-geist": {
        current: {
            "Documentation Title": "Getting Started with Project X",
            "Brief Introduction": "Welcome to the official documentation for Project X. This documentation will guide you through the setup and usage of our software, providing you with a clear understanding of its features and functionalities",
            "Installation and/or Usage": "To install and use this project, follow the steps below:\n\n1. Clone the GitHub repository.\n2. Run 'npm install' to install the required dependencies.\n3. Run 'npm start' to start the application.\n4. Navigate to http://localhost:3000 in your web browser to view the application.",
            "File Structure": [
                {
                    "name": "App.js",
                    "path": "src/App.js"
                },
                {
                    "name": "App.test.js",
                    "path": "src/App.test.js"
                },
                {
                    "name": "card.js",
                    "path": "src/components/card/card.js"
                },
                {
                    "name": "modal.js",
                    "path": "src/components/modal/modal.js"
                },
                {
                    "name": "modelList.js",
                    "path": "src/components/modelList/modelList.js"
                },
                {
                    "name": "navigation.js",
                    "path": "src/components/navigation/navigation.js"
                },
                {
                    "name": "pagination.js",
                    "path": "src/components/pagination/pagination.js"
                },
                {
                    "name": "search.js",
                    "path": "src/components/search/search.js"
                },
                {
                    "name": "tools.js",
                    "path": "src/helpers/tools.js"
                },
                {
                    "name": "index.js",
                    "path": "src/index.js"
                },
                {
                    "name": "serviceWorker.js",
                    "path": "src/serviceWorker.js"
                },
                {
                    "name": "apiService.js",
                    "path": "src/services/apiService.js"
                }
            ],
            "Explanation of core Functions/Methods with usage examples": [
                {
                    "name": "allModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch all models.",
                    "example": "allModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's models.",
                    "example": "myModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myFavoriteModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's favorite models.",
                    "example": "myFavoriteModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnAllModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models across all models.",
                    "example": "searchOnAllModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnMyModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models within the user's models.",
                    "example": "searchOnMyModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "fetchNewPage(url)",
                    "description": "This function makes a call to the specified URL to fetch a new page of models.",
                    "example": "fetchNewPage('https://api.sketchfab.com/v3/models?page=2')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "stringIsFilled(str)",
                    "description": "This function checks if a string is filled (not empty or contains only whitespace characters).",
                    "example": "const filled = stringIsFilled('hello');\nconsole.log(filled); // Output: true"
                },
                {
                    "name": "getBiggerThumbnailUrl(thumbnails)",
                    "description": "This function extracts the URL of the image with the largest size from a thumbnails object.",
                    "example": "const thumbnails = {\n   images: [\n      {\n         size: 100,\n         url: 'image1.jpg'\n      },\n      {\n         size: 200,\n         url: 'image2.jpg'\n      }\n   ]\n};\n\nconst url = getBiggerThumbnailUrl(thumbnails);\nconsole.log(url); // Output: 'image2.jpg'"
                },
                {
                    "name": "getFormattedDate(date)",
                    "description": "This function formats a date string in the format 'YYYY-MM-DD at HH:mm'.",
                    "example": "const date = getFormattedDate('2021-01-01T10:00:00Z');\nconsole.log(date); // Output: '2021-01-01 at 10:00'"
                }
            ],
            "Conclusion": "This concludes the documentation for Project X. We hope this guide has been helpful in getting you started with our software. If you have any questions or encounter any issues, please refer to our support resources or community forums for assistance. Thank you for choosing Project X, and we wish you success in your projects!"
        },
        first: {
            "Documentation Title": "Getting Started with Project X",
            "Brief Introduction": "Welcome to the official documentation for Project X. This documentation will guide you through the setup and usage of our software, providing you with a clear understanding of its features and functionalities",
            "Installation and/or Usage": "To install and use this project, follow the steps below:\n\n1. Clone the GitHub repository.\n2. Run 'npm install' to install the required dependencies.\n3. Run 'npm start' to start the application.\n4. Navigate to http://localhost:3000 in your web browser to view the application.",
            "File Structure": [
                {
                    "name": "App.js",
                    "path": "src/App.js"
                },
                {
                    "name": "App.test.js",
                    "path": "src/App.test.js"
                },
                {
                    "name": "card.js",
                    "path": "src/components/card/card.js"
                },
                {
                    "name": "modal.js",
                    "path": "src/components/modal/modal.js"
                },
                {
                    "name": "modelList.js",
                    "path": "src/components/modelList/modelList.js"
                },
                {
                    "name": "navigation.js",
                    "path": "src/components/navigation/navigation.js"
                },
                {
                    "name": "pagination.js",
                    "path": "src/components/pagination/pagination.js"
                },
                {
                    "name": "search.js",
                    "path": "src/components/search/search.js"
                },
                {
                    "name": "tools.js",
                    "path": "src/helpers/tools.js"
                },
                {
                    "name": "index.js",
                    "path": "src/index.js"
                },
                {
                    "name": "serviceWorker.js",
                    "path": "src/serviceWorker.js"
                },
                {
                    "name": "apiService.js",
                    "path": "src/services/apiService.js"
                }
            ],
            "Explanation of core Functions/Methods with usage examples": [
                {
                    "name": "allModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch all models.",
                    "example": "allModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's models.",
                    "example": "myModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myFavoriteModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's favorite models.",
                    "example": "myFavoriteModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnAllModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models across all models.",
                    "example": "searchOnAllModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnMyModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models within the user's models.",
                    "example": "searchOnMyModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "fetchNewPage(url)",
                    "description": "This function makes a call to the specified URL to fetch a new page of models.",
                    "example": "fetchNewPage('https://api.sketchfab.com/v3/models?page=2')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "stringIsFilled(str)",
                    "description": "This function checks if a string is filled (not empty or contains only whitespace characters).",
                    "example": "const filled = stringIsFilled('hello');\nconsole.log(filled); // Output: true"
                },
                {
                    "name": "getBiggerThumbnailUrl(thumbnails)",
                    "description": "This function extracts the URL of the image with the largest size from a thumbnails object.",
                    "example": "const thumbnails = {\n   images: [\n      {\n         size: 100,\n         url: 'image1.jpg'\n      },\n      {\n         size: 200,\n         url: 'image2.jpg'\n      }\n   ]\n};\n\nconst url = getBiggerThumbnailUrl(thumbnails);\nconsole.log(url); // Output: 'image2.jpg'"
                },
                {
                    "name": "getFormattedDate(date)",
                    "description": "This function formats a date string in the format 'YYYY-MM-DD at HH:mm'.",
                    "example": "const date = getFormattedDate('2021-01-01T10:00:00Z');\nconsole.log(date); // Output: '2021-01-01 at 10:00'"
                }
            ],
            "Conclusion": "This concludes the documentation for Project X. We hope this guide has been helpful in getting you started with our software. If you have any questions or encounter any issues, please refer to our support resources or community forums for assistance. Thank you for choosing Project X, and we wish you success in your projects!"
        },

    },
    "imageToText": {
        current: {
            "Documentation Title": "Getting Started with Project X",
            "Brief Introduction": "Welcome to the official documentation for Project X. This documentation will guide you through the setup and usage of our software, providing you with a clear understanding of its features and functionalities",
            "Installation and/or Usage": "To install and use this project, follow the steps below:\n\n1. Clone the GitHub repository.\n2. Run 'npm install' to install the required dependencies.\n3. Run 'npm start' to start the application.\n4. Navigate to http://localhost:3000 in your web browser to view the application.",
            "File Structure": [
                {
                    "name": "App.js",
                    "path": "src/App.js"
                },
                {
                    "name": "App.test.js",
                    "path": "src/App.test.js"
                },
                {
                    "name": "card.js",
                    "path": "src/components/card/card.js"
                },
                {
                    "name": "modal.js",
                    "path": "src/components/modal/modal.js"
                },
                {
                    "name": "modelList.js",
                    "path": "src/components/modelList/modelList.js"
                },
                {
                    "name": "navigation.js",
                    "path": "src/components/navigation/navigation.js"
                },
                {
                    "name": "pagination.js",
                    "path": "src/components/pagination/pagination.js"
                },
                {
                    "name": "search.js",
                    "path": "src/components/search/search.js"
                },
                {
                    "name": "tools.js",
                    "path": "src/helpers/tools.js"
                },
                {
                    "name": "index.js",
                    "path": "src/index.js"
                },
                {
                    "name": "serviceWorker.js",
                    "path": "src/serviceWorker.js"
                },
                {
                    "name": "apiService.js",
                    "path": "src/services/apiService.js"
                }
            ],
            "Explanation of core Functions/Methods with usage examples": [
                {
                    "name": "allModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch all models.",
                    "example": "allModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's models.",
                    "example": "myModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myFavoriteModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's favorite models.",
                    "example": "myFavoriteModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnAllModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models across all models.",
                    "example": "searchOnAllModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnMyModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models within the user's models.",
                    "example": "searchOnMyModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "fetchNewPage(url)",
                    "description": "This function makes a call to the specified URL to fetch a new page of models.",
                    "example": "fetchNewPage('https://api.sketchfab.com/v3/models?page=2')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "stringIsFilled(str)",
                    "description": "This function checks if a string is filled (not empty or contains only whitespace characters).",
                    "example": "const filled = stringIsFilled('hello');\nconsole.log(filled); // Output: true"
                },
                {
                    "name": "getBiggerThumbnailUrl(thumbnails)",
                    "description": "This function extracts the URL of the image with the largest size from a thumbnails object.",
                    "example": "const thumbnails = {\n   images: [\n      {\n         size: 100,\n         url: 'image1.jpg'\n      },\n      {\n         size: 200,\n         url: 'image2.jpg'\n      }\n   ]\n};\n\nconst url = getBiggerThumbnailUrl(thumbnails);\nconsole.log(url); // Output: 'image2.jpg'"
                },
                {
                    "name": "getFormattedDate(date)",
                    "description": "This function formats a date string in the format 'YYYY-MM-DD at HH:mm'.",
                    "example": "const date = getFormattedDate('2021-01-01T10:00:00Z');\nconsole.log(date); // Output: '2021-01-01 at 10:00'"
                }
            ],
            "Conclusion": "This concludes the documentation for Project X. We hope this guide has been helpful in getting you started with our software. If you have any questions or encounter any issues, please refer to our support resources or community forums for assistance. Thank you for choosing Project X, and we wish you success in your projects!"
        },
        first: {
            "Documentation Title": "Getting Started with Project X",
            "Brief Introduction": "Welcome to the official documentation for Project X. This documentation will guide you through the setup and usage of our software, providing you with a clear understanding of its features and functionalities",
            "Installation and/or Usage": "To install and use this project, follow the steps below:\n\n1. Clone the GitHub repository.\n2. Run 'npm install' to install the required dependencies.\n3. Run 'npm start' to start the application.\n4. Navigate to http://localhost:3000 in your web browser to view the application.",
            "File Structure": [
                {
                    "name": "App.js",
                    "path": "src/App.js"
                },
                {
                    "name": "App.test.js",
                    "path": "src/App.test.js"
                },
                {
                    "name": "card.js",
                    "path": "src/components/card/card.js"
                },
                {
                    "name": "modal.js",
                    "path": "src/components/modal/modal.js"
                },
                {
                    "name": "modelList.js",
                    "path": "src/components/modelList/modelList.js"
                },
                {
                    "name": "navigation.js",
                    "path": "src/components/navigation/navigation.js"
                },
                {
                    "name": "pagination.js",
                    "path": "src/components/pagination/pagination.js"
                },
                {
                    "name": "search.js",
                    "path": "src/components/search/search.js"
                },
                {
                    "name": "tools.js",
                    "path": "src/helpers/tools.js"
                },
                {
                    "name": "index.js",
                    "path": "src/index.js"
                },
                {
                    "name": "serviceWorker.js",
                    "path": "src/serviceWorker.js"
                },
                {
                    "name": "apiService.js",
                    "path": "src/services/apiService.js"
                }
            ],
            "Explanation of core Functions/Methods with usage examples": [
                {
                    "name": "allModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch all models.",
                    "example": "allModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's models.",
                    "example": "myModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "myFavoriteModels()",
                    "description": "This function makes a call to the Sketchfab API to fetch the user's favorite models.",
                    "example": "myFavoriteModels()\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnAllModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models across all models.",
                    "example": "searchOnAllModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "searchOnMyModels(query)",
                    "description": "This function makes a call to the Sketchfab API to search for models within the user's models.",
                    "example": "searchOnMyModels('car')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "fetchNewPage(url)",
                    "description": "This function makes a call to the specified URL to fetch a new page of models.",
                    "example": "fetchNewPage('https://api.sketchfab.com/v3/models?page=2')\n.then((response) => {\n   console.log(response);\n});"
                },
                {
                    "name": "stringIsFilled(str)",
                    "description": "This function checks if a string is filled (not empty or contains only whitespace characters).",
                    "example": "const filled = stringIsFilled('hello');\nconsole.log(filled); // Output: true"
                },
                {
                    "name": "getBiggerThumbnailUrl(thumbnails)",
                    "description": "This function extracts the URL of the image with the largest size from a thumbnails object.",
                    "example": "const thumbnails = {\n   images: [\n      {\n         size: 100,\n         url: 'image1.jpg'\n      },\n      {\n         size: 200,\n         url: 'image2.jpg'\n      }\n   ]\n};\n\nconst url = getBiggerThumbnailUrl(thumbnails);\nconsole.log(url); // Output: 'image2.jpg'"
                },
                {
                    "name": "getFormattedDate(date)",
                    "description": "This function formats a date string in the format 'YYYY-MM-DD at HH:mm'.",
                    "example": "const date = getFormattedDate('2021-01-01T10:00:00Z');\nconsole.log(date); // Output: '2021-01-01 at 10:00'"
                }
            ],
            "Conclusion": "This concludes the documentation for Project X. We hope this guide has been helpful in getting you started with our software. If you have any questions or encounter any issues, please refer to our support resources or community forums for assistance. Thank you for choosing Project X, and we wish you success in your projects!"
        },

    },
}]
