

export type FunctionData = {
  name: string;
  description: string;
  example: string;
};

export type FileData = {
  name: string;
  path: string;
};

export type DocumentationData = {
  "Documentation Title": string;
  "Brief Introduction": string;
  "Installation and/or Usage": string;
  "File Structure": FileData[];
  "Explanation of core Functions/Methods with usage examples": FunctionData[];
  "Conclusion": string;
};

// **********************************************************************

export interface GenericDocOpResult {
  status: number
  message: string
}

export interface DocIndexCreationResult extends GenericDocOpResult {
  index?: DocIndex
}

export interface DocIndex {
  creationTime: number
  documentationData: DocumentationData
}
