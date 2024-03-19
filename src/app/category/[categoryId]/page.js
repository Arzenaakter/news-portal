import React from 'react';

const DynamicNewsPage = ({params,searchParams}) => {
    return (
      <div>
        {params.categoryId}
        {searchParams.category}
      </div>
    );
};

export default DynamicNewsPage;

// https://web.programming-hero.com/update-1/video/update-1-75-7-display-dynamic-newses-according-to-category