import React, { useState } from 'react';



const Try = () => {
   const [isScrollingEnabled, setIsScrollingEnabled] = useState(false);

   return (
      <div
         className="scrollable-container"
         onMouseEnter={() => setIsScrollingEnabled(true)}
         onMouseLeave={() => setIsScrollingEnabled(false)}
         style={{ overflow: isScrollingEnabled ? 'auto' : 'hidden' }}
      >
         <div className="flex flex-row">
            {/* Your scrollable content here */}
            <p>Content Line 1</p>
            <p>Content Line 2</p>
            <p>Content Line 3</p>
            {/* Repeat or generate more content to enable scrolling */}
            <p>Content Line 4</p>
            <p>Content Line 5</p>
            <p>Content Line 6</p>
            <p>Content Line 7</p>
            <p>Content Line 8</p>
            <p>Content Line 9</p>
            <p>Content Line 10</p>
            <p>Content Line 11</p>
            <p>Content Line 12</p>
            <p>Content Line 13</p>
            <p>Content Line 14</p>
         </div>
      </div>
   );
};

export default Try;

{/*  /// move this tomy code tutorials 
<div className={`w-[200px] rounded-[20px]  relative
   hover:after:content-['hello'] duration-300 after:absolute  after:inset-0 after:text-white hover:after:bg-black hover:after:bg-opacity-40 hover:duration-300
   `}>
   <img src={its_sub_tab.image_url} alt="" className={`w-[200px] rounded-[20px] `} />
</div> */}




