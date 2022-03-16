const slide=document.querySelectorAll("input")
// console.log(slide[0])
function hun()
{
    
    const suffix=this.dataset.sizing||" ";
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    // most  important line in this project css variable manipulation and here documentElement represent root node of the document
    
}

for(let i=0;i<3;i++)
{
    slide[i].addEventListener("change",hun);
    
    slide[i].addEventListener("mousemove",hun);
    

}