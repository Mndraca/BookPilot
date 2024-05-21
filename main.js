//alert("java Script is working");

let books =  [
  {image: "images/img1.webp",
  title: "Swan Song", 
  author:"by Elin Hilderbrand"}, 
 {image: "images/img2.webp",
  title: "Onix Storm",
   author:"by Rebecca Yarros"}, 
 {image: "images/img3.webp",
  title: "Not in Love",
   author:"by Ali Hazelwood"},
  {image: "images/img4.webp",
   title: "Learher & Lark",
    author:"by Brynne Weaver"},
    {image: "images/img5.webp",
    title: "Reckless",
     author:"by Lauren Roberts"},
     {image: "images/img6.webp",
     title: "Good Energy",
      author:"by Casey Means MD,"},
      {image: "images/img7.webp",
      title: "Zodiac Academy",
       author:"by Caroline Peckham"},
       {image: "images/img8.webp",
       title: "The Women",
        author:"by Kristin Hannah"},
        {image: "images/img9.webp",
        title: "Murdle",
         author:"by G. T. Karber"},
         {image: "images/img10.webp",
         title: "Skyshade",
          author:"by Alex Aster"},
          {image: "images/img11.webp",
          title: "You Like It Darker",
           author:"by Stephen King"},
           {image: "images/img12.webp",
           title: "Let's Find Pokemon",
            author:"by Kazunori Aihara"}, 
          {image: "images/img13.webp",
           title: "Eruption",
            author:"by Michael Crichton"},
           {image: "images/img.14",
            title: "Misfits",
             author:"by Lisa Yee"},
             {image: "images/img.15",
             title: "i live inside a while",
              author:"by Xin Li"},
              {image: "images/img.16",
              title: "Shameless",
               author:"by Brian Tyler Cohen"},
               {image: "images/img.17",
               title: "Hounting Adeline",
                author:"by H. D. Carlton"},
                {image: "images/img.18",
                title: "A Demon of unrest",
                 author:"by Erik Larson"},
                 {image: "images/img.19",
                 title: "Bits and Pieces",
                  author:"by Whoopi Goldberg"},
                  {image: "images/img.20",
                  title: "An offer from a gentelmen",
                   author:"by Julia Quinn"},
                   {image: "images/img.21",
                   title: "Powerfull",
                   author:"by Lauren Roberts"}];


 




          

function displayBooks(books) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; // Clear any existing content

  if (books.length === 0) {
      bookList.innerHTML = '<p>No books found</p>';
      return;
  }

  books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
          <img src="${book.url}" alt="${book.title}">
          <div>
              <h2>${book.title}</h2>
              <p><strong>Author:</strong> ${book.author}</p>
              <p>${book.description}</p>
              <p><strong>Rating:</strong> ${book.rating}</p>
              <button onclick="viewReviews('${book.title}')">View Reviews</button>
              <button onclick="addReview('${book.title}')">Add Review</button>
          </div>
      `;
      bookList.appendChild(bookItem);
  });
}
// Assuming books array is defined
displayBooks(books);

// script.js

document.getElementById('searchButton').addEventListener('click', () => {
  const searchTerm = document.getElementById('searchInput').value;
  if (searchTerm) {
      // Perform search and filter books (assuming you have a searchBooks function)
      const filteredBooks = books.filter(book => 
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      displayBooks(filteredBooks);
  }
});

function displayBooks(books) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; // Clear any existing content

  if (books.length === 0) {
      bookList.innerHTML = '<p>No books found</p>';
      return;
  }

  books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
          <img src="${book.url}" alt="${book.title}">
          <div>
              <h2>${book.title}</h2>
              <p><strong>Author:</strong> ${book.author}</p>


              <button onclick="viewReviews('${book.title}')">View Reviews</button>
              <button onclick="addReview('${book.title}')">Add Review</button>
          </div>
      `;
      bookList.appendChild(bookItem);
  });
}

function viewReviews(bookTitle) {
  // Implementation for viewing reviews
}

function addReview(bookTitle) {
  // Implementation for adding a review
}

  
                  




//function searchBooks() {
  //  const searchTerm = searchInput.value.trim().toLowerCase();
    //if (searchTerm === '') {
    //    alert('Please enter a search term');
      //  return;
    //}
    //const filteredBooks = books.filter(book => {
       
     //   const titleLower = book.title.toLowerCase();
      //  if (titleLower.includes(searchTerm)) {
       //     return true;
      //  }
       
    
   // });
  //  displayBooks(filteredBooks);
//};

//function displayBooks(books) {
 //   bookList.innerHTML = '';
 //   if (books.length === 0) {
  //      bookList.innerHTML = 'No books found';
   //     return;
   // }

  //  books.forEach(book => {
   //     const bookItem = document.createElement('div');
   //     bookItem.classList.add('book-item');
   //     bookItem.innerHTML = `
    //        <h3>${book.title}</h3>
    //        <p>${book.author}</p>
    //        <img src="${book.image}" alt="${book.title}">
     //       <button class="save-button" onclick="saveRecipe('${book.title}')">Save</button>
     //   `;
     //   bookList.appendChild(bookItem);
   // });
//}








