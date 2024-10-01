import React from 'react'
import "../ChatSkeleton/sekelton.css";

export default function ChatSkeletonLoader() {
  return (
    <div>
            <div className="chat-skeleton-loader">
    <div className="skeleton-message">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-text">
            <div className="skeleton-line short"></div>
            <div className="skeleton-line long"></div>
        </div>
    </div>
  
   
</div>

<br/>

<div className="chat-skeleton-loader2">
    <div className="skeleton-message">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-text">
            <div className="skeleton-line short"></div>
            <div className="skeleton-line long"></div>
        </div>
    </div>
  
   
</div>

<br/>
<div className="chat-skeleton-loader3">
    <div className="skeleton-message">
        <div className="skeleton-avatar"></div>
        <div className="skeleton-text">
            <div className="skeleton-line short"></div>
            <div className="skeleton-line long"></div>
        </div>
    </div>
  
   
</div>


    </div>
  )
}
