import React from 'react';
import Tags from './components/tags';
import PopularPosts from './components/popularPosts';

const tags = false;
const data = [];
// ------------ IF ELSE ---------------
// const Test = () => {
//    if(tags){
//     return <Tags />;
//    } else {
//     return <PopularPosts />;
//    }
// }


//------------ ТЕРНАРНЫЙ ОПЕРАТОР --------
// const Test = () => {
//     return(
//         <div>
//             <h1>Популярные посты</h1>
//             {
//         popularPosts.length === 0 ? 'нет данных' : <PopularPosts />
//             }
//         </div>
//     )
// }


//------------ ОПЕРАТОР &&-----------
const Test = () => {
    return(
        <div>
            <h1>Популярные посты</h1>
            {
                data.length === 0 && <PopularPosts />
            }
        </div>
    );
};

export default Test;
