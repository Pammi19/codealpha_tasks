 let gallery = document.querySelector(".gallery");
 let sections = document.querySelectorAll('div');
        let btn1 = document.querySelector("#backbtn");
        let btn2 = document.querySelector("#nextbtn");
        let currIdx = 0;

    const scrollToSection =(index) => {
            const sectionWidth = window.innerWidth;
            
            gallery.scrollTo({    
            left : index * sectionWidth,
                behavior : 'smooth'
            });
        };
    
         btn1.addEventListener("click", () => {
        
             if(currIdx > 0){
                currIdx--;
                scrollToSection(currIdx);
            }
    
        });
        btn2.addEventListener("click", () => {

            if(currIdx < sections.length-1 ){
                currIdx++;
                scrollToSection(currIdx);
            }

        });

        window.addEventListener("resize", () => {
        
                gallery.scrollTo({
                    left: currIdx * window.innerWidth,
                    behavior: 'smooth'
                });

        });
