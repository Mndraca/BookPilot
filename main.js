//alert("java Script is working");


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchForm = document.getElementById('form');
const bookList = document.getElementById('bookList');
const reviewSection = document.getElementById('reviewSection');

searchButton.addEventListener('click', searchBooks);
searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
 })



const books = [
    {
    title: 'Why I Cook',
    author: 'Tom Colicchio',
    image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781648294891_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
   
},
{
    title: 'The Official Stardew Valley Cookbook',
    author: 'Ryan Novak',
    image: 'https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781984862051_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D',
   
},
{
    title: 'Sample Book Title',
    author: 'Sample Author',
    image: 'https://via.placeholder.com/150',
    
},
{
    title: 'Sample Book Title',
    author: 'Sample Author',
    image: 'https://via.placeholder.com/150',
    
},
{
    title: 'Sample Book Title',
    author: 'Sample Author',
    image: 'https://via.placeholder.com/150',
    
}

];

function searchBooks() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }
    const filteredBooks = books.filter(book => {
       
        const titleLower = book.title.toLowerCase();
        if (titleLower.includes(searchTerm)) {
            return true;
        }
       
    
    });
    displayBooks(filteredBooks);
};

function displayBooks(books) {
    bookList.innerHTML = '';
    if (books.length === 0) {
        bookList.innerHTML = 'No books found';
        return;
    }

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <img src="${book.image}" alt="${book.title}">
            <button class="save-button" onclick="saveRecipe('${book.title}')">Save</button>
        `;
        bookList.appendChild(bookItem);
    });
}








