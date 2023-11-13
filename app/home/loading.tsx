"use client";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function Loading() {

  return (
    <>
    {/* <div>Loading Doc...</div>
      <Skeleton
        circle
        height="100%"
        containerClassName="avatar-skeleton"
      />
      <Skeleton width={70} /> */}
    

      <div className="post">
        <div className="left-col">
          <div className="avatar">
              <Skeleton
                circle
                height="100%"
                containerClassName="avatar-skeleton"
              />
          </div>
          <div className="user-name">
            <Skeleton width={70} />
          </div>
        </div>
        <div className="right-col">
          <h3><Skeleton /></h3>
          <p className="mb-0">
              <Skeleton count={3} />
          </p>
        </div>
      </div>
    </>
    
  );
}
