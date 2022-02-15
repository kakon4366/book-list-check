const bookList = [
    'A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort',
    ' Eloquent JS: A Modern Introduction to Programming',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript: The Good Parts',
    'Learn JavaScript VISUALLY',
    'JavaScript: The Definitive Guide',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JS',
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'High-Performance Browser Networking', 
    ' You Dont Know JS'
]

const searching = 'javascript';

const output = [];
for(const book of bookList){
    if(book.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        output.push(book);
    }
}

console.log(output);