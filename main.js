//alert("java Script is working");





let books =  [
  {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780316579940_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  title: "Swan Song", 
  author:"by Elin Hilderbrand"}, 
 {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781649374189_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  title: "Onix Storm",
   author:"by Rebecca Yarros"}, 
 {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593818879_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
  title: "Not in Love",
   author:"by Ali Hazelwood"},
  {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781638931799_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
   title: "Learher & Lark",
    author:"by Brynne Weaver"},
    {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781665966351_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
    title: "Reckless",
     author:"by Lauren Roberts"},
     {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593712641_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
     title: "Good Energy",
      author:"by Casey Means MD,"},
      {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781914425028_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      title: "Zodiac Academy",
       author:"by Caroline Peckham"},
       {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250178633_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
       title: "The Women",
        author:"by Kristin Hannah"},
        {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781250892317_p0_v12%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title: "Murdle",
         author:"by G. T. Karber"},
         {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781419773785_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
         title: "Skyshade",
          author:"by Alex Aster"},
          {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781668037713_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
          title: "You Like It Darker",
           author:"by Stephen King"},
           {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781421595795_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
           title: "Let's Find Pokemon",
            author:"by Kazunori Aihara"}, 
          {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780316565073_p0_v6%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
           title: "Eruption",
            author:"by Michael Crichton"},
           {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780593905623_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
            title: "Misfits",
             author:"by Lisa Yee"},
             {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780316575980_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
             title: "i live inside a while",
              author:"by Xin Li"},
              {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063392885_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
              title: "Shameless",
               author:"by Brian Tyler Cohen"},
               {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9798765520994_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
               title: "Hounting Adeline",
                author:"by H. D. Carlton"},
                {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780385348744_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
                title: "A Demon of unrest",
                 author:"by Erik Larson"},
                 {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9798200920235_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
                 title: "Bits and Pieces",
                  author:"by Whoopi Goldberg"},
                  {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780063138643_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
                  title: "An offer from a gentelmen",
                   author:"by Julia Quinn"},
                   {url: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781665966887_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
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








