// DocSelect.js
"use client";

import React, { useState } from 'react';
import DocView from '@/components2/DocView';
import Guidelines from '@/components/Guidelines';


// Dummy component when nothing is selected
const DummyComponent = () => {
  return <div>Dummy Component</div>;
};

// Your data components
const DataComponent = (data) => {
  // return <div>{data["Documentation Title"]} - Data Component</div>;
  return <DocView aiDocData={data}  />
};

const DocSelect = ({ data }) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKey(event.target.value);
  };
  return (
    <div>
      <select
        style={{
          padding: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: '2px solid #4a90e2',
          color: '#4a90e2',
          backgroundColor: '#f0f8ff',
          cursor: 'pointer',
        }}

       className="text-black" onChange={handleChange} value={selectedKey || "" }>
        <option value="">Select Keyname</option>
        {data.map((doc, index) => (
          <React.Fragment key={index}>
            {Object.keys(doc).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </React.Fragment>
        ))}
      </select>

      <div className="mt-4">
        {selectedKey ? (
          <div>
            {/* Render the data based on the selected key */}
            {data.map((doc, index) => (
              Object.keys(doc).includes(selectedKey) && (
                <div key={index}>
                  {/* <h2>{selectedKey}</h2> */}
                  {/* Render your content here, for example: */}
                  {DataComponent(doc[selectedKey].current) }
                  {/* <p>{doc[selectedKey].current["Documentation Title"]}</p> */}
                </div>
              )
            ))}
          </div>
        ) : (
            <Guidelines />
        )}
      </div>

    </div>
  );
};

export default DocSelect;











// export default async function Page({session, repoList}) {

  
//   return (
//     <>

//     </>
//   );
// }
