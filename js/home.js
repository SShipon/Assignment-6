const searchBook = () => {
    const SearchField = document.getElementById("input-search");
    const searchText = SearchField.value;
    //console.log(searchText);
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    //console.log(url)
     fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
        SearchField.value = "";
}
const displaySearchResult = docs => {
    //console.log(docs);
   const searchResult = document.getElementById('search-result');
     searchResult.textContent ='';
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top w-75 mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${doc.title}</h5>
          <p class="card-text">Author name: ${doc.author_name}</p>
          <p class="card-text">First publish year: ${doc.first_publish_year}</p>


          <p class="card-text"></p>
        </div>
      </div>
        `;
        searchResult.appendChild(div)
    });


}