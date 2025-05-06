import React from 'react';
import '../pages/GalleryPage.scss';

// Import all images
import img1 from '../assets/img/benifits_of_weight_lifting_female_in_gym.webp';
import img2 from '../assets/img/pexels-anush-1229356.jpg';
import img3 from '../assets/img/pexels-anush-1431282.jpg';
import img4 from '../assets/img/pexels-binyaminmellish-116077.jpg';
import img5 from '../assets/img/pexels-cesar-galeao-1673528-3253501.jpg';

import img6 from '../assets/img/pexels-cottonbro-4752861.jpg';
import img7 from '../assets/img/pexels-cottonbro-4753987.jpg';
import img8 from '../assets/img/pexels-cottonbro-4761779.jpg';
import img9 from '../assets/img/pexels-dreamlensproduction-896061.jpg';
import img10 from '../assets/img/pexels-karlsolano-2780762.jpg';

import img11 from '../assets/img/pexels-karlsolano-2780762.jpg';
import img12 from '../assets/img/pexels-lee-catherine-collins-1371715-2652236.jpg';
import img13 from '../assets/img/pexels-leonardho-1552102.jpg';
import img14 from '../assets/img/pexels-leonardho-1552103.jpg';
import img15 from '../assets/img/pexels-leonardho-1552242.jpg';

import img16 from '../assets/img/pexels-leonardho-1552249.jpg';
import img17 from '../assets/img/pexels-leonardho-1552252.jpg';
import img18 from '../assets/img/pexels-leonardho-2468339.jpg';
import img19 from '../assets/img/pexels-olly-903171.jpg';
import img20 from '../assets/img/pexels-olly-905336.jpg';

import img21 from '../assets/img/pexels-pixabay-260447.jpg';
import img22 from '../assets/img/pexels-pixabay-416809.jpg';
import img23 from '../assets/img/pexels-sabel-blanco-662810-1480520.jpg';
import img24 from '../assets/img/pexels-sabel-blanco-662810-1554824.jpg';
import img25 from '../assets/img/pexels-sabel-blanco-662810-1638324.jpg';

import img26 from '../assets/img/pexels-willpicturethis-1954524.jpg';
import img27 from '../assets/img/pexels-victorfreitas-949129.jpg';
import img28 from '../assets/img/pexels-victorfreitas-841125.jpg';
import img29 from '../assets/img/pexels-victorfreitas-1092874.jpg';
import img30 from '../assets/img/pexels-shotpot-4047039.jpg';


const columns = [
    [img1, img2, img3, img4, img5],
    [img6, img7, img8, img9, img10],
    [img11, img12, img13, img14, img15],
    [img16, img17, img18, img19, img20],
    [img21, img22, img23, img24, img25],
    [img26, img27, img28, img29, img30],
];

export const GalleryPage = () => {
    return (
        <div className="gallery-container">
            {columns.map((col, i) => (
                <div className="column" key={i}>
                    {col.map((img, j) => (
                        // <img src={img} alt="" style={{ width: "50%" }} key={j} />
                        <img src={img} alt="" key={j} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GalleryPage;